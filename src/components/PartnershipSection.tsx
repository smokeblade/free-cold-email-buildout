import React from 'react';

const PartnershipSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            VAs with experience at world‑class companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our virtual assistants have supported teams at leading global companies across technology, finance, and consumer brands.
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {/* Microsoft */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/microsoft.com/w/400/h/120/logo" 
              alt="Microsoft" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* PayPal */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/paypal.com/w/400/h/120/logo" 
              alt="PayPal" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Visa */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/visa.com/w/400/h/120/logo" 
              alt="Visa" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Airbnb */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/airbnb.com/w/400/h/120/logo" 
              alt="Airbnb" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* AT&T */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/att.com/w/400/h/120/logo" 
              alt="AT&T" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Netflix */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/netflix.com/w/400/h/120/logo" 
              alt="Netflix" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Amazon */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/amazon.com/w/400/h/120/logo" 
              alt="Amazon" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* JPMorgan */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/jpmorganchase.com/w/400/h/120/logo" 
              alt="JPMorgan Chase" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Google */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/google.com/w/400/h/120/logo" 
              alt="Google" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Apple */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <img 
              src="https://cdn.brandfetch.io/apple.com/w/400/h/120/logo" 
              alt="Apple" 
              className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">VA client satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">48hrs</div>
            <div className="text-gray-600">Average VA matching time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Businesses served successfully</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to find your perfect VA?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 500+ businesses who trust onvally for reliable, skilled virtual assistants.
            </p>
            <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-black/90 transition-colors">
              Find My VA Match
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 