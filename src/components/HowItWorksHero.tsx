"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Star, FileText, CreditCard, Shield } from 'lucide-react';

const HowItWorksHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section comes into view
      // Complete animation when section is about to leave view
      const startOffset = windowHeight * 0.7; // Start when 70% down the viewport
      const endOffset = windowHeight * 0.3;   // End when 30% down the viewport
      
      let progress = 0;
      
      if (sectionTop <= startOffset && sectionTop >= endOffset - sectionHeight) {
        // Section is in the animation zone
        const animationZone = startOffset - (endOffset - sectionHeight);
        const currentPosition = startOffset - sectionTop;
        progress = Math.min(Math.max(currentPosition / animationZone, 0), 1);
      } else if (sectionTop < endOffset - sectionHeight) {
        // Section has passed through completely
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "Tell us your needs",
      description: "Describe your business requirements, preferred skills, and the type of tasks you need help with."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "We find your matches",
      description: "Our AI matching system analyzes your requirements and connects you with pre-vetted VAs who have the exact skills you need."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      title: "Interview & select",
      description: "Meet your top 3 VA candidates within 48 hours. Interview them and choose the perfect fit for your business."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Start working together",
      description: "Begin collaborating with your chosen VA immediately with our seamless onboarding process and ongoing support."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <span className="text-blue-500 text-sm font-medium">What we set up</span>
            </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your cold email system, configured
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Domains, DNS, inbox warmup, sending limits, tracking, templates, and a safe ramp. You own every account.
              </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/book-a-demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Book a free buildout
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/how-it-works" className="group relative text-gray-700 text-[15px] font-medium px-6 py-3 transition-all duration-200 rounded-lg border border-gray-200 hover:bg-white">
                <span className="absolute inset-0 bg-gray-500 bg-opacity-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <span className="relative flex items-center justify-center">See how it works →</span>
              </a>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-12 relative">
            {/* Background timeline */}
            <div className="absolute left-6 top-6 w-px bg-blue-200 opacity-30" style={{ height: 'calc(100% - 3rem)' }}></div>
            
            {/* Animated progress line */}
            <div 
              className="absolute left-6 top-6 w-px bg-blue-500 transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`,
                maxHeight: 'calc(100% - 3rem)'
              }}
            ></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 relative">
                {/* Icon with connecting line */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
