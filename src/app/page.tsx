import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 py-24">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center">Free Cold Email Buildout</h1>
      <p className="text-base sm:text-lg text-center max-w-2xl text-black/70 dark:text-white/70">
        We’ll stand up your cold email infrastructure for free. You cover software and inboxes. We earn via affiliate.
      </p>
      <div className="flex items-center gap-3">
        <Link href="/book-a-demo" className="rounded-md bg-black text-white hover:bg-black/85 px-5 py-3 text-sm sm:text-base">
          Book a free buildout
        </Link>
        <Link href="/how-it-works" className="rounded-md border border-black/10 hover:bg-black/[.03] px-5 py-3 text-sm sm:text-base">
          How it works
        </Link>
      </div>
      <p className="text-xs text-black/50 dark:text-white/50">No SLAs implied; SSR only.</p>
    </main>
  );
}
