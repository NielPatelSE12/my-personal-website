/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static site export
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

module.exports = nextConfig;
