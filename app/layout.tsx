import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingIcons from "@/components/floating-icons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The KGPian Game Theory Society",
  description: "Where strategy meets probability, and every decision counts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-black min-h-screen`}>
        <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0" />
        <FloatingIcons />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative z-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
