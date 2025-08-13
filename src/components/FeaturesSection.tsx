
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-10">
          Give your business the same leverage the big brands use
        </h2>

        {/* Outer rounded beige container */}
        <div className="rounded-[48px] overflow-hidden shadow-sm">
          <div className="bg-gradient-to-b from-white to-[#F5F6F7]/60 p-6 md:p-10">
            {/* Top wide card (separate) */}
            <div
              className="relative rounded-[28px] overflow-hidden shadow-md bg-white h-[360px] md:h-[420px] mb-6 md:mb-8"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2400&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
              <div className="absolute bottom-6 inset-x-6">
                <div className="inline-flex items-center bg-white/80 backdrop-blur rounded-full px-4 py-2 border border-white/60 shadow-sm">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Mobile workflows and dashboards your VA runs daily</span>
                </div>
              </div>
            </div>

            {/* Bottom two cards (separate) */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-md bg-white h-[300px] md:h-[340px]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1800&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-black/0" />
                <div className="absolute left-5 right-5 top-6">
                  <div className="backdrop-blur bg-white/85 rounded-2xl shadow-sm border border-white/60 p-3 flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gray-200" />
                    <div className="h-3 w-32 md:w-48 rounded bg-gray-200" />
                  </div>
                  <div className="mt-4 rounded-2xl bg-white shadow-md border border-gray-100 p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gray-100" />
                    <div className="flex-1">
                      <div className="h-3 w-40 md:w-56 rounded bg-gray-200 mb-2" />
                      <div className="h-2 w-28 rounded bg-gray-100" />
                    </div>
                    <div className="h-8 w-20 rounded-lg bg-blue-600/90" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <p className="text-gray-800/90 text-sm md:text-base font-medium">
                    Rank higher with an <span className="font-semibold">AI‑powered site</span> maintained by your VA.
                  </p>
                </div>
              </div>

              {/* Right card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-md bg-white h-[300px] md:h-[340px]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556909190-b92f0be16f2b?q=80&w=1800&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute left-6 right-6 top-10">
                  <div className="rotate-[-2deg] translate-y-1 md:translate-y-2 rounded-2xl bg-white shadow-xl border border-gray-100 p-5 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gray-100" />
                      <div className="flex-1">
                        <div className="h-3 w-40 md:w-56 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-28 bg-gray-100 rounded" />
                      </div>
                      <div className="h-8 w-16 rounded-lg bg-gray-900" />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 translate-x-6 md:translate-x-10 rotate-2 rounded-2xl bg-white shadow-lg border border-gray-100 p-5 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gray-100" />
                      <div className="flex-1">
                        <div className="h-3 w-36 md:w-48 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-24 bg-gray-100 rounded" />
                      </div>
                      <div className="h-8 w-16 rounded-lg bg-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <p className="text-gray-800/90 text-sm md:text-base font-medium">
                    Scale output with <span className="font-semibold">standard operating systems</span> your VA executes daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
