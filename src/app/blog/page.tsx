import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '神部凱斗のブログ記事一覧。十勝移住、広尾町生活、AI開発、ゲストハウスについて。',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const latest = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">記事一覧</h1>

      {/* 最新記事（大きく） */}
      {latest && (
        <section className="mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">最新記事</p>
          <Link href={`/blog/${latest.slug}`} className="group block border border-gray-200 rounded-xl p-7 hover:border-gray-400 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <time className="text-xs text-gray-400" dateTime={latest.date}>{latest.date}</time>
              {latest.tags?.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{tag}</span>
              ))}
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
        </section>
      )}
    </>
  )
}
