import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://idigit.tech'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/carte/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/confidentialite/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
