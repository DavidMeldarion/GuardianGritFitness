# Guardian Grit Fitness

Marketing + lead capture funnel built with Next.js App Router, TypeScript, and Tailwind CSS. The site captures leads for The Rule of Life Primer and drives to the Brotherhood offer on Skool. MailerLite is the source of truth for subscribers; a mock mode is used when no API key is set.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the values (see below).
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000.

## Environment Variables

- `MAILERLITE_API_KEY` – API key for MailerLite (leave empty for mock mode).
- `MAILERLITE_GROUP_ID` – Group/list ID to assign new subscribers.
- `SKOOL_URL` – The join URL for your Skool Brotherhood offer.
- `NEXT_PUBLIC_SITE_URL` – Public site URL (e.g., https://guardiangrit.fit).

## API: Subscribe

- Endpoint: `POST /api/subscribe`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "utm": {
      "utm_source": "ad",
      "utm_medium": "meta",
      "utm_campaign": "launch",
      "utm_content": "carousel",
      "utm_term": "fitness"
    },
    "source": "rule-of-life-primer",
    "honeypot": "",
    "landingPage": "/rule-of-life-primer",
    "referrer": "https://example.com"
  }
  ```
- Responses:
  - `200 { ok: true }` on success (or spam honeypot fast-path)
  - `400 { ok: false, message }` for validation errors
  - `429 { ok: false, message }` for rate limiting
  - `500 { ok: false, message }` for upstream errors

### cURL Test

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","source":"rule-of-life-primer"}'
```

## Deployment (Vercel)

- Connect the repo to Vercel and select the root directory.
- Set the environment variables in the Vercel project settings.
- Default build command: `npm run build`; output: `.next`.
- DNS: point `guardiangrit.fit` (and `www`) to Vercel using CNAME/ALIAS as provided by Vercel.

## Architecture Notes

- App Router with shared header/footer via `app/layout.tsx`.
- Tailwind for styling (`app/globals.css`, `tailwind.config.ts`).
- Lead capture form (`components/LeadCaptureForm.tsx`) handles UTM capture, honeypot, validation, and redirects.
- Analytics helper (`lib/analytics.ts`) is a lightweight console-based tracker; swap later for a provider.
- MailerLite integration isolated in `lib/mailerlite.ts`; falls back to mock logging when no API key is present.

## Quality

- ESLint: `npm run lint`
- TypeScript strict mode enabled.
- Accessibility: labeled inputs, focus styles, semantic headings.
