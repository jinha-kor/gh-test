/** @type {import('next').NextConfig} */
const path = require('path');
const isProd = process.env.NODE_ENV === "production";
const repository = "https://jinha-kor.github.io";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? `${repository}/` : '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: `.`,
  }
};
