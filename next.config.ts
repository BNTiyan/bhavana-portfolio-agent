import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.yml$/,
      use: "yaml-loader",
    });
    return config;
  },
};

export default nextConfig;

