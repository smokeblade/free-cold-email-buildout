
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemMitigationSection from '../components/ProblemMitigationSection';
import HowItWorksHero from '../components/HowItWorksHero';
import FeaturesSection from '../components/FeaturesSection';
import PartnershipSection from '../components/PartnershipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TestimonialsSectionV2 from '../components/TestimonialsSectionV2';
import VAExpertiseSection from '../components/StateExpertiseSection';
// import CompetitorComparisonSection from '../components/CompetitorComparisonSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PlacementGuaranteeSection from '../components/PlacementGuaranteeSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import OwnerStyleFAQ from '@/components/OwnerStyleFAQ';

const Index = () => {
  return (
    <div className="min-h-screen font-inter w-full">
      <Header />
      <HeroSection />
      <ProblemMitigationSection />
      <HowItWorksHero />
      <FeaturesSection />
      <PartnershipSection />
      <TestimonialsSection />
      <TestimonialsSectionV2 />
      <VAExpertiseSection />
      {/* Comparison content moved to dedicated /comparison page */}
      <HowItWorksSection />
      <PlacementGuaranteeSection />
      <OwnerStyleFAQ
        items={[
          { question: 'How do I get started?', answer: (
            <div>
              <p>Book a 30‑minute consult. As part of booking, you’ll answer a few scoping questions so we can prepare.</p>
              <p className="mt-2">On the call, we confirm goals, coverage windows, tools, and success metrics—then kick off matching.</p>
            </div>
          ) },
          { question: 'How fast is matching?', answer: (
            <div>
              <p>We typically present 1–3 pre‑vetted candidates within ~72 hours. Timing can vary with demand and role specificity.</p>
              <p className="mt-2">All candidates pass skills tests, English/writing checks, tools proficiency, and reference screening.</p>
            </div>
          ) },
          { question: 'Who employs the VA?', answer: (
            <div>
              <p>Your VA is employed by onvally. We handle compliance, payroll, and benefits so you focus on outcomes—not admin.</p>
              <p className="mt-2">If it’s not a fit, our free replacement guarantee applies.</p>
            </div>
          ) },
          { question: 'Which time zones do you cover?', answer: (
            <div>
              <p>We support US and European hours. We recommend 4–6 hours overlap with your core team for speed and feedback.</p>
            </div>
          ) },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Index;
