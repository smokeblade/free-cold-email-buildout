import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowUpRight, Check, Shield, Timer, Users } from 'lucide-react';
import OwnerStyleFAQ from '@/components/OwnerStyleFAQ'

type Step = {
  id: string;
  numberLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreHref?: string;
};

const steps: Step[] = [
  {
    id: '01',
    numberLabel: '01.',
    title: 'Discovery form and 20‑min consult',
    description:
      'Share volumes, target domains, tools, and timing. In a short call, we confirm scope and the best‑fit providers for your goals.',
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
    learnMoreHref: '/book-a-demo',
  },
  {
    id: '02',
    numberLabel: '02.',
    title: 'Stack + safety plan',
    description:
      'We recommend inbox providers and sending tools, then define DNS settings, warmup plan, and sending limits for a safe ramp.',
    imageUrl:
      'https://images.unsplash.com/photo-1523246191908-60e2a9f4ec2a?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: '03',
    numberLabel: '03.',
    title: 'Provision + configure',
    description:
      'You purchase inboxes and tools under your accounts. We configure DNS, tracking, warmup, templates, and webhooks/logging.',
    imageUrl:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: '04',
    numberLabel: '04.',
    title: 'Launch + handoff',
    description:
      'Send safely with a clear ramp schedule and monitoring. We deliver a handoff doc covering settings, limits, and daily checks.',
    imageUrl:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F3EEE6] p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
                  How hiring with onvally works
                </h1>
                <p className="mt-4 text-gray-700 text-base md:text-lg">
                  A fast, managed process to hire the top 1% of virtual assistants. Clear scope, best practices, and ~72‑hour matching—backed by a replacement guarantee.
                </p>
                <div className="mt-6">
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-black/90 transition-colors"
                  >
                    Book a free consult
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div>
                <div className="relative rounded-3xl overflow-hidden bg-black/5 aspect-[4/3] md:aspect-[16/10]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  {/* Placeholder visual */}
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop"
                    alt="Demo visual"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <button className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white">
                    Play the video
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-10 md:space-y-14">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
            >
              {/* Text first (alternate on even rows) */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="text-gray-400 text-lg font-semibold">{step.numberLabel}</div>
                <h3 className="mt-1 text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-700 text-base md:text-lg">{step.description}</p>
                <div className="mt-5">
                  <a
                    href={step.learnMoreHref}
                    className="inline-flex items-center gap-2 text-gray-900 font-medium hover:opacity-80"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative rounded-[28px] overflow-hidden bg-black/5 aspect-[4/3] md:aspect-[16/10]">
                  <img
                    src={step.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 1% sourcing explanation */}
      <section className="py-10 md:py-14" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[32px] bg-white p-6 md:p-10 border border-gray-200/70">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">How we source the top 1% of talent</h2>
                <p className="mt-3 text-gray-700 md:text-lg">We maintain an always‑on funnel of thousands of applicants. Only the best make it through a multi‑stage evaluation focused on real‑world output and comms.</p>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-3"><Users className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">Proactive sourcing, referrals from elite VAs, and role‑specific communities</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">Skills tests (role‑specific), English + writing assessment, tools proficiency checks</span></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">Reference checks, background red‑flag screening, and trial tasks when needed</span></li>
                  <li className="flex items-start gap-3"><Timer className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">Shortlisting from an always‑ready bench of pre‑vetted specialists in ~72 hours</span></li>
                </ul>
              </div>
              <div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { h: 'Acceptance rate', s: '~1–3% of applicants' },
                    { h: 'English level', s: 'C1/C2 or equivalent' },
                    { h: 'Tooling', s: 'HubSpot, Zendesk, Notion, G Suite, etc.' },
                    { h: 'Coverage', s: 'US overlap as needed' },
                  ].map((x, i) => (
                    <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="text-sm font-semibold text-gray-900">{x.h}</div>
                      <div className="text-sm text-gray-600 mt-1">{x.s}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50/40 p-5">
                  <div className="text-sm font-semibold text-blue-700">Quality shield</div>
                  <div className="text-sm text-blue-900 mt-1">Dedicated QA support across US and European hours reviews output weekly, provides coaching, and we guarantee a free replacement if it’s not a fit.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week-by-week plan */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">What the first month looks like</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { w: 'Week 1', d: 'Kickoff, SOPs loaded, access set, daily stand‑ups' },
              { w: 'Week 2', d: 'Throughput stabilizes, metrics baseline, report cadence' },
              { w: 'Week 3', d: 'Process improvements, automations, expand scope' },
              { w: 'Week 4', d: 'Consistent output, scale capacity or add second role' },
            ].map((x, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-5 bg-white">
                <div className="text-sm font-semibold text-gray-900">{x.w}</div>
                <div className="text-sm text-gray-700 mt-1">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get a free demo
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <OwnerStyleFAQ
        items={[
          { question: 'How do I get started?', answer: (
            <div>
              <p>Book a 30‑minute consult. While booking, you’ll provide goals, tools, and coverage needs.</p>
              <p className="mt-2">We translate that into a written scope and success plan, then begin matching immediately.</p>
            </div>
          ) },
          { question: 'How long does matching take?', answer: (
            <div>
              <p>Typically ~72 hours to present 1–3 pre‑vetted candidates. Timing can vary with demand and role specificity.</p>
              <p className="mt-2">Candidates pass skills tests, English/writing, tooling checks, and reference screening.</p>
            </div>
          ) },
          { question: 'Do you provide SOPs?', answer: (
            <div>
              <p>We don’t deliver full SOP packages. Instead, we provide role‑specific best practices and templates shaped to your workflows.</p>
              <p className="mt-2">This accelerates ramp while keeping your processes simple and familiar.</p>
            </div>
          ) },
          { question: 'Which time zones do you cover?', answer: (
            <div>
              <p>Support and QA coverage spans US and European hours. We recommend 4–6 hours of overlap with your core team.</p>
            </div>
          ) },
          { question: 'Who employs the VA? What about compliance?', answer: (
            <div>
              <p>VAs are employed by onvally. We manage compliance, payroll, and benefits; you get consistent output without admin burden.</p>
            </div>
          ) },
          { question: 'What if it’s not a fit?', answer: (
            <div>
              <p>Our free replacement guarantee applies. Share feedback and we’ll present alternatives quickly.</p>
            </div>
          ) },
          { question: 'How does pricing work?', answer: (
            <div>
              <p>Simple monthly pricing, no long‑term contracts. See the <a className="text-blue-700 hover:underline" href="/pricing">pricing page</a> for details.</p>
            </div>
          ) },
          { question: 'What’s the expected ramp?', answer: (
            <div>
              <p>Most teams see meaningful output in the first two weeks, with consistency by weeks 3–4 following the success plan.</p>
            </div>
          ) },
        ]}
      />

      <Footer />
    </div>
  );
};

export default HowItWorks;


