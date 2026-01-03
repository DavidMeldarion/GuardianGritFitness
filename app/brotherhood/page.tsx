import CTAButton from "@/components/CTAButton";
import { appendUtmParams } from "@/lib/url";
import { parseUtmParams } from "@/lib/utm";

export const metadata = {
  title: "Iron and Incense: The Brotherhood",
  description:
    "For Catholic men who want strength, discipline, and leadership without hype—built for real life, not perfect weeks.",
};

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
    "https://www.skool.com/guardian-grit-4157/about";
  const ctaUrl = appendUtmParams(skoolBase, utm);

  const systemPoints = [
    "Busy work schedules",
    "Kids getting sick",
    "Sleep not always perfect",
    "Life still happening",
  ];

  const trainingTracks = [
    "Track A: 3-Day Full Body (busy men / inconsistent weeks)",
    "Track B: 4-Day Upper/Lower (more volume / stable schedule)",
    "Includes progression rules + minimum effective dose fallback for chaotic weeks",
  ];

  const forWho = [
    "You’ve started and stopped a dozen times",
    "You want strength and physique results without your life needing to be perfect",
    "You want a plan that supports your vocation and responsibilities—not competes with them",
  ];

  const notFor = [
    "Men who want 1:1 custom programming and daily private messaging",
    "Men who want extreme protocols or ‘hardcore’ gimmicks",
    "Men who aren’t willing to follow a simple standard consistently",
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="section-card space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Iron and Incense</p>
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">The Brotherhood</h1>
        <p className="text-lg text-slate/90">
          Iron and Incense: The Brotherhood is for Catholic men who want to get strong, stay disciplined, and lead
          their household without relying on hype, perfect weeks, or “motivation seasons.”
        </p>
        <CTAButton href={ctaUrl} target="_blank" rel="noreferrer">
          Join The Brotherhood
        </CTAButton>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal">Built for real life</h2>
        <p className="text-slate/90">This is a simple system built for real life:</p>
        <ul className="grid gap-2 sm:grid-cols-2 text-slate/90">
          {systemPoints.map((point) => (
            <li key={point} className="rounded-xl border border-brass/25 bg-bone px-4 py-3">{point}</li>
          ))}
        </ul>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal">What you get inside</h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-brass/30 bg-bone p-4 shadow-sm">
            <p className="font-semibold text-charcoal">✅ Plug-and-play training (choose your track)</p>
            <ul className="mt-2 space-y-2 text-slate/90">
              {trainingTracks.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brass/30 bg-bone p-4 shadow-sm">
            <p className="font-semibold text-charcoal">✅ Simple nutrition framework</p>
            <p className="text-slate/90">No macro obsession. No meal plans. Clear rules you can execute.</p>
          </div>
          <div className="rounded-xl border border-brass/30 bg-bone p-4 shadow-sm">
            <p className="font-semibold text-charcoal">✅ Weekly discipline challenges</p>
            <p className="text-slate/90">Short, practical standards that build consistency and character.</p>
          </div>
          <div className="rounded-xl border border-brass/30 bg-bone p-4 shadow-sm">
            <p className="font-semibold text-charcoal">✅ Brotherhood accountability</p>
            <p className="text-slate/90">Weekly check-in threads, wins threads, and a place to stay on track.</p>
          </div>
          <div className="rounded-xl border border-brass/30 bg-bone p-4 shadow-sm">
            <p className="font-semibold text-charcoal">✅ Coach-led structure</p>
            <p className="text-slate/90">Weekly direction and guidance so you always know what to focus on.</p>
          </div>
        </div>
      </section>

      <section className="section-card grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-charcoal">Who this is for</h3>
          <ul className="space-y-2 text-slate/90">
            {forWho.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-charcoal">Who this is not for</h3>
          <ul className="space-y-2 text-slate/90">
            {notFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card space-y-3">
        <h3 className="text-xl font-semibold text-charcoal">The standard here</h3>
        <p className="text-slate/90">Bad week ≠ restart week. We adjust, reduce to the minimum, and continue.</p>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Founding Members (limited time)</p>
          <h3 className="text-2xl font-semibold text-charcoal">$79/month until Jan 7, 2026</h3>
          <p className="text-slate/90">After that, new members join at $99/month.</p>
        </div>
        <CTAButton href={ctaUrl} target="_blank" rel="noreferrer">
          Join The Brotherhood
        </CTAButton>
        <p className="text-ash text-sm">If you’re ready to build something steady—welcome in.</p>
      </section>
    </div>
  );
}
