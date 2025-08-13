import Privacy from '@/pages/Privacy'
import type { Metadata } from 'next'

export const revalidate = 86400
export const metadata: Metadata = {
  title: 'Privacy Policy | onvally®',
  description: 'Learn how onvally® collects, uses, and protects your personal information. Read our privacy policy.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Privacy Policy | onvally®',
    description: 'Learn how onvally® collects, uses, and protects your personal information.',
    type: 'website',
    url: 'https://onvally.com/privacy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | onvally®',
    description: 'Learn how onvally® collects, uses, and protects your personal information.'
  }
}
export default function Page() { return <Privacy /> }


