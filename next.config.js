/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "haruCode";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/${repository}/" : "/",
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "https://jinha0311.github.io",
  },
}

module.exports = nextConfig
