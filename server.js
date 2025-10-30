import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, company, message } = req.body || {};
  if (!email || !name) return res.status(400).json({ error: 'Name and email required' });

  try {
    // налаштуй SMTP через змінні оточення
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `"Website form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO, // твій email для отримання
      subject: 'New contact form submission',
      replyTo: email,
      text:
`Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Company: ${company || '-'}
Message:
${message || '-'}`,
    });

    res.json({ ok: true, id: info.messageId });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Mailer error' });
  }
});

app.listen(process.env.PORT || 5174, () => {
  console.log('API started');
});
