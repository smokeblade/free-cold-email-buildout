/* Ensure sitemap and PWA use the same favicon as the site */
const favicons = require('favicons')
const fs = require('fs')
const path = require('path')

async function run() {
  const srcPng = path.join(process.cwd(), 'public', 'onvally_favicon.png')
  if (!fs.existsSync(srcPng)) {
    console.log('favicon source not found, skipping')
    process.exit(0)
  }
  const outDir = path.join(process.cwd(), 'public')
  const res = await favicons(srcPng, {
    path: '/',
    appName: 'onvally',
    appShortName: 'onvally',
    appDescription: 'onvally website',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      windows: false,
      yandex: false
    }
  })
  for (const image of res.images) {
    fs.writeFileSync(path.join(outDir, image.name), image.contents)
  }
  // Ensure a root favicon.ico exists for crawlers
  const ico = res.images.find(i => i.name === 'favicon.ico')
  if (ico) fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico.contents)
  // Write HTML snippet for reference (not injected automatically)
  fs.writeFileSync(path.join(outDir, 'favicons.html'), res.html.join('\n'))
  console.log('Favicons ensured in /public (favicon.ico aligned with onvally_favicon.png)')
}

run().catch(err => { console.error(err); process.exit(0) })


