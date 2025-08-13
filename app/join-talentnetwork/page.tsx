import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Join the onvally® talent network',
  description: 'Apply once to be considered for upcoming client roles. Remote‑first, outcome‑driven, with coaching and growth built‑in.',
  openGraph: {
    title: 'Join the onvally® talent network',
    description: 'Apply once to be considered for upcoming client roles. Remote‑first, outcome‑driven.',
    type: 'website',
    url: 'https://onvally.com/join-talentnetwork'
  },
}

export default function Page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section className="pt-28 md:pt-32 pb-10 bg-[#F5F6F7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Join our talent network</h1>
              <p className="mt-4 text-gray-700 md:text-lg">One application. Considered for multiple roles with growing clients. Remote‑first. Coaching, SOPs, and growth built‑in.</p>
              <ul className="mt-6 space-y-2 text-gray-700 text-sm">
                <li>• Remote roles across admin, support, sales, marketing, content, and more</li>
                <li>• Paid in USD, on time</li>
                <li>• 48‑hour client matching when selected</li>
              </ul>
            </div>
            <div className="rounded-[24px] bg-white border border-gray-200 p-4 md:p-6 shadow-sm">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/bZvpcMSwYLpFwKEHKop1"
                style={{ border: 'none', width: '100%' }}
                scrolling="no"
                id="bZvpcMSwYLpFwKEHKop1"
                title="survey"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


