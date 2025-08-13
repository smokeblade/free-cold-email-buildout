import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Schedule a discovery call',
  description: 'Pick a time that works for you. This page is used for personal invites from our team.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Schedule a discovery call',
    description: 'Pick a time that works for you. This page is used for personal invites from our team.',
    type: 'website',
    url: 'https://onvally.com/schedule-discovery-teamlead'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a discovery call',
    description: 'Pick a time that works for you.'
  }
}

export default function Page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      <section className="pt-28 md:pt-32 pb-10 bg-[#F5F6F7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 rounded-[24px] bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                TL
              </div>
              <div>
                <div className="text-sm text-gray-500">onvally team</div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Schedule a discovery call</h1>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Hi there — great to meet you. Please choose a time that works best for you. We’ll walk through your goals and share a tailored plan for getting results quickly with a virtual assistant.
            </p>
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
            <div className="mt-4 text-xs text-gray-500">
              This invite link is unique to your conversation. If you need anything before the call, simply reply to this email.
            </div>
            </div>
            {/* Social proof / reviews */}
            <aside className="space-y-4">
              {[ 
                { q: '“Matching was spot on. We were productive in week one.”', a: 'Agency owner' },
                { q: '“Consistent output and clear reporting. Exactly what we needed.”', a: 'Ecom director' },
                { q: '“Professional onboarding and fast turnaround.”', a: 'Operations lead' },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-white border border-gray-200 p-5">
                  <div className="text-sm text-gray-900">{t.q}</div>
                  <div className="mt-2 text-xs text-gray-500">— {t.a}</div>
                </div>
              ))}
              <div className="rounded-2xl bg-white border border-gray-200 p-5">
                <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
                <div className="text-sm text-gray-600">Avg rating across 200+ reviews</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


