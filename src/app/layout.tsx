import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { SITE } from '@/lib/seo'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: { // icons プロパティを追加
    icon: '/icon.jpg', // /app ディレクトリ直下の icon.jpg を指定
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <header className="border-b border-gray-100 py-4 px-6">
          <nav className="max-w-3xl mx-auto flex items-center justify-between">
            <a href="/" className="font-bold text-xl flex items-center">
              <img src="/images/icon.jpg" alt="かんべblogアイコン" className="w-8 h-8 rounded-full mr-2" />
              かんべblog
            </a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/blog" className="hover:text-gray-900">記事</a>
              <a href="/guesthouse" className="hover:text-gray-900">ゲストハウス</a>
              <a href="/projects" className="hover:text-gray-900">プロジェクト</a>
              <a href="/about" className="hover:text-gray-900">About</a>
            </div>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-gray-100 py-8 px-6 mt-20">
          <div className="max-w-3xl mx-auto text-center text-sm text-gray-400">
            <p>© 2026 神部凱斗 | 北海道広尾町</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
