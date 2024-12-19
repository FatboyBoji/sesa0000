import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  output: 'export',
  basePath: '/sesa0000',
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = { rules: [] };
    }
    
    if (!config.module.rules) {
      config.module.rules = [];
    }

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                }
              ]
            }
          }
        }
      ]
    });

    return config;
  },
};

export default nextConfig;
