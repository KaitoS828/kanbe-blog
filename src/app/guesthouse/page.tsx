import { JsonLd } from '@/components/JsonLd'
import { localBusinessJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゲストハウス | 北海道広尾町',
  description: '北海道十勝・広尾町のゲストハウス。移住者・旅人のための拠点。予約はこちらから。',
  alternates: { canonical: '/guesthouse' },
}

export default function GuesthousePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <h1 className="text-3xl font-bold mb-6">広尾町ゲストハウス</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        北海道十勝・広尾町にあるゲストハウスです。移住を検討している方や、十勝を旅する方の拠点として利用いただけます。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="border border-gray-200 rounded-lg p-5">
          <h2 className="font-semibold mb-2">アクセス</h2>
          <p className="text-sm text-gray-600">北海道広郡広尾町<br />帯広駅から車で約1時間</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-5">
          <h2 className="font-semibold mb-2">チェックイン/アウト</h2>
          <p className="text-sm text-gray-600">チェックイン: 15:00〜<br />チェックアウト: 〜11:00</p>
        </div>
      </div>
      <a href="mailto:kaito.sekimoto8@gmail.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-700 transition-colors">
        予約・お問い合わせ
      </a>
    </>
  )
}
