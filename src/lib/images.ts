let bank: any = { images: [] }
try {
  // Optional image bank; avoid build errors when file not yet generated
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  bank = require('@/data/imageBank.json')
} catch (e) {
  bank = { images: [] }
}

type PickOpts = { slug?: string; category?: string }

export function getUniqueBlogImage({ slug = '', category = '' }: PickOpts) {
  const images: { images: { url: string; thumb?: string; author?: string; source: string; tags?: string[] }[] } = bank as any
  if (!images?.images?.length) return null
  const base = `${slug}:${category}`
  let hash = 0
  for (let i = 0; i < base.length; i++) hash = (hash * 31 + base.charCodeAt(i)) >>> 0
  const idx = hash % images.images.length
  return images.images[idx]
}


