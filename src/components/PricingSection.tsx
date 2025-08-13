
import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Essential Assistant',
      price: '$1,395',
      period: '/month',
      popular: false,
      features: [
        'Full-time dedicated virtual assistant',
        'Administrative & operational tasks',
        'Email and calendar management',
        'Research and data entry',
        'Basic reporting',
        'Direct communication channel'
      ]
    },
    {
      name: 'Professional Assistant',
      price: '$2,195',
      period: '/month',
      popular: true,
      features: [
        'Everything in Essential',
        'Specialized skills (marketing, sales, etc.)',
        'Advanced project management',
        'Customer service support',
        'Social media management',
        'Weekly performance reports',
        'Priority support',
        'Free replacement guarantee'
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the virtual assistant package that fits your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl p-6 shadow-lg border-2 ${
                plan.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2 text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
