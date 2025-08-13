import Pricing from '@/pages/Pricing'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for virtual assistant services. Starting from $1,395/month with our placement guarantee. No hidden fees, no placement costs.',
  openGraph: {
    title: 'Pricing',
    description: 'Transparent pricing for virtual assistant services. Starting from $1,395/month with our placement guarantee.',
    type: 'website',
    url: 'https://onvally.com/pricing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing',
    description: 'Transparent pricing for virtual assistant services. No hidden fees.'
  }
}

export default function Page() { 
  return <Pricing /> 
}


