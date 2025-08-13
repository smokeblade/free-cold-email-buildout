export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function PricingPage() {
  return (
    <main>
      <section className="pt-20 md:pt-28 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/70">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">Pricing</h1>
            <p className="mt-3 text-gray-700 md:text-lg">Buildout is free. You cover software and inboxes directly. We’ll recommend options.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Inboxes", "Sending tool", "Warmup/monitoring"].map((t, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="font-medium text-gray-900">{t}</div>
                  <div className="text-sm text-gray-700 mt-1">Typical monthly cost varies by provider and volume; we’ll share ranges.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


