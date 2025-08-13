import Careers from '@/pages/Careers'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team at onvally® and help businesses scale with virtual assistants. Explore remote opportunities in operations, sales, and customer success.',
  openGraph: {
    title: 'Careers',
    description: 'Join our team at onvally® and help businesses scale with virtual assistants. Explore remote opportunities.',
    type: 'website',
    url: 'https://onvally.com/careers'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers',
    description: 'Join our team at onvally® and help businesses scale with virtual assistants.'
  }
}

export default function Page() { 
  return <Careers /> 
}


