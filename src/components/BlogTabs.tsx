'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { PostMeta } from '@/lib/mdx'
import { TagList } from '@/components/TagList'

type Props = { posts: PostMeta[] }

export function BlogTabs({ posts }: Props) {
  const [tab, setTab] = useState<'articles' | 'categories'>('articles')

  const latest = posts[0]
  const rest = posts.slice(1)

  // カテゴリ集計
  const categoryMap = new Map<string, PostMeta[]>()
  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      if (!categoryMap.has(tag)) categoryMap.set(tag, [])
      categoryMap.get(tag)!.push(post)
    }
  }
  const categories = [...categoryMap.entries()].sort((a, b) => b[1].length - a[1].length)

  return (
    <>
      {/* タブ */}
      <div className="flex gap-1 mb-8 border-b border-gray-100">
        {(['articles', 'categories'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              tab === t
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {t === 'articles' ? '記事一覧' : 'カテゴリ'}
          </button>
        ))}
      </div>

      {/* 記事一覧タブ */}
      {tab === 'articles' && (
        <>
          {latest && (
            <section className="mb-10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">最新記事</p>
              <Link href={`/blog/${latest.slug}`} className="group block border border-gray-200 rounded-xl p-7 hover:border-gray-400 transition-colors">
                <div className="flex items-center gap-2 mb-3 overflow-hidden min-w-0">
                  <time className="text-xs text-gray-400 shrink-0" dateTime={latest.date}>{latest.date}</time>
                  <TagList tags={latest.tags} />
                </div>
                <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {latest.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{latest.description}</p>
                <span className="mt-4 inline-block text-sm text-blue-600">続きを読む →</span>
              </Link>
            </section>
          )}

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
      )}

      {/* カテゴリタブ */}
      {tab === 'categories' && (
        <div className="flex flex-wrap gap-3">
          {categories.map(([tag, tagPosts]) => (
            <div key={tag} className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
              <span className="text-sm text-gray-700">{tag}</span>
              <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">{tagPosts.length}</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
