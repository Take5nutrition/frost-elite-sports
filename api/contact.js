const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { name, email, phone, subject, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Frost Elite Sports <onboarding@resend.dev>',
      to: 'frostelitesports@gmail.com',
      replyTo: email,
      subject: `[${subject || 'Contact'}] ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#111;">
          <h2 style="margin-bottom:1rem;">New message from ${name}</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:100px;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666;">Topic</td><td style="padding:8px 0;">${subject || 'General'}</td></tr>
          </table>
          <hr style="margin:1.5rem 0;border:none;border-top:1px solid #eee;" />
          <p style="color:#666;margin-bottom:.5rem;">Message</p>
          <p style="white-space:pre-wrap;line-height:1.6;">${message}</p>
          <hr style="margin:1.5rem 0;border:none;border-top:1px solid #eee;" />
          <p style="color:#999;font-size:.85rem;">Sent from the Frost Elite Sports contact form</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send' });
  }
};
