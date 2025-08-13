import type { Metadata } from 'next'

const cases = [
  { slug: 'prospyre', company: 'Prospyre', industry: 'Agency (Outbound + Ops)', cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop', roles: ['SDR (Outbound)', 'Executive Assistant'], outcomes: ['+38% booked meetings in 60 days', 'Founder reclaimed 12 hrs/wk', 'CRM hygiene and reporting automated'], quote: 'We scaled outbound without breaking ops. The SDR brought consistency; the EA kept the pipeline clean.', by: 'Founder, Prospyre' },
  { slug: 'levelinbox', company: 'LevelInbox', industry: 'SaaS (Support + Success)', cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop', roles: ['Customer Support', 'Onboarding Specialist'], outcomes: ['FRT 10h → 1.8h', 'CSAT at 4.9/5', 'NPS follow-ups and webinars handled'], quote: 'We finally separated reactive work from expansion. Support stabilized and CSMs focused on revenue.', by: 'Head of CS, LevelInbox' },
  { slug: 'palmstone-capital', company: 'Palmstone Capital', industry: 'Finance (Ops + Admin)', cover: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop', roles: ['Executive Assistant', 'Data/Research'], outcomes: ['Investor updates standardized', 'Dataroom + calendaring managed', 'Travel + expenses offloaded'], quote: 'Tight processes, predictable output, and we didn’t need to hire locally.', by: 'Partner, Palmstone Capital' },
  { slug: 'growthlayne', company: 'GrowthLayne', industry: 'Ecommerce (Marketing + Support)', cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop', roles: ['Marketing Assistant', 'Customer Support'], outcomes: ['+27% new listings in 8 weeks', 'Weekend support coverage added', 'Listing prep and content ops owned'], quote: 'We grew SKUs and kept CX solid. onvally felt like an extension of the team.', by: 'Owner, GrowthLayne' },
]

export const revalidate = 600

export function generateStaticParams() {
  return cases.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = cases.find(c => c.slug === params.slug)
  const title = cs ? `${cs.company} Case Study` : 'Case Study'
  const description = cs ? `${cs.company} — ${cs.industry}. ${cs.outcomes[0]}` : 'Customer story from onvally'
  return {
    title,
    description,
    openGraph: { title, description, type: 'article', url: `https://onvally.com/case-studies/${params.slug}` },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const cs = cases.find(c => c.slug === params.slug)
  if (!cs) return <div className="max-w-3xl mx-auto px-6 py-24">Not found</div>
  return (
    <div className="min-h-screen font-inter">
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/60">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">{cs.company}</h1>
            <p className="text-gray-700 mt-2">{cs.industry}</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2">
            <img src={cs.cover} alt={cs.company} className="w-full h-64 md:h-80 object-cover rounded-2xl border border-gray-200" />
          </article>
          <aside>
            <div className="rounded-2xl border border-gray-200 p-5 bg-white">
              <div className="text-sm font-medium text-gray-900">Roles hired</div>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">{cs.roles.map(r => (<li key={r}>{r}</li>))}</ul>
              <div className="mt-5 text-sm font-medium text-gray-900">Outcomes</div>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">{cs.outcomes.map(o => (<li key={o}>{o}</li>))}</ul>
              <blockquote className="mt-5 p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 italic">“{cs.quote}”<footer className="not-italic text-sm text-gray-600 mt-2">— {cs.by}</footer></blockquote>
              <a href="/demo" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get a free demo</a>
              <a href="/how-it-works" className="mt-2 w-full inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">See how it works</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}



