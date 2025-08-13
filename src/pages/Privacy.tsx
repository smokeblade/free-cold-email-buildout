import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2025</p>
        <p>This Privacy Policy explains how onvally, LLC ("onvally", "we", "us", or "our") collects, uses, and shares information about you when you use our websites, products, and services (collectively, the "Services").</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Contact data: name, email address, phone number, company.</li>
          <li>Account data: credentials, preferences, usage logs.</li>
          <li>Payment data: billing address and limited payment details (processed by our payment processors).</li>
          <li>Technical data: IP address, device identifiers, browser, pages viewed, cookies.</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Provide, maintain, and improve the Services.</li>
          <li>Process transactions and send related information.</li>
          <li>Respond to comments and questions; provide customer support.</li>
          <li>Send marketing communications, with opt‑out options.</li>
          <li>Monitor and analyze usage and activities.</li>
          <li>Detect, investigate, and prevent security incidents and misuse.</li>
        </ul>

        <h2>How We Share Information</h2>
        <ul>
          <li>With vendors and service providers performing services for us.</li>
          <li>With your consent or at your direction (e.g., candidate introductions).</li>
          <li>To comply with laws or to protect rights, property, and safety.</li>
          <li>In connection with a business transfer (e.g., merger, acquisition).</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to operate and improve the Services and for analytics and advertising. You can control cookies through your browser settings; disabling cookies may affect some features.</p>

        <h2>Data Retention</h2>
        <p>We retain information for as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, or port your data, and to object to or restrict certain processing. To exercise rights, contact us at support@onvally.com.</p>

        <h2>International Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your own. Where required, we implement appropriate safeguards, such as standard contractual clauses.</p>

        <h2>Security</h2>
        <p>We use reasonable administrative, technical, and physical safeguards to protect information. However, no method of transmission or storage is completely secure.</p>

        <h2>Children</h2>
        <p>Our Services are not directed to children under 16. We do not knowingly collect personal information from children under 16.</p>

        <h2>Changes</h2>
        <p>We may update this policy from time to time. We will post changes on this page with an updated "Last updated" date.</p>

        <h2>Contact</h2>
        <p>Questions about this policy? Contact us at <a href="mailto:support@onvally.com">support@onvally.com</a>.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacy;


