import React from 'react';
import { TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const VAExpertiseSection = () => {
  const adminFeatures = [
    "Calendar management & scheduling",
    "Email management & filtering", 
    "Data entry & research",
    "Customer service support",
    "Travel planning & bookings"
  ];

  const specializedFeatures = [
    "Digital marketing & social media",
    "Content creation & copywriting",
    "Graphic design & video editing",
    "Web development & maintenance",
    "Lead generation & sales support"
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Admin & Specialized VA Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right type of virtual assistant for your business needs with expert matching from our specialists
          </p>
        </div>

        {/* VA Type Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Admin VAs Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Admin VAs</h3>
                <p className="text-blue-600 font-medium">Best for Operations & Support</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Perfect for businesses looking to streamline daily operations and free up time for strategic work.
            </p>

            <div className="space-y-3 mb-8">
              {adminFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">$1,800</div>
                <div className="text-xs text-gray-600">Average monthly cost</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">20+hrs</div>
                <div className="text-xs text-gray-600">Weekly time savings</div>
              </div>
            </div>

            <a href="/demo" className="group w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              <span>Find Admin VA</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Specialized VAs Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Specialized VAs</h3>
                <p className="text-blue-600 font-medium">Best for Growth & Skills</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Expert VAs with specialized skills to drive growth, marketing, and technical projects for your business.
            </p>

            <div className="space-y-3 mb-8">
              {specializedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">$2,400</div>
                <div className="text-xs text-gray-600">Average monthly cost</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">3x</div>
                <div className="text-xs text-gray-600">Average ROI growth</div>
              </div>
            </div>

            <a href="/demo" className="group w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              <span>Find Specialized VA</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Decision Helper */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Not sure which type of VA is right for you?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Choose Admin VAs if you:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Need help with daily operational tasks</li>
                <li>• Want to focus on strategic work</li>
                <li>• Require email and calendar management</li>
                <li>• Need customer service support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Choose Specialized VAs if you:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Need specific technical skills</li>
                <li>• Want to drive growth and marketing</li>
                <li>• Require creative content production</li>
                <li>• Need project-specific expertise</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still not sure which VA type fits your needs?
            </h3>
            <p className="text-gray-600 mb-6">
              Our VA specialists will analyze your business needs and recommend the perfect match.
            </p>
            <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-black/90 transition-colors">
              Get Expert Consultation
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Why Choose onvally */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Vetted Talent</h3>
            <p className="text-gray-600">
              All VAs are rigorously screened for skills, reliability, and English proficiency
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">48-Hour Matching</h3>
            <p className="text-gray-600">
              Get matched with your perfect VA within 48 hours, not weeks
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
            <p className="text-gray-600">
              Dedicated account managers ensure smooth collaboration and quick issue resolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VAExpertiseSection;