import { getAllPosts } from '@/lib/mdx'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts()
  const highPriority = posts.filter(p => p.offline_priority === 'high')
  const knowledgeBase = {
    version: '1.0',
    generated: new Date().toISOString(),
    location: { town: '広尾町', region: '北海道', area: '十勝' },
    guesthouse: {
      name: '広尾町ゲストハウス',
      description: '北海道広尾町のゲストハウス',
      checkin: '15:00',
      checkout: '11:00',
    },
    priority_articles: highPriority.map(p => ({
      title: p.title,
      description: p.description,
      date: p.date,
      tags: p.tags,
    })),
    all_articles: posts.map(p => ({
      title: p.title,
      description: p.description,
      date: p.date,
      tags: p.tags,
    })),
  }
  return NextResponse.json(knowledgeBase)
}
