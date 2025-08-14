"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Users, TrendingUp, Building, HeadphonesIcon, FileText, PenTool, Database, Code, User, Briefcase, Target, Palette, Share2, Calculator, BarChart3, DollarSign, Search, MessageCircle, Stethoscope, Home, Shield, Scale, Landmark, Phone, Video, Crown, Calendar } from 'lucide-react';
import Link from 'next/link';
import roles, { rolesByCategory } from '@/data/roles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  // Close timers to prevent flicker when moving from trigger → panel
  const servicesCloseTimer = useRef<number | undefined>(undefined);
  const resourcesCloseTimer = useRef<number | undefined>(undefined);
  const companyCloseTimer = useRef<number | undefined>(undefined);

  const cancelTimer = (timerRef: React.MutableRefObject<number | undefined>) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  const scheduleClose = (
    timerRef: React.MutableRefObject<number | undefined>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    cancelTimer(timerRef);
    timerRef.current = window.setTimeout(() => setter(false), 150);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resources = [
    {
      category: 'Learn',
      items: [
        { name: 'Blog', description: 'Latest insights and tips' },
        { name: 'Help Center', description: 'Find answers to common questions' },
        { name: 'Case Studies', description: 'Success stories from our clients' },
        { name: 'Support Center', description: 'Get help when you need it' },
        { name: 'Compare onvally', description: 'See how we stack up' }
      ]
    }
  ];

  const company = [
    {
      category: 'Company',
      items: [
        { name: 'Our Story', description: 'Learn about our mission' },
        { name: 'Careers', description: 'Join our growing team' },
        { name: 'Leadership', description: 'Meet our team' },
        { name: 'Press', description: 'Latest news and updates' },
        { name: 'Reviews', description: 'What clients say about us' }
      ]
    }
  ];

  const categoriesOrder: Array<keyof typeof rolesByCategory> = ['General','Popular','Other'];
  const roleIconBySlug: Record<string, React.ComponentType<any>> = {
    'admin-va': FileText,
    'customer-support': HeadphonesIcon,
    'data-entry': Database,
    'sales-sdr': Target,
    'graphic-designer': Palette,
    'bookkeeper': Calculator,
    'seo-specialist': Search,
    'call-center-agent': Phone,
    'executive-assistant': Crown,
    'appointment-setter': Calendar,
    'social-media-manager': Share2,
    'copywriter': PenTool,
  };

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
            {/* VA Roles */}
            <div 
              className="relative group"
              onMouseEnter={() => { cancelTimer(servicesCloseTimer); setIsServicesOpen(true); }}
              onMouseLeave={() => scheduleClose(servicesCloseTimer, setIsServicesOpen)}
            >
              <button className="group inline-flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
                <span>Roles</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu */}
              <div
                className={`fixed left-1/2 -translate-x-1/2 top-16 sm:top-20 w-full max-w-7xl bg-white shadow-xl rounded-xl border border-gray-100 z-50 transition-all duration-300 ease-out px-4 sm:px-6 ${
                  isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => { cancelTimer(servicesCloseTimer); setIsServicesOpen(true); }}
                onMouseLeave={() => scheduleClose(servicesCloseTimer, setIsServicesOpen)}
              >
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {categoriesOrder.map((cat) => (
                        <div key={cat} className="space-y-4">
                          <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-200 pb-2">{cat}</h3>
                          <div className="space-y-1">
                            {rolesByCategory[cat]?.map((r) => {
                              const Icon = roleIconBySlug[r.slug] || Briefcase;
                              return (
                                <Link key={r.slug} href={`/roles/${r.slug}`} className="group flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    <Icon className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-gray-900 text-xs group-hover:text-blue-600 transition-colors">{r.name}</div>
                                    <div className="text-[11px] text-gray-500 truncate">{r.blurb}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Find the perfect Virtual Assistant for your business needs</p>
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-medium opacity-60 cursor-not-allowed">Browse all roles</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            {/* How it works */}
            <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">How it works</Link>
            
            {/* Pricing */}
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">Pricing</Link>
            
            {/* Company Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => { cancelTimer(companyCloseTimer); setIsCompanyOpen(true); }}
              onMouseLeave={() => scheduleClose(companyCloseTimer, setIsCompanyOpen)}
            >
              <button className="group inline-flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
                <span>Company</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Company Dropdown Menu */}
              <div
                className={`fixed left-1/2 -translate-x-1/2 top-16 sm:top-20 w-full max-w-6xl bg-white shadow-xl rounded-xl border border-gray-100 z-50 transition-all duration-300 ease-out px-4 sm:px-6 ${
                  isCompanyOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => { cancelTimer(companyCloseTimer); setIsCompanyOpen(true); }}
                onMouseLeave={() => scheduleClose(companyCloseTimer, setIsCompanyOpen)}
              >
                <div className="flex">
                  {/* Left Side - Menu Items */}
                         <div className="w-1/2 p-8 border-r border-gray-100">
            {company.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8 last:mb-0">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          {category.category}
                        </h3>
                        <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                            item.name === 'Careers' ? (
                              <Link
                                key={itemIndex}
                                href="/careers"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">{item.name}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                              </Link>
                    ) : item.name === 'Leadership' ? (
                              <Link
                                key={itemIndex}
                                href="/leadership"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Leadership</div>
                                <div className="text-xs text-gray-500 mt-1">Meet our team</div>
                              </Link>
                            ) : item.name === 'Our Story' ? (
                              <Link
                                key={itemIndex}
                                href="/our-story"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Our Story</div>
                                <div className="text-xs text-gray-500 mt-1">Learn about our mission</div>
                              </Link>
                            ) : (
                                <Link
                                key={itemIndex}
                                  href="/demo"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">{item.name}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Side - Content Cards */}
                         <div className="w-1/2 p-8">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Featured Article Card */}
                      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Forbes</div>
                          <h3 className="text-lg font-bold mt-1">Next Billion-Dollar Startups</h3>
                        </div>
                        <div className="text-sm opacity-90">
                          onvally named to Forbes Next Billion-Dollar Startups 2024
                        </div>
                      </div>
                      
                      {/* Hiring Card */}
                      <div className="bg-gray-900 rounded-lg p-6 text-white relative">
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                          </div>
                        </div>
                         <div className="text-center">
                           <h3 className="text-lg font-bold mb-2">We're Hiring</h3>
                           <p className="text-sm opacity-80 mb-4">Join our mission to transform business operations</p>
                            <Link href="/careers" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                             View Openings
                           </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => { cancelTimer(resourcesCloseTimer); setIsResourcesOpen(true); }}
              onMouseLeave={() => scheduleClose(resourcesCloseTimer, setIsResourcesOpen)}
            >
              <button className="group inline-flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-normal px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
                <span>Resources</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Resources Dropdown Menu */}
              <div
                className={`fixed left-1/2 -translate-x-1/2 top-16 sm:top-20 w-full max-w-6xl bg-white shadow-xl rounded-xl border border-gray-100 z-50 transition-all duration-300 ease-out px-4 sm:px-6 ${
                  isResourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => { cancelTimer(resourcesCloseTimer); setIsResourcesOpen(true); }}
                onMouseLeave={() => scheduleClose(resourcesCloseTimer, setIsResourcesOpen)}
              >
                <div className="flex">
                  {/* Left Side - Menu Items */}
                  <div className="w-1/2 p-8 border-r border-gray-100">
                    {resources.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8 last:mb-0">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          {category.category}
                        </h3>
                        <div className="space-y-1">
                          {category.items.map((item, itemIndex) => (
                            item.name === 'Compare onvally' ? (
                              <Link
                                key={itemIndex}
                                href="/comparison"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Comparison</div>
                                <div className="text-xs text-gray-500 mt-1">onvally vs other options</div>
                              </Link>
                            ) : item.name === 'Case Studies' ? (
                              <Link
                                key={itemIndex}
                                href="/case-studies"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Case Studies</div>
                                <div className="text-xs text-gray-500 mt-1">Results from real teams</div>
                              </Link>
                            ) : item.name === 'Blog' ? (
                              <Link
                                key={itemIndex}
                                href="/blog"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Blog</div>
                                <div className="text-xs text-gray-500 mt-1">Latest insights and tips</div>
                              </Link>
                            ) : (
                                <Link
                                key={itemIndex}
                                  href="/demo"
                                className="block py-2 px-0 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                <div className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">{item.name}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Side - Content Cards */}
                  <div className="w-1/2 p-8">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Featured Article Card */}
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Featured</div>
                          <h3 className="text-lg font-bold mt-1">How VAs Transform Small Businesses</h3>
                        </div>
                        <div className="text-sm opacity-90">
                          Discover how virtual assistants are revolutionizing business operations and driving growth.
                        </div>
                      </div>
                      
                      {/* Hiring Card */}
                      <div className="bg-gray-900 rounded-lg p-6 text-white relative">
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                          </div>
                        </div>
                         <div className="text-center">
                           <h3 className="text-lg font-bold mb-2">We're Hiring</h3>
                           <p className="text-sm opacity-80 mb-4">Join our mission to transform business operations</p>
                            <Link href="/careers" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                             View Openings
                           </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </nav>

          {/* Login and CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200">
              Login
            </Link>
            <Link href="/demo" className="group inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 h-10 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Get Started
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
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
              {/* Roles removed */}
              <Link href="/how-it-works" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">How it works</Link>
                <Link href="/pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Pricing</Link>
              <Link href="/careers" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Careers</Link>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Company</a>
              <Link href="/blog" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Blog</Link>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Resources</a>
              <div className="pt-2 border-t border-gray-100">
                <Link href="/demo" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2 mb-3">Login</Link>
                <Link href="/demo" className="w-full inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
