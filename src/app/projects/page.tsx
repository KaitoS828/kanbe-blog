import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プロジェクト',
  description: '関本海斗が開発・運営するプロジェクト。Knowledge Nexus（AI知識管理ツール）など。',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">プロジェクト</h1>
      <div className="space-y-8">
        <article className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Knowledge Nexus</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            AIを活用した知識管理・情報整理ツール。個人やチームの知識をAIが構造化し、必要な情報へ素早くアクセスできる。
          </p>
          <div className="flex flex-wrap gap-2">
            {['AI', 'Python', 'LangGraph', 'Gemini'].map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </>
  )
}
