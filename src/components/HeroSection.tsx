
import React from 'react';

const logos = [
  { alt: 'Palmstone Capital', src: 'https://cdn.brandfetch.io/palmstone-capital.com/w/400/h/200/logo', textOnly: true },
  { alt: 'LevelInbox', src: 'https://cdn.brandfetch.io/levelinbox.com/w/400/h/200/logo' },
  { alt: 'Prospyre', src: 'https://cdn.brandfetch.io/prospyre.com/w/400/h/200/logo' },
  { alt: 'RevLayne', src: 'https://cdn.brandfetch.io/revlayne.com/w/400/h/200/logo' },
  { alt: 'NEXTUS.AI', src: 'https://cdn.brandfetch.io/nextus.ai/w/400/h/200/logo' },
  { alt: 'GrowthLayne', src: 'https://cdn.brandfetch.io/growthlayne.com/w/400/h/200/logo' },
  { alt: 'Clockwise Productions', src: 'https://cdn.brandfetch.io/clockwiseproductions.com/w/400/h/200/logo' },
  { alt: 'Linqe', src: 'https://cdn.brandfetch.io/linqe.io/w/400/h/200/logo' },
  { alt: 'Luxe Clean Group', src: 'https://cdn.brandfetch.io/luxecleangroup.com.au/w/400/h/200/logo' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-14 pb-12 overflow-hidden" style={{
      background: `linear-gradient(180deg, 
        rgba(240, 234, 225, 0.3) 0%,
        rgba(240, 234, 225, 0.2) 20%,
        rgba(240, 234, 225, 0.1) 40%,
        rgba(255, 255, 255, 0.8) 60%,
        rgba(255, 255, 255, 0.95) 80%,
        rgba(255, 255, 255, 1) 100%
      )`
    }}>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white opacity-20"></div>
      
      {/* Grid lines aligned with dashboard structure */}
      <div className="absolute inset-0 opacity-[0.08]">
        {/* Horizontal line spanning full width at dashboard header level */}
        <div 
          className="absolute h-px bg-gray-400 z-10"
          style={{ 
            top: 'calc(50vh + 24px + 68px)',
            left: '0',
            right: '0'
          }}
        />
        
        {/* Left vertical line aligned with dashboard outer edge */}
        <div 
          className="absolute w-px z-10"
          style={{ 
            left: 'calc(50% - 32rem - 4px)',
            top: '14px',
            bottom: '0',
            background: 'linear-gradient(to bottom, rgba(156, 163, 175, 0) 0%, rgba(156, 163, 175, 0.3) 10%, rgba(156, 163, 175, 1) 20%, rgba(156, 163, 175, 1) 80%, rgba(156, 163, 175, 0.3) 90%, rgba(156, 163, 175, 0) 100%)'
          }}
        />
        
        {/* Right vertical line aligned with dashboard outer edge */}
        <div 
          className="absolute w-px z-10"
          style={{ 
            left: 'calc(50% + 32rem + 4px)',
            top: '14px',
            bottom: '0',
            background: 'linear-gradient(to bottom, rgba(156, 163, 175, 0) 0%, rgba(156, 163, 175, 0.3) 10%, rgba(156, 163, 175, 1) 20%, rgba(156, 163, 175, 1) 80%, rgba(156, 163, 175, 0.3) 90%, rgba(156, 163, 175, 0) 100%)'
          }}
        />
        
        {/* Additional horizontal lines with fade effects */}
        <div 
          className="absolute h-px z-10"
          style={{ 
            top: 'calc(50vh + 24px + 68px + 200px)',
            left: '0',
            right: '0',
            background: 'linear-gradient(to right, rgba(156, 163, 175, 0) 0%, rgba(156, 163, 175, 1) 10%, rgba(156, 163, 175, 1) 90%, rgba(156, 163, 175, 0) 100%)'
          }}
        />
        <div 
          className="absolute h-px z-10"
          style={{ 
            top: 'calc(50vh + 24px + 68px + 400px)',
            left: '0',
            right: '0',
            background: 'linear-gradient(to right, rgba(156, 163, 175, 0) 0%, rgba(156, 163, 175, 1) 10%, rgba(156, 163, 175, 1) 90%, rgba(156, 163, 175, 0) 100%)'
          }}
        />
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 text-center pt-12 sm:pt-24">
        {/* Pill-shaped Tagline Container */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-400 bg-opacity-20 text-gray-700 text-xs font-medium rounded-full hover:bg-opacity-30 transition-all duration-200">
            Virtual Assistant Hiring Made Easy →
          </div>
        </div>

        {/* Main Headline (match /demo hero style) */}
        <div className="space-y-4 sm:space-y-2 mb-6">
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Hire elite virtual assistants
          </h1>

          <div className="space-y-3 sm:space-y-2">
            <p className="mt-4 text-gray-700 md:text-lg max-w-xl mx-auto">
              Matched in ~72 hours. Backed by our free replacement guarantee. Compliance handled for you. US and European businesses welcome.
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 sm:mb-8 w-full px-4 sm:px-0">
          <a href="/demo" className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Get a free demo
            <svg className="w-5 h-5 -mr-0.5 transition-all duration-200 text-blue-200 group-hover:text-white group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/demo" className="w-full sm:w-auto relative text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-200 group border border-gray-200 hover:bg-white">
            <span className="absolute inset-0 bg-gray-500 bg-opacity-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            <span className="relative flex items-center justify-center">
              Request more information <span className="ml-1 group-hover:text-gray-900 transition-colors duration-200">→</span>
            </span>
          </a>
        </div>
        
        {/* Small Legal Text */}
        <p className="text-xs text-gray-500 mb-8 sm:mb-16 px-4 sm:px-0">
          Starting at $1,395/month and including a free replacement guarantee.
        </p>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto relative px-4 sm:px-0">
          <div 
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden relative"
            style={{
              position: 'relative'
            }}
          >
            {/* Enhanced shadow using pseudo-elements - sides, top, and corners */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: `
                  -20px 0 40px -10px rgba(0, 0, 0, 0.12),
                  20px 0 40px -10px rgba(0, 0, 0, 0.12),
                  0 -15px 30px -8px rgba(0, 0, 0, 0.08),
                  -15px -15px 25px -10px rgba(0, 0, 0, 0.06),
                  15px -15px 25px -10px rgba(0, 0, 0, 0.06)
                `,
                maskImage: `linear-gradient(to bottom, 
                  rgba(0, 0, 0, 1) 0%,
                  rgba(0, 0, 0, 0.9) 30%,
                  rgba(0, 0, 0, 0.6) 60%,
                  rgba(0, 0, 0, 0.3) 80%,
                  rgba(0, 0, 0, 0) 100%
                )`,
                WebkitMaskImage: `linear-gradient(to bottom, 
                  rgba(0, 0, 0, 1) 0%,
                  rgba(0, 0, 0, 0.9) 30%,
                  rgba(0, 0, 0, 0.6) 60%,
                  rgba(0, 0, 0, 0.3) 80%,
                  rgba(0, 0, 0, 0) 100%
                )`
              }}
            />

            {/* Header Bar */}
            <div className="bg-white px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                <span className="text-base font-semibold text-gray-800">onvally</span>
              </div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-8 md:p-12">
              {/* Navigation Sidebar */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12">
                <div className="col-span-1 space-y-3">
                  <div className="text-sm font-semibold text-gray-900 mb-6">VA Dashboard</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Active VAs</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Candidates</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Performance</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Billing</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 md:col-span-4">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-8">Virtual Assistant Overview</h3>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-base font-medium text-gray-600 mb-2">Active VAs</div>
                      <div className="text-3xl font-bold text-gray-900">12</div>
                      <div className="text-sm text-blue-600 font-medium">+2 this month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-medium text-gray-600 mb-2">Hours/Month</div>
                      <div className="text-3xl font-bold text-gray-900">1,680</div>
                      <div className="text-sm text-blue-600 font-medium">160h per VA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-medium text-gray-600 mb-2">Avg Rating</div>
                      <div className="text-3xl font-bold text-gray-900">4.9</div>
                      <div className="text-sm text-blue-600 font-medium">Excellent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-medium text-gray-600 mb-2">Cost Savings</div>
                      <div className="text-3xl font-bold text-gray-900">$25K</div>
                      <div className="text-sm text-blue-600 font-medium">vs US hire</div>
                    </div>
                  </div>

                  {/* Data Table */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="grid grid-cols-6 gap-6 text-sm font-semibold text-gray-700 mb-4">
                      <div>VA Name</div>
                      <div>Role</div>
                      <div>Hours</div>
                      <div>Tasks Done</div>
                      <div>Rating</div>
                      <div>Status</div>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-6 gap-6 text-sm text-gray-900">
                        <div className="font-medium">Maria Santos</div>
                        <div>Admin</div>
                        <div>160h</div>
                        <div>42</div>
                        <div className="text-blue-600 font-semibold">4.9</div>
                        <div className="text-blue-600 font-semibold">Active</div>
                      </div>
                      <div className="grid grid-cols-6 gap-6 text-sm text-gray-900">
                        <div className="font-medium">James Chen</div>
                        <div>Sales</div>
                        <div>160h</div>
                        <div>38</div>
                        <div className="text-blue-600 font-semibold">4.8</div>
                        <div className="text-blue-600 font-semibold">Active</div>
                      </div>
                      <div className="grid grid-cols-6 gap-6 text-sm text-gray-900">
                        <div className="font-medium">Sofia Rodriguez</div>
                        <div>Marketing</div>
                        <div>120h</div>
                        <div>29</div>
                        <div className="text-blue-600 font-semibold">5.0</div>
                        <div className="text-blue-600 font-semibold">Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* White gradient overlay that fades toward bottom - Made more visible */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0) 50%,
                rgba(255, 255, 255, 0.7) 75%,
                rgba(255, 255, 255, 0.9) 90%,
                rgba(255, 255, 255, 1) 100%
              )`
            }}
          />
        </div>

        {/* Trusted By Social Proof Banner */}
        <div className="mt-0 mb-16 overflow-hidden">
          <div className="text-center mb-6">
            <p className="text-xs font-medium text-gray-500 tracking-wide">
              Trusted by businesses hiring remote talent
            </p>
          </div>
          {/* Marquee with normalized logo containers */}
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            <div className="flex items-center animate-[scroll_35s_linear_infinite] whitespace-nowrap">
              {/* First set */}
              <div className="flex items-center space-x-6 mx-4">
                {logos.map((logo, idx) => (
                  <div key={idx} className="h-10 md:h-12 w-28 md:w-32 flex items-center justify-center opacity-80">
                    {logo.textOnly ? (
                      <span className="text-gray-500 text-sm font-semibold tracking-wide whitespace-nowrap">{logo.alt}</span>
                    ) : (
                      <>
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-h-full max-w-full object-contain grayscale-[20%]"
                        />
                        <span className="hidden text-gray-500 text-sm font-semibold tracking-wide">{logo.alt}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Duplicate set */}
              <div className="flex items-center space-x-6 mx-4">
                {logos.map((logo, idx) => (
                  <div key={`dup-${idx}`} className="h-10 md:h-12 w-28 md:w-32 flex items-center justify-center opacity-80">
                    {logo.textOnly ? (
                      <span className="text-gray-500 text-sm font-semibold tracking-wide whitespace-nowrap">{logo.alt}</span>
                    ) : (
                      <>
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-h-full max-w-full object-contain grayscale-[20%]"
                        />
                        <span className="hidden text-gray-500 text-sm font-semibold tracking-wide">{logo.alt}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Fade overlays */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to right, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(255, 255, 255, 0) 10%, 
                  rgba(255, 255, 255, 0) 90%, 
                  rgba(255, 255, 255, 1) 100%
                )`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
