import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Thanks — Check your email",
  description: "Your guide is on the way. Start the next steps while you wait.",
};

const checklist = [
  "Check Promotions or Spam if you don’t see it.",
  "Drag the email to Primary and add us to contacts.",
  "Give it two minutes—servers can be slow.",
];

export default function ThanksPage() {
  return (
    <div className="section-card space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">You’re in</p>
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">Check your email for the guide</h1>
        <p className="text-slate/90">
          If it’s not there yet, it’s en route. Meanwhile, see how Iron and Incense: The Brotherhood can accelerate your progress.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl bg-bone p-4 text-slate/90 border border-brass/25">
        {checklist.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CTAButton href="/brotherhood">Explore Iron and Incense</CTAButton>
        <CTAButton href="/lead-magnet" variant="ghost">
          Resend the guide
        </CTAButton>
      </div>
    </div>
  );
}
