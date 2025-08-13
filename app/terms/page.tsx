import Terms from '@/pages/Terms'
import type { Metadata } from 'next'

export const revalidate = 86400
export const metadata: Metadata = {
  title: 'Terms & Conditions | onvally®',
  description: 'Review the onvally® website terms and conditions covering usage, content, and legal terms.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Terms & Conditions | onvally®',
    description: 'Review the onvally® website terms and conditions covering usage, content, and legal terms.',
    type: 'website',
    url: 'https://onvally.com/terms'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | onvally®',
    description: 'Review the onvally® website terms and conditions covering usage, content, and legal terms.'
  }
}
export default function Page() { return <Terms /> }


