const vars = require("./vars");
const transporter = require("nodemailer").createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: ""
    }
});

function sendEmail(formData) {
    // var time = new Date();
    // var readableTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    // var readableDate = weekDict[time.getDay()] + ', ' + time.getDate() + ' ' + monthDict[time.getMonth()] + ', ' + time.getFullYear();

    var mailOptions = {
        from: vars.APP_NAME,
        to: formData.email
    };

    mailOptions.subject = 'Confirm email for ' + vars.APP_NAME;
    mailOptions.text = 'Please verify your email by clicking on the link below\n';

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err.message);
        }
    });
}

module.exports.sendEmail = sendEmail;
