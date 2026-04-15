import { JsonLd } from '@/components/JsonLd'
import { personJsonLd } from '@/lib/seo'
import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'かんべblog — 北海道広尾町からの記録',
  description: '北海道十勝・広尾町で地域おこし協力隊として活動する神部凱斗のブログ。人口5800人の漁師町への移住、一棟貸しゲストハウス「日静」の運営、LangGraph・Claude APIを使ったAI開発、狩猟まで。地域の日常と技術の記録。',
}

export default function HomePage() {
  const posts = getAllPosts()
  const latest = posts[0]
  const rest = posts.slice(1, 7)

  return (
    <>
      <JsonLd data={personJsonLd()} />

      {/* プロフィール */}
      <section className="mb-14">
        <h1 className="text-4xl font-bold mb-4">かんべblog</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          神部凱斗と申します。北海道広尾町、人口5800人。この地で地域おこし協力隊として活動しています。移住、ゲストハウス運営、狩猟、AI開発、IT導入支援など、日々の活動や学びを記録しています。mdファイルで書いているので、綺麗な画像などはありません。気になったら他のSNSを見てみてね。
        </p>
      </section>

      {/* 最新記事（大きく表示） */}
      {latest && (
        <section className="mb-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">最新記事</p>
          <Link href={`/blog/${latest.slug}`} className="group block border border-gray-200 rounded-xl p-7 hover:border-gray-400 transition-colors">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <time className="text-xs text-gray-400" dateTime={latest.date}>{latest.date}</time>
              {latest.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded whitespace-nowrap">{tag}</span>
              ))}
              {latest.tags && latest.tags.length > 2 && (
                <span className="text-xs text-gray-400">...</span>
              )}
            </div>
            <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
              {latest.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">{latest.description}</p>
            <span className="mt-4 inline-block text-sm text-blue-600">続きを読む →</span>
          </Link>
        </section>
      )}

      {/* 過去の記事（カードグリッド） */}
      {rest.length > 0 && (
        <section>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">過去の記事</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-100 rounded-lg p-5 hover:border-gray-300 transition-colors"
              >
                <time className="text-xs text-gray-400" dateTime={post.date}>{post.date}</time>
                <h3 className="text-base font-semibold mt-1 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="mt-8 inline-block text-sm text-blue-600 hover:underline">
            すべての記事を見る →
          </Link>
        </section>
      )}
    </>
  )
}
