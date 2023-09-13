import nodemailer from "nodemailer";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "nestor.wintheiser68@ethereal.email",
    pass: "WTkG7hjPgUgnbZE3GK",
  },
  secure:false,
  debug:true,
  authMethod:"STARTTLS",
  tls: {
    rejectUnauthorized: false,
  },
});
// Define email content
const mailOptions = {
  from: "nestor.wintheiser68@ethereal.email",
  to: "olga27@ethereal.email",
  subject: "Hello from Node.js",
  text: "This is a test email from Node.js using Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
