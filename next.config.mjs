/** @type {import('next').NextConfig} */
const appServer = process.env.REACT_APP_SERVER || 'http://backend:4000';

const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  output: 'standalone',
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER
  },
  images: {
    formats: ['image/webp']
  },
  async rewrites() {
    return [ 			{
      source: '/api/:path*',
      destination: `${appServer}/api/:path*`,
    },{
      source: '/uploads/:path*',
      destination: `${appServer}/uploads/:path*`
    }]
  }
};

export default nextConfig;
