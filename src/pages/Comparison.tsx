import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Package, RefreshCw, Settings, Headphones, Check, X } from 'lucide-react';

const vendors = [
  { slug: 'upwork', name: 'Upwork', color: 'bg-emerald-100', dot: 'bg-emerald-500' },
  { slug: 'fiverr', name: 'Fiverr', color: 'bg-green-100', dot: 'bg-green-500' },
  { slug: 'us-talent', name: 'US Talent', color: 'bg-blue-100', dot: 'bg-blue-500' },
];

const featureRows = [
  { label: 'Pre-vetted candidates', onvally: true, upwork: 'Mixed', fiverr: 'Mixed', us: 'Varies' },
  { label: '48-hour matching', onvally: true, upwork: false, fiverr: false, us: false },
  { label: 'Replacement guarantee', onvally: true, upwork: false, fiverr: false, us: false },
  { label: 'Management overhead', onvally: 'Low', upwork: 'High', fiverr: 'High', us: 'Medium' },
  { label: 'Pricing', onvally: '$1,395+/mo', upwork: '$15–$80/hr', fiverr: '$5–$500/task', us: '$40k–$100k/yr' },
];

const Comparison: React.FC = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-8 md:pb-10 bg-[#F5F6F7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">How does onvally compare?</h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            There’s a lot of VA options out there. Choosing the right partner matters. We built this page to help you make the right call—even if it’s not us.
          </p>
        </div>
      </section>

      {/* Grid of vendor cards */}
      <section className="py-10 md:py-12 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {vendors.map(v => (
            <Link
              key={v.slug}
              href={{ pathname: `/comparison/${v.slug}` as `/comparison/${string}` }}
              className="group rounded-3xl bg-white border border-gray-200 px-6 py-5 flex items-center justify-between transition-all duration-300 hover:border-gray-300 hover:bg-gray-50/50"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${v.color} relative flex items-center justify-center`}>
                  <div className={`w-3 h-3 rounded-full ${v.dot}`} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">onvally vs</div>
                  <div className="text-lg font-medium text-gray-900">{v.name}</div>
                </div>
              </div>
              <div className="text-blue-600 text-sm font-medium flex items-center gap-1">
                View comparison
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">›</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Direct head-to-head table */}
      <section className="bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6 pb-6">
          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Feature</div>
              <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">onvally</div>
              <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Upwork</div>
              <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Fiverr</div>
              <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">US Talent</div>
            </div>
            {featureRows.map((row, i) => (
              <div key={i} className="grid grid-cols-5 border-t border-gray-100">
                <div className="px-4 py-3 text-sm text-gray-800">{row.label}</div>
                <div className="px-4 py-3 text-sm">
                  {typeof row.onvally === 'boolean' ? (
                    row.onvally ? <Check className="w-4 h-4 text-blue-600" /> : <X className="w-4 h-4 text-red-500" />
                  ) : (
                    <span className="text-gray-700">{row.onvally}</span>
                  )}
                </div>
                <div className="px-4 py-3 text-sm">
                  {typeof row.upwork === 'boolean' ? (
                    row.upwork ? <Check className="w-4 h-4 text-blue-600" /> : <X className="w-4 h-4 text-red-500" />
                  ) : (
                    <span className="text-gray-700">{row.upwork}</span>
                  )}
                </div>
                <div className="px-4 py-3 text-sm">
                  {typeof row.fiverr === 'boolean' ? (
                    row.fiverr ? <Check className="w-4 h-4 text-blue-600" /> : <X className="w-4 h-4 text-red-500" />
                  ) : (
                    <span className="text-gray-700">{row.fiverr}</span>
                  )}
                </div>
                <div className="px-4 py-3 text-sm">
                  {typeof row.us === 'boolean' ? (
                  row.us ? <Check className="w-4 h-4 text-blue-600" /> : <X className="w-4 h-4 text-red-500" />
                  ) : (
                    <span className="text-gray-700">{row.us}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-3">US Talent refers to in-house or domestic hires; cost and vetting vary significantly by market.</div>
        </div>
      </section>

      {/* Bento-style reason tiles (1:1 layout like Owner) */}
      <section className="py-14 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Join thousands of businesses switching to onvally</h2>
            <p className="mt-2 text-gray-600">Here’s why teams choose onvally to grow faster.</p>
          </div>

          {/* outer rounded grid container to mirror reference proportions */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] bg-white shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 max-w-sm leading-snug">One package with everything you need</h3>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600">
                  <Package className="w-4 h-4" />
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                Get the workflows, coaching, and vetted talent to scale from day one. Our most successful clients switched to onvally from pieced‑together solutions that couldn’t deliver consistent output.
              </p>
              <div className="mt-auto" />
            </div>
            <div className="rounded-[28px] bg-white shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">Month to month pricing</h3>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600">
                  <RefreshCw className="w-4 h-4" />
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                No long‑term contracts. We earn your business each month by delivering clear outcomes and dependable capacity.
              </p>
            </div>
            <div className="rounded-[28px] bg-white shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">No upgrades or upsells</h3>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600">
                  <Settings className="w-4 h-4" />
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Everything you need to operate comes standard. No nickel‑and‑diming for basic capabilities.
              </p>
            </div>
            <div className="rounded-[28px] bg-white shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">24/7 USA support</h3>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600">
                  <Headphones className="w-4 h-4" />
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                We invest in world‑class support with 24/7, USA‑based assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs with side testimonial */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="space-y-3">
              {["What is included?","What’s the pricing?","How long are contracts?","How long to get started?","Should I stop using freelancers?"]
                .map((q, i) => (
                <details key={i} className="group rounded-2xl bg-gray-50 p-4 open:bg-white open:shadow-sm transition-colors">
                  <summary className="list-none cursor-pointer flex items-center justify-between text-gray-900 font-medium">
                    {q}
                    <span className="text-gray-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-2 text-gray-600 text-sm">
                    We include everything needed to run a reliable, scalable VA program—talent, SOPs, coaching, and support—so you don’t have to piece it together.
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-3xl bg-[#111827] text-white p-6 shadow-sm">
              <div className="h-36 rounded-2xl bg-white/10 mb-4" />
              <p className="text-sm">“onvally makes delegation effortless. It’s been a game‑changer for our online operations.”</p>
              <div className="mt-4 text-xs text-white/70">Alex R — Founder</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comparison;


