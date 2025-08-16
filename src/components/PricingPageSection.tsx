"use client";

import React from 'react';
import { Check } from 'lucide-react';
import OwnerStyleFAQ from '@/components/OwnerStyleFAQ';

const PricingPageSection = () => {
  const features = [
    'DNS (SPF/DKIM/DMARC) configured',
    'Inbox provisioning guidance',
    'Warmup + health plan',
    'Sending limits + safe ramp',
    'Tracking domain + webhooks/logging',
    'Deliverability‑friendly templates',
    'Handoff doc + ops checklist'
  ];

  const youPay = [
    'Domains and inboxes',
    'Sending tool (e.g. Instantly, Smartlead)',
    'Warmup or reputation tool (optional)',
    'Any additional integrations you choose'
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">One plan: Completely Free</h1>
            <p className="mt-3 md:text-lg text-gray-700 max-w-3xl mx-auto">Cold Email Launchpad configures your cold email system for free. You pay software providers directly. We earn via affiliate partnerships — your price stays the same.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get Free Setup
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/how-it-works" className="group relative text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg border border-gray-200 hover:bg-white">
                <span className="absolute inset-0 bg-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">See how it works</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: '#F5F6F7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-8">
              <div className="text-sm font-semibold text-blue-600 mb-1">Plan</div>
              <h2 className="text-2xl font-semibold text-gray-900">Free Setup</h2>
              <div className="mt-3">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 text-sm ml-1 align-top">one-time</span>
            </div>
              <p className="mt-3 text-gray-600">We do the setup. You own every account.</p>
                  <ul className="mt-6 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                    <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
              <div className="mt-6">
                <a href="/demo" className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 h-12 text-[15px] font-medium bg-blue-600 text-white hover:bg-blue-700">Get Free Setup<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></a>
                </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-8">
              <div className="text-sm font-semibold text-gray-900 mb-2">You pay for</div>
              <ul className="space-y-2">
                {youPay.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-700">{i}</span>
                    </li>
                  ))}
                </ul>
              <p className="text-xs text-gray-500 mt-3">Cold Email Launchpad may earn affiliate commission from some providers. Your price is the same as buying direct.</p>
            </div>
          </div>
        </div>
      </section>

      <OwnerStyleFAQ
        title="Pricing FAQs"
        items={[
          { question: 'Why is the buildout free?', answer: (
            <div>
              <p>We earn affiliate commissions from some software/infra providers. Your price is the same as buying direct.</p>
            </div>
          ) },
          { question: 'What costs do we cover?', answer: (
            <div>
              <p>Domains, inboxes, your sending tool, and optional warmup/reputation tools. We’ll recommend a stack sized to your volume.</p>
            </div>
          ) },
          { question: 'What do we get at the end?', answer: (
            <div>
              <p>Configured domains/DNS, working inboxes with a warmup plan, tracking domain, deliverability‑friendly templates, and a handoff doc covering operations and safety limits.</p>
            </div>
          ) },
        ]}
      />

      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Ready to start?</h2>
          <p className="text-lg text-blue-100 mb-6">Book a call and we'll scope your cold email stack and timelines.</p>
          <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-[15px] hover:bg-gray-50 transition-colors">Get Free Setup<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></a>
        </div>
      </section>
    </div>
  );
};

export default PricingPageSection;
