const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const manifest = require('./package.json');

const transpilePackages = Object.keys(manifest.dependencies)
  .filter((it) => it.startsWith('@ws/'));

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages,
};

module.exports = withVanillaExtract(nextConfig);
