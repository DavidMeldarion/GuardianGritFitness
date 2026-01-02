export const metadata = {
  title: "Privacy Policy",
  description: "How Guardian Grit Fitness handles your information.",
};

export default function PrivacyPage() {
  return (
    <div className="section-card space-y-4">
      <h1 className="text-3xl font-semibold text-charcoal">Privacy Policy</h1>
      <p className="text-slate/90">
        We collect your name and email to deliver resources and updates related to Guardian Grit Fitness. We do
        not sell or rent your data. You can unsubscribe at any time from any email.
      </p>
      <p className="text-slate/90">
        Data may be processed by trusted vendors (email and analytics providers) solely to operate this site and
        deliver communications. Reasonable security measures are in place to protect your information.
      </p>
      <p className="text-slate/90">
        For questions or data requests, contact support@guardiangrit.fit.
      </p>
    </div>
  );
}
