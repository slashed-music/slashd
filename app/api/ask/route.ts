import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Resend key:", process.env.RESEND_API_KEY ? "✅ Loaded" : "❌ Missing");

type Level = "beginner" | "intermediate" | "advanced";

export async function POST(req: Request) {
  try {
    const { level, topic, question, email, name } = await req.json();

    if (!email || !question) {
      return NextResponse.json({ error: "Email and question are required." }, { status: 400 });
    }

    const safeLevel: Level = ["beginner", "intermediate", "advanced"].includes(level)
      ? level
      : "beginner";

    // ✅ Send auto-reply to the user
    await resend.emails.send({
      from: "SlashD <noreply@slashedmusic.online>",  // your verified sender
      to: email,
      subject: "We got your question — SlashD",
      replyTo: "slashdmusic@gmail.com",            // where replies should go
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
          <h2>Thanks${name ? `, ${escapeHtml(name)}` : ""}!</h2>
          <p>We received your question and will get back to you soon.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
          <p><strong>Level:</strong> ${safeLevel}</p>
          ${topic ? `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>` : ""}
          <p><strong>Your question:</strong></p>
          <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(question)}</pre>
          <p style="margin-top:16px">– SlashD Team</p>
        </div>
      `,
    });

    // ✅ Send notification to you
    await resend.emails.send({
      from: "SlashD Bot <noreply@slashedmusic.online>",
      to: "ask@slashedmusic.online",
      subject: `New question — ${safeLevel}${topic ? ` / ${topic}` : ""}`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
          <h3>New submission</h3>
          <p><strong>Name:</strong> ${escapeHtml(name || "(not provided)")}<br/>
             <strong>Email:</strong> ${escapeHtml(email)}<br/>
             <strong>Level:</strong> ${safeLevel}<br/>
             ${topic ? `<strong>Topic:</strong> ${escapeHtml(topic)}<br/>` : ""}
          </p>
          <p><strong>Question:</strong></p>
          <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(question)}</pre>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("ask route error:", err?.message || err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

// prevent HTML injection in emails
function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
