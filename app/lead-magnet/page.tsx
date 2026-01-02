import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Suspense } from "react";

export const metadata = {
  title: "Free Strength Guide",
  description: "Download the 4-week strength reset built for busy Catholic husbands and fathers.",
};

const bullets = [
  "A 4-week strength reset that fits work and family.",
  "Primer on nutrition fundamentals without gimmicks.",
  "Warm-up and movement prep to keep you training long-term.",
  "Accountability cadence you can use immediately.",
];

export default function LeadMagnetPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <section className="section-card space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Free guide</p>
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">The Father’s Strength Reset</h1>
        <p className="text-lg text-slate/90">
          Built for Catholic husbands and fathers who want to reclaim strength and discipline without
          compromising family life. Run this for the next month and feel the change.
        </p>
        <div className="space-y-3 rounded-2xl bg-bone p-4 text-slate/90 border border-brass/25">
          {bullets.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
        <p className="text-sm text-ash">No spam. Unsubscribe anytime.</p>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-xl font-semibold text-charcoal">Get the PDF</h2>
        <p className="text-ash">Enter your details and check your inbox in under a minute.</p>
        <Suspense fallback={null}>
          <LeadCaptureForm source="lead-magnet" />
        </Suspense>
      </section>
    </div>
  );
}
