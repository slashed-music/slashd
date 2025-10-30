// app/api/ask/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1) Parse body safely
    let body: any = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { level, topic, question, email, name } = body ?? {};

    // 2) Validate inputs
    if (!["beginner", "intermediate", "advanced"].includes(level)) {
      return NextResponse.json({ error: "Invalid level" }, { status: 400 });
    }
    if (!question || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 3) Check env vars first (MOST COMMON ISSUE)
    const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE;
    if (!supaUrl || !serviceKey) {
      return NextResponse.json(
        {
          error: "Missing environment variables",
          details: {
            NEXT_PUBLIC_SUPABASE_URL: !!supaUrl,
            SUPABASE_SERVICE_ROLE: !!serviceKey,
          },
        },
        { status: 500 }
      );
    }

    // 4) Do the insert
    const res = await fetch(`${supaUrl}/rest/v1/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify([{ level, topic, question, email, name }]),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json(
        { error: "DB insert failed", supabase: txt.slice(0, 300) },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: "Server error", message: String(e) }, { status: 500 });
  }
}

// Optional: GET to sanity-check the route exists
export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/ask" });
}
