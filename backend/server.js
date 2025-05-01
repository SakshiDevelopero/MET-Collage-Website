const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter with more detailed logging
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, // Enable debug logging
  logger: true // Enable built-in logger
});

// Verify email configuration on startup
transporter.verify(function(error, success) {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log('Received form submission:', { name, email, phone, subject });

  try {
    // Email to admin
    console.log('Sending email to admin...');
    const adminMail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    console.log('Admin email sent:', adminMail.messageId);

    // Auto-reply to sender
    console.log('Sending auto-reply to user...');
    const userMail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting MET',
      html: `
        <h2>Thank you for contacting MET</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>MET Team</p>
      `,
    });
    console.log('User auto-reply sent:', userMail.messageId);

    res.status(200).json({ 
      message: 'Message sent successfully',
      adminMailId: adminMail.messageId,
      userMailId: userMail.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending message', 
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email configuration:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.EMAIL_USER,
    // Don't log the password
  });
}); 