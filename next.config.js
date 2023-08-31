/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/pages/api-reference/next-config-js/pageExtensions#including-non-page-files-in-the-pages-directory
   */
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

module.exports = nextConfig;
