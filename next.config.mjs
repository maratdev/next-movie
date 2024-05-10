/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.APP_URL,
    APP_ENV: process.env.REACT_APP_ENV
  },
  async rewrites() {
    return [ {
      source: '/uploads/:path*',
      destination: 'http://localhost:3001/uploads/:path*'
    }]
  }
};

export default nextConfig;
