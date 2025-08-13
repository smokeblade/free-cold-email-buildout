
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="bg-[#0E1523] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Ready to Find Your Perfect VA?
        </h2>
        <p className="mt-3 text-base md:text-lg text-white/70">
          Join 500+ businesses who trust onvally for reliable virtual assistants
        </p>
        <div className="mt-8">
          <a href="/demo" className="group inline-flex items-center gap-2 bg-white text-gray-900 text-sm md:text-base font-medium px-6 md:px-7 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Find My VA Match
            <ArrowRight className="w-4 h-4 text-gray-700 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
