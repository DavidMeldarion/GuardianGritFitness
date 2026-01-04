import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "Lesson 5 - Rule of Life Primer",
  description: "DIY vs supported execution and how to choose honestly.",
};

const PDF_URL =
  process.env.NEXT_PUBLIC_PDF_URL ||
  "https://guardiangritfitness.s3.us-east-005.backblazeb2.com/The+Rule+of+Life+Primer.pdf";
const YOUTUBE_ID = "LESSON5_ID";

const takeaways = [
  "DIY works when you can manage the details consistently",
  "Supported execution reduces friction and mental load",
  "The point is consistency in real life, not heroics",
];

const actionStep =
  "Decide which path you're taking for the next 30 days: DIY (self-managed) or supported execution (environment + plan).";

export default function LessonFivePage() {
  return (
    <div className="min-h-screen bg-bone text-charcoal">
      <main className="container-page space-y-10 py-10">
        <section className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-ash">
            <Link href="/rule-of-life-primer" className="font-semibold text-charcoal hover:text-brass">
              Rule of Life Primer
            </Link>
            <span aria-hidden className="text-ash">/</span>
            <span>Lesson 5</span>
          </div>

          <div className="space-y-3 rounded-2xl border border-brass/25 bg-white/70 p-6 shadow-sm shadow-brass/10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Rule of Life Primer</p>
              <h1 className="font-display text-3xl sm:text-4xl">Lesson 5 - DIY vs Supported Execution</h1>
              <p className="text-slate/90">Two legitimate paths forward - and how to choose honestly.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton href="/primer/lesson-4" variant="ghost">
                Previous: Lesson 4
              </CTAButton>
              <CTAButton href="/primer/lesson-6">Next: Lesson 6</CTAButton>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-brass/25 bg-white/70 p-5 shadow-sm shadow-brass/10">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-charcoal">Lesson 5 video</h2>
            <p className="text-slate/90">Clarify whether you should run DIY or choose supported execution right now.</p>
          </div>
          <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-brass/25 bg-charcoal">
            <iframe
              title="Lesson 5"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 rounded-2xl border border-brass/20 bg-white/60 p-5 shadow-sm shadow-brass/10">
            <h2 className="text-lg font-semibold text-charcoal">Key takeaways</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate/90">
              {takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-brass/25 bg-brass/5 p-5 shadow-sm shadow-brass/10">
            <h2 className="text-lg font-semibold text-charcoal">Action step</h2>
            <p className="text-slate/90">{actionStep}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-brass/25 bg-white/60 p-5 shadow-sm shadow-brass/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">The Rule of Life Primer</p>
              <p className="text-slate/90">Keep the PDF open while you move through the lessons so you apply, not just collect notes.</p>
            </div>
            <CTAButton href={PDF_URL} variant="ghost" className="w-full sm:w-auto">
              Open the PDF
            </CTAButton>
          </div>
        </section>

        <div className="text-sm text-ash">
          If you want support executing training + nutrition consistently, the Brotherhood exists as the supported path.
        </div>
      </main>
    </div>
  );
}
