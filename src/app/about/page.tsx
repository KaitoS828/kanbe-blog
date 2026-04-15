import { JsonLd } from '@/components/JsonLd'
import { personJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — 関本海斗',
  description: '関本海斗のプロフィール。北海道十勝・広尾町在住。ゲストハウス運営、AI開発、移住・地域活性化に取り組む。',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="prose prose-gray max-w-none">
        <p>北海道十勝・広尾町在住の関本海斗です。</p>
        <h2>やっていること</h2>
        <ul>
          <li><strong>ゲストハウス運営</strong> — 広尾町で移住者・旅人向けのゲストハウスを運営</li>
          <li><strong>AI開発</strong> — Knowledge Nexus（AI知識管理ツール）の開発</li>
          <li><strong>地域活性化</strong> — 十勝・広尾町の魅力発信、移住支援</li>
        </ul>
        <h2>連絡先</h2>
        <p>お問い合わせ: <a href="mailto:kaito.sekimoto8@gmail.com">kaito.sekimoto8@gmail.com</a></p>
      </div>
    </>
  )
}
