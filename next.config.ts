import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/program.html",
        destination: "/program",
        permanent: false,
      },
      {
        source: "/program.",
        destination: "/program",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;