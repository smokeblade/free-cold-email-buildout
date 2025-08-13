import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="pt-24 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center border border-gray-200/70">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">Free Cold Email Buildout</h1>
            <p className="mt-4 text-gray-700 md:text-lg max-w-2xl mx-auto">
              We set up your cold email infrastructure for free. You cover software and inboxes. We earn via affiliate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link href="/book-a-demo" className="rounded-full bg-gray-900 text-white hover:bg-black/90 px-5 py-3 text-sm font-medium">
                Book a free buildout
              </Link>
              <Link href="/how-it-works" className="rounded-full border border-gray-200 hover:bg-gray-50 px-5 py-3 text-sm font-medium text-gray-800">
                How it works
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">No SLAs implied; SSR only.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
