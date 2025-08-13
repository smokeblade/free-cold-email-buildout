import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlacementGuaranteeSection from '@/components/PlacementGuaranteeSection';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import roles from '@/data/roles';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const bullets = ['Ad creatives and social graphics', 'Pitch decks and one‑pagers', 'Brand‑consistent assets'];
const outcomes = ['Faster creative turnaround', 'Higher ad CTR', 'Polished brand'];
const reviews = [
  { quote: 'Design velocity went 3x.', author: 'Nadia R — Marketing' },
  { quote: 'Consistent, on‑brand delivery.', author: 'Tom S — Founder' },
  { quote: 'Ad CTR improved with faster iterations.', author: 'Will P — Growth' },
  { quote: 'Decks finally look enterprise‑grade.', author: 'Asha N — Sales' },
];

const role = roles.find(r => r.slug === 'graphic-designer');

const GraphicDesigner: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-[40px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Graphic Designer</h1>
            <p className="mt-3 md:text-lg text-gray-700">On‑brand, fast creatives for ads, social, and sales enablement.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">Starting from $1,695 / month</div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/demo" className="group inline-flex items-center gap-2 bg-blue-600 text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get matched in 48 hours
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div>
            <div className="relative rounded-3xl overflow-hidden bg-black/5 aspect-[4/3] md:aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" alt="Designer" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6 rounded-[32px] bg-white p-6 md:p-10 border border-gray-200/70">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">What this role handles</h2>
            <ul className="mt-5 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">{b}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Expected outcomes</h3>
            <ul className="mt-4 space-y-2">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span className="text-gray-800">{o}</span></li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">Typical ramp: 10 days</div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <AutoCarousel reviews={reviews} />
      </div>
    </section>
    <section className="py-8" style={{ background: '#F5F6F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Comp in the U.S. vs onvally</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="text-sm font-medium text-gray-500">US hire (Graphic Designer)</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{role?.usSalaryRange}</div>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Benefits and payroll taxes</li>
                  <li>Recruiting time and onboarding</li>
                  <li>Coverage gaps and turnover risk</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 p-4 bg-blue-50/40">
                <div className="text-sm font-medium text-blue-600">onvally Designer</div>
                <div className="mt-1 text-2xl font-bold text-blue-700">From {role?.startingFrom}</div>
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
    <PlacementGuaranteeSection />
    <Footer />
  </div>
);

export default GraphicDesigner;

const AutoCarousel: React.FC<{ reviews: typeof reviews }> = ({ reviews }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (!api || paused) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api, paused]);
  return (
    <Carousel className="relative" opts={{ loop: true, align: 'start', duration: 40 }} setApi={setApi} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <CarouselContent className="-ml-2">
        {reviews.map((r, i) => (
          <CarouselItem key={i} className="basis-full md:basis-1/2 pl-2">
            <div className="rounded-3xl bg-[#0F172A] text-white p-6 h-full">
              <div className="flex items-center gap-1 mb-3">{Array.from({ length: 5 }).map((_, k) => (<Star key={k} className="w-4 h-4" />))}</div>
              <p className="text-sm md:text-base">“{r.quote}”</p>
              <div className="mt-4 text-xs text-white/70">{r.author}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
      <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};


