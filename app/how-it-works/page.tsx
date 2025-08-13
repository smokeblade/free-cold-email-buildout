import HowItWorks from '@/pages/HowItWorks'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'How it works — Free Cold Email Buildout',
  description: 'We configure your cold email system for free: domains/DNS, inbox provisioning, warmup, sending limits, tracking, templates, and a safe ramp. You own all accounts.',
  openGraph: {
    title: 'How it works — Free Cold Email Buildout',
    description: 'Domains/DNS, inboxes, warmup, sending limits, tracking, and templates configured safely. You own all accounts.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How it works — Free Cold Email Buildout',
    description: 'We configure your cold email system for free. You cover software and inboxes.'
  }
}

export default function Page() { 
  return <HowItWorks /> 
}


