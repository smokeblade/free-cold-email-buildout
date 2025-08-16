
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Scope & access',
      description: 'We confirm domains, volumes, and tools. You grant DNS and provider access where needed.'
    },
    {
      number: 2,
      title: 'Configure stack',
      description: 'We set up DNS (SPF/DKIM/DMARC), provision inboxes, add tracking domain, and define safe limits.'
    },
    {
      number: 3,
      title: 'Warmup & handoff',
      description: 'We apply a warmup + health plan, load deliverability‑friendly templates, and deliver a handoff doc.'
    }
  ];

  return (
    <section style={{ backgroundColor: '#F5F6F7' }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How the free buildout works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your cold email stack configured safely in three steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 border-dashed transform translate-x-4 -translate-y-1/2"></div>
              )}
              
              {/* Step Card */}
              <div className="text-center">
                {/* Number Circle */}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
