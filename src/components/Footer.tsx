
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F1ECE4] rounded-t-[56px] md:rounded-t-[64px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero-style image with CTA above the links */}
        <div className="pt-10 md:pt-12">
          <div className="rounded-[32px] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2400&auto=format&fit=crop"
              alt="Team working together"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-10">
                <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">Stand up your cold email system, safely.</h3>
                <Link href="/book-a-demo" className="mt-4 inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg白/90">Book a free buildout</Link>
            </div>
            </div>
          </div>
        </div>
        {/* Top row with logo left and callout tiles right */}
        <div className="pt-10 md:pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center">
            <img src="/onvally_logo.png" alt="onvally" className="h-12 md:h-16 w-auto" />
          </div>
          <div className="md:ml-auto w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 md:gap-5">
            <Link href="/demo" className="relative group w-full sm:w-[240px] md:w-[300px] rounded-2xl bg-[#0E0F10] text-white p-5 md:p-6 hover:bg-black/95 transition-colors">
            <div className="text-base md:text-lg font-medium tracking-tight">Get a free demo</div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
            <Link href="/how-it-works" className="relative group w-full sm:w-[240px] md:w-[300px] rounded-2xl bg-[#cdb8a3] text-gray-900 p-5 md:p-6 hover:opacity-95 transition-opacity">
              <div className="text-base md:text-lg font-medium tracking-tight">See how it works</div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
            </div>
        </div>

        {/* Links grid */}
        <div className="pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-xs tracking-wider text-gray-500 mb-3">PAGES</div>
            <ul className="space-y-2.5">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-black transition-colors">How it works</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
              <li><Link href="/book-a-demo" className="text-gray-600 hover:text-black transition-colors">Book a free buildout</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-wider text-gray-500 mb-3">RESOURCES</div>
            <ul className="space-y-2.5">
              <li><Link href="/comparison" className="text-gray-600 hover:text-black transition-colors">Why free? (affiliate)</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-black transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-wider text-gray-500 mb-3">COMPANY</div>
            <ul className="space-y-2.5">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-black transition-colors">About</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
              <li><Link href="/book-a-demo" className="text-gray-600 hover:text-black transition-colors">Book</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-wider text-gray-500 mb-3">SUPPORT</div>
            <ul className="space-y-2.5">
              <li><a href="tel:+15106302397" className="text-gray-600 hover:text-black transition-colors">(510) 630‑2397</a></li>
              <li><a href="mailto:support@onvally.com" className="text-gray-600 hover:text-black transition-colors">support@onvally.com</a></li>
            </ul>
          </div>
            </div>

        {/* Bottom legal row */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-600">Free Cold Email Buildout. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
            {/* Refund Policy removed */}
            <Link href="/replacement-policy" className="text-gray-600 hover:text-black transition-colors">Replacement Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
