import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import TopBar from "@/components/layout/top-bar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Cal Green Roofing | Professional Roofing Services in Southern California",
  description:
    "Cal Green Roofing provides top-quality residential and commercial roofing services throughout Southern California. Free quotes available at (888) 665-3994.",
  keywords:
    "roofing, roof repair, roof replacement, commercial roofing, residential roofing, Southern California, Los Angeles, San Diego, Orange County, Riverside, San Bernardino, Ventura, roofing contractor, roof installation, roof inspection, emergency roof repair",
  authors: [{ name: "Cal Green Roofing" }],
  creator: "Cal Green Roofing",
  publisher: "Cal Green Roofing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calgreenroofing.com",
    title: "Cal Green Roofing | Professional Roofing Services in Southern California",
    description:
      "Cal Green Roofing provides top-quality residential and commercial roofing services throughout Southern California. Get your free instant quote today!",
    siteName: "Cal Green Roofing",
    images: [
      {
        url: "https://calgreenroofing.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cal Green Roofing - Professional Roofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cal Green Roofing | Professional Roofing Services",
    description: "Top-quality roofing services in Southern California. Free instant quotes available.",
    images: ["https://calgreenroofing.com/images/og-image.jpg"],
    creator: "@calgreenroofing",
  },
  alternates: {
    canonical: "https://calgreenroofing.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // Add if needed
    // bing: "your-bing-verification-code", // Add if needed
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://js.hsforms.net" />
        <link rel="preconnect" href="https://forms.hsforms.com" />
        <link rel="preconnect" href="https://app.roofle.com" />
        <link rel="preconnect" href="https://api.app.roofle.com" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2e7d32" />
        <meta name="msapplication-TileColor" content="#2e7d32" />

        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "Cal Green Roofing",
              image: "https://calgreenroofing.com/logo.png",
              url: "https://calgreenroofing.com",
              telephone: "(888) 665-3994",
              email: "info@calgreenroofing.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.0522",
                longitude: "-118.2437",
              },
              areaServed: [
                "Los Angeles County",
                "Orange County",
                "San Diego County",
                "Riverside County",
                "San Bernardino County",
                "Ventura County",
              ],
              serviceType: [
                "Residential Roofing",
                "Commercial Roofing",
                "Roof Repair",
                "Roof Replacement",
                "Roof Installation",
                "Roof Inspection",
                "Emergency Roof Repair",
              ],
              priceRange: "$$",
              openingHours: "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
              sameAs: [
                "https://www.facebook.com/calgreenroofing",
                "https://www.instagram.com/calgreenroofing",
                "https://www.linkedin.com/company/calgreenroofing",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <TopBar />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
