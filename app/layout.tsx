import type React from "react"
import type { Metadata } from "next"
import { Bai_Jamjuree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteChrome from "@/components/baselayout/SiteChrome"

export const metadata: Metadata = {
  title: "Test Nitro",
  description: "NitroForge Studio is a digital production studio delivering game development, Web3 experiences, software and website solutions, and high-end CGI and visual effects.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
}

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bai-jamjuree",
})

const baiJamjureeRegular = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bai-jamjuree-regular",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${baiJamjuree.variable} ${baiJamjureeRegular.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <SiteChrome>{children}</SiteChrome>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
