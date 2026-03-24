import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? "info@beyondcarehc.com";
const FROM_EMAIL   = process.env.RESEND_FROM_EMAIL    ?? "noreply@beyondcarehc.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { type, fname, lname, phone, email, city, services, message, careVision, position, availability } = body;

    const isConsultation     = type === "consultation";
    const isCareerApplication = type === "career_application";
    const fullName = [fname, lname].filter(Boolean).join(" ") || "Unknown";

    // ── Internal notification email ──────────────────────────────────────────
    const subject = isCareerApplication
      ? `New Caregiver Application — ${fullName}`
      : isConsultation
        ? `New Consultation Request — ${fullName}`
        : `New Contact Message — ${fullName}`;

    const rows = [
      ["Name",     fullName],
      phone        ? ["Phone",            phone]        : null,
      email        ? ["Email",            email]        : null,
      city         ? ["Location",         city]         : null,
      services     ? ["Service Interest", services]     : null,
      position     ? ["Position",         position]     : null,
      availability ? ["Availability",     availability] : null,
      careVision   ? ["Care Vision",      careVision]   : null,
      message      ? ["Message",          message]      : null,
    ].filter(Boolean) as [string, string][];

    const htmlRows = rows
      .map(([k, v]) => `<tr><td style="padding:8px 16px 8px 0;font-weight:600;color:#0a4a52;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 0;color:#2a4a4e">${v}</td></tr>`)
      .join("");

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Segoe UI',sans-serif;background:#f5f9f9;margin:0;padding:32px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07)">
    <div style="background:#0a4a52;padding:28px 32px">
      <p style="margin:0;color:rgba(255,255,255,0.65);font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">Beyond Care Home Care Services</p>
      <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700">${subject}</h1>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse">
        ${htmlRows}
      </table>
    </div>
    <div style="padding:20px 32px;background:#e8f6f8;border-top:1px solid #ddeef0">
      <p style="margin:0;font-size:13px;color:#5a7a7e">Submitted via beyondcarehc.com · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
    </div>
  </div>
</body>
</html>`;

    await resend.emails.send({
      from:    `Beyond Care <${FROM_EMAIL}>`,
      to:      [NOTIFY_EMAIL],
      replyTo: email || NOTIFY_EMAIL,
      subject,
      html,
    });

    // ── Auto-reply to the sender if they gave an email ───────────────────────
    if (email) {
      await resend.emails.send({
        from:    `Sarah Atkin at Beyond Care <${FROM_EMAIL}>`,
        to:      [email],
        subject: "We received your message — Beyond Care Home Care",
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Segoe UI',sans-serif;background:#f5f9f9;margin:0;padding:32px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07)">
    <div style="background:#0a4a52;padding:28px 32px">
      <p style="margin:0;color:rgba(255,255,255,0.65);font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">Beyond Care Home Care Services</p>
      <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700">Thank you, ${fname || "there"}</h1>
    </div>
    <div style="padding:32px">
      <p style="color:#2a4a4e;line-height:1.7;margin:0 0 16px">We received your message and will be in touch shortly — typically within one business day.</p>
      <p style="color:#2a4a4e;line-height:1.7;margin:0 0 16px">If you have an urgent need, please call us directly:</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px">
        <a href="tel:8648412500" style="display:inline-block;background:#0a4a52;color:#fff;padding:12px 20px;border-radius:10px;font-weight:700;text-decoration:none;font-size:15px">Williamston: (864) 841-2500</a>
        <a href="tel:8643690222" style="display:inline-block;background:#0a4a52;color:#fff;padding:12px 20px;border-radius:10px;font-weight:700;text-decoration:none;font-size:15px">Honea Path: (864) 369-0222</a>
      </div>
      <p style="color:#5a7a7e;font-size:14px;line-height:1.6;margin:0">
        — Sarah Atkin, RN, BSN<br>Owner &amp; Founder, Beyond Care Home Care Services
      </p>
    </div>
    <div style="padding:20px 32px;background:#e8f6f8;border-top:1px solid #ddeef0">
      <p style="margin:0;font-size:13px;color:#5a7a7e">Office hours: Mon–Fri 8:00 AM – 4:00 PM · After-hours on-call staff available for urgent needs</p>
    </div>
  </div>
</body>
</html>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
