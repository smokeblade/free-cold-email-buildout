import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://onvally.com'),
  title: {
    default: 'onvally® | Hire remote talent, fast and affordable',
    template: '%s | onvally®'
  },
  description: 'Use onvally® to hire remote talent fast, affordable and without placement fees. Our placement guarantee ensures you get the top 1% of talent.',
  icons: {
    icon: [
      { url: '/onvally_favicon.png', type: 'image/png' },
      { url: '/onvally_favicon_transparent.png', type: 'image/png' }
    ],
    shortcut: '/onvally_favicon.png',
    apple: '/onvally_favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'onvally® | Hire remote talent, fast and affordable',
    description: 'Use onvally® to hire remote talent fast, affordable and without placement fees. Our placement guarantee ensures you get the top 1% of talent.',
    url: 'https://onvally.com'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onvally'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}


