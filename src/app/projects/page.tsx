import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プロジェクト',
  description: '神部凱斗が開発・運営するAIプロジェクト一覧。GitHubで公開中。',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">プロジェクト</h1>
      <p className="text-gray-600 mb-10">
        様々なAIツール・サービスを開発しています。詳しくは{' '}
        <a
          href="https://github.com/KaitoS828"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub (@KaitoS828)
        </a>{' '}
        を見てください。
      </p>
    </>
  )
}
