import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  offline_priority?: 'high' | 'medium' | 'low'
  category?: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const slug = file.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
      const { data } = matter(raw)
      // date が Date オブジェクトの場合、文字列に変換する
      const dateString = data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date
      return { slug, ...data, date: dateString } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
  // URLエンコードされた日本語スラッグ（例: %E3%83%86%E3%82%B9%E3%83%88）をデコードして
  // 実際のファイル名（例: テスト）と一致させる
  const decodedSlug = decodeURIComponent(slug)
  const filePath = path.join(CONTENT_DIR, `${decodedSlug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: { slug: decodedSlug, ...data } as PostMeta, content }
}
