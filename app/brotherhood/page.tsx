import CTAButton from "@/components/CTAButton";
import { appendUtmParams } from "@/lib/url";
import { parseUtmParams } from "@/lib/utm";

export const metadata = {
  title: "The Brotherhood on Skool",
  description: "Structured training, nutrition priorities, and accountability for Catholic husbands and fathers.",
};

const pillars = [
  {
    title: "Programming you can stick to",
    copy: "Strength templates with clear weekly targets. Built for men with real schedules and family priorities.",
  },
  {
    title: "Nutrition that works at home",
    copy: "Simple habits, grocery lists, and meals that serve your family instead of isolating you from them.",
  },
  {
    title: "Brotherhood and accountability",
    copy: "Weekly check-ins, small wins, and calls that keep you honest. Iron sharpens iron.",
  },
];

const faqs = [
  {
    q: "What’s inside?",
    a: "Weekly training blocks, nutrition primers, habit trackers, live calls, and a private Skool community.",
  },
  {
    q: "How long is the commitment?",
    a: "Monthly membership. Stay as long as it serves you.",
  },
  {
    q: "Do I need to be advanced?",
    a: "No. The programming scales. Show up willing to work and to be accountable.",
  },
];

function buildUtmFromSearchParams(searchParams?: Record<string, string | string[]>) {
  const params = new URLSearchParams();
  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else if (typeof value === "string") {
        params.set(key, value);
      }
    });
  }
  return parseUtmParams(params);
}

export default async function BrotherhoodPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[]>>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const utm = buildUtmFromSearchParams(resolvedSearchParams);
  const skoolBase =
    process.env.SKOOL_URL ||
    "https://www.skool.com/guardian-grit-4157/about?ref=40a52bf66c6047158611cead09f5911b";
  const ctaUrl = appendUtmParams(skoolBase, utm);

  return (
    <div className="space-y-10">
      <section className="section-card space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Brotherhood</p>
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Join the Guardian Grit Brotherhood</h1>
        <p className="text-lg text-steel/90">
          Train hard, lead your family well, and stay accountable with other Catholic men who expect you to rise.
          The Brotherhood on Skool gives you the structure, coaching, and community to keep going.
        </p>
        <CTAButton href={ctaUrl} target="_blank" rel="noreferrer">
          Join on Skool
        </CTAButton>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="section-card space-y-2">
            <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
            <p className="text-steel/90">{pillar.copy}</p>
          </div>
        ))}
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-ink">How it works</h2>
        <ol className="space-y-3 text-steel/90">
          <li><span className="font-semibold text-ink">1)</span> Join the Skool hub and introduce yourself.</li>
          <li><span className="font-semibold text-ink">2)</span> Pick your training track (home or gym) and set weekly targets.</li>
          <li><span className="font-semibold text-ink">3)</span> Show up for check-ins, log wins, and stay accountable.</li>
        </ol>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-cloud bg-white p-4 shadow-sm">
              <p className="font-semibold text-ink">{faq.q}</p>
              <p className="text-steel/90">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
