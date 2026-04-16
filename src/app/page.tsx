import { JsonLd } from '@/components/JsonLd'
import { personJsonLd } from '@/lib/seo'
import { getAllPosts, getFeaturedPost } from '@/lib/mdx'
import { TagList } from '@/components/TagList'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'かんべblog — 北海道広尾町からの記録',
  description: '北海道十勝・広尾町で地域おこし協力隊として活動する神部凱斗のブログ。人口5800人の漁師町への移住、一棟貸しゲストハウス「日静」の運営、LangGraph・Claude APIを使ったAI開発、狩猟まで。地域の日常と技術の記録。',
}

export default function HomePage() {
  const posts = getAllPosts()
  const latest = posts[0]
  const featured = getFeaturedPost()
  const isSame = !!(latest && featured && latest.slug === featured.slug)

  // 過去記事: 最新・注目を除いた残り
  const excludeSlugs = new Set([latest?.slug, !isSame ? featured?.slug : undefined].filter(Boolean))
  const rest = posts.filter(p => !excludeSlugs.has(p.slug)).slice(0, 6)

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

      {/* 最新記事 + 注目記事 */}
      {latest && (
        <section className="mb-12">
          {isSame ? (
            /* 同一記事: 赤ボーダーの1枚カード */
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">最新記事</p>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">/ 注目記事</span>
              </div>
              <Link
                href={`/blog/${latest.slug}`}
                className="group block border border-red-200 rounded-xl p-7 hover:border-red-400 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3 overflow-hidden min-w-0">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded font-semibold shrink-0">注目</span>
                  <time className="text-xs text-gray-400 shrink-0" dateTime={latest.date}>{latest.date}</time>
                  <TagList tags={latest.tags} />
                </div>
                <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {latest.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{latest.description}</p>
                <span className="mt-4 inline-block text-sm text-blue-600">続きを読む →</span>
              </Link>
            </div>
          ) : (
            /* 別記事: モバイル縦積み / デスクトップ2列 */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* 注目記事 */}
              {featured && (
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-widest">注目記事</p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group block border border-red-200 rounded-xl p-6 hover:border-red-400 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3 overflow-hidden min-w-0">
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded font-semibold shrink-0">注目</span>
                      <time className="text-xs text-gray-400 shrink-0" dateTime={featured.date}>{featured.date}</time>
                      <TagList tags={featured.tags} />
                    </div>
                    <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{featured.description}</p>
                    <span className="mt-4 inline-block text-sm text-blue-600">続きを読む →</span>
                  </Link>
                </div>
              )}
              {/* 最新記事 */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">最新記事</p>
                <Link
                  href={`/blog/${latest.slug}`}
                  className="group block border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3 overflow-hidden min-w-0">
                    <time className="text-xs text-gray-400 shrink-0" dateTime={latest.date}>{latest.date}</time>
                    <TagList tags={latest.tags} />
                  </div>
                  <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {latest.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{latest.description}</p>
                  <span className="mt-4 inline-block text-sm text-blue-600">続きを読む →</span>
                </Link>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 過去の記事 */}
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
