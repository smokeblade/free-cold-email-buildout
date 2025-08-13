import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply to join onvally® as a Virtual Assistant. Complete the short application to be considered for current and future roles.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Apply',
    description: 'Apply to join onvally® as a Virtual Assistant.',
    type: 'website',
    url: 'https://onvally.com/apply'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply',
    description: 'Apply to join onvally® as a Virtual Assistant.'
  }
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#F5F6F7' }}>
      <section className="pt-28 md:pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[48px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-6 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Apply to join onvally</h1>
              <p className="mt-4 text-gray-600 md:text-lg">Remote‑first roles with great clients. We match your strengths to roles across support, operations, sales, marketing and more.</p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[{t:'Remote‑first'}, {t:'Coaching & growth'}, {t:'USD payouts'}, {t:'Top clients'}].map(({t},i) => (
                  <div key={i} className="rounded-2xl bg-white/80 backdrop-blur border border-white p-3 text-sm text-gray-800">{t}</div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 p-2 md:p-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/survey/XXZs0SAG1D7xHv6wVBV0"
                      style={{ border: 'none', width: '100%', minHeight: 900 }}
                      scrolling="no"
                      id="XXZs0SAG1D7xHv6wVBV0"
                      title="survey"
                    />
                    <script src="https://link.msgsndr.com/js/form_embed.js" />
                  </div>
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">What to expect</h3>
                  <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
                    <li>Apply with your background and role interests</li>
                    <li>Skills review and short intro interview</li>
                    <li>Matching with client roles (~72h typical)</li>
                    <li>Onboarding and first month playbooks</li>
                  </ol>
                  <div className="mt-5">
                    <div className="text-xs font-semibold text-gray-900 mb-2">Popular roles</div>
                    <div className="flex flex-wrap gap-2">
                      {['Executive Assistant','Customer Support','Sales SDR','Marketing Assistant','Data Entry','Bookkeeper'].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border border-gray-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 text-xs text-gray-500">Free to apply. We’ll keep your profile in our talent network for future roles.</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


