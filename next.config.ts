import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
