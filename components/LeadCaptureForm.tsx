"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { parseUtmParams } from "@/lib/utm";
import { validateEmail, validateName } from "@/lib/validators";
import { track } from "@/lib/analytics";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  form?: string;
};

type UtmState = ReturnType<typeof parseUtmParams>;

type LeadCaptureFormProps = {
  source?: string;
};

export default function LeadCaptureForm({ source = "rule-of-life-primer" }: LeadCaptureFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [utm, setUtm] = useState<UtmState>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mountedAt = useRef<number>(Date.now());

  useEffect(() => {
    const parsed = parseUtmParams(searchParams);
    setUtm(parsed);
  }, [searchParams]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!validateName(firstName)) {
      nextErrors.firstName = "Enter your first name.";
    }
    if (!validateName(lastName)) {
      nextErrors.lastName = "Enter your last name.";
    }
    if (!validateEmail(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (Date.now() - mountedAt.current < 1200) {
      nextErrors.form = "Please confirm your details before submitting.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          email,
          utm,
          source,
          honeypot: company,
          landingPage: "/rule-of-life-primer",
          referrer: typeof window !== "undefined" ? document.referrer : undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data?.ok) {
        track("lead_submit", { email, utm, source });
        router.push("/thanks?src=rule-of-life-primer");
        return;
      }

      setErrors({ form: data?.message || "Unable to subscribe right now." });
    } catch (error) {
      console.error(error);
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm font-semibold text-charcoal">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-lg border border-slate/30 bg-white px-4 py-3 text-slate shadow-sm transition focus:border-brass"
            required
          />
          {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm font-semibold text-charcoal">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-lg border border-slate/30 bg-white px-4 py-3 text-slate shadow-sm transition focus:border-brass"
            required
          />
          {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate/30 bg-white px-4 py-3 text-slate shadow-sm transition focus:border-brass"
            required
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        </div>

      {/* Honeypot field */}
      <div className="sr-only">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
        />
      </div>

      {/* Hidden UTM inputs */}
      {Object.entries(utm).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value ?? ""} readOnly />
      ))}

      {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}

      <button
        type="submit"
        className="w-full rounded-xl bg-brass px-5 py-3 text-center text-charcoal font-semibold shadow-lg shadow-brass/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-brass/90 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get Instant Access"}
      </button>
    </form>
  );
}
