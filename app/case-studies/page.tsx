import CaseStudies from '@/pages/CaseStudies'
import type { Metadata } from 'next'

export const revalidate = 600
export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real stories of how businesses scaled with onvally® virtual assistants. See results and outcomes across roles.',
  openGraph: {
    title: 'Case Studies',
    description: 'Real stories of how businesses scaled with onvally® virtual assistants.',
    type: 'website',
    url: 'https://onvally.com/case-studies'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies',
    description: 'Real stories of scaling with onvally® virtual assistants.'
  }
}
export default function Page() { return <CaseStudies /> }


