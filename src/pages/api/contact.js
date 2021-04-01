const nodemailer = require("nodemailer");

const smtp_config = require("config/smtp");

const transporter = nodemailer.createTransport({
  host: smtp_config.host,
  port: smtp_config.port,
  secure: false,
  auth: {
    user: smtp_config.user,
    pass: smtp_config.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  const { name, message, subject, email } = req.body;

  try {
    const mailSent = await transporter.sendMail({
      text: `
Nome: ${name}
Assunto: ${subject}
Email: ${email}
      
${message}
`,
      subject: `[SITE] ${subject}`,
      from: `${smtp_config.name} <docbrownmailer@gmail.com>`,
      to: ["danielbrown25.9.2@gmail.com", email, smtp_config.user],
    });
    console.log("====================================");
    console.log(mailSent);
    console.log("====================================");

    res.status(200).json(mailSent);
  } catch (e) {
    res.status(500).send({ message: "Erro no servidor" });
  }
}
