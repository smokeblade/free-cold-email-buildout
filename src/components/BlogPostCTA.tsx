import React from 'react'
import Link from 'next/link'

const BlogPostCTA: React.FC = () => {
  return (
    <section className="my-12">
      <div className="rounded-[28px] overflow-hidden bg-[#0B1020] text-white p-6 md:p-10 relative grid md:grid-cols-2 gap-6 items-center">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Take back control of your margins, customer data, and online reputation.
          </h3>
          <p className="mt-3 text-white/80 md:text-lg">
            Discover how teams increase output with onvally. ~72‑hour matching, best practices, and a free replacement guarantee.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/demo" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition-colors">
              Get a free demo
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/15 transition-colors">
              See how it works
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
              alt="Happy customer showing results"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.35)' }} />
        </div>
      </div>
    </section>
  )
}

export default BlogPostCTA


