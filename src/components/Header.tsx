"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // simplified header: no extra menus

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/onvally_logo.png" 
                alt="onvally" 
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100">How it works</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100">Pricing</Link>
            <Link href="/demo" className="group inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 h-10 rounded-lg hover:bg-blue-700 transition-colors">Start Free Buildout</Link>
          </nav>

          {/* Right-side CTA (desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href="/demo" className="group inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 h-10 rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Buildout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-100 z-50">
            <nav className="px-4 sm:px-6 py-4 space-y-3">
              <Link href="/how-it-works" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">How it works</Link>
              <Link href="/pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Pricing</Link>
              <div className="pt-2 border-t border-gray-100">
                <Link href="/demo" className="w-full inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">Start Free Buildout</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
