import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cloud bg-white/90 backdrop-blur">
      <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel/80">© {new Date().getFullYear()} Guardian Grit Fitness.</p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/privacy" className="hover:text-ember">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ember">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
