import BlogIndex from '@/pages/Blog'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tips, and strategies for scaling your business with virtual assistants. Learn about operations, hiring, and remote team management.',
  openGraph: {
    title: 'Blog',
    description: 'Insights, tips, and strategies for scaling your business with virtual assistants. Learn about operations, hiring, and remote team management.',
    type: 'website',
    url: 'https://onvally.com/blog'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description: 'Insights, tips, and strategies for scaling your business with virtual assistants.'
  }
}

export default function Page() { 
  return <BlogIndex /> 
}


