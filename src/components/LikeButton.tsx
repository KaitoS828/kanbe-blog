'use client'

import { useState, useEffect } from 'react'

type Props = { slug: string }

export function LikeButton({ slug }: Props) {
  const key = `like-${slug}`
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      const { liked, count } = JSON.parse(stored)
      setLiked(liked)
      setCount(count)
    }
  }, [key])

  function toggle() {
    const nextLiked = !liked
    const nextCount = nextLiked ? count + 1 : Math.max(0, count - 1)
    setLiked(nextLiked)
    setCount(nextCount)
    localStorage.setItem(key, JSON.stringify({ liked: nextLiked, count: nextCount }))
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={toggle}
        aria-label={liked ? 'いいねを取り消す' : 'いいね'}
        className={`group flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-200 ${
          liked
            ? 'border-rose-400 bg-rose-50 text-rose-500'
            : 'border-gray-200 bg-white text-gray-400 hover:border-rose-300 hover:text-rose-400'
        }`}
      >
        <svg
          width="24"
          height="24"
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
      </button>
      {count > 0 && (
        <span className="text-sm text-gray-400">{count}</span>
      )}
    </div>
  )
}
