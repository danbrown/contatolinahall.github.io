module.exports = {
  name: "Linahall Mailer",
  host: "smtp.gmail.com",
  port: 587,
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS,
};
