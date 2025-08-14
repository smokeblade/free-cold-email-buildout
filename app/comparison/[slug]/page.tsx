import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 300

const vendorNameBySlug: Record<string, string> = {
  upwork: 'Upwork',
  fiverr: 'Fiverr',
  'us-talent': 'US Talent',
}

export default function Page({ params }: { params: { slug: string } }) {
  const vendor = vendorNameBySlug[params.slug] ?? params.slug
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">onvally vs {vendor}</h1>
            <p className="mt-3 text-gray-700">A detailed comparison to help you choose the best option for your team.</p>
          </div>
        </div>
      </section>
      <section className="py-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Why teams pick onvally over {vendor}</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-5">
                <div className="text-sm text-gray-500">Typical {vendor} experience</div>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Self-sourcing, screening, and interviewing candidates</li>
                  <li>Quality variability; rework risk and management overhead</li>
                  <li>Weeks to ramp; churn risk on longer projects</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 p-5 bg-blue-50/40">
                <div className="text-sm text-blue-600">onvally experience</div>
                <ul className="mt-3 space-y-2 text-gray-800 list-disc list-inside">
                  <li>Pre-vetted talent matched in ~72 hours</li>
                  <li>Replacement guarantee, best practices, and QA support across US + EU hours</li>
                  <li>Predictable monthly pricing; measurable outcomes</li>
                </ul>
              </div>
            </div>
            {/* Long-form detail */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Sourcing & vetting</h3>
                <p className="mt-2 text-sm text-gray-700">Marketplaces like {vendor} require you to write job posts, review dozens of profiles, and run interviews. onvally runs an always‑on funnel, skills tests, English assessments, and reference checks so you only meet finalists.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Time‑to‑value</h3>
                <p className="mt-2 text-sm text-gray-700">Typical marketplace ramp is 2–4 weeks. Our ~72‑hour matching gets you to first output faster, with best‑practice playbooks and QA support.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Risk & compliance</h3>
                <p className="mt-2 text-sm text-gray-700">VAs work for onvally, so you don’t handle employment risk or cross‑border compliance. If it’s not a fit, we replace quickly at no extra cost.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5 md:col-span-3">
                <h3 className="font-semibold text-gray-900">When {vendor} can be a fit</h3>
                <p className="mt-2 text-sm text-gray-700">If you need one‑off tasks or very short engagements, {vendor} can be fine. If you need sustained output with accountability, a managed VA through onvally is usually the better choice.</p>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              Learn more: <Link className="text-blue-700 hover:underline" href="/how-it-works">how it works</Link> or <Link className="text-blue-700 hover:underline" href="/pricing">pricing</Link>.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vendor = vendorNameBySlug[params.slug] ?? params.slug
  const title = `onvally vs ${vendor} | Comparison`
  const description = `See how onvally compares to ${vendor}: sourcing & vetting, time‑to‑value, risk & compliance, pricing simplicity, and when each option fits.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'article', url: `https://onvally.com/comparison/${params.slug}` },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function generateStaticParams() {
  return [
    { slug: 'upwork' },
    { slug: 'fiverr' },
    { slug: 'us-talent' },
  ]
}


