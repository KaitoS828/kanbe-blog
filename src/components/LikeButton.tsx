'use client'

import { useState, useEffect } from 'react'

type Props = { slug: string; defaultCount?: number }

export function LikeButton({ slug, defaultCount = 0 }: Props) {
  const key = `like-${slug}`
  const [liked, setLiked] = useState(false)
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      const { liked, delta } = JSON.parse(stored)
      setLiked(liked)
      setDelta(delta ?? 0)
    }
  }, [key])

  const count = defaultCount + delta

  function toggle() {
    const nextLiked = !liked
    const nextDelta = nextLiked ? delta + 1 : delta - 1
    setLiked(nextLiked)
    setDelta(nextDelta)
    localStorage.setItem(key, JSON.stringify({ liked: nextLiked, delta: nextDelta }))
  }

  return (
    <button
      onClick={toggle}
      aria-label={liked ? 'いいねを取り消す' : 'いいね'}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
        liked
          ? 'border-rose-400 bg-rose-50 text-rose-500'
          : 'border-gray-200 bg-white text-gray-400 hover:border-rose-300 hover:text-rose-400'
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={liked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-200 ${liked ? 'scale-110' : 'group-hover:scale-110'}`}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {count > 0 ? count : 'いいね'}
    </button>
  )
}
