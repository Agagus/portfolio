require("dotenv").config();
const PASSWORD = process.env.password;
const ACCOUNT = process.env.account;

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: {
      user: ACCOUNT,
      pass: PASSWORD,
    },
    secure: false,
  });

  const mailData = {
    from: ACCOUNT,
    to: "agus.zanetti4@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: req.body.message + req.body.email,
  };
  console.log(mailData);

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);

  console.log(req.body);
}
