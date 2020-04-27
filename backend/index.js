const app = require("express")();
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const sendEmail = require("./utils/emailer").sendEmail;
const DatabaseManager = require("./utils/DatabaseManager");

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
    DatabaseManager.fetchUsers({ email: req.query.email }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
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
                    res.status(200).send(cards);

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
            image: req.body.img,
            crscodes: [ req.body.crscode ],
            addinfo: req.body.addinfo
        };

        DatabaseManager.fetchProfileCards({ user_id: profileCard.user_id }).then((existingCards) => {
            if(existingCards.length > 0) {
                
                existingCard = existingCards[0];
                existingCard.crscodes.push(profileCard.crscodes[0]);
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
        major: req.body.major, // don't need it
        age: Number(req.body.age)
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

app.listen(3000, () => { console.log("Server is running"); });
