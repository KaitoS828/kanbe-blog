export const SITE = {
  name: 'かんべblog',
  url: 'https://kanbe-blog.vercel.app',
  author: '神部凱斗',
  description: '北海道広尾町からの移住・地域活性化・ゲストハウス・AI開発の記録',
  locale: 'ja_JP',
  twitterHandle: '@kaito_hiroo',
  location: {
    name: '広尾町ゲストハウス',
    address: '北海道広郡広尾町',
    latitude: 42.2834,
    longitude: 143.3082,
  },
}

export function buildJsonLd(type: string, data: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
}

export function personJsonLd() {
  return buildJsonLd('Person', {
    name: '神部凱斗',
    alternateName: 'Kaito Kambe',
    url: SITE.url,
    description: '北海道広尾町で地域おこし協力隊として活動するCreative Developer。地域通貨・求人サイト構築、AI開発、DX支援に取り組む。',
    email: 'kaito.sekimoto8@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '広尾町',
      addressRegion: '北海道',
      addressCountry: 'JP',
    },
    knowsAbout: ['移住', '北海道', '十勝', '広尾町', '地域おこし協力隊', 'AI開発', '地域活性化', 'DX支援', '地域通貨', 'Creative Developer'],
    sameAs: ['https://github.com/KaitoS828', 'https://www.kaito-kanbe.com/'],
  })
}

export function localBusinessJsonLd() {
  return buildJsonLd('LodgingBusiness', {
    name: '広尾町ゲストハウス',
    description: '北海道広尾町のゲストハウス。移住者・旅人の拠点。',
    url: SITE.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '広尾町',
      addressRegion: '北海道',
      postalCode: '089-2300',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.location.latitude,
      longitude: SITE.location.longitude,
    },
    telephone: '',
    priceRange: '¥¥',
  })
}

export function blogPostingJsonLd(meta: { title: string; description: string; date: string; slug: string; author: string }) {
  return buildJsonLd('BlogPosting', {
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    url: `${SITE.url}/blog/${meta.slug}`,
    author: {
      '@type': 'Person',
      name: meta.author,
    },
    publisher: {
      '@type': 'Person',
      name: SITE.author,
    },
    inLanguage: 'ja',
  })
}
