"use client";
import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, MapPin, Clock, DollarSign, Globe2, Sparkles, GraduationCap, Users, ShieldCheck, Headphones, PenTool, Megaphone, Code2, ShoppingCart, BarChart3, HeartPulse, Building2, Home, Database, Stethoscope, FolderCog, Calendar } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  category: string;
  level: 'Junior' | 'Mid' | 'Senior';
  location: string;
  compensation: string;
  timezone: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  summary: string;
  responsibilities: string[];
  requirements: string[];
  tools: string[];
}

const jobOpeningsSeed: JobOpening[] = [
  {
    id: 'ea-senior',
    title: 'Executive Assistant VA',
    category: 'Executive Assistance',
    level: 'Senior',
    location: 'Remote',
    compensation: 'USD $1,600–$2,400/mo',
    timezone: 'US ET/CT overlap',
    type: 'Full-time',
    summary: 'Own the calendar, inbox, travel, and follow-ups for a busy executive. You drive outcomes, not tasks.',
    responsibilities: [
      'Inbox triage, drafting replies, and proactive follow-ups',
      'Complex calendar orchestration across time zones',
      'Meeting prep: briefs, agendas, research, and document assembly',
      'Travel planning and expense reconciliation',
      'Light project management to keep initiatives moving',
    ],
    requirements: [
      '3+ years supporting founders, C‑suite, or senior leaders',
      'Excellent written English and stakeholder communication',
      'High ownership mindset and sound judgment',
      'Strong with Google Workspace, Slack, Notion, and Zoom',
    ],
    tools: ['Google Workspace', 'Slack', 'Notion', 'Zoom', 'Superhuman'],
  },
  {
    id: 'cs-mid',
    title: 'Customer Support VA (Omnichannel)',
    category: 'Customer Support',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $900–$1,400/mo',
    timezone: 'Flexible, rotating shifts',
    type: 'Full-time',
    summary: 'Support customers via chat, email, and phone with empathy and clear resolutions.',
    responsibilities: [
      'Frontline chat, email, and occasional phone coverage',
      'Create and update help center articles and macros',
      'Escalation triage and bug reproduction for product team',
      'Satisfaction and SLA tracking using internal dashboards',
    ],
    requirements: [
      '2+ years in customer support or service roles',
      'Excellent written English and conflict resolution',
      'Experience with Intercom, Zendesk, or Gorgias',
    ],
    tools: ['Intercom', 'Zendesk', 'Gorgias', 'Aircall', 'Notion'],
  },
  {
    id: 'sdr-mid',
    title: 'Sales Development VA (Outbound)',
    category: 'Sales',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,000–$1,800/mo + performance bonus',
    timezone: 'US hours preferred',
    type: 'Full-time',
    summary: 'Research, prospect, and book meetings for clients. You’ll own the top of funnel.',
    responsibilities: [
      'Prospect research and list building based on ICP',
      'Multi‑channel outreach (email, LinkedIn, light calling)',
      'Daily activity and pipeline hygiene in CRM',
      'A/B testing scripts and reporting on performance',
    ],
    requirements: [
      '1–3 years in SDR/BDR or lead gen role',
      'Confident written English and persuasive communication',
      'Familiar with Apollo, HubSpot, or Salesloft',
    ],
    tools: ['HubSpot', 'Apollo', 'Lemlist', 'LinkedIn Sales Nav'],
  },
  {
    id: 'mkt-junior',
    title: 'Marketing VA (Lifecycle + Social)',
    category: 'Marketing',
    level: 'Junior',
    location: 'Remote',
    compensation: 'USD $900–$1,300/mo',
    timezone: 'Any with 4h US overlap',
    type: 'Full-time',
    summary: 'Publish content, schedule social, and assist with newsletters and basic analytics.',
    responsibilities: [
      'Plan and schedule social calendars across channels',
      'Support newsletters, landing page updates, and blog publishing',
      'Utm tagging and light analytics reporting',
      'Asset coordination with designers and writers',
    ],
    requirements: [
      '1–2 years in a marketing support role',
      'Comfortable with Canva/Adobe and Web CMS (e.g., Webflow)',
      'Strong written English and organization',
    ],
    tools: ['Canva', 'Figma', 'Webflow', 'Hootsuite', 'Google Analytics'],
  },
  {
    id: 'writer-mid',
    title: 'Content Writer VA (SEO + Conversion)',
    category: 'Content',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,000–$1,600/mo',
    timezone: 'Flexible',
    type: 'Full-time',
    summary: 'Write SEO‑friendly, conversion‑oriented content across blogs, emails, and landing pages.',
    responsibilities: [
      'Draft long‑form and short‑form content from briefs or outlines',
      'Keyword research and on‑page SEO best practices',
      'Coordinate edits with SMEs and designers',
    ],
    requirements: [
      'Portfolio with polished English writing',
      'SEO familiarity and research ability',
      'Comfort using AI tools responsibly',
    ],
    tools: ['Google Docs', 'Ahrefs', 'SurferSEO', 'Notion'],
  },
  {
    id: 'book-mid',
    title: 'Bookkeeping VA',
    category: 'Finance & Ops',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,100–$1,700/mo',
    timezone: 'Any with 3h US overlap',
    type: 'Part-time',
    summary: 'Own monthly close, reconciliations, billing support, and vendor management.',
    responsibilities: [
      'Monthly reconciliations and P&L reviews',
      'Invoice preparation and AR follow‑ups',
      'Vendor onboarding and payment runs',
    ],
    requirements: [
      '2+ years bookkeeping experience',
      'QuickBooks or Xero proficiency',
      'Strong attention to detail and discretion',
    ],
    tools: ['QuickBooks', 'Xero', 'Expensify', 'Bill.com'],
  },
  {
    id: 'data-junior',
    title: 'Data Entry / Research VA',
    category: 'Operations',
    level: 'Junior',
    location: 'Remote',
    compensation: 'USD $700–$1,000/mo',
    timezone: 'Flexible',
    type: 'Full-time',
    summary: 'Clean and enrich spreadsheets, maintain CRMs, and run repeatable research tasks.',
    responsibilities: [
      'Accurate data entry and enrichment',
      'QA and deduplication of lists',
      'Basic spreadsheet metrics and reporting',
    ],
    requirements: [
      'Strong spreadsheet comfort (Sheets/Excel)',
      'High accuracy and reliable throughput',
    ],
    tools: ['Google Sheets', 'Excel', 'Zapier', 'HubSpot'],
  },
  {
    id: 'tech-mid',
    title: 'Technical VA (No‑Code + QA)',
    category: 'Technical',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,200–$2,000/mo',
    timezone: 'Any with 4h US overlap',
    type: 'Full-time',
    summary: 'Operate no‑code tools, maintain automations, and assist with QA and documentation.',
    responsibilities: [
      'Build and maintain automations with Make/Zapier',
      'QA test plans across web flows',
      'Internal documentation and support requests',
    ],
    requirements: [
      'Experience with Make or Zapier and web QA',
      'Comfort with HTML/CSS basics and DOM tooling',
    ],
    tools: ['Zapier', 'Make', 'Airtable', 'Notion', 'Postman'],
  },
  {
    id: 're-va',
    title: 'Real Estate VA (Transactions)',
    category: 'Specialized',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,000–$1,600/mo',
    timezone: 'US hours preferred',
    type: 'Full-time',
    summary: 'Support broker teams with listings, transaction coordination, and CRM upkeep.',
    responsibilities: [
      'Listing prep, MLS updates, and document tracking',
      'Coordinate inspections, appraisals, and closings',
      'Manage leads and follow‑ups in CRM',
    ],
    requirements: [
      'Real estate admin experience',
      'Excellent coordination and communication',
    ],
    tools: ['Follow Up Boss', 'BoomTown', 'Dotloop', 'DocuSign'],
  },
  {
    id: 'med-va',
    title: 'Medical Admin VA (Telehealth)',
    category: 'Specialized',
    level: 'Mid',
    location: 'Remote',
    compensation: 'USD $1,100–$1,800/mo',
    timezone: 'US hours',
    type: 'Full-time',
    summary: 'Support clinic operations: scheduling, eligibility, and patient communication.',
    responsibilities: [
      'Patient scheduling and reminders',
      'Eligibility checks and insurance paperwork',
      'EMR data entry and follow‑ups',
    ],
    requirements: [
      'Experience in medical admin or telehealth support',
      'Discretion with PHI and HIPAA best practices',
    ],
    tools: ['Athenahealth', 'Kareo', 'RingCentral'],
  },
];

type FilterKey = 'All' | 'Executive Assistance' | 'Customer Support' | 'Sales' | 'Marketing' | 'Content' | 'Finance & Ops' | 'Operations' | 'Technical' | 'Specialized';

const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'All', label: 'All' },
    { key: 'Executive Assistance', label: 'Executive' },
    { key: 'Customer Support', label: 'Support' },
    { key: 'Sales', label: 'Sales' },
    { key: 'Marketing', label: 'Marketing' },
    { key: 'Content', label: 'Content' },
    { key: 'Finance & Ops', label: 'Finance & Ops' },
    { key: 'Operations', label: 'Operations' },
    { key: 'Technical', label: 'Technical' },
    { key: 'Specialized', label: 'Specialized' },
  ];

  const filteredJobs = useMemo(() => {
    if (activeFilter === 'All') return jobOpeningsSeed;
    return jobOpeningsSeed.filter(j => j.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[48px] overflow-hidden">
            <div className="bg-gradient-to-b from-white to-[#f0eae1]/70 p-8 md:p-12">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
                  Build your remote career with onvally
                </h1>
                <p className="mt-4 text-gray-600 text-base md:text-lg">
                  We place world‑class Virtual Assistants with fast‑growing companies. Remote‑first, outcome‑driven, with coaching and growth built‑in.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#open-roles" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    View open roles
                  </a>
                  <a href="/join-talentnetwork" className="inline-flex items-center bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">
                    Join talent network
                  </a>
                </div>
              </div>

              {/* Benefits highlights */}
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-white p-4">
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Remote‑first</div>
                      <div className="text-xs text-gray-600">Work from anywhere with stable internet</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-white p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Coaching & growth</div>
                      <div className="text-xs text-gray-600">Weekly playbooks, SOPs, and 1:1 guidance</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-white p-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Competitive pay</div>
                      <div className="text-xs text-gray-600">USD payments with on‑time payouts</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-white p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Great clients</div>
                      <div className="text-xs text-gray-600">Vetted startups and established brands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-white border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">How we hire</h2>
            <div className="mt-6 grid md:grid-cols-5 gap-4">
              {[{icon:Users, title:'Apply'}, {icon:FolderCog, title:'Skills Review'}, {icon:Headphones, title:'Interview'}, {icon:Briefcase, title:'Client Match'}, {icon:Calendar, title:'Start!'}].map((step, idx) => (
                <div key={idx} className="rounded-2xl border border-gray-100 p-4">
                  <step.icon className="w-5 h-5 text-blue-600" />
                  <div className="mt-2 font-medium text-sm text-gray-900">{step.title}</div>
                  <div className="text-xs text-gray-600">Step {idx+1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="py-6 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Open roles</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${activeFilter === f.key ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filteredJobs.map(job => (
              <Card key={job.id} className="overflow-hidden border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 transition-all">
                <CardHeader className="p-5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{job.level}</Badge>
                      <Badge className="bg-blue-600">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 line-clamp-2">{job.summary}</div>
                </CardHeader>
                <CardContent className="px-5 pb-0">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" />{job.location}</div>
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-gray-400" />{job.timezone}</div>
                    {/* Compensation removed for public listing */}
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {job.tools.slice(0,3).map(t => (
                      <Badge key={t} variant="secondary" className="bg-gray-100 text-gray-800">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button onClick={() => setSelectedJob(job)} className="bg-gray-900 hover:bg-black">View details</Button>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <a href={`/apply?role=${encodeURIComponent(job.id)}&title=${encodeURIComponent(job.title)}`}>Apply</a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Talent network CTA */}
          <div className="mt-10 text-center">
            <a href="/join-talentnetwork" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Don’t see a fit? Join our talent network →
            </a>
          </div>
        </div>
      </section>

      {/* Job dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent>
          {selectedJob && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedJob.title}</DialogTitle>
                <DialogDescription>
                  {selectedJob.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-900">Responsibilities</h3>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-5">Requirements</h3>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-5">Tools you’ll use</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedJob.tools.map(t => (
                      <Badge key={t} variant="secondary" className="bg-gray-100 text-gray-800">{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-gray-400" /> {selectedJob.location}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2"><Clock className="w-4 h-4 text-gray-400" /> {selectedJob.timezone}</div>
                    {/* Compensation hidden in modal per policy */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2"><Briefcase className="w-4 h-4 text-gray-400" /> {selectedJob.type} • {selectedJob.level}</div>
                    <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      <a href={`mailto:careers@onvally.com?subject=Application: ${encodeURIComponent(selectedJob.title)}`}>Apply via Email</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CareersPage;
