const app = require("express")();
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const sendEmail = require("./utils/emailer").sendEmail;
const DatabaseManager = require("./utils/DatabaseManager");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/test.html");
});

app.get("/close", (req, res) => {
    DatabaseManager.closeConnection();
    res.status(200).redirect("/");
});

app.post("/new-user", urlEncodedParser, (req, res) => {
    const requestData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        uni: req.body.uni,
        major: req.body.major,
        age: Number(req.body.age)
    };

    DatabaseManager.insertProfile(requestData).then((result) => {
        // sendEmail(requestData);
        // reply with success response code
        
    }).catch((err) => {
        // unsuccessful insert, reply back with unsuccess response code
    });

    res.status(201).redirect("/");
});

app.listen(3000, () => { console.log("Server is running"); });
