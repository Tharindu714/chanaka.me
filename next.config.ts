/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables Next.js image optimization
  }
};

module.exports = nextConfig;



