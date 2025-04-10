import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Gem } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jewelry Information - Discover the Art of Fine Jewelry",
  description: "Explore the fascinating world of jewelry, from ancient traditions to modern masterpieces.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Gem className="h-6 w-6" />
                  <span className="text-xl font-bold">Jewelry World</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
                    Categories
                  </Link>
                  <Link href="/materials" className="text-sm font-medium hover:underline underline-offset-4">
                    Materials
                  </Link>
                  <Link href="/history" className="text-sm font-medium hover:underline underline-offset-4">
                    History
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Jewelry World. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                  <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
                    Privacy
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'