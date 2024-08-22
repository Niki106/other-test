const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // use false for STARTTLS; true for SSL on port 465
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: "logos106@outlook.com",
    subject: "Verify Email",
    html: `<h4>Welcome to WMFD</h4>
                        <p>Please enter the code below and activate your account</p>
                        <p style="font-size: 16px; font-weight: bold;">ddd</p>`,
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
});



