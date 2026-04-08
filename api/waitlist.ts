export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, role } = req.body ?? {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return res.status(500).json({ error: "Email service is not configured" });
  }

  const from = process.env.WAITLIST_FROM_EMAIL || "TeenCents Waitlist <onboarding@resend.dev>";
  const to = "info@teencents.ai";

  const submittedAt = new Date().toISOString();
  const safeRole = role === "parent" ? "parent" : "teen";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New TeenCents waitlist signup (${safeRole})`,
        text: [
          "New waitlist signup received.",
          `Email: ${email}`,
          `Role: ${safeRole}`,
          `Submitted at (UTC): ${submittedAt}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      return res.status(502).json({ error: `Email provider error: ${message}` });
    }

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || "Failed to send waitlist email" });
  }
}
