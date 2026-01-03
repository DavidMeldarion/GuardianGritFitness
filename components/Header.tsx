"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rule-of-life-primer#primer-form", label: "Get The Rule of Life Primer" },
  { href: "/brotherhood", label: "Iron & Incense" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-brass/25 bg-bone/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-base uppercase tracking-widecaps text-charcoal"
          onClick={closeMenu}
        >
          Guardian Grit Fitness
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate transition hover:text-brass"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/rule-of-life-primer#primer-form"
          className="hidden rounded-full bg-brass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          onClick={closeMenu}
        >
          Get The Rule of Life Primer
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal transition hover:bg-brass/15 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="container-page border-t border-brass/20 bg-bone sm:hidden">
          <nav className="flex flex-col gap-2 py-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-slate transition hover:bg-brass/10"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rule-of-life-primer#primer-form"
              className="rounded-md bg-brass px-2 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal shadow-md transition hover:bg-brass/90"
              onClick={closeMenu}
            >
              Get The Rule of Life Primer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
