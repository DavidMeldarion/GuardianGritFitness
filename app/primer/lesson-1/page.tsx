import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "Lesson 1 - Rule of Life Primer",
  description: "Motivation vs structure and why a container matters.",
};

const PDF_URL =
  process.env.NEXT_PUBLIC_PDF_URL ||
  "https://guardiangritfitness.s3.us-east-005.backblazeb2.com/The+Rule+of+Life+Primer.pdf";
const YOUTUBE_ID = "LESSON1_ID";

const takeaways = [
  "Motivation isn't a strategy",
  "A container = pre-decided commitments",
  "Identify your first domino",
];

const actionStep =
  "Do the self-audit reflection on page 4. Name the first place you drift: sleep, schedule, stress, or missed sessions.";

export default function LessonOnePage() {
  return (
    <div className="min-h-screen bg-bone text-charcoal">
      <main className="container-page space-y-10 py-10">
        <section className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-ash">
            <Link href="/rule-of-life-primer" className="font-semibold text-charcoal hover:text-brass">
              Rule of Life Primer
            </Link>
            <span aria-hidden className="text-ash">/</span>
            <span>Lesson 1</span>
          </div>

          <div className="space-y-3 rounded-2xl border border-brass/25 bg-white/70 p-6 shadow-sm shadow-brass/10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Rule of Life Primer</p>
              <h1 className="font-display text-3xl sm:text-4xl">Lesson 1 - Motivation + The Container</h1>
              <p className="text-slate/90">Why motivation fails, and what "structure that holds" actually means.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton href="/primer/lesson-0" variant="ghost">
                Previous: Lesson 0
              </CTAButton>
              <CTAButton href="/primer/lesson-2">Next: Lesson 2</CTAButton>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-brass/25 bg-white/70 p-5 shadow-sm shadow-brass/10">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-charcoal">Lesson 1 video</h2>
            <p className="text-slate/90">Watch this to see why structure beats motivation and how to build your container.</p>
          </div>
          <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-brass/25 bg-charcoal">
            <iframe
              title="Lesson 1"
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
