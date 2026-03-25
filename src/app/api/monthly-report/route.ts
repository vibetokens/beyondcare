import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createSign } from "crypto";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PHRow { [key: string]: string | number }

interface ReportData {
  month:       string;   // e.g. "March 2026"
  dateRange:   string;   // e.g. "Mar 1 – Mar 31"
  sessions:    number;
  pageviews:   number;
  cities:      { city: string; views: number }[];
  devices:     { device: string; views: number }[];
  topPages:    { path: string; views: number }[];
  referrers:   { domain: string; views: number }[];
  keywords:    { query: string; clicks: number; impressions: number }[];
}

// ─── Date helpers ─────────────────────────────────────────────────────────────

function isLastDayOfMonth(): boolean {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.getMonth() !== today.getMonth();
}

function getMonthRange(): { start: string; end: string; label: string; dateRange: string } {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const start = `${y}-${String(m + 1).padStart(2, "0")}-01`;
  const lastDay = new Date(y, m + 1, 0).getDate();
  const end = `${y}-${String(m + 1).padStart(2, "0")}-${lastDay}`;
  const label = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const shortStart = new Date(start).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const shortEnd   = new Date(end).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const dateRange = `${shortStart} – ${shortEnd}`;
  return { start, end, label, dateRange };
}

// ─── PostHog ─────────────────────────────────────────────────────────────────

async function phQuery(sql: string): Promise<PHRow[]> {
  const projectId = process.env.POSTHOG_PROJECT_ID;
  const apiKey    = process.env.POSTHOG_PERSONAL_API_KEY;
  if (!projectId || !apiKey) return [];

  const res = await fetch(`https://us.posthog.com/api/projects/${projectId}/query/`, {
    method:  "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body:    JSON.stringify({ query: { kind: "HogQLQuery", query: sql } }),
  });
  if (!res.ok) return [];

  const json = await res.json();
  const cols: string[] = json?.columns ?? [];
  const rows: (string | number)[][] = json?.results ?? [];
  return rows.map(row => Object.fromEntries(cols.map((c, i) => [c, row[i]])));
}

async function fetchPostHogData(start: string, end: string): Promise<Partial<ReportData>> {
  const where = `event = '$pageview' AND toDate(timestamp) >= '${start}' AND toDate(timestamp) <= '${end}'`;

  const [summary, cityRows, deviceRows, pageRows, refRows] = await Promise.all([
    phQuery(`SELECT uniq($session_id) as sessions, count() as pageviews FROM events WHERE ${where}`),
    phQuery(`SELECT properties.$geoip_city_name as city, count() as views FROM events WHERE ${where} AND properties.$geoip_city_name IS NOT NULL AND properties.$geoip_city_name != '' GROUP BY city ORDER BY views DESC LIMIT 8`),
    phQuery(`SELECT properties.$device_type as device, count() as views FROM events WHERE ${where} AND properties.$device_type IS NOT NULL GROUP BY device ORDER BY views DESC`),
    phQuery(`SELECT replaceRegexpOne(properties.$current_url, 'https?://[^/]+', '') as path, count() as views FROM events WHERE ${where} GROUP BY path ORDER BY views DESC LIMIT 8`),
    phQuery(`SELECT properties.$referring_domain as domain, count() as views FROM events WHERE ${where} AND properties.$referring_domain IS NOT NULL AND properties.$referring_domain != '' GROUP BY domain ORDER BY views DESC LIMIT 8`),
  ]);

  return {
    sessions:  Number(summary[0]?.sessions  ?? 0),
    pageviews: Number(summary[0]?.pageviews ?? 0),
    cities:    cityRows.map(r  => ({ city: String(r.city), views: Number(r.views) })),
    devices:   deviceRows.map(r => ({ device: String(r.device), views: Number(r.views) })),
    topPages:  pageRows.map(r  => ({ path: String(r.path) || "/", views: Number(r.views) })),
    referrers: refRows.map(r   => ({ domain: String(r.domain), views: Number(r.views) })),
  };
}

// ─── Google Search Console ────────────────────────────────────────────────────

async function getGSCToken(): Promise<string | null> {
  const email      = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !privateKey) return null;

  try {
    const scope  = "https://www.googleapis.com/auth/webmasters.readonly";
    const header  = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
    const now     = Math.floor(Date.now() / 1000);
    const claim   = Buffer.from(JSON.stringify({ iss: email, scope, aud: "https://oauth2.googleapis.com/token", exp: now + 3600, iat: now })).toString("base64url");
    const sign    = createSign("RSA-SHA256");
    sign.update(`${header}.${claim}`);
    const jwt = `${header}.${claim}.${sign.sign(privateKey, "base64url")}`;

    const res = await fetch("https://oauth2.googleapis.com/token", {
      method:  "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:    `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
    });
    const data = await res.json();
    return data.access_token ?? null;
  } catch {
    return null;
  }
}

async function fetchGSCKeywords(start: string, end: string): Promise<{ query: string; clicks: number; impressions: number }[]> {
  const siteUrl = process.env.GSC_SITE_URL ?? "https://beyondcarehc.com";
  const token   = await getGSCToken();
  if (!token) return [];

  try {
    const res = await fetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method:  "POST",
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body:    JSON.stringify({ startDate: start, endDate: end, dimensions: ["query"], rowLimit: 10, orderBy: [{ fieldName: "clicks", sortOrder: "DESCENDING" }] }),
      }
    );
    const json = await res.json();
    return (json.rows ?? []).map((r: { keys: string[]; clicks: number; impressions: number }) => ({
      query:       r.keys[0],
      clicks:      r.clicks,
      impressions: r.impressions,
    }));
  } catch {
    return [];
  }
}

// ─── Email HTML ───────────────────────────────────────────────────────────────

function stat(label: string, value: string | number) {
  return `
    <td style="text-align:center;padding:16px 20px">
      <div style="font-size:28px;font-weight:800;color:#0a4a52;line-height:1">${value.toLocaleString()}</div>
      <div style="font-size:12px;color:#5a7a7e;margin-top:4px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">${label}</div>
    </td>`;
}

function table(rows: string[], headers: string[]) {
  const hRow = headers.map(h => `<th style="text-align:left;padding:8px 12px;font-size:11px;font-weight:700;color:#5a7a7e;text-transform:uppercase;letter-spacing:0.08em;border-bottom:2px solid #e8f6f8">${h}</th>`).join("");
  return `<table style="width:100%;border-collapse:collapse">${hRow ? `<thead><tr>${hRow}</tr></thead>` : ""}<tbody>${rows.join("")}</tbody></table>`;
}

function tr(cells: string[]) {
  return `<tr>${cells.map((c, i) => `<td style="padding:8px 12px;font-size:13px;color:${i === 0 ? "#0a2d32" : "#2a4a4e"};border-bottom:1px solid #f0f8f9;${i > 0 ? "text-align:right;font-weight:600" : ""}">${c}</td>`).join("")}</tr>`;
}

function section(title: string, content: string) {
  return `
    <div style="margin-bottom:28px">
      <div style="display:flex;align-items:center;margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;color:#2A9DAB;text-transform:uppercase;letter-spacing:0.12em">${title}</div>
      </div>
      <div style="background:#fff;border:1px solid #ddeef0;border-radius:12px;overflow:hidden">${content}</div>
    </div>`;
}

function noData(msg: string) {
  return `<p style="margin:0;padding:20px;font-size:13px;color:#5a7a7e;font-style:italic">${msg}</p>`;
}

function buildEmail(d: ReportData): string {
  const phReady  = d.sessions > 0 || d.pageviews > 0;
  const gscReady = d.keywords.length > 0;

  const statsRow = `
    <table style="width:100%;border-collapse:collapse;background:#f5fcfd;border:1px solid #ddeef0;border-radius:12px;overflow:hidden;margin-bottom:28px">
      <tr>
        ${stat("Sessions",  d.sessions)}
        ${stat("Pageviews", d.pageviews)}
      </tr>
    </table>`;

  const citiesSection = section("Top Cities", !phReady
    ? noData("Analytics not yet configured — add PostHog keys to see city data")
    : d.cities.length === 0
      ? noData("No city data for this period")
      : table(d.cities.map((c, i) => tr([`${i + 1}. ${c.city}`, c.views.toLocaleString()])), ["City", "Pageviews"])
  );

  const devicesSection = section("Devices", !phReady
    ? noData("Analytics not yet configured")
    : d.devices.length === 0
      ? noData("No device data for this period")
      : (() => {
          const total = d.devices.reduce((s, d) => s + d.views, 0);
          return d.devices.map(dev => {
            const pct = total > 0 ? Math.round((dev.views / total) * 100) : 0;
            return `<div style="padding:10px 16px;border-bottom:1px solid #f0f8f9;display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:13px;color:#0a2d32;font-weight:600">${dev.device}</span>
              <div style="display:flex;align-items:center;gap:10px">
                <div style="width:80px;height:6px;background:#e8f6f8;border-radius:99px;overflow:hidden"><div style="height:100%;width:${pct}%;background:#2A9DAB;border-radius:99px"></div></div>
                <span style="font-size:13px;color:#2a4a4e;font-weight:700;min-width:36px;text-align:right">${pct}%</span>
              </div>
            </div>`;
          }).join("");
        })()
  );

  const pagesSection = section("Top Pages", !phReady
    ? noData("Analytics not yet configured — add PostHog keys to see page data")
    : d.topPages.length === 0
      ? noData("No page data for this period")
      : table(d.topPages.map((p, i) => tr([`${i + 1}. ${p.path || "/"}`, p.views.toLocaleString()])), ["Page", "Views"])
  );

  const keywordsSection = section("Search Terms (Google)", !gscReady
    ? noData("Google Search Console not yet configured — add GSC service account keys to see search terms")
    : table(d.keywords.map((k, i) => tr([`${i + 1}. ${k.query}`, k.clicks.toLocaleString(), k.impressions.toLocaleString()])), ["Search Term", "Clicks", "Impressions"])
  );

  const referrersSection = section("Traffic Sources", !phReady
    ? noData("Analytics not yet configured")
    : d.referrers.length === 0
      ? noData("No referrer data this period (most traffic may be direct)")
      : table(d.referrers.map((r, i) => tr([`${i + 1}. ${r.domain}`, r.views.toLocaleString()])), ["Referrer", "Pageviews"])
  );

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:'Segoe UI',Helvetica,sans-serif;background:#f5f9f9;margin:0;padding:24px">
  <div style="max-width:600px;margin:0 auto">

    <!-- Header -->
    <div style="background:#0a4a52;padding:28px 32px;border-radius:16px 16px 0 0">
      <p style="margin:0 0 6px;color:rgba(255,255,255,0.55);font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase">Beyond Care Home Care Services</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Website Report — ${d.month}</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.65);font-size:13px">${d.dateRange}</p>
    </div>

    <!-- Body -->
    <div style="background:#f8fcfd;padding:28px 32px;border:1px solid #ddeef0;border-top:none;border-radius:0 0 16px 16px">

      <!-- Summary stats -->
      ${statsRow}

      ${citiesSection}
      ${devicesSection}
      ${pagesSection}
      ${keywordsSection}
      ${referrersSection}

      <!-- Footer -->
      <div style="border-top:1px solid #ddeef0;margin-top:28px;padding-top:20px">
        <p style="margin:0;font-size:12px;color:#5a7a7e;line-height:1.6">
          This report is automatically generated on the last day of each month for beyondcarehc.com.<br>
          Data powered by PostHog analytics + Google Search Console.
        </p>
      </div>
    </div>

  </div>
</body>
</html>`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const maxDuration = 60;

async function runReport(force = false) {
  if (!force && !isLastDayOfMonth()) {
    return NextResponse.json({ skipped: true, reason: "Not the last day of the month" });
  }

  const { start, end, label, dateRange } = getMonthRange();

  const [phData, keywords] = await Promise.all([
    fetchPostHogData(start, end),
    fetchGSCKeywords(start, end),
  ]);

  const data: ReportData = {
    month:     label,
    dateRange,
    sessions:  phData.sessions  ?? 0,
    pageviews: phData.pageviews ?? 0,
    cities:    phData.cities    ?? [],
    devices:   phData.devices   ?? [],
    topPages:  phData.topPages  ?? [],
    referrers: phData.referrers ?? [],
    keywords,
  };

  const html = buildEmail(data);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from   = process.env.RESEND_FROM_EMAIL ?? "noreply@beyondcarehc.com";

  await resend.emails.send({
    from:    `Beyond Care Reports <${from}>`,
    to:      ["satkin@beyondcarehc.com"],
    subject: `Website Report — ${label}`,
    html,
  });

  return NextResponse.json({ ok: true, month: label, sessions: data.sessions, pageviews: data.pageviews });
}

// GET: called by Vercel cron (and manual ?force=true&secret=X for testing)
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const force  = req.nextUrl.searchParams.get("force") === "true";

  if (force) {
    const expected = process.env.REPORT_SECRET;
    if (!expected || secret !== expected) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return runReport(force);
}
