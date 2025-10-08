// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed the experimental optimizeCss flag to prevent missing 'critters' build errors.
};

export default nextConfig;
