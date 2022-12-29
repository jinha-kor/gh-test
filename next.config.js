/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repository = "jinha-kor.github.io";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repository}/` : ``,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "https://jinha-kor.github.io",
  }
}

module.exports = nextConfig
