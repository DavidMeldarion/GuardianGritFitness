import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rule-of-life-primer", label: "Get The Rule of Life Primer" },
  { href: "/brotherhood", label: "Iron & Incense" },
];

export default function Header() {
  return (
    <header className="border-b border-brass/25 bg-bone/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-base uppercase tracking-widecaps text-charcoal"
        >
          Guardian Grit Fitness
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate transition hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/rule-of-life-primer"
          className="hidden rounded-full bg-brass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
        >
          Get The Rule of Life Primer
        </Link>
      </div>
    </header>
  );
}
