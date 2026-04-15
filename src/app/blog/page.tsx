import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '関本海斗のブログ記事一覧。十勝移住、広尾町生活、AI開発、ゲストハウスについて。',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">記事一覧</h1>
      <div className="space-y-10">
        {posts.map(post => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <div className="flex items-center gap-3 mb-1">
                <time className="text-xs text-gray-400" dateTime={post.date}>{post.date}</time>
                {post.tags?.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <p className="text-gray-500 mt-1 text-sm">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
