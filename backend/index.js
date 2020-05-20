require('dotenv').config();
const app = require("express")();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
// const sendEmail = require("./utils/emailer").sendEmail;
const DatabaseManager = require("./utils/DatabaseManager");
const ObjectId = require("objectid");
const AWS_Presigner = require('./utils/AWSPresigner');
const Chat = require('./utils/Chat').Chat;


app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/test_html_files/user.html");
});

app.get("/search", (req, res) => {
    res.status(200).sendFile(__dirname + "/test_html_files/search.html");
});

app.get("/pcard", (req, res) => {
    res.status(200).sendFile(__dirname + "/test_html_files/profile-card.html");
});

app.get("/close", (req, res) => {
    DatabaseManager.closeConnection();
    res.status(200).redirect("/");
});

app.get("/fetchUsers", (req, res) => {
    DatabaseManager.fetchUsers({ email: req.query.email }).then(async function(result) {
        for(var i = 0; i < result.length; i++) {
            result[i].image = await AWS_Presigner.generateSignedGetUrl("user_images/" + result[i].image);
        }

        res.send(result);

    }).catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
    });
});

app.post("/fetchUsers_id", urlEncodedParser, (req, res) => {
    ids = [];
    req.body.ids.forEach((value) => { ids.push( ObjectId(value) ); });

    DatabaseManager.fetchUsers({ _id: { $in: ids } }).then(async function(result) {
        for(var i = 0; i < result.length; i++) {
            result[i].image = await AWS_Presigner.generateSignedGetUrl("user_images/" + result[i].image);
        }

        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
    });
});

app.get("/fetchProfileCards", (req, res) => {

    // query user profile first for crs codes that are related to this user
    DatabaseManager.fetchUsers({ email: req.query.email }).then((result) => {
        if(result.length === 0) {
            console.log(`No user with email ${req.body.email}`);
            res.status(404).send("404: User with email " + req.body.email + " couldn't be found");
        }

        user = result[0];
        DatabaseManager.fetchProfileCards({ user_id: user._id }).then((profileCards) => {
            if(profileCards.length > 0) {
                req_card = profileCards[0];

                // 2. Fetch cards with same courses
                crs_regexes = [];
                for (let i = 0; i < req_card.crscodes.length; i++) {
                    const course = req_card.crscodes[i];
                    crs_regexes.push(new RegExp("^" + course + "$", "i"));
                }

                DatabaseManager.fetchProfileCards({ crscodes: { $in: crs_regexes } }).then((cards) => {

                    cards = cards.filter((value, index, arr) => { return !(value["user_id"].equals(user._id)); });
                    // 3. Filter according to additional req if necessary (TODO)
                    res.status(200).send(JSON.stringify(cards));

                }).catch((err) => {
                    res.status(500).send("Server Error: Couldn't fetch cards");
                })

                return;
            }
            else {
                res.status(404).send("404: Profile card for this user doesn't exist");
            }
        }).catch((reason) => {

            console.log(reason);
            res.status(500).send("Servers Error: Couldn't fetch cards");
        })
    })

});

app.get("/fetchChatData", (req, res) => {

    var uid = (new Chat(req.query.from, req.query.to)).uid;

    DatabaseManager.fetchChat(uid).then((chat) => {

        if(chat.length === 1) {
            res.status(200).send(JSON.stringify(chat.chat));
        }
        else {
            uid = (new Chat(req.query.to, req.query.from)).uid;
            DatabaseManager.fetchChat(uid).then((chat) => {
                if(chat.length === 1) {
                    res.status(200).send(JSON.stringify(chat.chat));
                }
                else {
                    res.status(404).send("Couldn't find chat records");
                }
            }).catch((err) => {
                res.status(500).send("Server error");
            });
        }
    }).catch((err) => {
        res.status(500).send("Server error");
    });

});

app.post("/newProfileCard", urlEncodedParser, (req, res) => {
    // 1. Check if a profile card already exists linked to the user : TODO
    //     a. If it does, add this crs code as well
    // 2. Otherwise create a new profile card in the database *Profiles* : Done
    
    DatabaseManager.fetchUsers({ email: req.body.email }).then((result) => {
        if(result.length === 0) {
            console.log(`No user with email ${req.body.email}`);
            res.status(404).send("404: User with email " + req.body.email + " couldn't be found");
        }

        user = result[0];
        profileCard = {
            user_id: user._id,
            crscodes: [ req.body.crscode ],
            addinfo: req.body.addinfo
        };

        DatabaseManager.fetchProfileCards({ user_id: profileCard.user_id }).then((existingCards) => {
            if(existingCards.length > 0) {
                
                existingCard = existingCards[0];
                if(existingCard.crscodes.findIndex((crs) => { return profileCard.crscodes[0] === crs }) === -1) {
                    existingCard.crscodes.push(profileCard.crscodes[0]);
                }
                // update entry in the database
                DatabaseManager.updateProfileCard(existingCard, { user_id: profileCard.user_id })
                .then((updateResult) => {
                    res.status(200).send("Success");
                })
                .catch((err) => {
                    // unsuccessful insert, reply back with unsuccess response code
                    console.log(err);
                    res.status(500).send("Insert Failed");
                });

                
                return;
            }
            
            // card doesn't exist
            DatabaseManager.insertProfileCard(profileCard).then((result) => {
                res.status(200).send("Success");
            }).catch((err) => {
                // unsuccessful insert, reply back with unsuccess response code
                console.log(err);
                res.status(500).send("Insert Failed");
            });
        })



    }).catch((err) => {
        console.log(err);
        res.status(500).send("Can't find the user profile");
    });
    
});

app.post("/new-user", urlEncodedParser, (req, res) => {
    const requestData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        uni: req.body.uni,
        major: req.body.major,
        age: Number(req.body.age),
        image: req.body.image
    };

    // database *Users*
    DatabaseManager.insertUser(requestData).then((result) => {
        // sendEmail(requestData);
        // reply with success response code

    }).catch((err) => {
        // unsuccessful insert, reply back with unsuccess response code
        console.log(err);
        res.status(500).send("Insert Failed");
    });

    res.status(201).redirect("/");
});

/* Socket Listeners for chat */

io.on('connection', (socket) => {

    socket.on('login', (msg) => {
        DatabaseManager.fetchChat( (new Chat(msg.from, msg.to)).uid ).then((chat) => {
            if(chat.length < 1) {
                // chat with id = hash(from, to) doesn't exist, so try reverse order
                DatabaseManager.fetchChat( (new Chat(msg.to, msg.from)).uid ).then((chat) => {
                    if(chat.length < 1) {
                        chat = new Chat(msg.from, msg.to);

                        DatabaseManager.insertChat({ uid: chat.uid, chat }).then((result) => {
                            socket.join(chat.uid);
                        })
                        .catch((err) => {
                            socket.emit('chat-connection-failed');
                        });

                    }
                    else {
                        socket.join(chat.uid);
                    }

                }).catch((err) => {
                    socket.emit('chat-connection-failed');
                });
            }
            else {
                socket.join(chat.uid);
            }

        }).catch((err) => {
            socket.emit('chat-connection-failed');
        });
    });

    socket.on('new msg', (msg) => {
        // TODO
    });
});

http.listen(3000, () => { console.log("Server is running"); });
