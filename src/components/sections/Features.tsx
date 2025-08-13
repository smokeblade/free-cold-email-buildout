export function FeaturesSection() {
  const features = [
    {
      title: "Domain + DNS setup",
      desc: "Subdomain strategy, SPF/DKIM/DMARC, tracking, and bounce handling configured correctly.",
    },
    {
      title: "Inbox provisioning",
      desc: "Guidance on number of inboxes per domain, aliases, and safe rotation policies.",
    },
    {
      title: "Warmup & health",
      desc: "Inbox warmup and health monitors to reduce spam folder risk and protect domain reputation.",
    },
    {
      title: "Sending tool setup",
      desc: "Connect your sending platform, custom tracking domain, custom headers, and webhook logging.",
    },
    {
      title: "Safety guardrails",
      desc: "Rate limits per inbox, ramp plans, and reply-handling that won’t burn your domains.",
    },
    {
      title: "Templates + cadences",
      desc: "Deliverability‑friendly templates and multi‑step cadences with sane defaults.",
    },
  ];
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
          Everything you need for safe cold email
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="text-base font-medium text-gray-900">{f.title}</div>
              <div className="mt-2 text-sm text-gray-700">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


