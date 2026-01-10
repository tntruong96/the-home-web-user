import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // i18n is now handled by middleware in App Router
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
        search: "",
      },
    ],
    // Disable image optimization for development (or use conditional logic)
    // unoptimized: process.env.NODE_ENV === "development",
  },
  async rewrites() {
    return [
      {
        source: "/api/strapi-uploads/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_ENDPOINT || "http://localhost:1337"
        }/uploads/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
