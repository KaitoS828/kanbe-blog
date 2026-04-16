type Props = { tags?: string[]; max?: number; className?: string }

export function TagList({ tags, max = 2, className = '' }: Props) {
  if (!tags?.length) return null
  const visible = tags.slice(0, max)
  const hasMore = tags.length > max
  return (
    <div className={`flex items-center gap-1.5 overflow-hidden min-w-0 shrink-0 ${className}`}>
      {visible.map(tag => (
        <span
          key={tag}
          className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded whitespace-nowrap max-w-[7rem] truncate shrink-0"
        >
          {tag}
        </span>
      ))}
      {hasMore && <span className="text-xs text-gray-400 shrink-0">…</span>}
    </div>
  )
}
