import Index from '@/pages/Index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cold Email Launchpad — Free Cold Email Setup',
  description: 'Cold Email Launchpad sets up your cold email system for free. You pay software providers directly; we earn via affiliate partnerships. Safe defaults and clean handoff.',
  openGraph: {
    title: 'Cold Email Launchpad — Free Cold Email Setup',
    description: 'Cold Email Launchpad sets up your cold email system for free. You pay software providers directly; we earn via affiliate partnerships.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Email Launchpad — Free Setup',
    description: 'Cold Email Launchpad sets up your cold email system for free. You pay software providers directly.'
  }
}

export default function Page() { 
  return <Index /> 
}


