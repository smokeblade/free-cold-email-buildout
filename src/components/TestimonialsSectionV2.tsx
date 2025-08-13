import React from 'react';

const TestimonialsSectionV2 = () => {
  const testimonials = [
    {
      id: 1,
      text: "Our onvally EA rebuilt my calendar and inbox workflow in a week. I regained 12 hours/week and our customers get replies within the hour.",
      author: "Aisha R., Founder, RevLayne"
    },
    {
      id: 2,
      text: "We spun up a small CS team through onvally. First‑response time dropped from 10h to 1.8h and CSAT held at 4.9/5.",
      author: "Daniel P., Head of CS, LevelInbox"
    },
    {
      id: 3,
      text: "Our onvally SDR booked 38% more meetings in the first 60 days and the ops assistant kept CRM spotless.",
      author: "Maya S., Founder, Prospyre"
    },
    {
      id: 4,
      text: "Board updates and investor comms are now clockwork. EA + research support standardized our dataroom and travel.",
      author: "Jon L., Partner, Palmstone Capital"
    },
    {
      id: 5,
      text: "Weekends used to be chaos. onvally added coverage and process — now tickets don’t pile up and our NPS is up 7 points.",
      author: "Sofia M., COO, DTC brand"
    },
    {
      id: 6,
      text: "I was skeptical about offloading ops. Three months in, my onvally VA owns vendor comms and monthly reporting without hand‑holding.",
      author: "Chris T., CEO, SaaS"
    },
    {
      id: 7,
      text: "Hiring locally would’ve taken months. onvally matched us in ~72 hours and handled compliance end‑to‑end.",
      author: "Priya M., Operations, Healthcare"
    },
    {
      id: 8,
      text: "We finally have a repeatable sales process. The onvally team coached us on cadences and QA — pipeline is predictable now.",
      author: "Leo C., VP Sales, B2B services"
    },
    {
      id: 9,
      text: "Graphics, listings, and support used to bottleneck launches. With our onvally assistant, we ship faster without sacrificing quality.",
      author: "Jenny F., Owner, Ecommerce"
    }
  ];

  // Split testimonials into 3 columns based on index
  const column1 = testimonials.filter((_, index) => index % 3 === 0);
  const column2 = testimonials.filter((_, index) => index % 3 === 1);
  const column3 = testimonials.filter((_, index) => index % 3 === 2);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm">
      {/* Star Rating */}
      <div className="mb-4">
        <span className="text-black text-lg">★★★★★</span>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-900 text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      
      {/* Author Block */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          <span className="text-gray-600 text-sm font-medium">
            {testimonial.author.split(' ')[0][0]}
          </span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{testimonial.author}</span>
      </div>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f0eae1] py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            See why we're rated #1<br />
            in hiring remote talent
          </h2>
          
          {/* Recognition Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <div className="bg-gray-100 px-3 py-2 rounded-lg flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Rated #1 VA Hiring Platform</span>
            </div>
            <div className="bg-gray-100 px-3 py-2 rounded-lg flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G2</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Leader Position 2024</span>
            </div>
          </div>
          
          {/* Review Count */}
          <p className="text-blue-600 font-medium text-sm">
            Over 500+ 5-star reviews on G2 and Capterra
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center gap-x-4">
            {/* Column 1 - starts lower */}
            <div className="flex flex-col gap-y-3 mt-8">
              {column1.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            
            {/* Column 2 - starts higher (center) */}
            <div className="flex flex-col gap-y-3 mt-0">
              {column2.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            
            {/* Column 3 - starts lower */}
            <div className="flex flex-col gap-y-3 mt-8">
              {column3.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Mobile Layout - Single Column */}
          <div className="lg:hidden space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Gradient Fade - Desktop Only */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#f0eae1] to-transparent pointer-events-none"></div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 z-10 relative">
          <button className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-black/90 transition-colors">
            See more reviews
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionV2;
