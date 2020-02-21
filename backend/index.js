const app = require("express")();
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const sendEmail = require("./emailer").sendEmail;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/test.html");
});

app.post("/test", urlEncodedParser,(req, res) => {
    const requestData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        uni: req.body.uni,
        major: req.body.major,
        age: req.body.age
    };
    // need to do some data validation
    sendEmail(requestData);
    res.status(201).redirect("/");
});

app.listen(3000, () => { console.log("Server is running"); });
