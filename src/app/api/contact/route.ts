import { NextResponse } from "next/server";

/**
 * Takes the hire form and emails it to me through Resend, as a formatted
 * message I can reply to directly.
 *
 * Env:
 *   RESEND_API_KEY      required
 *   CONTACT_FROM_EMAIL  sender; must be a domain verified in Resend, or
 *                       Resend's test sender, which only delivers to the
 *                       email your Resend account was made with.
 */

/** Every message comes to me, and only me. Never configurable, never the sender. */
const TO = "diptanshumahish2016@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const KINDS: Record<string, string> = {
    role: "A full-time role",
    project: "A project",
    website: "A website",
    hello: "Just saying hi",
};

const FIELDS: { key: string; label: string }[] = [
    { key: "company", label: "Company" },
    { key: "roleTitle", label: "Role" },
    { key: "link", label: "Link" },
    { key: "business", label: "Business" },
    { key: "currentSite", label: "Current website" },
    { key: "budget", label: "Budget" },
    { key: "timeline", label: "Timeline" },
];

/** A light limit per server instance: a handful of messages a minute per address. */
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
    const now = Date.now();
    const hits = (recent.get(ip) ?? []).filter((t) => now - t < 60_000);
    hits.push(now);
    recent.set(ip, hits);
    return hits.length > 5;
}

const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function emailHtml(kind: string, d: Record<string, string>) {
    const rows = FIELDS.filter((f) => d[f.key])
        .map(
            (f) => `<tr>
              <td style="padding:6px 16px 6px 0;color:#7B7468;font-size:13px;vertical-align:top;white-space:nowrap">${f.label}</td>
              <td style="padding:6px 0;font-size:14px;color:#1C1A17">${escape(d[f.key])}</td>
            </tr>`,
        )
        .join("");
    return `<!doctype html>
<html><body style="margin:0;background:#F3EEE4;font-family:-apple-system,Segoe UI,Inter,Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <p style="margin:0 0 16px;font-size:13px;color:#7B7468">diptanshumahish.in · hire form</p>
    <div style="background:#ffffff;border-radius:20px;padding:28px">
      <span style="display:inline-block;background:#2F6B4F;color:#fff;border-radius:999px;padding:4px 12px;font-size:12px">${escape(kind)}</span>
      <h1 style="font-family:Georgia,serif;font-weight:400;font-size:26px;line-height:1.2;margin:16px 0 4px;color:#1C1A17">${escape(d.name)}</h1>
      <a href="mailto:${escape(d.email)}" style="color:#2F6B4F;font-size:14px">${escape(d.email)}</a>
      ${rows ? `<table style="margin-top:20px;border-collapse:collapse">${rows}</table>` : ""}
      <div style="margin-top:20px;padding:18px;background:#F3EEE4;border-radius:14px;font-size:15px;line-height:1.6;color:#1C1A17;white-space:pre-wrap">${escape(d.message)}</div>
      <p style="margin:20px 0 0;font-size:13px;color:#7B7468">Hit reply to answer ${escape(d.name.split(" ")[0] || "them")} directly.</p>
    </div>
  </div>
</body></html>`;
}

function emailText(kind: string, d: Record<string, string>) {
    const lines = FIELDS.filter((f) => d[f.key]).map((f) => `${f.label}: ${d[f.key]}`);
    return [`${kind}`, `${d.name} <${d.email}>`, ...lines, "", d.message].join("\n");
}

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (tooMany(ip)) {
        return NextResponse.json({ error: "Too many messages. Try again in a minute." }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Bad request." }, { status: 400 });
    }

    // Bots fill in the hidden field, or submit faster than a person can type.
    if (clean(body.website_url) || Number(body.elapsed) < 2500) {
        return NextResponse.json({ ok: true });
    }

    const kindKey = clean(body.kind, 20);
    const kind = KINDS[kindKey];
    const d: Record<string, string> = {
        name: clean(body.name, 120),
        email: clean(body.email, 200),
        message: clean(body.message, 5000),
    };
    for (const f of FIELDS) d[f.key] = clean(body[f.key], 300);

    if (!kind || !d.name || !/^\S+@\S+\.\S+$/.test(d.email) || d.message.length < 10) {
        return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
        console.error("contact: RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Email isn't set up yet." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            from: FROM,
            to: [TO],
            reply_to: d.email,
            subject: `${kind} · ${d.name}${d.company || d.business ? `, ${d.company || d.business}` : ""}`,
            html: emailHtml(kind, d),
            text: emailText(kind, d),
        }),
    });

    if (!res.ok) {
        console.error("contact: resend failed", res.status, await res.text());
        return NextResponse.json({ error: "Couldn't send right now." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
}
