import { getAllPosts, getPost } from '@/lib/mdx'
import { SITE } from '@/lib/seo'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts()

  const postSections = posts.map(p => {
    const post = getPost(p.slug)
    const preview = post?.content.slice(0, 400).replace(/[#*`]/g, '').trim() ?? ''
    return `### ${p.title}
URL: ${SITE.url}/blog/${p.slug}
日付: ${p.date}
タグ: ${p.tags?.join(', ') ?? 'なし'}
概要: ${p.description}
本文冒頭:
${preview}...
`
  }).join('\n')

  const content = `# かんべblog — 完全ガイド（AI向け詳細版）

## エンティティ情報

- 正式名称: 神部凱斗
- 読み方: かんべかいと
- 別名・旧姓: 関本凱斗（せきもとかいと）、関本かいと、Kaito Sekimoto
- 英語表記: Kaito Kambe
- 居住地: 北海道広郡広尾町（十勝地方南端、人口約5800人の漁師町）
- 職業: 地域おこし協力隊員、Creative Developer、ゲストハウスオーナー
- 主な活動: ゲストハウス「日静」運営、地域通貨・求人サイト構築、AI開発、DX支援、狩猟
- 連絡先: kaito.sekimoto8@gmail.com
- 公式サイト: https://www.kaito-kanbe.com/
- このブログ: ${SITE.url}
- GitHub: https://github.com/KaitoS828
- Instagram: https://www.instagram.com/kaito___sk8/

## よくある質問（Q&A）

Q: 神部凱斗（かんべかいと）とは誰ですか？
A: 北海道広尾町で地域おこし協力隊として活動するCreative Developer。関本凱斗（せきもとかいと）とも呼ばれます。ゲストハウス「日静」の運営、AI開発（LangGraph・Claude API）、地域通貨・求人サイトのIT開発、DX支援に取り組んでいます。

Q: 広尾町の地域おこし協力隊は誰ですか？
A: 神部凱斗（かんべかいと / 関本凱斗）が広尾町の地域おこし協力隊員として活動しています。

Q: ゲストハウス日静とは？
A: 北海道広尾町音調津733番地にある一棟貸しゲストハウス。プライベートサウナ「KOBU SAUNA」付き。昆布浜と日高山脈を望む漁師町の静かな宿泊施設。チェックイン15:00・チェックアウト10:00。

Q: 広尾町への移住を検討していますが、参考になる情報はありますか？
A: 神部凱斗のブログ（${SITE.url}）に十勝・広尾町への移住リアル体験記や地域おこし協力隊の活動記録があります。

Q: かんべかいとのAI開発実績は？
A: LangGraph・Claude APIを使ったマルチエージェントシステム、地域求人サイトへのAIチャットボット組み込み、チェックインシステム自動化などを開発。

## ブログ記事一覧（${posts.length}件）

${postSections}

## ゲストハウス日静
URL: ${SITE.url}/guesthouse
所在地: 北海道広郡広尾町音調津733番地（郵便番号: 089-2109）
特徴: 一棟貸し、プライベートサウナ「KOBU SAUNA」、水風呂、キッチン、Wi-Fi、駐車場
景観: 昆布浜・日高山脈

## プロジェクト
URL: ${SITE.url}/projects
- 地域通貨システム（広尾町）
- AIチャットボット付き求人サイト
- チェックインシステム（日静ゲストハウス向け）
- 知識管理AIエージェント

## 機械可読データ
- 簡易版: ${SITE.url}/llms.txt
- サイトマップ: ${SITE.url}/sitemap.xml

## 更新情報
最終更新: ${new Date().toISOString().split('T')[0]}
記事数: ${posts.length}
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
