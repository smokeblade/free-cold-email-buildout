
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
    <section className="pt-28 md:pt-32 pb-10 bg-[#F5F6F7]">
      
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 text-center pt-12 sm:pt-24">
        {/* Pill-shaped Tagline Container */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-400 bg-opacity-20 text-gray-700 text-xs font-medium rounded-full hover:bg-opacity-30 transition-all duration-200">
            Free Cold Email Buildout →
          </div>
        </div>

        {/* Main Headline (match /demo hero style) */}
        <div className="space-y-4 sm:space-y-2 mb-6">
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            We set up your cold email stack for free
          </h1>

          <div className="space-y-3 sm:space-y-2">
            <p className="mt-4 text-gray-700 md:text-lg max-w-xl mx-auto">
              You cover software and inboxes; we earn via affiliate. Safe defaults, deliverability‑friendly templates, and a clean handoff.
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 sm:mb-8 w-full px-4 sm:px-0">
          <a href="/demo" className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start free buildout
            <svg className="w-5 h-5 -mr-0.5 transition-all duration-200 text-blue-200 group-hover:text-white group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/how-it-works" className="w-full sm:w-auto relative text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-200 group border border-gray-200 hover:bg-white">
            <span className="absolute inset-0 bg-gray-500 bg-opacity-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            <span className="relative flex items-center justify-center">
              See how it works <span className="ml-1 group-hover:text-gray-900 transition-colors duration-200">→</span>
            </span>
          </a>
        </div>
        
        {/* Small Legal Text */}
        <p className="text-xs text-gray-500 mb-8 sm:mb-16 px-4 sm:px-0">
          No SLAs are implied; pages are server‑rendered only. You retain ownership of all accounts.
        </p>

        {/* Dashboard preview removed for cold email buildout */}

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
