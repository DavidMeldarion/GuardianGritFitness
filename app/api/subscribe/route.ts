import { NextRequest, NextResponse } from "next/server";
import { subscribeToMailerLite } from "@/lib/mailerlite";
import { sanitizeUtm } from "@/lib/utm";
import { validateEmail, validateName } from "@/lib/validators";

const WINDOW_MS = 5 * 60 * 1000;
const LIMIT = 5;

type RateEntry = {
  count: number;
  first: number;
};

const rateBucket = new Map<string, RateEntry>();

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  // next.js exposes ip in request if available on vercel edge/runtime
  // @ts-ignore
  return req.ip || "unknown";
}

function isRateLimited(ip: string) {
  if (!ip) return false;
  const now = Date.now();
  const current = rateBucket.get(ip);
  if (!current) {
    rateBucket.set(ip, { count: 1, first: now });
    return false;
  }

  if (now - current.first > WINDOW_MS) {
    rateBucket.set(ip, { count: 1, first: now });
    return false;
  }

  const next = { count: current.count + 1, first: current.first };
  rateBucket.set(ip, next);
  return next.count > LIMIT;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Invalid JSON payload." }, { status: 400 });
  }

  const { name, email, utm = {}, source, honeypot, landingPage, referrer } = body || {};

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!validateName(name) || !validateEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid name and email." },
      { status: 400 },
    );
  }

  const sanitizedUtm = sanitizeUtm(utm);

  try {
    await subscribeToMailerLite({
      name: name.trim(),
      email: String(email).trim().toLowerCase(),
      utm: sanitizedUtm,
      source: source || "lead-magnet",
      landingPage: landingPage || req.nextUrl.pathname,
      referrer: referrer || req.headers.get("referer") || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[subscribe]", error);
    return NextResponse.json(
      { ok: false, message: "Subscription failed. Please try again." },
      { status: 500 },
    );
  }
}
