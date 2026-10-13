import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "mobilbekas.id-";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
};

export default nextConfig;
