import { StyledComponentsRegistry } from 'lib'

const title = 'bust.studio | WEB3 agency for websites, apps, & branding'
const description = `bust is a web3 design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences. We offer a wide range of creative and strategic services for remarkable brands, companies and organizations.`

export const metadata = {
  title: {
    template: '%s | bust.studio',
    default: title,
  },
  description: description,
  keywords: [
    'web3',
    'crypto',
    'branding',
    'website design',
    'web design',
    'web development',
    'app development',
    'websites',
    'apps',
    'branding',
    'branding studio',
    'creative services',
    'creative direction',
    'creative web design',
    'creative web development',
    'creative agency',
    'creative studio',
    'creative design',
    'ecommerce',
    'ecommerce development',
    'app design',
    'graphic design',
    'logo design',
    'logo',
    'SEO optimiztion',
    'design',
    'development',
    'awwwards',
    'css design awards',
    'nyc design',
    'nyc design studio',
    'nyc design agency',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.bust.studio',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.bust.studio'
      }/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@buststudio',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.bust.studio'
      }/og-image.jpg`,
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dco4kgl.css" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned.tab.svg"
          color="#121212"
        />
        <meta name="msapplication-TileColor" content="#121212" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* END FAVICON */}
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
