/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    imageSizes: [48, 96, 256, 384],
    deviceSizes: [640, 828, 1200, 2048, 3840],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/img",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://cia.local/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
