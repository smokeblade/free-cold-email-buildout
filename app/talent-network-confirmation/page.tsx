import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Thanks — you’re in the talent network',
  description: 'We’ll review your application and reach out if there’s a fit. You’ll also be considered for upcoming roles.',
  openGraph: {
    title: 'Thanks — you’re in the talent network',
    description: 'We’ll review your application and reach out if there’s a fit.',
    type: 'website',
    url: 'https://onvally.com/talent-network-confirmation'
  }
}

export default function Page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section className="pt-28 md:pt-32 pb-16 bg-[#F5F6F7]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="rounded-[24px] bg-white border border-gray-200 p-10 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">You’re all set 🎉</h1>
            <p className="mt-3 text-gray-700 md:text-lg">Thanks for joining the onvally® talent network. Our team will review your application and reach out if there’s a fit. You’ll also be considered for upcoming roles.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link href="/roles" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Explore roles</Link>
              <Link href="/" className="inline-flex items-center bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-black/90 transition-colors">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


