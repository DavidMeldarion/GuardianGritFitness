import LeadCaptureForm from "@/components/LeadCaptureForm";
import CTAButton from "@/components/CTAButton";
import { Suspense } from "react";

export const metadata = {
  title: "The Rule of Life Primer",
  description:
    "Structure for training and nutrition that sticks—built for Catholic husbands and fathers in real life.",
};

const inside = [
  "A clean, printable PDF you can run immediately.",
  "Reflection prompts and self-audits to spot drift early.",
  "The Four Non-Negotiables section you can return to anytime.",
];

export default function LeadMagnetPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="section-card grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start" id="primer-form">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">The Rule of Life Primer</p>
          <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">Structure for Training and Nutrition That Actually Sticks</h1>
          <p className="text-lg text-slate/90">
            Most men don’t fail because they don’t know what to do. They fail because life gets loud and execution becomes negotiable.
          </p>
          <p className="text-lg text-slate/90">
            This free PDF gives you a simple structure you can run in real life: fewer decisions, less drift, more consistency.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-charcoal">Get the Primer (Free)</p>
            <ul className="space-y-2 text-slate/90">
              <li>• Built for husbands and fathers with real schedules</li>
              <li>• Training + nutrition execution without overthinking</li>
            </ul>
          </div>
          <CTAButton href="#primer-form">Get Instant Access</CTAButton>
        </div>

        <div className="section-card bg-bone space-y-3">
          <h2 className="text-xl font-semibold text-charcoal">Get the PDF</h2>
          <p className="text-ash">Enter your details and check your inbox in under a minute.</p>
          <Suspense fallback={null}>
            <LeadCaptureForm source="rule-of-life-primer" />
          </Suspense>
        </div>
      </section>

      <section className="section-card space-y-3">
        <h2 className="text-2xl font-semibold text-charcoal">Who this is for</h2>
        <p className="text-slate/90">If any of these are true, this is for you:</p>
        <ul className="space-y-2 text-slate/90">
          <li>• You start strong… then slowly drift</li>
          <li>• Your plan only works when life is calm</li>
          <li>• You’re tired of “resetting” every Monday</li>
          <li>• You want a system you can execute without overthinking</li>
          <li>• You want training and nutrition to fit responsibility — not compete with it</li>
        </ul>
        <p className="text-ash">This isn’t hype. It’s a framework for execution.</p>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal">What you’ll learn (in plain terms)</h2>
        <div className="space-y-3 text-slate/90">
          <div>
            <h3 className="font-semibold text-charcoal">1) Why motivation keeps failing you</h3>
            <p>Motivation comes and goes. Structure holds.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">2) Why responsible men struggle differently</h3>
            <p>Marriage, work, and leadership change how discipline has to function.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">3) The Four Non-Negotiables that reduce drift</h3>
            <p>Practical standards that remove daily negotiation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">4) Why most men don’t quit — they drift</h3>
            <p>And how drift actually happens, quietly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">5) How to course-correct without turning it into a restart</h3>
            <p>A simple way to re-engage without shame or intensity spikes.</p>
          </div>
        </div>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal">What’s inside (free)</h2>
        <div className="space-y-2 text-slate/90">
          <p className="font-semibold text-charcoal">PDF Guide</p>
          <ul className="space-y-2">
            {inside.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <CTAButton href="#primer-form">Get Instant Access</CTAButton>
      </section>

      <section className="section-card space-y-3">
        <h2 className="text-2xl font-semibold text-charcoal">Important: what this is (and what it isn’t)</h2>
        <p className="text-slate/90">This is not a temporary challenge. This is not a “do more, try harder” hype cycle.</p>
        <p className="text-slate/90">
          This is a structure that supports what actually matters: consistent training + consistent nutrition inside real life.
        </p>
        <p className="text-slate/90">
          You can take this framework and run it on your own. If you already have your programming and nutrition dialed in, this will still sharpen your execution.
        </p>
        <p className="text-slate/90">
          And if you want execution handled — training templates, nutrition structure, accountability, and coaching — you’ll see the next step after you finish the primer.
        </p>
      </section>

      <section className="section-card space-y-3">
        <h2 className="text-2xl font-semibold text-charcoal">What happens after you download it?</h2>
        <p className="text-slate/90">You’ll receive the PDF download.</p>
        <p className="text-slate/90">Don’t skim. Decide one standard. Execute it for 7 days. That alone will change your consistency.</p>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-charcoal">FAQ</h2>
        <div className="space-y-3 text-slate/90">
          <div>
            <h3 className="font-semibold text-charcoal">Is this religious?</h3>
            <p>It’s written for men who value faith, responsibility, and discipline. No theological background required.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">Do I need a gym?</h3>
            <p>No. The primer is about structure and execution, not equipment.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">Will this give me a workout plan?</h3>
            <p>Not a full program. It prepares you to execute training and nutrition consistently. If you want the training templates and nutrition structure, that’s the next step.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal">Is it really free?</h3>
            <p>Yes. No gimmicks.</p>
          </div>
        </div>
        <CTAButton href="#primer-form">Get Instant Access</CTAButton>
      </section>
    </div>
  );
}
