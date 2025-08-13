import OurStory from '@/pages/OurStory'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Our Story | onvally®',
  description: 'Discover the journey of onvally® and how we\'re revolutionizing how businesses hire and work with virtual assistants. Learn about our mission and values.',
  openGraph: {
    title: 'Our Story | onvally®',
    description: 'Discover the journey of onvally® and how we\'re revolutionizing how businesses hire and work with virtual assistants.',
    type: 'website',
    url: 'https://onvally.com/our-story'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | onvally®',
    description: 'Discover the journey of onvally® and our mission.'
  }
}

export default function Page() { 
  return <OurStory /> 
}


