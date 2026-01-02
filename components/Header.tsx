import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lead-magnet", label: "Free Guide" },
  { href: "/brotherhood", label: "Brotherhood" },
];

export default function Header() {
  return (
    <header className="border-b border-cloud bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          Guardian Grit Fitness
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-steel transition hover:text-ember"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/lead-magnet"
          className="hidden rounded-full bg-ember px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
        >
          Get the Guide
        </Link>
      </div>
    </header>
  );
}
