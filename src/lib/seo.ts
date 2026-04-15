export const SITE = {
  name: 'かんべblog',
  url: 'https://blog.kaito-kanbe.com',
  author: '神部凱斗',
  description: '北海道広尾町音調津からの移住・地域活性化・ゲストハウス・AI開発の記録',
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
    knowsAbout: ['移住', '北海道', '十勝', '広尾町', '地域おこし協力隊', 'AI開発', '地域活性化', 'DX支援', '地域通貨', 'Creative Developer', 'ゲストハウス'],
    sameAs: ['https://github.com/KaitoS828', 'https://www.kaito-kanbe.com/', 'https://www.instagram.com/kaito___sk8/'],
  })
}

export function localBusinessJsonLd() {
  return buildJsonLd('LodgingBusiness', {
    name: 'ゲストハウス日静',
    alternateName: 'Guest House NISSEI',
    description: '北海道広尾町音調津にある一棟貸しゲストハウス。プライベートサウナ「KOBU SAUNA」付き。昆布浜と日高山脈を望む静かな漁師町。',
    url: `${SITE.url}/guesthouse`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '音調津733番地',
      addressLocality: '広尾町',
      addressRegion: '北海道',
      postalCode: '089-2109',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.location.latitude,
      longitude: SITE.location.longitude,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'プライベートサウナ', value: true },
      { '@type': 'LocationFeatureSpecification', name: '一棟貸し', value: true },
      { '@type': 'LocationFeatureSpecification', name: '水風呂', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'キッチン', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: '駐車場', value: true },
    ],
    checkinTime: '15:00',
    checkoutTime: '10:00',
    petsAllowed: false,
    priceRange: '¥¥',
    email: 'kaito.sekimoto8@gmail.com',
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
