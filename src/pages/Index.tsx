
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemMitigationSection from '../components/ProblemMitigationSection';
import HowItWorksHero from '../components/HowItWorksHero';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';
import OwnerStyleFAQ from '@/components/OwnerStyleFAQ';

const Index = () => {
  return (
    <div className="min-h-screen font-inter w-full">
      <Header />
      <HeroSection />
      <ProblemMitigationSection />
      <HowItWorksHero />
      <HowItWorksSection />
      <OwnerStyleFAQ
        items={[
          { question: 'How do I get started?', answer: (
            <div>
              <p>Book a 30‑minute consult. As part of booking, you’ll answer a few scoping questions so we can recommend a stack.</p>
              <p className="mt-2">On the call, we confirm domains, volumes, tools, and timelines — then start the buildout.</p>
            </div>
          ) },
          { question: 'How fast is setup?', answer: (
            <div>
              <p>Typical setup takes a few days after we have domain access and tool accounts. Timing depends on inbox provisioning and warmup.</p>
              <p className="mt-2">We share a handoff doc and safety limits so you can start sending confidently.</p>
            </div>
          ) },
          { question: 'What do we need to buy?', answer: (
            <div>
              <p>You’ll pay providers directly for domains, inboxes, and your sending tool (e.g. Instantly, Smartlead). We may earn affiliate commission, but your price is the same.</p>
            </div>
          ) },
          { question: 'Who owns the accounts?', answer: (
            <div>
              <p>You do. All accounts are in your name. We document credentials sharing best practices if you grant temporary access.</p>
            </div>
          ) },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Index;
