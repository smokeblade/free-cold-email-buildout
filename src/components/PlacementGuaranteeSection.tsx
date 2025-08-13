import React from 'react';
import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

const PlacementGuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Free Replacement Guarantee",
      description: "If your VA doesn't work out, we'll find you a replacement at no additional cost."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Fast Matching",
      description: "Most matches complete in ~72 hours (timing may vary by demand and role)."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Quality Assurance",
      description: "Every VA goes through our 10-step vetting process to ensure top-quality candidates."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee with dedicated support throughout your partnership."
    }
  ];

  return (
    <section className="py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Placement Guarantee</h2>
          <p className="mt-3 text-gray-700 md:text-lg max-w-3xl mx-auto">We de‑risk your hire with fast matching and free replacement. Your output keeps moving.</p>
        </div>

        {/* Guarantees Grid */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center rounded-2xl border border-gray-200 bg-white p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                {guarantee.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {guarantee.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect VA Match?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses that trust our guarantees and have found their ideal virtual assistants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get Started
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/demo" className="group relative border border-gray-300 text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-white transition-colors">
                <span className="absolute inset-0 bg-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementGuaranteeSection;
