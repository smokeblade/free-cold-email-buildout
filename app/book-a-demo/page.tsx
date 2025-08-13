import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Link from 'next/link'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Pick a time for your discovery call',
  description: 'Choose a time that works for you. Meet an onvally® expert to scope your needs and get matched to pre‑vetted VAs in ~72 hours.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Pick a time for your discovery call',
    description: 'Choose a time to meet an expert and get a tailored plan for hiring a virtual assistant.',
    type: 'website',
    url: 'https://onvally.com/book-a-demo'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pick a time for your discovery call',
    description: 'Choose a time to meet an expert and get a tailored plan.'
  }
}

export default function Page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-8 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 text-gray-700 px-3 py-1 text-xs">
                <span>Step 2 of 2</span>
                <span>•</span>
                <span>Pick a time</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
                Book your discovery call
              </h1>
              <p className="mt-4 text-gray-700 md:text-lg max-w-xl">
                We’ll review your goals, recommend best‑fit roles, and outline a week‑by‑week plan to get results fast. No obligation, no contracts.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-lg">
                {[
                  { t: 'Tailored plan', s: 'Custom scope, coverage and pricing.' },
                  { t: 'Pre‑vetted candidates', s: 'Meet 1–3 in ~48 hours.' },
                  { t: 'SOPs included', s: 'Proven playbooks and QA support.' },
                  { t: 'Month‑to‑month', s: 'Stay for value, not contracts.' },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-sm font-semibold text-gray-900">{x.t}</div>
                    <div className="text-xs text-gray-600 mt-1">{x.s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-gray-600">
                 Need to update details? <Link className="text-blue-700 hover:underline" href="/demo">Go back to the form</Link>.
              </div>
            </div>

            {/* Calendar embed */}
            <div className="rounded-[24px] bg-white border border-gray-200 p-3 md:p-5 shadow-sm">
              <div className="relative">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/ab76bOIEbogwOMqG9lFY"
                  style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  id="GsMht49C9UnEoKiPLMwA_1754847398360"
                />
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
                <div className="text-sm text-gray-600">Avg rating across 200+ reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">48 hours</div>
                <div className="text-sm text-gray-600">Typical matching time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">70%+</div>
                <div className="text-sm text-gray-600">Avg cost savings vs US hire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


