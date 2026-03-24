import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { page, slug, feedback, priority } = await req.json();

  if (!feedback?.trim()) {
    return NextResponse.json({ error: "Feedback is required" }, { status: 400 });
  }

  const today = new Date().toISOString().split("T")[0];

  const body = {
    parent: { database_id: process.env.NOTION_FEEDBACK_DB_ID },
    properties: {
      Page: {
        title: [{ text: { content: page || "Unknown Page" } }],
      },
      "URL Slug": {
        rich_text: [{ text: { content: slug || "/" } }],
      },
      Feedback: {
        rich_text: [{ text: { content: feedback.trim() } }],
      },
      Status: {
        select: { name: "Pending" },
      },
      Priority: {
        select: { name: priority || "Medium" },
      },
      Submitted: {
        date: { start: today },
      },
    },
  };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Notion API error:", JSON.stringify(err));
    return NextResponse.json({ error: "Failed to submit feedback", detail: err }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
