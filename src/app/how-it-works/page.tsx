export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold">How it works</h1>
        <p className="text-black/70 dark:text-white/70">
          We set up your cold email infrastructure for free. You cover software and inbox costs. We earn via affiliate commissions from inbox providers you choose.
        </p>
      </section>

      <ol className="space-y-6 list-decimal pl-6">
        <li>
          Book a free buildout call. We scope your goals, volumes, and target domains.
        </li>
        <li>
          You purchase inboxes and tools (your accounts). We’ll share recommended providers and why.
        </li>
        <li>
          We configure sending domains, warmup, DNS, tracking, and templates to best practices.
        </li>
        <li>
          Hand-off: we document settings and show you how to operate safely and scale.
        </li>
      </ol>

      <div className="flex items-center gap-4">
        <Link
          href="/book-a-demo"
          className="rounded-md bg-black text-white hover:bg-black/85 px-5 py-3 text-sm sm:text-base"
        >
          Book a free buildout
        </Link>
        <Link href="/" className="text-sm">Back to home</Link>
      </div>

      <p className="text-xs text-black/50 dark:text-white/50">
        We are not a reseller. You own all accounts directly. Affiliate commissions do not change your price.
      </p>
    </main>
  );
}


