import { getPost, getAllPosts } from '@/lib/mdx'
import { blogPostingJsonLd, SITE } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'
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
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  console.log("MDX Content:", post.content) // デバッグ用に追加

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
      </article>
    </>
  )
}
