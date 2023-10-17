import nodemailer from "nodemailer";
import Mustache from "mustache"
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.NESTHOR_UNAME,
    pass: process.env.NESTHOR_PASSWORD,
  },
  debug:true,
  authMethod:"PLAIN",
  tls: {
    rejectUnauthorized: false,
  },
});

const view = {
  title: "Joe",
  calc: () => ( 2 + 4 )
};

const output = Mustache.render("{{title}} spends {{calc}}", view);
// Define email content
const mailOptions = {
  from: `${process.env.NESTHOR_UNAME}`,
  to: `${process.env.OLGA_UNAME}`,
  subject: "Hello from Node.js",
  text: output,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
