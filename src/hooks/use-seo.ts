"use client";
import { useEffect } from 'react'

type JsonLd = Record<string, any>

export function useSEO(title: string, description: string, jsonLd?: JsonLd) {
  useEffect(() => {
    if (title) {
      document.title = title
      const ogTitle = ensureMeta('property', 'og:title')
      ogTitle.setAttribute('content', title)
    }
    if (description) {
      const meta = ensureMeta('name', 'description')
      meta.setAttribute('content', description)
      const ogDesc = ensureMeta('property', 'og:description')
      ogDesc.setAttribute('content', description)
    }
    if (jsonLd) {
      const id = 'ld-json-current'
      let script = document.getElementById(id) as HTMLScriptElement | null
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = id
        document.head.appendChild(script)
      }
      script.text = JSON.stringify(jsonLd)
    }
  }, [title, description, JSON.stringify(jsonLd)])
}

function ensureMeta(attr: 'name' | 'property', value: string) {
  let meta = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, value)
    document.head.appendChild(meta)
  }
  return meta
}


