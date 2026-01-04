import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export const metadata = {
  title: "Guardian Grit Fitness — Strength for Men with Real Responsibility",
  description:
    "Strength training and nutrition for husbands and fathers: structure, execution, and accountability that survive real life.",
};

const faqs = [
  {
    q: "Is this faith-based?",
    a: "It's built for men who value faith, responsibility, discipline, and leadership. But no theological background required.",
  },
  {
    q: "Do I need a gym?",
    a: "No. We can build around what you have.",
  },
  {
    q: "What if my schedule is chaotic?",
    a: "That's the point. The system is designed for real-life constraints.",
  },
  {
    q: "What should I do first?",
    a: "Start with the free Primer.",
  },
];

const forYouIf = [
  "You've tried plans that only work when life is calm",
  "You start strong... then drift",
  "You want structure you can follow without thinking",
  "You want strength and confidence without neglecting your duties",
  "You're tired of resetting every Monday",
];

const methodPoints = [
  "Structure to reduce daily negotiation",
  "Training that's proven and repeatable",
  "Nutrition that works in real life",
  "Accountability that keeps you from drifting",
];

const differentiators = [
  "Strength training templates that remove guesswork",
  "Nutrition structure that's realistic under stress",
  "Weekly accountability and course-correction",
  "A community of men pursuing the same standard (optional, for those who want it)",
];

const typicalReports = [
  "I stopped drifting.",
  "I finally have a plan I can stick to.",
  "I'm stronger, leaner, and more steady at home.",
  "I don't have to think about it--just execute.",
];

const proof = [
  {
    src: "https://f005.backblazeb2.com/file/guardiangritfitness/Sherry.png",
    alt: "Client progress photo",
  },
  {
    src: "https://f005.backblazeb2.com/file/guardiangritfitness/Roger.png",
    alt: "Client progress photo",
  },
  {
    src: "https://f005.backblazeb2.com/file/guardiangritfitness/Nick%20Gerber.png",
    alt: "Client progress photo",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="section-card relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(176,141,87,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(17,18,20,0.12),_transparent_36%)]" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Guardian Grit Fitness</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
              Strength training and nutrition for men with real responsibility.
            </h1>
            <div className="space-y-4 text-lg text-slate/90">
              <p>{"You don't need another hype cycle. You need a simple system you can execute consistently--without overthinking."}</p>
              <p>
                {"I coach husbands and fathers to build strength, lose fat, and lead with steadiness: "}
                <span className="font-semibold text-charcoal">training + nutrition + accountability</span>
                {", built to survive real life."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/rule-of-life-primer">Get the Free Rule of Life Primer</CTAButton>
              <CTAButton href="/brotherhood" variant="ghost">
                See How Coaching Works
              </CTAButton>
            </div>
          </div>
          <div className="section-card bg-bone">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-brass">Built to execute</p>
              <p className="text-slate/90">Clear structure for training and nutrition that works when life is loud.</p>
              <ul className="space-y-3 text-slate/90">
                <li>• Proven templates and nutrition guardrails</li>
                <li>• Accountability that keeps you from drifting</li>
                <li>• Designed for husbands, fathers, and leaders</li>
              </ul>
              <p className="text-sm text-ash">No hype. Structure, execution, and steady progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-charcoal">This is for you if...</h2>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-slate/90">
          {forYouIf.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-ash">{"This isn't extreme discipline. It's consistent execution."}</p>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">The method: Structure &rarr; Execution &rarr; Results</h2>
          <p className="text-slate/90">{"Most men don't fail because they don't care. They fail because execution becomes complicated."}</p>
          <p className="text-slate/90">My approach is simple:</p>
        </div>
        <ul className="space-y-2 text-slate/90">
          {methodPoints.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="text-ash">{"Progress isn't built on intensity. It's built on consistency."}</p>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">What makes this different</h2>
          <p className="text-slate/90">{"A lot of programs focus on temporary intensity. I focus on sustainable execution:"}</p>
        </div>
        <ul className="space-y-2 text-slate/90">
          {differentiators.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="text-slate/90">{"The goal isn't to do more. The goal is to do the basics, consistently, for long enough to matter."}</p>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">Results from men like you</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <div key={item.src} className="rounded-xl border border-dashed border-brass/35 bg-bone p-4">
              <div className="relative h-64 overflow-hidden rounded-lg bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-charcoal">What clients typically report:</p>
          <ul className="space-y-2 text-slate/90">
            {typicalReports.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">Start here (free)</h2>
          <h3 className="text-xl font-semibold text-charcoal">The Rule of Life Primer (PDF)</h3>
          <p className="text-slate/90">A short, practical framework to reduce friction and help you execute training + nutrition consistently.</p>
        </div>
        <ul className="space-y-2 text-slate/90">
          <li>• Printable PDF</li>
          <li>• Built for men with responsibility</li>
        </ul>
        <CTAButton href="/rule-of-life-primer#primer-form">Get the Free Rule of Life Primer</CTAButton>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">How to work with me</h2>
          <p className="text-slate/90">Choose the level of support you want:</p>
        </div>
        <div className="space-y-3 text-slate/90">
          <p><span className="font-semibold text-charcoal">1) Free: Start with the Primer</span> - Get the structure. Run it on your own.</p>
          <p><span className="font-semibold text-charcoal">2) Group coaching: Supported execution</span> - Training templates + nutrition structure + weekly accountability.</p>
          <p><span className="font-semibold text-charcoal">3) 1:1 coaching (limited)</span> - Highest support, most personalized guidance.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CTAButton href="/brotherhood">See How Coaching Works</CTAButton>
          <CTAButton href="/rule-of-life-primer#primer-form" variant="ghost">
            Get the Free Primer
          </CTAButton>
        </div>
      </section>

      <section className="section-card space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-charcoal">About me</h2>
          <p className="text-slate/90">
            {"Hi, I'm David Cunningham - trainer, strength and nutrition coach. I coach with the same mindset I build systems with: simple, repeatable, and built for real conditions - not ideal ones."}
          </p>
          <p className="text-slate/90">{"If you want a plan you can execute without living in your phone, you'll fit here."}</p>
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
            <h3 className="text-xl font-semibold">Start now</h3>
            <p className="text-bone/80">Get the Rule of Life Primer, run the framework, and see how coaching can help you execute faster.</p>
            <div className="flex flex-col gap-3">
              <CTAButton href="/rule-of-life-primer#primer-form">Get the Free Rule of Life Primer</CTAButton>
              <CTAButton
                href="/brotherhood"
                variant="ghost"
                className="border-brass bg-bone text-charcoal hover:bg-brass hover:text-charcoal"
              >
                See How Coaching Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
