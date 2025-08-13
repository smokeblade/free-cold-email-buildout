export function TestimonialsSection() {
  const testimonials = [
    { q: '“Deliverability held steady and we scaled volume safely.”', a: 'Founder, SaaS' },
    { q: '“Clear handoff docs. We were sending within a week.”', a: 'Director of Growth, Agency' },
    { q: '“Loved the safety guardrails—no more domain fires.”', a: 'Owner, Ecommerce' },
  ];
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">Teams shipping safely</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="text-gray-900">{t.q}</div>
              <footer className="mt-2 text-xs text-gray-600">{t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


