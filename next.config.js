/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'simonvomeyser.com',
        defaultLocale: 'en',
      },
      {
        domain: 'simonvomeyser.de',
        defaultLocale: 'de',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            svgoConfig: {
              plugins: [
                {
                  name: 'convertColors',
                  options: {
                    currentColor: true,
                  }
                }
              ],
            },
          },
        }
      ],
    })

    return config
  },
}

module.exports = nextConfig

