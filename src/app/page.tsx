import { JsonLd } from '@/components/JsonLd'
import { personJsonLd } from '@/lib/seo'
import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'かんべblog — 北海道広尾町からの記録',
  description: '北海道十勝・広尾町在住の神部凱斗のブログ。移住、ゲストハウス運営、AI開発の記録。',
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5)

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">かんべblog</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          北海道広尾町、人口5800人のところで地域おこし協力隊として活動しています。27歳。移住、ゲストハウス運営、狩猟、AI開発、IT導入支援など、日々の活動や学びを記録しています。mdファイルで書いているので、綺麗な画像などはありません。気になったら他のSNSを見てみてくださいね。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-6 border-b border-gray-100 pb-2">最新記事</h2>
        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <time className="text-xs text-gray-400" dateTime={post.date}>{post.date}</time>
                <h3 className="text-lg font-medium mt-1 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
        <Link href="/blog" className="mt-8 inline-block text-sm text-blue-600 hover:underline">
          すべての記事を見る →
        </Link>
      </section>
    </>
  )
}
