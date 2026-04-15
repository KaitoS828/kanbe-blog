import { getPost, getAllPosts } from '@/lib/mdx'
import { blogPostingJsonLd, SITE } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { ShareButtons } from '@/components/ShareButtons'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      type: 'article',
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      authors: [SITE.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
    },
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  const jsonLd = blogPostingJsonLd({
    title: post.meta.title,
    description: post.meta.description,
    date: post.meta.date,
    slug,
    author: SITE.author,
  })

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <time className="text-sm text-gray-400" dateTime={post.meta.date}>{post.meta.date}</time>
            {post.meta.tags?.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight">{post.meta.title}</h1>
          <p className="text-gray-500 mt-3">{post.meta.description}</p>
        </header>
        <div className="prose prose-gray max-w-none">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <ShareButtons url={`${SITE.url}/blog/${slug}`} title={post.meta.title} />
        </div>
      </article>

      {/* 前後の記事ナビゲーション */}
      <nav className="mt-12 grid grid-cols-2 gap-4">
        <div>
          {prevPost && (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex flex-col gap-1 border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors h-full"
            >
              <span className="text-xs text-gray-400">← 前の記事</span>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                {prevPost.title}
              </span>
              <time className="text-xs text-gray-400 mt-auto pt-2">{prevPost.date}</time>
            </Link>
          )}
        </div>
        <div>
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-col gap-1 border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors text-right h-full"
            >
              <span className="text-xs text-gray-400">次の記事 →</span>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                {nextPost.title}
              </span>
              <time className="text-xs text-gray-400 mt-auto pt-2">{nextPost.date}</time>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}
