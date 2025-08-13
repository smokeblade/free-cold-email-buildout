'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';

const team = [
  {
    name: 'Nils Feldmann',
    title: 'Founder & CEO',
    src: 'https://framerusercontent.com/images/MDDoXLw9J8Hd246SSXz2Hbp2Y0.jpeg?scale-down-to=512'
  },
  {
    name: 'Arlyn Reginio',
    title: 'Recruiting & Operations Lead',
    src: 'https://framerusercontent.com/images/YlbioNkfIUDmoFc4jNl3bNi6qTo.png?scale-down-to=512'
  },
  {
    name: 'Janine Merker',
    title: 'COO',
    src: 'https://framerusercontent.com/images/pPTgPay0RLs8rUtvjk8LP0rhs30.png'
  },
  {
    name: 'Sarah Eltaweel',
    title: 'Head of GTM Operations',
    src: 'https://media.licdn.com/dms/image/v2/D4D03AQFKgRYu0kqaDA/profile-displayphoto-shrink_400_400/B4DZZfPvZSG0Ao-/0/1745354684546?e=1757548800&v=beta&t=Xa9Lw3igI2eSEnONrupM3-lgBbMDCDpthZotKGDQwHs',
    mono: true,
  },
]

const About: React.FC = () => {
  useSEO(
    'onvally® | Leadership — Meet the team',
    'Meet the leadership team at onvally powering predictable output with elite Virtual Assistants.'
  );
  return (
  <div className="min-h-screen font-inter">
    <Header />
    {/* Hero */}
    <section className="pt-28 md:pt-32 pb-10" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] md:rounded-[56px] overflow-hidden bg-gradient-to-b from-white to-[#F5F6F7] p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">We help teams scale output with elite remote talent</h1>
          <p className="mt-3 md:text-lg text-gray-700 max-w-3xl mx-auto">onvally matches you with rigorously vetted Virtual Assistants across operations, revenue, and creative—backed by SOPs and our free replacement guarantee.</p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          ['48 hrs', 'Average matching time'],
          ['70%+', 'Avg. cost savings'],
          ['400+', 'Roles placed'],
          ['25+', 'Countries served'],
        ].map(([k, v], i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="text-2xl font-semibold text-gray-900">{k}</div>
            <div className="text-sm text-gray-600 mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Team */}
    <section id="team" className="py-12" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[32px] bg-white p-6 md:p-10 border border-gray-200/70">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center">Leadership</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                <div className="aspect-[4/4] bg-gray-100 overflow-hidden">
                  <img src={m.src} alt={m.name} className={`w-full h-full object-cover ${m.mono ? 'filter grayscale' : ''}`} />
                </div>
                <div className="p-4">
                  <div className="text-base font-semibold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-600 mt-0.5">{m.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[{
          h: 'Operational excellence',
          p: 'We ship clear SOPs and QA so output is predictable week after week.'
        },{
          h: 'Bias for action',
          p: 'We iterate fast and keep feedback loops tight with clients and talent.'
        },{
          h: 'Long-term partnership',
          p: 'We focus on durable systems that compound efficiency and throughput.'
        }].map((v, i) => (
          <div key={i} className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">{v.h}</h3>
            <p className="text-sm text-gray-700 mt-2">{v.p}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default About;


