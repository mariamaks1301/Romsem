const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mariamaks1301@gmail.com', // email от куда будет отправлено письмо
    pass: 'yourPassword' // пароль от почтового ящика
  }
});

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'mariamaks1301@gmail.com',
    to: to,
    subject: subject,
    text: text
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (err) {
    console.error(err);
  }
}

module.exports = sendEmail;
