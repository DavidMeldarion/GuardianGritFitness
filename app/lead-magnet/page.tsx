import LeadCaptureForm from "@/components/LeadCaptureForm";

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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Free guide</p>
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">The Father’s Strength Reset</h1>
        <p className="text-lg text-steel/90">
          Built for Catholic husbands and fathers who want to reclaim strength and discipline without
          compromising family life. Run this for the next month and feel the change.
        </p>
        <div className="space-y-3 rounded-2xl bg-cloud/60 p-4 text-steel/90">
          {bullets.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
        <p className="text-sm text-steel/80">No spam. Unsubscribe anytime.</p>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-xl font-semibold text-ink">Get the PDF</h2>
        <p className="text-steel/85">Enter your details and check your inbox in under a minute.</p>
        <LeadCaptureForm source="lead-magnet" />
      </section>
    </div>
  );
}
