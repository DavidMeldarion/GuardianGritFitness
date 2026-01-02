import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Strength. Discipline. Fatherhood.",
  description:
    "Coaching for Catholic husbands and fathers who want strength, clarity, and accountability without fluff.",
};

const faqs = [
  {
    q: "Do I need a gym membership?",
    a: "No. You get both gym and at-home tracks with minimal equipment options.",
  },
  {
    q: "How much time each week?",
    a: "Expect 3-4 focused sessions. Clear priorities so it fits family and work.",
  },
  {
    q: "Is this for beginners?",
    a: "You should be cleared to train, but the programming scales for different levels.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="section-card relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.12),_transparent_35%)]" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Strength. Discipline. Fatherhood.</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
              Training for men who refuse to drift.
            </h1>
            <p className="text-lg text-steel/90">
              Build a strong body, anchored mindset, and brotherhood that keeps you honest. No fluff—just
              focused work that respects your vocation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/lead-magnet">Get the Free Guide</CTAButton>
              <CTAButton href="/brotherhood" variant="ghost">
                Join the Brotherhood
              </CTAButton>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-steel/80">
              <span className="rounded-full bg-cloud px-3 py-1 font-semibold text-ink">Father-first programming</span>
              <span className="rounded-full bg-cloud px-3 py-1 font-semibold text-ink">Accountability that sticks</span>
              <span className="rounded-full bg-cloud px-3 py-1 font-semibold text-ink">Rooted in faith and duty</span>
            </div>
          </div>
          <div className="section-card bg-gradient-to-br from-white to-cloud/60">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-ember">What you get</p>
              <ul className="space-y-3 text-steel/90">
                <li>• A clear 4-week strength template you can run immediately.</li>
                <li>• Simple nutrition priorities that work with family life.</li>
                <li>• Daily prompts to keep you steady when motivation fades.</li>
              </ul>
              <p className="text-sm text-steel/80">Grab the guide, follow it for a week, and you will feel the difference.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">Who it's for</h2>
            <p className="text-steel/90">
              Catholic husbands and fathers who carry real responsibility and want strength without sacrificing
              their family or faith.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border border-cloud bg-white p-4 shadow-sm">Men leading a household who want to model discipline.</li>
              <li className="rounded-xl border border-cloud bg-white p-4 shadow-sm">Busy professionals needing simple, efficient training.</li>
              <li className="rounded-xl border border-cloud bg-white p-4 shadow-sm">Fathers rebuilding consistency after setbacks.</li>
              <li className="rounded-xl border border-cloud bg-white p-4 shadow-sm">Men who value brotherhood and honest accountability.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">How it works</h2>
            <ol className="space-y-3 text-steel/90">
              <li><span className="font-semibold text-ink">1)</span> Start with the free guide and run the first week.</li>
              <li><span className="font-semibold text-ink">2)</span> Join the Brotherhood for coaching, templates, and accountability.</li>
              <li><span className="font-semibold text-ink">3)</span> Execute, report in, and level up with other men who expect more.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-ink">Brotherhood proof</h2>
            <p className="text-steel/85">Real stories coming soon. Plug in now and add yours.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-cloud bg-white p-5 text-steel/80"
              >
                Social proof placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-cloud bg-white p-4 shadow-sm">
                  <p className="font-semibold text-ink">{faq.q}</p>
                  <p className="text-steel/90">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-gradient-to-br from-ink to-steel p-6 text-white shadow-xl">
            <h3 className="text-xl font-semibold">Ready to move?</h3>
            <p className="text-white/80">
              Download the guide, run it this week, and step into the Brotherhood for coaching and accountability.
            </p>
            <div className="flex flex-col gap-3">
              <CTAButton href="/lead-magnet">Get the Free Guide</CTAButton>
              <CTAButton href="/brotherhood" variant="ghost" className="border-white text-white hover:border-cloud">
                Join the Brotherhood
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
