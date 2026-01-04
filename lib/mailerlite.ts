import { sanitizeUtm, UtmParams } from "./utm";

type SubscribeInput = {
  name: string;
  email: string;
  utm?: UtmParams;
  source?: string;
  landingPage?: string;
  referrer?: string;
  honeypot?: string;
};

const API_BASE = "https://connect.mailerlite.com/api";

export async function subscribeToMailerLite(input: SubscribeInput) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey) {
    // Mock mode for local development.
    console.log("[mailerlite:mock] payload", input);
    return { mocked: true };
  }

  const utm = sanitizeUtm(input.utm);

  const body = {
    email: input.email,
    name: input.name,
    fields: {
      name: input.name,
      source: input.source,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
      utm_term: utm.utm_term,
      landing_page: input.landingPage,
      referrer: input.referrer,
    },
    groups: groupId ? [groupId] : undefined,
    resubscribe: true,
    update_existing: true,
  };

  const response = await fetch(`${API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `MailerLite request failed (${response.status}): ${errorText || response.statusText}`,
    );
  }

  return response.json();
}
