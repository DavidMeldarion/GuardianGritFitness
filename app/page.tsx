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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(176,141,87,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(17,18,20,0.12),_transparent_36%)]" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Strength. Discipline. Fatherhood.</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
              Training for men who refuse to drift.
            </h1>
            <p className="text-lg text-slate/90">
              Build a strong body, anchored mindset, and brotherhood that keeps you honest. No fluff—just
              focused work that respects your vocation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/rule-of-life-primer">Get The Rule of Life Primer</CTAButton>
              <CTAButton href="/brotherhood" variant="ghost">
                Join Iron and Incense
              </CTAButton>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-ash">
              <span className="rounded-full bg-bone px-3 py-1 font-semibold text-charcoal border border-brass/30">Father-first programming</span>
              <span className="rounded-full bg-bone px-3 py-1 font-semibold text-charcoal border border-brass/30">Accountability that sticks</span>
              <span className="rounded-full bg-bone px-3 py-1 font-semibold text-charcoal border border-brass/30">Rooted in faith and duty</span>
            </div>
          </div>
          <div className="section-card bg-bone">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-brass">What you get</p>
              <ul className="space-y-3 text-slate/90">
                <li>• A clear 4-week strength template you can run immediately.</li>
                <li>• Simple nutrition priorities that work with family life.</li>
                <li>• Daily prompts to keep you steady when motivation fades.</li>
              </ul>
              <p className="text-sm text-ash">Grab The Rule of Life Primer, follow it for a week, and you will feel the difference.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Who it&apos;s for</h2>
            <p className="text-slate/90">
              Catholic husbands and fathers who carry real responsibility and want strength without sacrificing
              their family or faith.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border border-brass/25 bg-bone p-4 shadow-sm">Men leading a household who want to model discipline.</li>
              <li className="rounded-xl border border-brass/25 bg-bone p-4 shadow-sm">Busy professionals needing simple, efficient training.</li>
              <li className="rounded-xl border border-brass/25 bg-bone p-4 shadow-sm">Fathers rebuilding consistency after setbacks.</li>
              <li className="rounded-xl border border-brass/25 bg-bone p-4 shadow-sm">Men who value brotherhood and honest accountability.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">How it works</h2>
            <ol className="space-y-3 text-slate/90">
              <li><span className="font-semibold text-charcoal">1)</span> Start with The Rule of Life Primer and run the first week.</li>
              <li><span className="font-semibold text-charcoal">2)</span> Join Iron and Incense: The Brotherhood for coaching, templates, and accountability.</li>
              <li><span className="font-semibold text-charcoal">3)</span> Execute, report in, and level up with other men who expect more.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-charcoal">Iron and Incense proof</h2>
            <p className="text-ash">Real stories coming soon. Plug in now and add yours.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-brass/35 bg-bone p-5 text-ash"
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
            <h2 className="text-2xl font-semibold text-charcoal">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-brass/25 bg-bone p-4 shadow-sm">
                  <p className="font-semibold text-charcoal">{faq.q}</p>
                  <p className="text-slate/90">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-charcoal p-6 text-bone shadow-xl border border-brass/40">
            <h3 className="text-xl font-semibold">Ready to move?</h3>
            <p className="text-bone/80">
              Download The Rule of Life Primer, run it this week, and step into Iron and Incense: The Brotherhood for coaching and accountability.
            </p>
            <div className="flex flex-col gap-3">
              <CTAButton href="/rule-of-life-primer">Get The Rule of Life Primer</CTAButton>
              <CTAButton
                href="/brotherhood"
                variant="ghost"
                className="border-brass bg-bone text-charcoal hover:bg-brass hover:text-charcoal"
              >
                Join Iron and Incense
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
