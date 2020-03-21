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

app.get("/fetchProfiles", (req, res) => {
    // 1. query user profile first for crs codes that are related to this user
    // 2. Fetch cards with same courses
    // 3. Filter according to additional req if necessary
    // 4. Send response with all the valid cards (JSON)
});

app.post("/newProfileCard", urlEncodedParser, (req, res) => {
    // 1. Check if a profile card already exists linked to the user
    //     a. If it does, add this crs code as well
    // 2. Otherwise create a new profile card in the database *Profiles*
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
    DatabaseManager.insertProfile(requestData).then((result) => {
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
