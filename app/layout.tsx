import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peekaboo: AI Vision for macOS | Fast Screen Capture & VQA",
  description:
    "Peekaboo empowers AI agents with lightning-fast, non-intrusive screen capture and Visual Question Answering (VQA) on macOS. Give your AI eyes!",
  keywords:
    "Peekaboo, macOS, AI, screen capture, VQA, visual question answering, AI agents, macOS automation, ScreenCaptureKit, Ollama, GPT-4o, Claude, LLaVA, Qwen2-VL, developer tools, AI vision",
  authors: [{ name: "Peter Steinberger", url: "https://steipete.me" }],
  creator: "Peter Steinberger",
  publisher: "Peter Steinberger",
  openGraph: {
    title: "Peekaboo: AI Vision for macOS | Fast Screen Capture & VQA",
    description:
      "Empower your AI agents with vision on macOS. Capture, analyze, and understand screen content with Peekaboo.",
    url: "https://peekaboo.dev", // Assuming this is your production URL
    siteName: "Peekaboo MCP",
    images: [
      {
        url: "https://peekaboo.dev/peekaboo-banner.png", // Use absolute URL for OG images
        width: 1200,
        height: 630,
        alt: "Peekaboo MCP Banner - A friendly ghost with a camera giving AI vision on macOS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peekaboo: AI Vision for macOS | Fast Screen Capture & VQA",
    description: "Lightning-fast macOS screen capture & VQA for AI agents. Give your AI eyes with Peekaboo!",
    site: "@steipete", // Replace with your Twitter handle if available
    creator: "@steipete", // Replace with your Twitter handle if available
    images: ["https://peekaboo.dev/peekaboo-banner.png"], // Use absolute URL for Twitter images
  },
  icons: {
    icon: "/favicon.ico", // Main favicon
    shortcut: "/favicon.ico", // For older browsers
    apple: "/apple-touch-icon.png", // Consider adding an apple-touch-icon
  },
  manifest: "/site.webmanifest", // Consider adding a web app manifest
  robots: {
    // Basic robots configuration
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
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    // Match your dark theme
    { media: "(prefers-color-scheme: dark)", color: "#0D0C0F" }, // Your dark background
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Fallback light color
  ],
  colorScheme: "dark", // Default to dark as per your site
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        {/* The <link rel="icon" href="/favicon.ico" /> is now handled by Next.js metadata API's `icons` field */}
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
