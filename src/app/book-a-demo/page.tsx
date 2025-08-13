export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BookADemoPage() {
  const bookingUrl = "https://calendly.com/your-team/free-buildout"; // TODO: replace with real link
  return (
    <main>
      <section className="pt-20 md:pt-28 pb-8" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/70">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">Book a free buildout</h1>
            <p className="mt-3 text-gray-700 md:text-lg">Pick a time that works. We’ll cover scope, providers, and timelines.</p>
            <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-3 md:p-5 shadow-sm">
              <div className="relative">
                <iframe title="Booking" src={bookingUrl} className="w-full" style={{ minHeight: 600, border: 'none' }} />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Having trouble? <a className="underline" href={bookingUrl} target="_blank" rel="noreferrer">Open the booking page</a> in a new tab.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


