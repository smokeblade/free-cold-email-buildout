export function ProcessSection() {
  const steps = [
    { h: "Scope", s: "We audit your domains, volumes, ICP, and stack to define a safe plan." },
    { h: "Provision", s: "You buy inboxes and tools under your accounts; we guide providers." },
    { h: "Configure", s: "DNS, warmup, safety limits, tracking, and webhook logging wired up." },
    { h: "Launch", s: "Templates and cadences set; ramp schedule; monitoring and handoff." },
  ];
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((x, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="text-sm text-gray-500">Step {i + 1}</div>
              <div className="mt-1 font-medium text-gray-900">{x.h}</div>
              <div className="mt-2 text-sm text-gray-700">{x.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


