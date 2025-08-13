import RolesIndex from '@/pages/RolesIndex'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Virtual Assistant Roles',
  description: 'Explore our comprehensive range of virtual assistant roles including Admin, Sales, Support, Design, and specialized positions. Find the perfect talent for your business needs.',
  openGraph: {
    title: 'Virtual Assistant Roles',
    description: 'Explore our comprehensive range of virtual assistant roles including Admin, Sales, Support, Design, and specialized positions.',
    type: 'website',
    url: 'https://onvally.com/roles'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Assistant Roles',
    description: 'Explore our comprehensive range of virtual assistant roles for your business needs.'
  }
}

export default function Page() { 
  return <RolesIndex /> 
}


