import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Founder, Prospyre",
      business: "Prospyre",
      role: "Agency",
      metric: "+38%",
      period: "booked meetings",
      description:
        "The SDR + EA combo gave us consistent outbound and clean ops. Pipeline is visible and we reclaimed 12 hours/week.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1500&auto=format&fit=crop",
      category: "Outbound & Ops"
    },
    {
      id: 2,
      name: "Head of CS, LevelInbox",
      business: "LevelInbox",
      role: "SaaS",
      metric: "1.8h",
      period: "FRT (from 10h)",
      description:
        "Support stabilized and CSMs focused on expansion. Webinars, NPS, and CRM hygiene are handled reliably.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1500&auto=format&fit=crop",
      category: "Support & Success"
    },
    {
      id: 3,
      name: "Partner, Palmstone Capital",
      business: "Palmstone Capital",
      role: "Finance",
      metric: "100%",
      period: "investor updates on-time",
      description:
        "EA + research support standardized dataroom, scheduling, and comms. Predictable output without hiring locally.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1500&auto=format&fit=crop",
      category: "Ops & Admin"
    },
    {
      id: 4,
      name: "Owner, GrowthLayne",
      business: "GrowthLayne",
      role: "Ecommerce",
      metric: "+27%",
      period: "new listings",
      description:
        "Marketing assistant owns listing prep, content ops, and weekend support coverage. CX held steady while we expanded SKUs.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1500&auto=format&fit=crop",
      category: "Marketing + CX"
    }
  ];

  return (
    <section className="py-20 w-full overflow-hidden relative bg-gradient-to-b from-white/20 via-[#f0eae1] to-white/20" style={{ backgroundColor: '#f0eae1' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Trusted by growing teams across healthcare, legal, SaaS and eCommerce
        </h2>
      </div>

      {/* Testimonials Cards - Auto-scrolling with hover controls */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex gap-4 hover:[animation-play-state:paused] animate-[scroll_60s_linear_infinite]"
          style={{ width: 'calc(360px * 10 + 16px * 9)' }}
        >
          {/* First set */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative min-w-[360px] max-w-[360px] h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Background Image with subtle zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${testimonial.image})`
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                {/* Metric */}
                <div className="mb-3">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">{testimonial.metric}</span>
                    <span className="text-lg text-white/80 ml-1">{testimonial.period}</span>
                  </div>
                  <div className="text-sm text-white/70 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block mt-2">
                    {testimonial.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed mb-4 font-medium">{testimonial.description}</p>

                {/* Author Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/80 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <div
              key={`duplicate-${testimonial.id}`}
              className="relative min-w-[360px] max-w-[360px] h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="mb-3">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">{testimonial.metric}</span>
                    <span className="text-lg text-white/80 ml-1">{testimonial.period}</span>
                  </div>
                  <div className="text-sm text-white/70 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block mt-2">
                    {testimonial.category}
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed mb-4 font-medium">{testimonial.description}</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/80 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-16">
        <button className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
          See All Success Stories
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;