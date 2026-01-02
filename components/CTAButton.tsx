import Link from "next/link";
import { ReactNode } from "react";

const variants = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-ember px-5 py-3 text-white font-semibold shadow-lg shadow-ember/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-steel px-5 py-3 text-steel font-semibold transition hover:-translate-y-0.5 hover:border-ember hover:text-ember",
};

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  target?: string;
  rel?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: CTAButtonProps) {
  const classes = `${variants[variant]} ${className}`.trim();

  return (
    <Link href={href} className={classes} target={target} rel={rel}>
      {children}
    </Link>
  );
}
