/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },

  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./build", // Changes the build output directory to `./dist`.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
