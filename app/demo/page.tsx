import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Book a free discovery call',
  description: 'See onvally® in action. Meet an expert, get a tailored plan, and match with pre‑vetted virtual assistants in ~72 hours.',
  openGraph: {
    title: 'Book a free discovery call',
    description: 'Meet an expert, get a tailored plan, and match with pre‑vetted virtual assistants in ~72 hours.',
    type: 'website',
    url: 'https://onvally.com/demo'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a free discovery call',
    description: 'See onvally® in action and get matched with pre‑vetted VAs in ~72 hours.'
  }
}

export default function Page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-6 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 text-gray-700 px-3 py-1 text-xs">
                <span>Virtual Assistant Hiring Made Easy</span>
                <span>→</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
                Book your free discovery call
              </h1>
              <p className="mt-4 text-gray-700 md:text-lg max-w-xl">
                Meet with an expert to scope your needs and see how we match you to pre‑vetted VAs in ~72 hours. No contracts. Month‑to‑month.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Starting at <span className="font-medium text-gray-800">$1,395/month</span> and includes a free replacement guarantee.
              </div>

              {/* Social proof chips */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-lg">
                {[
                  { t: 'Best practices + playbooks', s: 'Get predictable output from day one.' },
                  { t: '~72‑hour matching', s: 'Meet 1–3 vetted candidates fast (timing may vary).' },
                  { t: 'QA coverage across US + EU hours', s: 'We monitor quality and unblock issues.' },
                  { t: 'Month‑to‑month', s: 'Stay for value, not contracts.' },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-sm font-semibold text-gray-900">{x.t}</div>
                    <div className="text-xs text-gray-600 mt-1">{x.s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form card */}
            <div className="rounded-[24px] bg-white border border-gray-200 p-4 md:p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-2">Schedule your call</div>
              <div className="relative">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/survey/U6aZrvVN0V2BFR0yLeAB" 
                  style={{ border: 'none', width: '100%' }} 
                  scrolling="no" 
                  id="U6aZrvVN0V2BFR0yLeAB" 
                  title="survey"
                />
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              </div>
               <div className="mt-4 text-[11px] text-gray-500">
                By providing us with your information you agree to our{' '}
                <a className="underline hover:text-gray-700" href="/terms">Terms</a> and{' '}
                <a className="underline hover:text-gray-700" href="/privacy">Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we'll cover */}
      <section className="py-10 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">On your 20‑minute discovery call, we’ll cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { h: 'Your goals and constraints', s: 'Understand outcomes, timeline, and tools.' },
              { h: 'Best‑fit roles', s: 'Which roles create the most leverage first.' },
              { h: 'Sample weekly plan', s: 'What your VA delivers in week 1–4.' },
              { h: 'Matching & onboarding', s: 'How we match in ~48 hours and get to first output.' },
              { h: 'Pricing & capacity', s: 'Clear pricing, coverage windows, and ramp time.' },
              { h: 'Q&A', s: 'We’ll answer any questions and share playbooks.' },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-900">{c.h}</div>
                <div className="text-sm text-gray-600 mt-1">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


