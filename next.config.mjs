/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔥 This enables static export (.out folder)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
