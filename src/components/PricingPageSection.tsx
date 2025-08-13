"use client";

import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import OwnerStyleFAQ from '@/components/OwnerStyleFAQ';

const PricingPageSection = () => {
  // Essential plans (core roles) — 20h or 40h/week
  const essentialPlans = [
    {
      name: 'Part‑time',
      price: 797,
      hours: '20h/week',
      tagline: 'Offload recurring ops and support tasks',
      popular: false,
      features: [
        'Pre‑vetted Virtual Assistant',
        'Administrative tasks, inbox & calendar',
        'Light customer support coverage',
        'Social scheduling & publishing',
        'Weekly reporting cadence',
        'Flexible monthly plan',
        'Phone + Email Support'
      ],
      bestFor: ['Founders under water', 'Teams with repeatable tasks', 'Consistent weekly coverage'],
      examples: ['Customer Support', 'Data Entry & Research', 'Executive Assistant / Admin', 'Operations Assistant'],
      exclusions: [],
      ctaText: 'Hire Your VA'
    },
    {
      name: 'Full‑time',
      price: 1497,
      hours: '40h/week',
      tagline: 'Delegate entire workflows to a dedicated VA',
      popular: true,
      features: [
        'Everything in Part‑time',
        'Dedicated resource (40h/week)',
        'Priority VA Replacement (24hrs)',
        'Dedicated Account Manager'
      ],
      bestFor: ['Owners replacing local admin', 'High‑volume support or ops', 'Multi‑stakeholder coordination'],
      examples: ['Customer Support', 'Data Entry & Research', 'Executive Assistant / Admin', 'Operations Assistant'],
      exclusions: [],
      ctaText: 'Hire Your VA'
    }
  ];

  const comparisonFeatures = [
    { name: 'Pre-vetted Virtual Assistant', starter: true, professional: true, enterprise: true },
    { name: 'Administrative Tasks', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced' },
    { name: 'Email & Calendar Management', starter: true, professional: true, enterprise: true },
    { name: 'Data Entry & Research', starter: true, professional: true, enterprise: true },
    { name: 'Weekly Reporting', starter: true, professional: true, enterprise: 'Daily' },
    { name: 'Support', starter: 'Email', professional: 'Phone + Email', enterprise: '24/7 Priority' },
    { name: 'Skill Matching', starter: false, professional: 'Specialized', enterprise: 'Custom' },
    { name: 'Social Media Management', starter: false, professional: true, enterprise: true },
    { name: 'Graphic Design', starter: false, professional: 'Basic', enterprise: 'Advanced' },
    { name: 'VA Replacement Time', starter: '3-5 days', professional: '24 hours', enterprise: 'Same-day' },
    { name: 'Multiple VAs', starter: false, professional: false, enterprise: 'Up to 3' },
    { name: 'Account Manager', starter: false, professional: true, enterprise: 'Dedicated' }
  ];

  const upsells = [
    { name: 'Extra VA Hours', price: 25, note: 'Additional hours beyond your plan', unit: '/hour' },
    { name: 'Urgent Task Priority', price: 150, note: 'Rush delivery for critical business tasks', unit: '/month' },
    { name: 'Video Calls & Meetings', price: 200, note: 'Face-to-face coordination sessions with your VA', unit: '/month' }
  ];

  // Strategic track (explicit section for senior roles)
  const strategicPackages = [
    {
      name: 'Strategic (20h/week)',
      price: 1997,
      tagline: 'Senior operator (COS/PM/Marketing Ops)',
      popular: true,
      features: [
        'Top 1% talent (10+ years experience)',
        'Roadmaps, OKRs & reporting cadence',
        'Cross‑functional coordination',
        'Automation & tooling ownership',
        'Hiring support & playbooks',
        'QA coverage across US + EU hours',
        'Monthly executive review',
        'Free replacement guarantee'
      ],
      examples: ['Chief of Staff', 'Senior Project Manager', 'Sales / RevOps', 'Marketing Ops'],
      exclusions: [],
      ctaText: 'Hire Strategic VA'
    },
    {
      name: 'Strategic (40h/week)',
      price: 2997,
      tagline: 'Senior operator to own outcomes',
      popular: false,
      features: [
        'All Part‑time strategic benefits',
        'Owns initiatives end‑to‑end',
        'Leads vendor/partner comms',
        'Weekly steering & risks/blocks',
        'Advanced analytics & dashboards',
        'Change management & enablement',
        'Executive‑level updates',
        'Free replacement guarantee'
      ],
      examples: ['Chief of Staff', 'Senior Project Manager', 'Sales / RevOps', 'Marketing Ops'],
      exclusions: [],
      ctaText: 'Hire Strategic VA'
    }
  ]

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-4 h-4 text-blue-500 mx-auto" />
      ) : (
        <X className="w-4 h-4 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-700 font-medium">{value}</span>;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Simple pricing for growing teams</h1>
            <p className="mt-3 md:text-lg text-gray-700 max-w-3xl mx-auto">From ${Math.min(...[...essentialPlans.map(p => p.price), ...strategicPackages.map(p => p.price)]).toLocaleString()}/mo. Everything you need to scale reliable output. Specialized matching, best practices, QA coverage, and our free replacement guarantee.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get a free demo
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/how-it-works" className="group relative text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg border border-gray-200 hover:bg-white">
                <span className="absolute inset-0 bg-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">See how it works</span>
              </a>
            </div>
            {/* No global hours toggle — plans below show exact hours & prices */}
          </div>
        </div>
      </section>

      {/* Essential VAs */}
      <section className="py-12" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-6 md:p-10 border border-gray-200/60">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">Essential virtual assistants</h2>
              <p className="text-gray-600">Core roles for admin, support, ops and marketing — choose 20h or 40h per week</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {essentialPlans.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl bg-white border p-8 md:p-10 h-full flex flex-col transition-all duration-300 ${
                    pkg.popular
                      ? 'border-blue-300 ring-1 ring-blue-200 shadow-sm hover:border-blue-400'
                      : 'border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50/50'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Most popular</span>
                  )}
                  <div className="flex-1">
                    <div className="text-base font-semibold text-blue-600">{pkg.name} • {pkg.hours}</div>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm ml-1 align-top">/month</span>
                      <div className="text-xs text-gray-500">Fixed • {pkg.hours}</div>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm">{pkg.tagline}</p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {pkg.features.slice(0, 8).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                         <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {Array.isArray((pkg as any).bestFor) && (
                    <div className="mt-5">
                      <div className="text-xs font-semibold text-gray-900 mb-2">Best for</div>
                      <div className="flex flex-wrap gap-2">
                        {(pkg as any).bestFor.map((tag: string) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border border-gray-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {Array.isArray((pkg as any).examples) && (
                    <div className="mt-4">
                      <div className="text-xs font-semibold text-gray-900 mb-2">Examples</div>
                      <div className="flex flex-wrap gap-2">
                        {(pkg as any).examples.map((tag: string) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-white text-gray-800 border border-gray-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto pt-2 border-t border-gray-100">
                    <a href="/demo" className={`w-full h-12 group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-0 text-[15px] leading-none whitespace-nowrap font-medium ${
                      pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black/90'
                    }`}>
                      {pkg.ctaText}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic VAs */}
      <section className="py-6" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-6 md:p-10 border border-gray-200/60">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">Strategic virtual assistants</h2>
              <p className="text-gray-600">Senior operators for outcomes — recommended from 20h/week</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {strategicPackages.map((pkg, index) => (
                <div key={index} className={`relative rounded-3xl bg-white border p-8 md:p-10 h-full flex flex-col transition-all duration-300 ${pkg.popular ? 'border-blue-300 ring-1 ring-blue-200 shadow-sm hover:border-blue-400' : 'border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50/50'}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Recommended</span>
                  )}
                  <div className="flex-1">
                    <div className="text-base font-semibold text-blue-600">{pkg.name}</div>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm ml-1 align-top">/month</span>
                      <div className="text-xs text-gray-500">Fixed • {pkg.name.includes('20') ? '20h/week' : '40h/week'}</div>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm">{pkg.tagline}</p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {Array.isArray((pkg as any).examples) && (
                    <div className="mt-5">
                      <div className="text-xs font-semibold text-gray-900 mb-2">Examples</div>
                      <div className="flex flex-wrap gap-2">
                        {(pkg as any).examples.map((tag: string) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-white text-gray-800 border border-gray-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto pt-2 border-t border-gray-100">
                    <a href="/demo" className="w-full h-12 group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-0 text-[15px] leading-none whitespace-nowrap font-medium bg-blue-600 text-white hover:bg-blue-700">
                      {pkg.ctaText}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Hiring */}
      <section className="py-6" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Enterprise hiring</h3>
                <p className="text-gray-600 mt-1">Hire 3–50+ team members at once with custom onboarding, dedicated account management, and volume pricing.</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {['Mix of Essential & Strategic roles','Custom onboarding flows & SOPs','Dedicated Account Manager','Volume‑based discounts','Case study spotlight (opt‑in)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-blue-600"/></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right">
                <div className="text-3xl font-bold text-gray-900">Custom</div>
                <div className="text-gray-500">Volume hiring & time‑based discounts</div>
                <a href="/demo" className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-medium bg-gray-900 text-white hover:bg-black/90">Talk to sales<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(245,246,247,0.6) 30%, rgba(245,246,247,0.35) 60%, rgba(255,255,255,1) 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Compare all features
            </h2>
            <p className="text-gray-600">
              See everything that's included in each package
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                     <th className="text-center py-4 px-4 font-semibold text-gray-900">
                       <div>
                          <div>Essential</div>
                          <div className="text-sm font-normal text-gray-500 mt-1">From $497/mo</div>
                       </div>
                     </th>
                     <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-blue-50">
                       <div>
                          <div>Strategic</div>
                          <div className="text-sm font-normal text-gray-500 mt-1">From $1,997/mo</div>
                         <div className="inline-flex items-center bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium mt-1">
                           Recommended
                         </div>
                       </div>
                     </th>
                     <th className="text-center py-4 px-4 font-semibold text-gray-900">
                       <div>
                          <div>Enterprise</div>
                          <div className="text-sm font-normal text-gray-500 mt-1">Custom</div>
                       </div>
                     </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-6 text-sm text-gray-800">
                        {feature.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(feature.starter)}
                      </td>
                      <td className="py-3 px-4 text-center bg-blue-25">
                        {renderCell(feature.professional)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(feature.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 text-xs text-gray-500 -mt-6 mb-12">Prices shown are estimates based on selected weekly hours. Final quote provided after discovery call.</div>

      {/* Pricing FAQs */}
      <OwnerStyleFAQ
        title="Pricing FAQs"
        items={[
          { question: 'What’s included in pricing?', answer: (
            <div>
              <p>A dedicated VA, role‑specific best‑practice guidance, QA coverage across US + EU hours, and our free replacement guarantee.</p>
              <p className="mt-2">No placement fees. Tooling and process templates are included to help you ramp faster.</p>
            </div>
          ) },
          { question: 'Are there long‑term contracts?', answer: (
            <div>
              <p>No. We keep it month‑to‑month so you stay for value, not lock‑ins.</p>
              <p className="mt-2">Scale up or down with 14‑day notice so capacity matches your needs.</p>
            </div>
          ) },
          { question: 'How soon can we start?', answer: (
            <div>
              <p>We usually present 1–3 vetted candidates in ~72 hours (may vary). You interview, select, and can start immediately after.</p>
              <p className="mt-2">Week‑by‑week success plans ensure early wins and consistent output.</p>
            </div>
          ) },
        ]}
      />

      {/* Social Proof Section */}
      <section className="py-12 bg-gray-50" style={{ background: 'linear-gradient(180deg, rgba(245,246,247,1) 0%, rgba(255,255,255,1) 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-6">
              Trusted by growing businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              {['EcommercePro', 'DigitalFlow', 'StartupGlobal', 'AgencyPlus', 'BusinessHub', 'ScaleNow'].map((company, index) => (
                <div 
                  key={index}
                  className="px-3 py-1.5 bg-white rounded border border-gray-200"
                >
                  <span className="text-sm text-gray-600">{company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                SC
              </div>
              <div>
                <blockquote className="text-lg text-gray-900 mb-4">
                  "My VA handles <strong>customer support, social media, and admin tasks</strong> flawlessly. The matching process was perfect - she understood our business from day one."
                </blockquote>
                <div>
                  <div className="font-medium text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">CEO at EcommercePro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Add-on services
            </h2>
            <p className="text-gray-600">
              Enhance your VA experience with these premium services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upsells.map((upsell, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">
                  {upsell.name}
                </h3>
                 <div className="mb-3">
                   <span className="text-2xl font-semibold text-gray-900">
                     ${upsell.price}
                   </span>
                   <span className="text-gray-500 text-sm ml-1">{upsell.unit}</span>
                 </div>
                <p className="text-sm text-gray-600 mb-4">
                  {upsell.note}
                </p>
                <a href="/demo" className="w-full inline-flex items-center justify-center py-3 px-6 bg-gray-100 text-gray-700 rounded-lg text-[15px] font-medium hover:bg-gray-200 transition-colors">
                  Add to package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Ready to hire your virtual assistant?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Join 500+ business owners who scale with our VAs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-[15px] hover:bg-gray-50 transition-colors">
              Hire your VA today
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/demo" className="group relative border border-white text-white px-6 py-3 rounded-lg font-medium text-[15px] hover:bg-white hover:text-blue-600 transition-colors">
              <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Schedule consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPageSection;
