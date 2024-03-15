import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://project.mbn.priyam.tech/api/:path*', // Replace 4000 with your backend port
      },
    ];
  },
};

export default nextConfig;
