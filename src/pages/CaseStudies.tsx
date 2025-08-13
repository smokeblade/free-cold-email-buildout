import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type CS = { company: string; url: string; logo?: string; industry: string; roleHired: string[]; outcomes: string[]; quote: string; quoteBy: string; cover?: string }

const cases: CS[] = [
  { company: 'Prospyre', url: 'https://prospyre.com', industry: 'Agency (Outbound + Ops)', roleHired: ['SDR (Outbound)', 'Executive Assistant'], outcomes: ['+38% booked meetings in 60 days', 'Founder reclaimed 12 hrs/wk', 'CRM hygiene and reporting automated'], quote: 'We scaled outbound without breaking ops. The SDR brought consistency; the EA kept the pipeline clean.', quoteBy: 'Founder, Prospyre', cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop' },
  { company: 'LevelInbox', url: 'https://levelinbox.com', industry: 'SaaS (Support + Success)', roleHired: ['Customer Support', 'Onboarding Specialist'], outcomes: ['FRT 10h → 1.8h', 'CSAT at 4.9/5', 'NPS follow-ups and webinars handled'], quote: 'We finally separated reactive work from expansion. Support stabilized and CSMs focused on revenue.', quoteBy: 'Head of CS, LevelInbox', cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop' },
  { company: 'Palmstone Capital', url: 'https://palmstone-capital.com', industry: 'Finance (Ops + Admin)', roleHired: ['Executive Assistant', 'Data/Research'], outcomes: ['Investor updates standardized', 'Dataroom + calendaring managed', 'Travel + expenses offloaded'], quote: 'Tight processes, predictable output, and we didn’t need to hire locally.', quoteBy: 'Partner, Palmstone Capital', cover: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop' },
  { company: 'GrowthLayne', url: 'https://growthlayne.com', industry: 'Ecommerce (Marketing + Support)', roleHired: ['Marketing Assistant', 'Customer Support'], outcomes: ['Listing prep and content ops owned', '+27% new listings in 8 weeks', 'Weekend support coverage added'], quote: 'We grew SKUs and kept CX solid. onvally felt like an extension of the team.', quoteBy: 'Owner, GrowthLayne', cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop' },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Customer stories</h1>
            <p className="mt-3 md:text-lg text-gray-700 max-w-3xl mx-auto">Real outcomes from teams that hired with onvally — roles placed, time-to-value, and measurable impact.</p>
          </div>
        </div>
      </section>
      <section className="py-12" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {cases.map(cs => (
            <article key={cs.company} className="rounded-3xl bg-white border border-gray-200 overflow-hidden">
              {cs.cover && <img src={cs.cover} alt={cs.company} className="w-full h-56 object-cover" />}
              <div className="p-6">
                <div className="text-sm font-semibold text-blue-700">{cs.industry}</div>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">{cs.company}</h2>
                <div className="mt-3 text-sm text-gray-700">
                  <div className="font-medium text-gray-900">Roles hired</div>
                  <ul className="list-disc list-inside">{cs.roleHired.map(r => (<li key={r}>{r}</li>))}</ul>
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  <div className="font-medium text-gray-900">Outcomes</div>
                  <ul className="list-disc list-inside">{cs.outcomes.map(o => (<li key={o}>{o}</li>))}</ul>
                </div>
                <blockquote className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 italic">“{cs.quote}”<footer className="not-italic text-sm text-gray-600 mt-2">— {cs.quoteBy}</footer></blockquote>
                <a href={cs.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline mt-4">Visit website <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}



