import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Eduardo Guastay | Links",
  description: "Software Engineer, Philanthropist, Playboy, software developer",
  metadataBase: new URL("https://eduedu.dev"),
  openGraph: {
    title: "Eduardo Guastay | Links",
    description: "Software Engineer, Philanthropist, Playboy, software developer",
    url: "https://eduedu.dev",
    siteName: "Eduardo Guastay",
    locale: "es_ES",
    type: "website",
    // Images are now handled by the opengraph-image.tsx file
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Guastay | Links",
    description: "Software Engineer, Philanthropist, Playboy, software developer",
    creator: "@eduardoguastay",
    // Images are now handled by the twitter-image.tsx file
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Eduardo Guastay",
      url: "https://eduedu.dev",
    },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
