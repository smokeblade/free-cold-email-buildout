
import React from 'react';

const SocialProofSection = () => {
  const logos = [
    { name: 'TechCorp', width: 'w-24' },
    { name: 'StartupCo', width: 'w-28' },
    { name: 'InnovateLLC', width: 'w-32' },
    { name: 'BusinessPro', width: 'w-26' },
    { name: 'VentureLab', width: 'w-30' }
  ];

  const stats = [
    { number: '10,000+', label: 'LLCs Formed' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '24-48hrs', label: 'Average Formation Time' }
  ];

  return (
    <section className="bg-light-gray py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Customer Logos */}
        <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={`${logo.width} h-12 bg-medium-gray rounded flex items-center justify-center hover:opacity-100 transition-opacity`}
            >
              <span className="text-xs font-medium text-white">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-dark-gray mb-2">
                {stat.number}
              </div>
              <div className="text-medium-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
