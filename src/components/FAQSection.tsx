"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I get matched with a VA?',
      answer: 'Most VA matches are completed within 48 hours. We analyze your requirements and present you with 3 pre-vetted candidates who match your specific needs and budget. You can start interviewing immediately.'
    },
    {
      question: 'What\'s included in the VA matching service?',
      answer: 'Our service includes requirements analysis, AI-powered matching, candidate vetting, interview scheduling, onboarding support, and ongoing account management. We also provide performance monitoring and replacement guarantees.'
    },
    {
      question: 'How are VAs vetted and qualified?',
      answer: 'All VAs undergo rigorous screening including skills assessments, English proficiency tests, background checks, and portfolio reviews. We verify their experience, check references, and ensure they meet our quality standards.'
    },
    {
      question: 'Can I work with VAs in different time zones?',
      answer: 'Yes, we have VAs available across multiple time zones to match your business hours. Whether you need coverage during US business hours, European hours, or 24/7 support, we can find the right match.'
    },
    {
      question: 'What if my VA doesn\'t work out?',
      answer: 'We offer a replacement guarantee. If your VA doesn\'t meet expectations within the first 30 days, we\'ll find you a replacement at no additional cost. Our goal is your complete satisfaction with your VA match.'
    },
    {
      question: 'What are the typical costs for a VA?',
      answer: 'VA costs vary based on skills and experience. Admin VAs typically range from $1,800-2,000/month, while specialized VAs range from $2,200-2,600/month. All pricing is transparent with no hidden fees.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light-gray py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-dark-gray pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-medium-gray transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-medium-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
