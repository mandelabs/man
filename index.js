const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON in the request body
app.use(express.json());

let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "bitrix400@zohomail.com", 
      pass: "vanita2018"
    }
  });

// API endpoint to send emails
app.post('/send-email', async (req, res) => {
  try {
    const {  subject, body } = req.body;
  //  let to = 'Bitxtradings@gmail.com';
  let to = 'ludike23@gmail.com'

    // Create email content
    const mailOptions = {
      from: '"You" <bitrix400@zohomail.com>',
      to,
      subject,
      text: body,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
