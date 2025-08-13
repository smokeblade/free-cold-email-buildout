import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import roles from '@/data/roles';
import { Check, ClipboardList, Clock, Mail, Calendar, FileText, ArrowUpRight, Star } from 'lucide-react';
import PlacementGuaranteeSection from '@/components/PlacementGuaranteeSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const bullets = [
  { icon: <Mail className="w-5 h-5 text-blue-600" />, text: 'Inbox triage and replies using approved templates' },
  { icon: <Calendar className="w-5 h-5 text-blue-600" />, text: 'Calendar ownership: scheduling, reschedules, buffers' },
  { icon: <ClipboardList className="w-5 h-5 text-blue-600" />, text: 'Task capture, prioritization, and daily follow‑ups' },
  { icon: <FileText className="w-5 h-5 text-blue-600" />, text: 'Document prep, slide decks, meeting notes, summaries' },
  { icon: <Clock className="w-5 h-5 text-blue-600" />, text: 'Recurring SOPs run on time with clear SLAs' },
];

const outcomes = [
  'Founder time protected and focused on high‑leverage work',
  'Predictable throughput on daily admin and follow‑ups',
  'Clean documentation and repeatable processes (SOPs)',
  'Professional communication with stakeholders and clients',
];

const reviews = [
  {
    quote: 'Our Admin VA keeps communication tight and deadlines on track. We finally run like a process‑driven team.',
    author: 'Maya S — COO',
  },
  {
    quote: 'Onboarding was fast. Within a week, inbox and calendar were running on rails with SOPs.',
    author: 'Alex R — Founder',
  },
  {
    quote: 'Follow‑ups and documentation are immaculate. The team executes instead of chasing tasks.',
    author: 'Daniel K — Head of Ops',
  },
  {
    quote: 'Calendar ownership alone paid for itself. Fewer misses, more deep‑work blocks for leadership.',
    author: 'Sarah M — CEO',
  },
];

const AdminVA: React.FC = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Administrative Virtual Assistant</h1>
              <p className="mt-3 md:text-lg text-gray-700">Protect founder time, keep communication tight, and run recurring admin with clear SLAs. Get predictable output from day one.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">Starting from $1,395 / month</div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Get matched in 48 hours
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a href="#scope" className="group relative text-gray-700 text-[15px] font-medium px-6 py-3 rounded-lg border border-gray-200 hover:bg-white">
                  <span className="absolute inset-0 bg-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">See scope & SOPs</span>
                </a>
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden bg-black/5 aspect-[4/3] md:aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop" alt="Admin VA working" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience logos (from partner marquee) */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-medium text-gray-500 tracking-wide">Our Admin VAs have experience from</p>
          <div className="mt-4 overflow-x-auto">
            <div className="inline-flex items-center gap-10 md:gap-12 whitespace-nowrap opacity-90">
              {[
                'https://cdn.brandfetch.io/microsoft.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/paypal.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/visa.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/airbnb.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/att.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/netflix.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/amazon.com/w/200/h/80/logo',
                'https://cdn.brandfetch.io/jpmorganchase.com/w/200/h/80/logo',
              ].map((src, i) => (
                <img key={i} src={src} alt="brand" className="h-6 md:h-7 w-auto object-contain filter grayscale brightness-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What they do */}
      <section id="scope" className="py-12" style={{ background: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[32px] bg-white p-6 md:p-10 border border-gray-200/70">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">What this role handles</h2>
                <ul className="mt-5 space-y-3">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {b.icon}
                      <span className="text-gray-800">{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Expected outcomes</h3>
                <ul className="mt-4 space-y-2">
                  {outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-800">{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">Typical ramp: 7 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <AutoCarousel />
        </div>
      </section>

      {/* Cost comparison blurb */}
      <section className="py-8" style={{ background: '#F5F6F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">Comp in the U.S. vs onvally</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-500">US hire (Admin/EA)</div>
                  <div className="mt-1 text-2xl font-bold text-gray-900">$55k–$80k/yr</div>
                  <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>Benefits and payroll taxes</li>
                    <li>Recruiting time and onboarding</li>
                    <li>Coverage gaps and turnover risk</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-blue-200 p-4 bg-blue-50/40">
                  <div className="text-sm font-medium text-blue-600">onvally Admin VA</div>
                  <div className="mt-1 text-2xl font-bold text-blue-700">From $1,395/mo</div>
                  <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>48‑hour matching</li>
                    <li>Free replacement guarantee</li>
                    <li>Proven SOPs and QA support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">Save ≈70%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-10 border border-gray-200/70">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">Ready to meet your Admin VA?</h3>
            <p className="mt-2 text-gray-700">We’ll shortlist top candidates and share sample SOPs tailored to your workflow.</p>
            <div className="mt-6">
              <a href="/demo" className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get started
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee on role page */}
      <PlacementGuaranteeSection />

      <Footer />
    </div>
  );
};

export default AdminVA;

// Autoplay carousel component used above
const AutoCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api || paused) return
    const id = setInterval(() => api.scrollNext(), 4000)
    return () => clearInterval(id)
  }, [api, paused])

  return (
    <Carousel className="relative" opts={{ loop: true, align: 'start', duration: 40 }} setApi={setApi} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <CarouselContent className="-ml-2">
        {reviews.map((r, i) => (
          <CarouselItem key={i} className="basis-full md:basis-1/2 pl-2">
            <div className="rounded-3xl bg-[#0F172A] text-white p-6 shadow-sm h-full">
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-sm md:text-base">“{r.quote}”</p>
              <div className="mt-4 text-xs text-white/70">{r.author}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
      <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}