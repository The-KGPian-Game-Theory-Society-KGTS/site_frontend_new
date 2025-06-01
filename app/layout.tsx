import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingIcons from "@/components/floating-icons"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "The KGPian Game Theory Society",
  description: "Where strategy meets probability, and every decision counts",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/kgts-logo.png',
        type: 'image/png',
        sizes: '32x32',
      }
    ],
  },
  verification: {
    other: {
      'preload-image': '/kgts-logo.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/kgts-logo.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="fixed top-0 left-0 w-screen h-screen bg-[url('/playing-cards-red-glow.png')] bg-no-repeat bg-center bg-cover opacity-[0.15] mix-blend-overlay pointer-events-none z-0" />
          <FloatingIcons />
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
