import Role from '@/pages/roles/Role'
import { roles } from '@/data/roles'
import type { Metadata } from 'next'

export const revalidate = 300

// Generate static paths for all roles at build time
export async function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }))
}

// Generate metadata for each role page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const role = roles.find(r => r.slug === params.slug)
  
  if (!role) {
    return {
      title: 'Role Not Found',
      description: 'The requested virtual assistant role could not be found.'
    }
  }

  return {
    title: `${role.name} — Hire Remote Talent`,
    description: `Hire a ${role.name.toLowerCase()} with onvally®. From ${role.startingFrom}/month. ~72‑hour matching (may vary), free replacement guarantee, and QA coverage across US + EU hours.`,
    openGraph: {
      title: `${role.name} — Hire Remote Talent`,
      description: `From ${role.startingFrom}/month. ~72‑hour matching (may vary) and replacement guarantee.`,
      type: 'website',
      url: `https://onvally.com/roles/${role.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${role.name} — Hire Remote Talent`,
      description: `From ${role.startingFrom}/month. ~72‑hour matching (may vary) and replacement guarantee.`
    }
  }
}

export default function Page() {
  return <Role />
}


