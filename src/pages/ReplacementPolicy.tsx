import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReplacementPolicy: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <h1>Replacement Policy</h1>
        <p>Last updated: August 2025</p>
        <p>If a placed Talent is not a fit, we will introduce a replacement at no additional onvally fee within the replacement window below.</p>

        <h2>Eligibility</h2>
        <ul>
          <li>Replacement requests must be submitted within the first 30 days of Talent start date.</li>
          <li>Client must provide clear, written feedback and reasonable time for remediation during the window.</li>
        </ul>

        <h2>What’s Included</h2>
        <ul>
          <li>New candidate sourcing and screening.</li>
          <li>Handover coordination to minimize disruption.</li>
        </ul>

        <h2>Exclusions</h2>
        <ul>
          <li>Role or scope changes after start without mutual agreement.</li>
          <li>Unclear instructions or lack of access/tools needed to perform the work.</li>
          <li>Misconduct by Client or unsafe work conditions.</li>
        </ul>

        <h2>How to Request a Replacement</h2>
        <ul>
          <li>Email <a href="mailto:support@onvally.com">support@onvally.com</a> with details and examples.</li>
          <li>We will review and respond within 5 business days with next steps.</li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
);

export default ReplacementPolicy;


