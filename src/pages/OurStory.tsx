'use client';

import React from 'react';
import { useSEO } from '@/hooks/use-seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OurStory: React.FC = () => {
  useSEO(
    'onvally® | Our Story — How we scale output with remote talent',
    'The origin of onvally: matching elite Virtual Assistants with process and QA to help teams scale throughput without scaling headcount.'
  );
  return (
  <div className="min-h-screen font-inter">
    <Header />
    {/* Hero */}
    <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Our story</h1>
          <p className="mt-3 md:text-lg text-gray-700 max-w-3xl mx-auto">onvally began in a cramped apartment with one recurring problem: talented teams drowning in busywork. We set out to prove you could deliver enterprise‑grade output without enterprise headcount—by pairing world‑class remote talent with a simple operating system and real accountability.</p>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {[{
            y: '2022',
            h: 'The spark',
            p: 'We prototyped an internal ops pod to take repetitive workflows off the founder’s plate. Velocity skyrocketed.'
          },{
            y: '2023',
            h: 'From pod to platform',
            p: 'We built a matching engine and a QA layer—reliability improved, and matching times fell to days. We began serving both US and European businesses.'
          },{
            y: '2024',
            h: 'Scale with confidence',
            p: 'Clients asked for broader coverage—sales, support, creative. We expanded our talent networks, added best‑practice playbooks, and formalized our free replacement guarantee.'
          },{
            y: 'Today',
            h: 'Trusted by growing teams',
            p: 'We serve companies across industries with Virtual Assistants that plug into workflows fast and deliver predictable, high‑quality output.'
          }].map((t, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-4 items-start">
              <div className="md:col-span-1 text-sm text-gray-500 mt-1">{t.y}</div>
              <div className="md:col-span-3 rounded-3xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">{t.h}</h3>
                <p className="text-sm text-gray-700 mt-2">{t.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Founder note */}
    <section className="py-12" style={{ background: '#F5F6F7' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-[32px] bg-white p-6 md:p-10 border border-gray-200/70">
          <h2 className="text-2xl font-semibold text-gray-900">A note from our founder</h2>
          <p className="mt-3 text-gray-700">Most teams don’t lack ambition—they lack consistent throughput. onvally exists to make professional output predictable by combining world‑class remote talent with the right operating rhythm: clear scope, best practices, QA, and a fast, free replacement if it’s not a fit.</p>
          <p className="mt-3 text-gray-700">If you need to scale today, we’ll meet you where you are and ship the first wins within days. Compliance is handled—our VAs work for us so you don’t have to worry about employment risk.</p>
          <div className="mt-6 text-sm text-gray-600">— Nils Feldmann, Founder & CEO</div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/70">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">Ready to scale your output?</h3>
          <p className="mt-2 text-gray-700">We’ll match you with the right Virtual Assistant and share best practices to start fast.</p>
          <div className="mt-6">
            <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get started
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default OurStory;


