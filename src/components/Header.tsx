export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-sm sm:text-base font-semibold">
          Free Cold Email Buildout
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/how-it-works" className="hover:opacity-80">How it works</a>
          <a
            href="/book-a-demo"
            className="rounded-md bg-black text-white hover:bg-black/85 px-3 py-1.5"
          >
            Book a free buildout
          </a>
        </nav>
      </div>
    </header>
  );
}


