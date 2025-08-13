export function ComparisonSection() {
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">Why this is free</h2>
          <p className="mt-3 text-center text-gray-700 max-w-2xl mx-auto">
            We don’t resell inboxes. You purchase directly from providers. Some providers pay us an affiliate commission. That lets us offer setup for free. Your price doesn’t change.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {["You own accounts", "Transparent providers", "Safe best practices"].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-5 text-center">
                <div className="font-medium text-gray-900">{t}</div>
                <div className="text-sm text-gray-700 mt-1">No lock‑in. No upsells. Just a safe, functioning cold email stack.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


