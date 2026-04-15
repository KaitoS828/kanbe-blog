import { JsonLd } from '@/components/JsonLd'
import { personJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — 神部凱斗',
  description: '神部凱斗のプロフィール。北海道十勝・広尾町在住。ゲストハウス運営、AI開発、移住・地域活性化に取り組む。',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="prose prose-gray max-w-none">
        <p>
          1998年生まれ、北海道札幌市出身。現在は北海道広尾町で<strong>地域おこし協力隊</strong>として活動しています。
          前職は住宅営業で、1年目に全国6位の営業成績を収めました。
        </p>
        <h2>やっていること</h2>
        <ul>
          <li><strong>地域おこし協力隊</strong> — 地域通貨「サプリ」の運用、地域求人サイト「広尾しごと」の構築・運営（AIチャットボット導入）</li>
          <li><strong>AI開発 / Creative Developer</strong> — 様々なAIツール・サービスを開発。詳しくは <a href="https://github.com/KaitoS828" target="_blank" rel="noopener noreferrer">GitHub</a> を。</li>
          <li><strong>DX支援</strong> — 地方の中小企業向けにHP作成・DX相談対応</li>
        </ul>
        <h2>ポートフォリオ</h2>
        <p><a href="https://www.kaito-kanbe.com/" target="_blank" rel="noopener noreferrer">www.kaito-kanbe.com</a></p>
        <h2>連絡先</h2>
        <p>お問い合わせ: <a href="mailto:kaito.sekimoto8@gmail.com">kaito.sekimoto8@gmail.com</a></p>
      </div>
    </>
  )
}
