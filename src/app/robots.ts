import { SITE } from '@/lib/seo'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // OpenAI
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic (Claude)
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Google
      { userAgent: 'Gemini-Bot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Meta
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      // Common Crawl (AI training datasets)
      { userAgent: 'CCBot', allow: '/' },
      // Others
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
