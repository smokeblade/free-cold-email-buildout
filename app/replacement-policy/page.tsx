import ReplacementPolicy from '@/pages/ReplacementPolicy'
import type { Metadata } from 'next'

export const revalidate = 86400
export const metadata: Metadata = {
  title: 'Replacement Policy | onvally®',
  description: 'Read the onvally® replacement policy for virtual assistant placements, including timelines and coverage.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Replacement Policy | onvally®',
    description: 'Read the onvally® replacement policy for virtual assistant placements, including timelines and coverage.',
    type: 'website',
    url: 'https://onvally.com/replacement-policy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Replacement Policy | onvally®',
    description: 'Our replacement policy and coverage details for virtual assistant placements.'
  }
}
export default function Page() { return <ReplacementPolicy /> }


