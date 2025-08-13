import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm sm:text-base font-semibold text-gray-900">
          Free Cold Email Buildout
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/how-it-works" className="px-3 py-1.5 rounded-full hover:bg-gray-100 text-gray-700">How it works</Link>
          <Link
            href="/book-a-demo"
            className="rounded-full bg-gray-900 text-white hover:bg-black/90 px-4 py-2"
          >
            Book a free buildout
          </Link>
        </nav>
      </div>
    </header>
  );
}


