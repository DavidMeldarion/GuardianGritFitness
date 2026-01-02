export const metadata = {
  title: "Terms",
  description: "Guardian Grit Fitness terms of use.",
};

export default function TermsPage() {
  return (
    <div className="section-card space-y-4">
      <h1 className="text-3xl font-semibold text-charcoal">Terms of Use</h1>
      <p className="text-slate/90">
        By accessing this site or purchasing services from Guardian Grit Fitness, you agree to use the content
        for personal, non-commercial purposes and to follow all applicable laws.
      </p>
      <p className="text-slate/90">
        Fitness and nutrition guidance is informational only. Consult a medical professional before starting any
        program. We are not liable for injuries or outcomes resulting from application of the materials.
      </p>
      <p className="text-slate/90">
        We reserve the right to update these terms. Continued use constitutes acceptance of the latest version.
      </p>
    </div>
  );
}
