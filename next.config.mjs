/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'blob.v0.dev',
      'calgreenroofing.com',
      'www.calgreenroofing.com',
      'app.roofle.com',
      'api.app.roofle.com',
      'js.hsforms.net',
      'forms.hsforms.com',
      'www.youtube.com',
      'i.ytimg.com'
    ],
  },
  async headers() {
    return [
      {
        // Apply comprehensive CSP to Roofle quote pages
        source: '/fastquote/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://calgreenroofing.com https://www.calgreenroofing.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://js.hsforms.net https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://s.ytimg.com",
              "frame-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com wss://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://api.hubapi.com wss://*.hubspot.com https://www.youtube.com",
              "img-src 'self' data: https: blob: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://i.ytimg.com https://images.unsplash.com https://blob.v0.dev",
              "style-src 'self' 'unsafe-inline' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.googleapis.com",
              "font-src 'self' data: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.gstatic.com",
              "media-src 'self' https: blob: https://*.roofle.com https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com",
              "frame-ancestors 'self' https://calgreenroofing.com https://www.calgreenroofing.com",
              "worker-src 'self' blob:"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        // Apply CSP to test pages
        source: '/fastquotetest/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://calgreenroofing.com https://www.calgreenroofing.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://js.hsforms.net https://forms.hsforms.com https://*.hubspot.com",
              "frame-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://forms.hsforms.com https://*.hubspot.com",
              "connect-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com wss://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://api.hubapi.com wss://*.hubspot.com",
              "img-src 'self' data: https: blob: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com",
              "style-src 'self' 'unsafe-inline' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.googleapis.com",
              "font-src 'self' data: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.gstatic.com",
              "media-src 'self' https: blob: https://*.roofle.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com",
              "frame-ancestors 'self' https://calgreenroofing.com https://www.calgreenroofing.com"
            ].join('; ')
          }
        ]
      },
      {
        // Standard CSP for all other pages (allows Roofle slideout widget but excludes fastquote pages)
        source: '/((?!fastquote|fastquotetest).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://calgreenroofing.com https://www.calgreenroofing.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://js.hsforms.net https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://s.ytimg.com",
              "frame-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com https://forms.hsforms.com https://*.hubspot.com https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://*.roofle.com https://app.roofle.com https://api.app.roofle.com wss://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://api.hubapi.com wss://*.hubspot.com",
              "img-src 'self' data: https: blob: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://i.ytimg.com https://images.unsplash.com https://blob.v0.dev",
              "style-src 'self' 'unsafe-inline' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.googleapis.com",
              "font-src 'self' data: https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com https://fonts.gstatic.com",
              "media-src 'self' https: blob: https://*.roofle.com https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.roofle.com https://forms.hsforms.com https://*.hubspot.com",
              "frame-ancestors 'self' https://calgreenroofing.com https://www.calgreenroofing.com",
              "worker-src 'self' blob:"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        // Security headers for all pages
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      // Add any URL rewrites if needed
    ]
  },
  async redirects() {
    return [
      // Add any redirects if needed for SEO
      {
        source: '/quote',
        destination: '/fastquote',
        permanent: true,
      },
    ]
  }
}

export default nextConfig
