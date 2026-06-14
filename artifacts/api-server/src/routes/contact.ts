import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as Record<string, string>;

  const errors: string[] = [];
  if (!name || name.trim().length === 0) errors.push("Name is required");
  if (!email || !isValidEmail(email)) errors.push("A valid email address is required");
  if (!message || message.trim().length < 10) errors.push("Message must be at least 10 characters");
  if (name && name.length > 100) errors.push("Name is too long");
  if (message && message.length > 5000) errors.push("Message is too long");

  if (errors.length > 0) {
    res.status(400).json({ success: false, error: "Validation failed", details: errors });
    return;
  }

  const cleanSubject = subject?.trim() || "New message from portfolio";

  const toEmail = process.env["CONTACT_EMAIL_TO"];
  const smtpHost = process.env["SMTP_HOST"];
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];
  const smtpPort = Number(process.env["SMTP_PORT"] ?? "587");

  if (!toEmail || !smtpHost || !smtpUser || !smtpPass) {
    req.log.warn("Email env vars not configured — contact form submission logged only");
    req.log.info({ name, email, subject }, "Contact form submission (email not sent)");
    res.status(200).json({
      success: true,
      message: "Message received. Email delivery is not yet configured, but we got your message.",
    });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #6366f1; margin-bottom: 4px;">New message from your portfolio</h2>
          <p style="color: #888; font-size: 14px; margin-top: 0;">Sent via adetayo-portfolio contact form</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 80px; color: #555;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #555;">Subject</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="margin-bottom: 12px; color: #333;">Message</h3>
          <p style="line-height: 1.7; white-space: pre-wrap; background: #f8f8f8; padding: 16px; border-radius: 8px; border-left: 3px solid #6366f1;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #aaa;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    req.log.info({ name, email }, "Contact form email sent successfully");
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact form email");
    res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
});

export default router;
