import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Assuming you still want theme toggling ability

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peekaboo MCP: macOS Screenshots for AI Agents",
  description:
    "Lightning-fast, non-intrusive macOS screen capture and visual question answering for AI agents. Give your AI eyes with Peekaboo.",
  openGraph: {
    title: "Peekaboo MCP: macOS Screenshots for AI Agents",
    description: "Empower your AI agents with vision on macOS. Capture, analyze, and understand screen content.",
    images: [
      {
        url: "/peekaboo-banner.png", // Make sure this path is correct
        width: 1200,
        height: 630,
        alt: "Peekaboo MCP Banner",
      },
    ],
    siteName: "Peekaboo MCP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peekaboo MCP: macOS Screenshots for AI Agents",
    description: "Lightning-fast macOS screen capture for AI. Give your AI eyes!",
    images: ["/peekaboo-banner.png"], // Make sure this path is correct
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* ThemeProvider can be used if you want to allow users to switch themes,
            otherwise, if it's always dark, you might not need it.
            Forcing dark via html class and style={{ colorScheme: 'dark' }}
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} // If you only want dark, disable system preference
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
