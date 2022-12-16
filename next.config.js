/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          "react-syntax-highlighter",
        ],
        reactStrictMode: true,
        experimental: {
          appDir: true,
        }
      }
    ],
  ],
{
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}
);