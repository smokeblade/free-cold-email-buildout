export type Role = {
  slug: string;
  name: string;
  category: 'General' | 'Popular' | 'Other';
  blurb: string;
  usSalaryRange: string;
  startingFrom: string; // monthly price
  rampDays: number;
  bullets: string[];
  outcomes: string[];
  reviews: { quote: string; author: string }[];
};

export const roles: Role[] = [
  {
    slug: 'admin-va',
    name: 'Administrative Virtual Assistant',
    category: 'General',
    blurb: 'Inbox, calendar, SOPs, document prep, follow‑ups.',
    usSalaryRange: '$55k–$80k/yr',
    startingFrom: '$1,395/mo',
    rampDays: 7,
    bullets: [
      'Inbox triage and replies using approved templates',
      'Calendar ownership and meeting coordination',
      'Task capture, prioritization, and follow‑ups',
      'Docs, slide decks, minutes, summaries',
    ],
    outcomes: [
      'Protected focus time for leadership',
      'Predictable throughput on admin tasks',
      'Clean documentation and repeatable SOPs',
    ],
    reviews: [
      { quote: 'Runs our comms on rails. Night‑and‑day difference.', author: 'Maya S — COO' },
      { quote: 'Onboarding finished in a week. Calendar finally sane.', author: 'Alex R — Founder' },
    ],
  },
  {
    slug: 'customer-support',
    name: 'Customer Support Virtual Assistant',
    category: 'General',
    blurb: 'Help desk, chat, email tickets, SLAs.',
    usSalaryRange: '$40k–$55k/yr',
    startingFrom: '$1,395/mo',
    rampDays: 10,
    bullets: ['Ticket triage and responses', 'Macros/SOPs, CSAT tracking', 'Chat and email coverage'],
    outcomes: ['Faster response times', 'Higher CSAT', 'Clear ticket analytics'],
    reviews: [
      { quote: 'First response time dropped by 43%.', author: 'Nora T — Support Lead' },
      { quote: 'Coverage without adding headcount.', author: 'Phil D — COO' },
    ],
  },
  {
    slug: 'data-entry',
    name: 'Data Entry Virtual Assistant',
    category: 'General',
    blurb: 'CRM hygiene, spreadsheet updates, research.',
    usSalaryRange: '$35k–$48k/yr',
    startingFrom: '$1,395/mo',
    rampDays: 5,
    bullets: ['CRM updates and dedupe', 'Spreadsheet maintenance', 'Web research and list building'],
    outcomes: ['Accurate systems', 'Cleaner reports', 'Time back to ops'],
    reviews: [
      { quote: 'Error rate went near‑zero.', author: 'Sam K — Operations' },
      { quote: 'Freeed 15h/week for our team.', author: 'Irene P — PM' },
    ],
  },
  {
    slug: 'sales-sdr',
    name: 'Sales Development Representative (SDR)',
    category: 'Popular',
    blurb: 'Prospecting, outreach, qualifying, appointment setting.',
    usSalaryRange: '$50k–$75k/yr',
    startingFrom: '$1,595/mo',
    rampDays: 14,
    bullets: ['Prospect list building', 'Personalized outreach sequences', 'Booked meetings and handoffs'],
    outcomes: ['More qualified pipeline', 'Lower CPL', 'Predictable meeting volume'],
    reviews: [
      { quote: 'Meetings doubled in 30 days.', author: 'Victor L — VP Sales' },
      { quote: 'Steady, quality handoffs for AEs.', author: 'Paula C — AE' },
    ],
  },
  {
    slug: 'graphic-designer',
    name: 'Graphic Designer',
    category: 'Popular',
    blurb: 'Brand assets, ads, thumbnails, decks.',
    usSalaryRange: '$55k–$85k/yr',
    startingFrom: '$1,695/mo',
    rampDays: 10,
    bullets: ['Ad creatives and social graphics', 'Pitch decks and one‑pagers', 'Brand‑consistent assets'],
    outcomes: ['Faster creative turnaround', 'Higher ad CTR', 'Polished brand'],
    reviews: [
      { quote: 'Design velocity went 3x.', author: 'Nadia R — Marketing' },
      { quote: 'Consistent, on‑brand delivery.', author: 'Tom S — Founder' },
    ],
  },
  {
    slug: 'bookkeeper',
    name: 'Bookkeeper',
    category: 'Popular',
    blurb: 'AP/AR, reconciliations, monthly closes.',
    usSalaryRange: '$50k–$70k/yr',
    startingFrom: '$1,695/mo',
    rampDays: 14,
    bullets: ['Monthly closes and reconciliations', 'AP/AR processing', 'Clean reporting and audit prep'],
    outcomes: ['Timely books', 'Better cash visibility', 'Fewer surprises'],
    reviews: [
      { quote: 'Close time cut in half.', author: 'Elaine T — CFO' },
      { quote: 'Accurate, timely books every month.', author: 'Gabe U — Owner' },
    ],
  },
  {
    slug: 'seo-specialist',
    name: 'SEO Specialist',
    category: 'Popular',
    blurb: 'On‑page, content briefs, technical audits.',
    usSalaryRange: '$60k–$90k/yr',
    startingFrom: '$1,695/mo',
    rampDays: 21,
    bullets: ['Keyword research and content briefs', 'On‑page optimization', 'Technical audits and fixes'],
    outcomes: ['Higher rankings', 'More organic demos', 'Compounding growth'],
    reviews: [
      { quote: 'Organic leads up 72% in a quarter.', author: 'Raj P — Growth' },
      { quote: 'Great briefs our writers love.', author: 'Kim D — Content Lead' },
    ],
  },
  {
    slug: 'call-center-agent',
    name: 'Call Center Agent',
    category: 'Other',
    blurb: 'Inbound/outbound calls, scripts, QA.',
    usSalaryRange: '$38k–$50k/yr',
    startingFrom: '$1,395/mo',
    rampDays: 10,
    bullets: ['Inbound and outbound calls', 'Scripted QA‑driven conversations', 'CRM logging and follow‑ups'],
    outcomes: ['Higher answer rates', 'Consistent QA', 'Clean call notes'],
    reviews: [
      { quote: 'Professional phone presence.', author: 'Ana M — Ops' },
      { quote: 'Follow‑ups no longer slip.', author: 'Leo J — Sales' },
    ],
  },
  {
    slug: 'executive-assistant',
    name: 'Executive Assistant',
    category: 'Other',
    blurb: 'Executive comms, prep, travel, board materials.',
    usSalaryRange: '$65k–$100k/yr',
    startingFrom: '$1,895/mo',
    rampDays: 14,
    bullets: ['Executive inbox/calendar', 'Board materials and prep', 'Travel and stakeholder comms'],
    outcomes: ['Executives protected and prepared', 'Top‑tier materials', 'Flawless logistics'],
    reviews: [
      { quote: 'Feels like an in‑house EA.', author: 'Chris W — CEO' },
      { quote: 'Stakeholders rave about comms.', author: 'Dana B — COO' },
    ],
  },
  {
    slug: 'legal-assistant',
    name: 'Legal Assistant',
    category: 'Other',
    blurb: 'Case prep, discovery, document management, and filings support.',
    usSalaryRange: '$55k–$80k/yr',
    startingFrom: '$1,695/mo',
    rampDays: 14,
    bullets: ['Discovery and document organization', 'Drafting templates and filings', 'Calendar, docket, and client comms'],
    outcomes: ['Clean case organization', 'Faster turnaround', 'Reduced attorney overhead'],
    reviews: [
      { quote: 'Our case files are immaculate now.', author: 'Allison P — Partner' },
      { quote: 'Filings are on time with fewer errors.', author: 'Nate R — Paralegal Lead' },
    ],
  },
  {
    slug: 'medical-virtual-assistant',
    name: 'Medical Virtual Assistant',
    category: 'Other',
    blurb: 'Scheduling, eligibility checks, EMR updates, and patient comms.',
    usSalaryRange: '$42k–$58k/yr',
    startingFrom: '$1,495/mo',
    rampDays: 12,
    bullets: ['Patient scheduling and reminders', 'Eligibility and pre-auth coordination', 'EMR updates and charting support'],
    outcomes: ['Higher show rates', 'Cleaner charts', 'Happier patients'],
    reviews: [
      { quote: 'No-shows dropped dramatically.', author: 'Dr. Lee — Clinic Director' },
      { quote: 'Front desk finally has breathing room.', author: 'Maria F — Office Manager' },
    ],
  },
  {
    slug: 'real-estate-assistant',
    name: 'Real Estate Assistant',
    category: 'Other',
    blurb: 'Listings, showings, lead follow-up, and transaction coordination.',
    usSalaryRange: '$45k–$65k/yr',
    startingFrom: '$1,495/mo',
    rampDays: 10,
    bullets: ['MLS/listings and brochure updates', 'Showing coordination and feedback', 'Lead follow-up and pipeline hygiene'],
    outcomes: ['More showings booked', 'Cleaner pipeline', 'Faster closes'],
    reviews: [
      { quote: 'Our TC process is finally smooth.', author: 'Jamie S — Broker' },
      { quote: 'Follow-ups actually happen on time.', author: 'Chris D — Agent' },
    ],
  },
  {
    slug: 'insurance-claims-assistant',
    name: 'Insurance Claims Assistant',
    category: 'Other',
    blurb: 'FNOL intake, claims documentation, and adjuster coordination.',
    usSalaryRange: '$45k–$62k/yr',
    startingFrom: '$1,495/mo',
    rampDays: 12,
    bullets: ['FNOL intake and documentation', 'Policy verification and updates', 'Adjuster scheduling and status tracking'],
    outcomes: ['Faster cycle times', 'Cleaner files', 'Better CX'],
    reviews: [
      { quote: 'Backlog cleared within weeks.', author: 'Ivy T — Claims Manager' },
      { quote: 'Documentation quality keeps audits simple.', author: 'Rod K — QA' },
    ],
  },
  {
    slug: 'finance-assistant',
    name: 'Finance Assistant',
    category: 'Other',
    blurb: 'Expense prep, vendor onboarding, reporting, and light analysis.',
    usSalaryRange: '$50k–$70k/yr',
    startingFrom: '$1,595/mo',
    rampDays: 10,
    bullets: ['Expense and receipt prep', 'Vendor onboarding and AP support', 'Weekly dashboards and variance notes'],
    outcomes: ['Cleaner books', 'Fewer surprises', 'Better visibility'],
    reviews: [
      { quote: 'Close became painless.', author: 'Mara Q — Controller' },
      { quote: 'Reports are timely and clear.', author: 'Evan J — CFO' },
    ],
  },
  // Popular/General niches to expand catalog
  {
    slug: 'appointment-setter',
    name: 'Appointment Setter',
    category: 'Popular',
    blurb: 'High-volume outreach and calendar booking for your sales team.',
    usSalaryRange: '$45k–$65k/yr',
    startingFrom: '$1,495/mo',
    rampDays: 10,
    bullets: ['Cold and warm outreach', 'Calendar coordination', 'Lead qualification'],
    outcomes: ['More booked meetings', 'Cleaner pipeline', 'Faster follow-ups'],
    reviews: [
      { quote: 'Calendar utilization shot up in two weeks.', author: 'Luis V — Head of Sales' },
      { quote: 'Follow-ups are finally consistent.', author: 'Rita D — CEO' },
    ],
  },
  {
    slug: 'social-media-manager',
    name: 'Social Media Manager',
    category: 'Popular',
    blurb: 'Content calendars, posting, engagement, and reporting.',
    usSalaryRange: '$50k–$75k/yr',
    startingFrom: '$1,595/mo',
    rampDays: 12,
    bullets: ['Content planning and scheduling', 'Community engagement', 'Performance reporting'],
    outcomes: ['Steady growth', 'Higher engagement', 'Clear reporting'],
    reviews: [
      { quote: 'Engagement up 3x with consistent posting.', author: 'Mina P — Founder' },
      { quote: 'Our calendar is finally predictable.', author: 'Omar K — Marketing' },
    ],
  },
  {
    slug: 'copywriter',
    name: 'Copywriter',
    category: 'Other',
    blurb: 'Landing pages, emails, ads, and sales copy that converts.',
    usSalaryRange: '$60k–$95k/yr',
    startingFrom: '$1,695/mo',
    rampDays: 10,
    bullets: ['Landing page copy', 'Email sequences', 'Ad iterations and tests'],
    outcomes: ['Higher CTR', 'More demos', 'Clear messaging'],
    reviews: [
      { quote: 'Copy finally aligns with our ICP.', author: 'Jenny L — Growth' },
      { quote: 'Email open and reply rates jumped.', author: 'Mark S — RevOps' },
    ],
  },
]

export const rolesByCategory = roles.reduce<Record<string, Role[]>>((acc, r) => {
  (acc[r.category] ||= []).push(r)
  return acc
}, {})

export const nameToSlug = new Map<string, string>(
  roles.map((r) => [r.name.split(' (')[0].replace('Virtual Assistant', '').trim() || r.name, r.slug])
)

export default roles


