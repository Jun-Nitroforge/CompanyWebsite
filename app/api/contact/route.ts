import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_SECURE",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "SMTP_TO",
] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing email configuration: ${missing.join(", ")}` },
      { status: 500 }
    );
  }

  const { name, email, message } = await request.json().catch(() => ({}));
  const normalized = {
    name: String(name || "").trim(),
    email: String(email || "").trim(),
    message: String(message || "").trim(),
  };

  if (!normalized.name || !normalized.email || !normalized.message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    if (process.env.NODE_ENV !== "production") {
      await transporter.verify();
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: normalized.email,
      subject: `New contact form message from ${normalized.name}`,
      text: `Name: ${normalized.name}\nEmail: ${normalized.email}\n\n${normalized.message}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("SMTP send failed", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to send message." },
      { status: 500 }
    );
  }
}
