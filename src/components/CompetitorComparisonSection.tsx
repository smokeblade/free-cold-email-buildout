import React from 'react';
import { Check, X, ArrowUpRight } from 'lucide-react';

const CompetitorComparisonSection = () => {
  const features = [
    {
      category: "VA Quality & Vetting",
      items: [
        { name: "Pre-vetted Virtual Assistants", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Skills Assessment Testing", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "English Proficiency Verification", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Work Sample Portfolio Review", onvally: true, bizee: false, zenbusiness: false, openbiz: false }
      ]
    },
    {
      category: "Matching & Support",
      items: [
        { name: "AI-Powered VA Matching", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "48-Hour Match Guarantee", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Dedicated Account Manager", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Ongoing Performance Monitoring", onvally: true, bizee: false, zenbusiness: false, openbiz: false }
      ]
    },
    {
      category: "Premium Features",
      items: [
        { name: "Real-time Progress Tracking", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Multiple VA Specializations", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Seamless Team Scaling", onvally: true, bizee: false, zenbusiness: false, openbiz: false },
        { name: "Performance Analytics Dashboard", onvally: true, bizee: false, zenbusiness: false, openbiz: false }
      ]
    }
  ];

  const companies = [
    { name: "onvally", price: "$1,395+/mo", popular: true, description: "Specialized VA teams" },
    { name: "Upwork", price: "$15–$80/hr", popular: false, description: "Freelance marketplace" },
    { name: "Fiverr", price: "$5–$500/task", popular: false, description: "Gig platform" },
    { name: "Virtual Staff", price: "$500–$1,500", popular: false, description: "Basic placement" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[48px] overflow-hidden shadow-sm">
          <div className="bg-gradient-to-b from-white to-[#F5F6F7]/70 p-6 md:p-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Why businesses choose onvally over freelancers</h2>
              <p className="mt-3 text-base md:text-lg text-gray-700">Specialized VAs, standard operating playbooks, and a managed experience—so you scale output without managing dozens of contractors.</p>
            </div>

            {/* Comparison grid (Owner.com style) */}
            <div className="mt-10 grid md:grid-cols-4 gap-4 md:gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs text-gray-500">Platform</div>
                <div className="mt-1 font-semibold">onvally</div>
                <div className="mt-1 text-sm text-gray-600">$1,395+/mo</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs text-gray-500">Freelancers</div>
                <div className="mt-1 font-semibold">Upwork</div>
                <div className="mt-1 text-sm text-gray-600">$15–$80/hr</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs text-gray-500">Freelancers</div>
                <div className="mt-1 font-semibold">Fiverr</div>
                <div className="mt-1 text-sm text-gray-600">$5–$500/task</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xs text-gray-500">Staffing</div>
                <div className="mt-1 font-semibold">Virtual Staff</div>
                <div className="mt-1 text-sm text-gray-600">$500–$1,500</div>
              </div>
            </div>

            {/* Feature rows */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white overflow-hidden">
              {features.map((category, ci) => (
                <div key={ci}>
                  <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 font-medium text-gray-900">{category.category}</div>
                  {category.items.map((item, ii) => (
                    <div key={ii} className="grid grid-cols-4 gap-4 px-5 py-3 border-b border-gray-100 items-center">
                      <div className="col-span-1 text-gray-800 text-sm md:text-base">{item.name}</div>
                      {[item.onvally, item.bizee, item.zenbusiness, item.openbiz].map((v, i) => (
                        <div key={i} className="flex justify-center">
                          {v ? (
                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-blue-600" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                              <X className="w-3.5 h-3.5 text-red-500" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a href="/demo" className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black/90">
                Find my VA match
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparisonSection; 