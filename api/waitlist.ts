import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, role } = req.body ?? {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || "465");
  const secure = port === 465;

  if (!host || !user || !pass) {
    return res.status(500).json({ error: "Email service is not configured" });
  }

  const from = process.env.WAITLIST_FROM_EMAIL || `TeenCents Waitlist <${user}>`;
  const to = "info@teencents.ai";

  const submittedAt = new Date().toISOString();
  const safeRole = role === "parent" ? "parent" : "teen";

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      subject: `New TeenCents waitlist signup (${safeRole})`,
      text: [
        "New waitlist signup received.",
        `Email: ${email}`,
        `Role: ${safeRole}`,
        `Submitted at (UTC): ${submittedAt}`,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || "Failed to send waitlist email via SMTP" });
  }
}
