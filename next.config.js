/** @type {import('next').NextConfig} */
const nextConfig = {
  mdxRs: true,
  serverComponentsExternalPackages: ["mongoose"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
