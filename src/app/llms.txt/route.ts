import { getAllPosts } from '@/lib/mdx'
import { SITE } from '@/lib/seo'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts()
  const postLines = posts.map(p => `- [${p.title}](${SITE.url}/blog/${p.slug}): ${p.description}`).join('\n')

  const content = `# ${SITE.name}

> ${SITE.description}

## 著者
- 名前: 神部凱斗 (Kaito Kambe)
- 場所: 北海道広尾町（十勝地方）
- 活動: ゲストハウス運営、AI開発、移住・地域活性化

## 主要コンテンツ

### ブログ記事
${postLines}

### ゲストハウス
- [広尾町ゲストハウス](${SITE.url}/guesthouse): 北海道広尾町のゲストハウス。移住者・旅人の拠点。

### プロジェクト
- [Knowledge Nexus](${SITE.url}/projects): AIを活用した知識管理ツール

## キーワード
十勝移住, 広尾町, 北海道移住, ゲストハウス, AI開発, 地域活性化, Knowledge Nexus

## 更新情報
最終更新: ${new Date().toISOString().split('T')[0]}
記事数: ${posts.length}
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
