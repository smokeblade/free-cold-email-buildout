export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BookADemoPage() {
  const bookingUrl = "https://calendly.com/your-team/free-buildout"; // TODO: replace with real link
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold">Book a free buildout</h1>
      <p className="text-black/70 dark:text-white/70">
        Pick a time that works. We’ll cover scope, providers, and timelines.
      </p>

      <div className="aspect-video w-full rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-black/5 dark:bg-white/5">
        <iframe
          title="Booking"
          src={bookingUrl}
          className="w-full h-full"
        />
      </div>

      <p className="text-sm">
        Having trouble? <a className="underline" href={bookingUrl} target="_blank" rel="noreferrer">Open the booking page</a> in a new tab.
      </p>
    </main>
  );
}


