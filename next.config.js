/** @type {import('next').NextConfig} */
const path = require('path');
const isProd = process.env.NODE_ENV === "production";
const repository = "blog";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repository}` : '',
  basePath: isProd ? `/${repository}` : '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: `.`,
  }
};
