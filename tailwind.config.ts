import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"], // Keep class-based dark mode for flexibility, but default to dark
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // e.g., #111827 (gray-900) or #0D0C0F (near black)
        foreground: "hsl(var(--foreground))", // e.g., #E5E7EB (gray-200)
        primary: {
          DEFAULT: "hsl(var(--primary))", // Ghostly green accent
          foreground: "hsl(var(--primary-foreground))", // Text on primary bg
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Darker accent or subtle bg
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Subtle backgrounds for cards/sections
          foreground: "hsl(var(--muted-foreground))", // Muted text
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Ghostly green or secondary accent
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card backgrounds
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ghost-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ghost-float": "ghost-float 3s ease-in-out infinite",
      },
      boxShadow: {
        ghostly: "0 0 15px 5px hsla(var(--primary), 0.5), 0 0 25px 10px hsla(var(--primary), 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
