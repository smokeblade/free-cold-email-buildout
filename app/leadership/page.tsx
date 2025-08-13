import About from '@/pages/About'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Leadership Team | onvally®',
  description: 'Meet the leadership team at onvally®. Learn about our mission to help businesses scale efficiently with virtual assistants.',
  openGraph: {
    title: 'Leadership Team | onvally®',
    description: 'Meet the leadership team at onvally®. Learn about our mission to help businesses scale efficiently.',
    type: 'website',
    url: 'https://onvally.com/leadership'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership Team | onvally®',
    description: 'Meet the leadership team at onvally®.'
  }
}

export default function Page() { 
  return <About /> 
}


