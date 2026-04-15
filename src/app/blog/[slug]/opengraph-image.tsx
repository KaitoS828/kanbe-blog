import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/mdx'

export const alt = 'かんべblog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  const title = post?.meta.title ?? 'かんべblog'
  const date = post?.meta.date ?? ''

  const fontRes = await fetch(
    'https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.woff'
  )
  const fontData = await fontRes.arrayBuffer()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: '60px 72px',
          fontFamily: 'Noto Sans JP',
        }}
      >
        {/* ヘッダー */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            かんべblog
          </div>
          <div style={{ fontSize: 14, color: '#9ca3af' }}>北海道広尾町</div>
        </div>

        {/* タイトル */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            paddingTop: '32px',
            paddingBottom: '32px',
          }}
        >
          <div
            style={{
              fontSize: title.length > 20 ? 52 : 64,
              fontWeight: 700,
              color: '#111827',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        {/* フッター */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#374151' }}>神部凱斗</div>
            <div style={{ fontSize: 14, color: '#9ca3af' }}>地域おこし協力隊 · Creative Developer</div>
          </div>
          {date && (
            <div style={{ fontSize: 14, color: '#9ca3af' }}>{date}</div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Noto Sans JP', data: fontData, style: 'normal', weight: 700 }],
    }
  )
}
