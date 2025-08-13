export function FAQSection() {
  const faqs = [
    { q: 'Why is this free?', a: 'We earn affiliate commissions from some inbox/software providers. Your price is the same either way.' },
    { q: 'Do you resell inboxes?', a: 'No. You buy directly from providers. You own all accounts and can switch anytime.' },
    { q: 'What tools do you support?', a: 'We work with popular sending platforms and warmup tools. We’ll recommend a stack for your goals.' },
    { q: 'How long does setup take?', a: 'Typical setup 5–7 days depending on DNS, inbox provisioning, and warmup. We’ll share a ramp plan.' },
  ];
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="font-medium text-gray-900">{f.q}</div>
              <div className="mt-2 text-sm text-gray-700">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


