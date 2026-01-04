"use client";

import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

const variants = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-brass px-5 py-3 text-charcoal font-semibold shadow-lg shadow-brass/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-brass/90",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-brass px-5 py-3 text-slate font-semibold transition hover:-translate-y-0.5 hover:border-brass/80 hover:text-charcoal hover:bg-brass/10",
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

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    if (!href.includes("#")) return;

    const [path, hash] = href.split("#");
    if (!hash) return;

    const currentPath = window.location.pathname;
    const samePath = !path || path === currentPath;

    if (samePath) {
      event.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${hash}`);
      }
    }
  };

  return (
    <Link href={href} className={classes} target={target} rel={rel} onClick={handleClick}>
      {children}
    </Link>
  );
}
