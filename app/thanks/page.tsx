import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "You're in - Rule of Life Primer",
  description: "Download the PDF and start Lesson 0 while the email arrives.",
};

const PDF_URL = process.env.NEXT_PUBLIC_PDF_URL || "https://guardiangritfitness.s3.us-east-005.backblazeb2.com/The+Rule+of+Life+Primer.pdf";
const YOUTUBE_ID = "LESSON0_ID";

const checklist = [
  "Check Spam / Promotions",
  "Search: \"Rule of Life Primer\"",
  "If it's not there in 5-10 minutes, opt in again or message me on IG",
];

const howToUse = [
  "Watch Lesson 0 now (5 minutes).",
  "Pick one non-negotiable to implement this week.",
  "Expect drift - use the minimum effective training protocol instead of restarting.",
];

const whatYouLearn = [
  "Why motivation fails (even for serious men)",
  "How to build structure that supports training + nutrition execution",
  "What to do when you drift",
  "How to choose DIY vs supported execution honestly",
];

const modules = [
  { title: "Lesson 0 - Welcome + How to Use the Primer", href: "/primer/lesson-0" },
  { title: "Lesson 1 - Motivation + The Container", href: "/primer/lesson-1" },
  { title: "Lesson 2 - Constraints + The Guilt Trap", href: "/primer/lesson-2" },
  { title: "Lesson 3 - The Four Non-Negotiables", href: "/primer/lesson-3" },
  { title: "Lesson 4 - Drift + Reinforcement", href: "/primer/lesson-4" },
  { title: "Lesson 5 - DIY vs Supported Execution", href: "/primer/lesson-5" },
  { title: "Lesson 6 - Invitation + Next Step", href: "/primer/lesson-6" },
];

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-bone text-charcoal">
      <main className="container-page space-y-10 py-10">
        <section className="rounded-2xl border border-brass/25 bg-white/60 p-6 shadow-sm shadow-brass/10 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Thank you</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">You're in. Check your email.</h1>
          <p className="mt-3 text-slate/90">
            Your Rule of Life Primer PDF is on the way. If you don't see it in a few minutes, check spam/promotions.
          </p>
          <p className="mt-2 text-slate/90">Look for an email from Guardian Grit Fitness with your download link.</p>

          <div className="mt-4 grid gap-2 text-slate/90 sm:grid-cols-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-lg border border-brass/20 bg-bone/80 px-3 py-2 text-sm">
                <span aria-hidden className="text-brass">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="#lesson-0">Start Lesson 0 While You Wait</CTAButton>
            <CTAButton href={PDF_URL} variant="ghost">
              Download the PDF (Backup Link)
            </CTAButton>
          </div>
        </section>

        <hr className="border-brass/30" />

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">While you wait for the email to arrive…</h2>
          <p className="text-slate/90">Watch Lesson 0 now. It's short, and it will show you how to use the PDF without overthinking it.</p>
        </section>

        <section id="lesson-0" className="rounded-2xl border border-brass/25 bg-white/70 p-5 shadow-sm shadow-brass/10 sm:p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Lesson 0 - Welcome + How to Use the Primer</h3>
            <p className="text-slate/90">How to use the PDF the right way: read once, implement one thing, expect drift, reinforce.</p>
          </div>
          <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-brass/25 bg-charcoal">
            <iframe
              title="Lesson 0"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-brass/20 bg-white/60 p-5 shadow-sm shadow-brass/10">
            <h3 className="text-lg font-semibold text-charcoal">How to use this mini-course</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate/90">
              {howToUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-brass/20 bg-white/60 p-5 shadow-sm shadow-brass/10">
            <h3 className="text-lg font-semibold text-charcoal">What you'll learn</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate/90">
              {whatYouLearn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-charcoal">Mini-course modules</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="flex items-center justify-between rounded-xl border border-brass/20 bg-white/60 px-4 py-3 text-slate/90 transition hover:border-brass/50 hover:shadow-md"
              >
                <span className="font-medium text-charcoal">{mod.title}</span>
                <span aria-hidden className="text-brass">&gt;</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-ash">Already have the PDF? Start with Lesson 0 and go in order.</p>
        </section>
      </main>

      <footer className="mt-10 border-t border-brass/30 bg-bone/90">
        <div className="container-page py-4 text-sm text-ash">
          Guardian Grit Fitness - built for husbands and fathers who want strength with steadiness.
        </div>
      </footer>
    </div>
  );
}
