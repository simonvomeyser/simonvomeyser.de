/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'simonvomeyser.com',
        defaultLocale: 'en'
      },
      {
        domain: 'simonvomeyser.de',
        defaultLocale: 'de'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/impressum',
        destination: '/legal-notice',
        permanent: false
      },
      {
        source: '/datenschutz',
        destination: '/privacy-policy',
        permanent: false
      },
      {
        source: '/datenschutzerklaerung',
        destination: '/privacy-policy',
        permanent: false
      }
    ]
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
              ]
            }
          }
        }
      ]
    })

    return config
  },
}

module.exports = nextConfig

