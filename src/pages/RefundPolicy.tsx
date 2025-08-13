import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RefundPolicy: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <h1>Refund Policy</h1>
        <p>Last updated: August 2025</p>
        <p>We aim to make hiring remote talent fast and risk‑free. This Refund Policy explains when refunds may apply and how to request them.</p>

        <h2>Eligibility</h2>
        <ul>
          <li>Refunds are available for first‑month service fees if we fail to introduce at least one candidate who meets the role criteria within 21 days of payment.</li>
          <li>Refunds are not available after Talent has started working unless required by law or specified below.</li>
        </ul>

        <h2>Process</h2>
        <ul>
          <li>Contact <a href="mailto:support@onvally.com">support@onvally.com</a> within the eligibility window.</li>
          <li>Include your order details and the role description.</li>
          <li>We will respond within 5 business days with next steps.</li>
        </ul>

        <h2>Exclusions</h2>
        <ul>
          <li>Delays caused by Client unresponsiveness or changes in scope.</li>
          <li>Performance issues unrelated to agreed role requirements or beyond reasonable control.</li>
        </ul>

        <h2>Alternatives to Refund</h2>
        <p>In many cases, a free replacement under our <a href="/replacement-policy">Replacement Policy</a> is a faster resolution.</p>

        <h2>How Refunds Are Issued</h2>
        <p>Approved refunds are returned to the original payment method. Processing times vary by provider.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default RefundPolicy;


