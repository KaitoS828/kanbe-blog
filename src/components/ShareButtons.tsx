'use client'

type Props = {
  url: string
  title: string
}

export function ShareButtons({ url, title }: Props) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shares = [
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bg: 'bg-black hover:bg-gray-800',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Threads',
      href: `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`,
      bg: 'bg-[#101010] hover:bg-[#2a2a2a]',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.301-.88-2.342-.887h-.045c-.3 0-1.107.07-1.845.84l-1.457-1.405C9.739 3.983 10.951 3.51 12.23 3.51h.055c3.168.026 4.92 1.947 5.154 5.502.167.069.33.143.489.222 1.394.69 2.434 1.7 3.007 2.917.854 1.845.786 4.35-.834 5.941-1.95 1.906-4.237 2.868-7.915 2.908Z" />
        </svg>
      ),
    },
    {
      label: 'LINE',
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      bg: 'bg-[#06C755] hover:bg-[#05b34c]',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.952 12.328c0-4.27-4.28-7.748-9.544-7.748S.864 8.058.864 12.328c0 3.83 3.394 7.037 7.98 7.646.311.067.734.205.841.472.096.242.063.621.031.866l-.136.816c-.042.242-.192.946.829.516 1.021-.43 5.508-3.244 7.515-5.554 1.386-1.52 2.028-3.064 2.028-4.762Z" />
        </svg>
      ),
    },
  ]

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    alert('URLをコピーしました')
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-gray-400">シェア:</span>
      {shares.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors ${s.bg}`}
        >
          {s.icon}
          {s.label}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 text-gray-600 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        URLコピー
      </button>
    </div>
  )
}
