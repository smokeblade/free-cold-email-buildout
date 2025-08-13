import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-20" style={{ background: '#0E1523' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Ready to get your cold email stack live?</h2>
        <p className="mt-3 text-base md:text-lg text-white/70">We’ll set it up for free. You own the tools. Safe defaults, clear docs.</p>
        <div className="mt-8">
          <Link href="/book-a-demo" className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm md:text-base font-medium px-6 md:px-7 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Book a free buildout
          </Link>
        </div>
      </div>
    </section>
  );
}


