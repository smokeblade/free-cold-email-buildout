import React from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';

const ProblemMitigationSection = () => {
  const traditionalHiringProblems = [
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      text: "Very expensive"
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      text: "Need to be managed and trained"
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      text: "High taxes and insurance costs"
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      text: "Hard to find good talent"
    }
  ];

  const onvallyBenefits = [
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      text: "Starting at $1,395/month"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      text: "Dedicated manager with every hire"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      text: "Flat cost via credit card or ACH"
    },
    {
      icon: <Check className="w-5 h-5 text-blue-500" />,
      text: "We find the best talent for you"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[48px] overflow-hidden shadow-sm">
          <div className="bg-gradient-to-b from-white to-[#F5F6F7]/70 p-6 md:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Ship cold email safely, without burning domains</h2>
              <p className="mt-3 text-base md:text-lg text-gray-700">DNS configured right, inbox warmup, safe sending limits, and deliverability‑friendly cadences—so you can prospect without setting fires.</p>
            </div>

            {/* Comparison cards */}
            <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Traditional */}
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Ad‑hoc DIY setup</h3>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Typical outcome</div>
                    <div className="text-2xl font-semibold text-gray-900">Spam issues</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {traditionalHiringProblems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-gray-800">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* onvally */}
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Free buildout (this site)</h3>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Your spend</div>
                    <div className="text-2xl font-semibold text-blue-600">Software + inboxes</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {onvallyBenefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-gray-800">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">
                    Save ~70% per role
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 md:mt-12 text-center">
              <div className="inline-flex flex-wrap items-center gap-3">
                <a href="/book-a-demo" className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-[15px] hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Book a free buildout
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#calc" className="group relative inline-flex items-center border border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium text-[15px] hover:bg-white transition-all">
                  <span className="absolute inset-0 bg-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Calculate savings</span>
                </a>
              </div>
              <div className="mt-3 text-xs text-gray-500">Estimates based on typical role profiles; actual costs vary by scope and hours.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemMitigationSection;