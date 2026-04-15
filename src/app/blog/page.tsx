import { getAllPosts } from '@/lib/mdx'
import { BlogTabs } from '@/components/BlogTabs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '神部凱斗のブログ記事一覧。十勝移住、広尾町生活、AI開発、ゲストハウスについて。',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <BlogTabs posts={posts} />
    </>
  )
}
