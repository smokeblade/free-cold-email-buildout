import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => (
  <div className="min-h-screen font-inter">
    <Header />
    <section className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <h1>Terms & Conditions</h1>
        <p>Last updated: August 2025</p>
        <p>These Terms & Conditions (the “Terms”) govern your access to and use of the websites, products, and services provided by onvally, LLC (“onvally,” “we,” “us,” or “our”). By accessing or using our site or services, you agree to be bound by these Terms.</p>

        <h2>1. Services</h2>
        <p>onvally provides recruiting, placement, and operational support services for remote talent (“Talent”) for client businesses (“Clients”). Unless expressly stated in writing, Talent are engaged by the Client, and onvally is not the employer of record for Talent.</p>

        <h2>2. Accounts and Eligibility</h2>
        <ul>
          <li>You must be at least 18 years old and have the authority to bind your organization.</li>
          <li>You are responsible for maintaining the confidentiality of your account and for all activity under it.</li>
        </ul>

        <h2>3. Fees and Billing</h2>
        <ul>
          <li>Pricing is as listed on our site or in a signed order form or proposal.</li>
          <li>Fees are billed in advance monthly unless otherwise specified.</li>
          <li>Late payments may incur a finance charge and/or service suspension.</li>
        </ul>

        <h2>4. Cancellations, Refunds, and Replacements</h2>
        <p>Our general policies are described in our <a href="/refund-policy">Refund Policy</a> and <a href="/replacement-policy">Replacement Policy</a>. Where there is a conflict, a mutually signed agreement controls.</p>

        <h2>5. Client Responsibilities</h2>
        <ul>
          <li>Provide Talent with tools, access, and context to perform assigned work.</li>
          <li>Comply with all applicable laws including, where applicable, employment and data protection regulations.</li>
          <li>Not direct Talent to perform unlawful or unsafe activities.</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>As between Client and onvally, Client owns all intellectual property in Client materials and deliverables created by Talent for Client. onvally retains ownership of pre‑existing materials, methodologies, and know‑how. onvally grants Client a non‑exclusive license to use onvally materials solely to receive the services.</p>

        <h2>7. Confidentiality</h2>
        <p>Each party will protect the other party’s confidential information with reasonable care and use it only as necessary to perform under these Terms.</p>

        <h2>8. Data Protection</h2>
        <p>We process personal data in accordance with our <a href="/privacy">Privacy Policy</a>. Client is responsible for having a lawful basis to share any personal data with onvally and for instructing Talent consistent with applicable laws.</p>

        <h2>9. Prohibited Uses</h2>
        <ul>
          <li>No reverse engineering, scraping, or misuse of the site or services.</li>
          <li>No infringement, harassment, or violation of rights of others.</li>
        </ul>

        <h2>10. Disclaimers</h2>
        <p>EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” ONVALLY DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.</p>

        <h2>11. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONVALLY WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, COVER, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM IS LIMITED TO THE AMOUNTS PAID BY CLIENT TO ONVALLY FOR THE SERVICES DURING THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</p>

        <h2>12. Indemnification</h2>
        <p>You agree to defend, indemnify, and hold harmless onvally from any claims arising out of your misuse of the services, violation of these Terms, or violation of any law or third‑party right.</p>

        <h2>13. Term and Termination</h2>
        <p>Either party may terminate for material breach if not cured within 15 days of notice. Sections that by their nature should survive termination will survive, including Fees, IP, Confidentiality, Disclaimers, Limitations, and Indemnities.</p>

        <h2>14. Governing Law; Dispute Resolution</h2>
        <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of laws. Disputes will be resolved in the state or federal courts located in Delaware, and the parties consent to jurisdiction and venue there.</p>

        <h2>15. Changes to these Terms</h2>
        <p>We may update these Terms from time to time. We will post the updated Terms on this page and update the “Last updated” date above.</p>

        <h2>16. Contact</h2>
        <p>Questions? Contact us at <a href="mailto:support@onvally.com">support@onvally.com</a>.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;


