export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main>
      <section className="pt-20 md:pt-28 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/70">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">How it works</h1>
            <p className="mt-3 text-gray-700 md:text-lg max-w-3xl">
              We set up your cold email infrastructure for free. You cover software and inbox costs. We earn via affiliate commissions from inbox providers you choose.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-3xl mx-auto px-6">
          
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

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-gray-900 text-white hover:bg-black/90 px-5 py-3 text-sm"
            >
              Book a free buildout
            </Link>
            <Link href="/" className="text-sm text-gray-700">Back to home</Link>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            We are not a reseller. You own all accounts directly. Affiliate commissions do not change your price.
          </p>
        </div>
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


