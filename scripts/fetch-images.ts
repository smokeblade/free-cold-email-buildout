/*
  Fetch unique royalty-free images from Pexels, Pixabay, and Unsplash.
  Usage: pnpm tsx scripts/fetch-images.ts --queries "customer support, payroll, bookkeeping, it outsourcing, seo, virtual assistant" --per 20
*/
import fs from 'fs'
import path from 'path'

type ImageRec = {
  id: string
  url: string
  thumb?: string
  width?: number
  height?: number
  author?: string
  source: 'pexels' | 'pixabay' | 'unsplash'
  license?: string
  tags?: string[]
}

const PEXELS_API_KEY = process.env.PEXELS_API_KEY
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

function parseArgs() {
  const args = process.argv.slice(2)
  const out: Record<string, string> = {}
  for (let i = 0; i < args.length; i += 2) {
    if (args[i] && args[i + 1]) out[args[i].replace(/^--/, '')] = args[i + 1]
  }
  return out
}

async function fetchPexels(query: string, per: number): Promise<ImageRec[]> {
  if (!PEXELS_API_KEY) return []
  const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${per}`, {
    headers: { Authorization: PEXELS_API_KEY },
  })
  if (!res.ok) return []
  const json: any = await res.json()
  return (json.photos || []).map((p: any) => ({
    id: `pexels_${p.id}`,
    url: p.src?.large2x || p.src?.large || p.src?.original,
    thumb: p.src?.medium,
    width: p.width,
    height: p.height,
    author: p.photographer,
    source: 'pexels' as const,
    license: 'Pexels License',
    tags: [query],
  }))
}

async function fetchPixabay(query: string, per: number): Promise<ImageRec[]> {
  if (!PIXABAY_API_KEY) return []
  const res = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${per}`)
  if (!res.ok) return []
  const json: any = await res.json()
  return (json.hits || []).map((p: any) => ({
    id: `pixabay_${p.id}`,
    url: p.largeImageURL,
    thumb: p.previewURL,
    width: p.imageWidth,
    height: p.imageHeight,
    author: p.user,
    source: 'pixabay' as const,
    license: 'Pixabay License',
    tags: [query],
  }))
}

async function fetchUnsplash(query: string, per: number): Promise<ImageRec[]> {
  if (!UNSPLASH_ACCESS_KEY) return []
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${per}`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  })
  if (!res.ok) return []
  const json: any = await res.json()
  return (json.results || []).map((p: any) => ({
    id: `unsplash_${p.id}`,
    url: p.urls?.regular || p.urls?.full,
    thumb: p.urls?.thumb,
    width: p.width,
    height: p.height,
    author: p.user?.name,
    source: 'unsplash' as const,
    license: 'Unsplash License',
    tags: [query],
  }))
}

async function main() {
  const args = parseArgs()
  const queries = (args.queries || 'virtual assistant, outsourcing, support, payroll, bookkeeping, seo, it outsourcing')
    .split(',').map(s => s.trim()).filter(Boolean)
  const per = parseInt(args.per || '20', 10)

  let results: ImageRec[] = []
  for (const q of queries) {
    const [a, b, c] = await Promise.all([
      fetchPexels(q, per),
      fetchPixabay(q, per),
      fetchUnsplash(q, per),
    ])
    results = results.concat(a, b, c)
  }

  // Dedup by URL
  const seen = new Set<string>()
  const deduped: ImageRec[] = []
  for (const img of results) {
    if (!img.url || seen.has(img.url)) continue
    seen.add(img.url)
    deduped.push(img)
  }

  const outPath = path.join(process.cwd(), 'src', 'data', 'imageBank.json')
  fs.writeFileSync(outPath, JSON.stringify({ images: deduped, updatedAt: new Date().toISOString() }, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Saved ${deduped.length} images to ${outPath}`)
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})


