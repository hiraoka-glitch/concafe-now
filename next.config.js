/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DEMO_MODE: process.env.DEMO_MODE || 'false',
  },
  /* config options here */
};

module.exports = nextConfig;
