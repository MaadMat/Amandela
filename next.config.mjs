/** @type {import('next').NextConfig} */
import CompressionPlugin from 'compression-webpack-plugin'
const nextConfig = {

    experimental: { optimizeCss: true },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.plugins.push(
          new CompressionPlugin({
            algorithm: 'brotliCompress', 
            test: /\.(js|css|html|svg)$/, 
            threshold: 10240,
            minRatio: 0.95, 
          })
        );
      }
      return config;
    },
  };
  
  export default nextConfig;
  