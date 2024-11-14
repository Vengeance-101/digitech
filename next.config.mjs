// Import the next-pwa plugin
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration to handle SVGs and other custom rules
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Handle SVGs as React components
    });
    return config;
  },

  // SWC minification for faster builds
  swcMinify: true,

  // Image optimization for remote URLs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitechmate.com",
        pathname: "/**",
      },
    ],
  },
};

// Wrap your configuration with next-pwa
export default withPWA({
  dest: "public/pwa", // PWA assets destination
  register: true, // Register service worker automatically
  skipWaiting: true, // Activate the new SW immediately
  disable: process.env.NODE_ENV !== "production", // Disable in development mode
  buildExcludes: [/middleware-manifest.json$/], // Fix for middleware issues
})(nextConfig);
