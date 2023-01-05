/** @type {import('next').NextConfig} */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const repository = 'https://jinha-kor.github.io';

module.exports = {
    reactStrictMode: true,
    assetPrefix: isProd ? `${repository}/` : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: isProd ? 'https' : 'http',
                hostname: isProd ? 'jinha-kor.github.io' : 'src/images',
                port: isProd ? '' : '3000',
                pathname: isProd ? '/images/**' : '/src/images/**',
            },
        ],
    },
};
