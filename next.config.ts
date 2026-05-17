import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/strategies/reer-vs-celi",
        destination: "/retraite/reer-vs-celi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
