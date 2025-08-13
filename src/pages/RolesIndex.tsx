import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import roles, { rolesByCategory } from '@/data/roles';

const RolesIndex: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Explore Roles</h1>
          <p className="mt-3 text-gray-700">Pick a role to see scope, outcomes, pricing, and reviews.</p>
        </div>
      </div>
    </section>
    <section className="py-12" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {(['General','Popular','Other'] as const).map((cat) => (
          <div key={cat}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rolesByCategory[cat]?.map((r) => (
                <Link key={r.slug} href={`/roles/${r.slug}`} className="group rounded-3xl bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50/50">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:opacity-90">{r.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{r.blurb}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">US comp {r.usSalaryRange}</div>
                    <div className="text-xs font-medium text-gray-900">From {r.startingFrom}</div>
                  </div>
                  <div className="mt-2 text-[11px] text-gray-500">Ramp {r.rampDays} days</div>
                  {r.bullets?.length ? (
                    <ul className="mt-3 space-y-1">
                      {r.bullets.slice(0,2).map((b, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-300" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-4 text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                    <span>Learn more</span>
                    <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default RolesIndex;


