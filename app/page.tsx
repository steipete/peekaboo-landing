import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Eye,
  Github,
  Download,
  Zap,
  Cpu,
  ScreenShare,
  MessageCircleQuestion,
  ServerIcon,
  ArrowRight,
  Sparkles,
  Wrench,
  ListTree,
  Brain,
  ShieldCheck,
  Package,
  BookOpen,
  Settings2,
  AlertTriangle,
  TestTube2,
  Code2,
  Ghost,
  Newspaper,
  BookMarked,
} from "lucide-react"

// Helper component for the Cursor Install Button (Dark Theme Focused)
const CursorInstallButton = () => (
  <a
    href="cursor://anysphere.cursor-deeplink/mcp/install?name=peekaboo&config=ewogICJjb21tYW5kIjogIm5weCIsCiAgImFyZ3MiOiBbCiAgICAiLXkiLAogICAgIkBzdGVpcGV0ZS9wZWVrYWJvby1tY3AiCiAgXSwKICAiZW52IjogewogICAgIlBFRUtBQk9PX0FJX1BST1ZJREVSUyI6ICJvbGxhbWEvbGxhdmE6bGF0ZXN0IgogIH0KfQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
    aria-label="Install Peekaboo in Cursor IDE"
  >
    <Image
      src="https://cursor.com/deeplink/mcp-install-dark.png" // Updated src
      alt="Install Peekaboo in Cursor IDE"
      width={200}
      height={58}
      // className="rounded" was removed as per instruction
    />
  </a>
)

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) => (
  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
    {Icon && <Icon className="h-16 w-16 mb-4 text-primary animate-pulse" />}
    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-emerald-500">
      {children}
    </h2>
  </div>
)

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
  linkText,
}: { icon: React.ElementType; title: string; description: string; link?: string; linkText?: string }) => (
  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-ghostly">
    <CardHeader className="items-center text-center">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <CardTitle className="text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-muted-foreground mb-4">{description}</p>
      {link && linkText && (
        <Button variant="link" asChild className="text-primary hover:text-emerald-400">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </CardContent>
  </Card>
)

export default function PeekabooLandingPage() {
  const GITHUB_URL = "https://github.com/steipete/Peekaboo"
  const BLOG_POST_URL = "https://steipete.me/posts/2025/peekaboo-mcp-lightning-fast-macos-screenshots-for-ai-agents"
  const NPM_URL = "https://www.npmjs.com/package/@steipete/peekaboo-mcp"

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-20 items-center">
          <Link href="#" className="flex items-center font-bold text-2xl">
            <Ghost className="h-10 w-10 mr-3 text-primary animate-ghost-float" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">Peekaboo</span>
          </Link>
          <nav className="ml-auto flex items-center gap-3 sm:gap-6">
            {[
              { href: "#capabilities", label: "Capabilities" },
              { href: "#tech", label: "Tech" },
              { href: BLOG_POST_URL, label: "Blog", icon: Newspaper, external: true },
              { href: GITHUB_URL, label: "GitHub", icon: Github, external: true },
            ].map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm sm:text-base"
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.icon && <item.icon className="h-4 w-4 mr-0 sm:mr-2" />}{" "}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link href={`${GITHUB_URL}/releases`} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" /> Download
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-0"></div>
          <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            {/* Subtle background pattern or animation could go here */}
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <Image
                  src="/peekaboo-banner.png"
                  alt="Peekaboo Banner - A friendly ghost with a camera"
                  width={700}
                  height={394}
                  className="rounded-lg shadow-2xl shadow-primary/20 animate-ghost-float"
                  priority
                />
                <h1
                  className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none leading-tight
                               bg-clip-text text-transparent bg-gradient-to-br from-slate-50 via-slate-200 to-primary"
                >
                  Give Your AI Agents <span className="text-primary">Supernatural Vision</span> on macOS.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl text-lg">
                  Peekaboo is a macOS-only MCP server for lightning-fast, non-intrusive screen capture and Visual
                  Question Answering (VQA).
                  <strong className="block mt-2 text-foreground">
                    "Without screenshots, agents debug blind—Peekaboo gives them eyes."
                  </strong>
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row items-start">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-emerald-500 shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6 mr-3" /> Star on GitHub
                    </Link>
                  </Button>
                  <CursorInstallButton />
                </div>
                <p className="text-sm text-muted-foreground">
                  Also available on{" "}
                  <Link
                    href={NPM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    NPM
                  </Link>{" "}
                  and check out the{" "}
                  <Link
                    href={BLOG_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    blog post
                  </Link>
                  .
                </p>
              </div>
              <div className="hidden lg:flex justify-center items-center relative">
                {/* Could add a more abstract visual here or a demo GIF */}
                <Eye className="h-64 w-64 text-primary/30 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-ping animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Peekaboo Section */}
        <section id="what-is-peekaboo" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <SectionTitle icon={Ghost}>What is Peekaboo?</SectionTitle>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground md:text-xl mb-12">
              Peekaboo bridges the gap between AI assistants and the visual content on your Mac's screen. It empowers AI
              agents to see, understand, and interact with your macOS environment non-intrusively, unlocking new levels
              of automation and intelligent debugging.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ScreenShare,
                  title: "Capture Screenshots",
                  description: "Entire screen, specific apps, or individual windows.",
                },
                {
                  icon: MessageCircleQuestion,
                  title: "Analyze Visuals",
                  description: "AI vision models (local/cloud) answer questions about images.",
                },
                {
                  icon: ListTree,
                  title: "List System Info",
                  description: "Running apps and their windows for targeted actions.",
                },
                {
                  icon: Zap,
                  title: "Non-Intrusive",
                  description: "No focus changes or workflow interruptions during capture.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="bg-card/70 border-primary/10 text-center p-6 hover:shadow-ghostly transition-shadow"
                >
                  <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section id="capabilities" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <SectionTitle icon={Sparkles}>Key Capabilities</SectionTitle>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Fast & Non-Intrusive",
                  description: "Uses Apple's ScreenCaptureKit for instant captures without focus changes.",
                },
                {
                  icon: Eye,
                  title: "Smart Window Targeting",
                  description: "Fuzzy matching finds the right window even with partial names or variations.",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Analysis",
                  description: "Ask questions about screenshots using GPT-4o, Claude, LLaVA, or Qwen2-VL.",
                },
                {
                  icon: ShieldCheck,
                  title: "Privacy-First Options",
                  description: "Run entirely locally with Ollama for full data control, or use cloud providers.",
                },
                {
                  icon: Package,
                  title: "Easy Installation",
                  description: "One-click install via Cursor, or simple npm/npx commands. Configurable via ENV.",
                },
                {
                  icon: Code2,
                  title: "Developer-Friendly",
                  description: "Clean JSON API, TypeScript support, comprehensive logging, and robust error handling.",
                },
              ].map((feat) => (
                <FeatureCard key={feat.title} {...feat} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Tools Section */}
        <section id="tools" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <SectionTitle icon={Wrench}>Core Tools for Agents</SectionTitle>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" defaultValue="tool-image">
              {[
                {
                  value: "tool-image",
                  icon: ScreenShare,
                  title: "Capture (`image`)",
                  description:
                    "The primary tool for capturing macOS screen content. Automatically removes window shadows/frames. Can optionally analyze the image with a question.",
                  details:
                    "Targets: entire screen, specific apps (fuzzy match), individual windows by title/index, or frontmost. Formats: PNG, JPG, or Base64 data (for app windows). Special handling for screen captures (file-only) and browser helper filtering.",
                },
                {
                  value: "tool-list",
                  icon: ListTree,
                  title: "System Info (`list`)",
                  description:
                    "Provides information about the system, such as running applications, their windows, and server status.",
                  details:
                    "Useful for agents to understand the current state of applications and windows before attempting a capture or interaction.",
                },
                {
                  value: "tool-analyze",
                  icon: MessageCircleQuestion,
                  title: "AI Vision Analysis (`analyze`)",
                  description: "Analyzes an existing image file using configured AI vision models (local or cloud).",
                  details:
                    "Allows agents to ask specific questions about an image (e.g., 'What text is in this button?', 'Is there an error message visible?'). Supports providers like Ollama, OpenAI.",
                },
              ].map((tool) => (
                <AccordionItem
                  value={tool.value}
                  key={tool.value}
                  className="border-primary/20 mb-2 rounded-lg bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-xl hover:no-underline hover:text-primary transition-colors group">
                    <div className="flex items-center">
                      <tool.icon className="h-6 w-6 mr-3 text-primary group-hover:animate-pulse" />
                      {tool.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    <p className="mb-2">{tool.description}</p>
                    <p className="text-sm">{tool.details}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href={`${GITHUB_URL}#available-tools`} target="_blank" rel="noopener noreferrer">
                  Full Tool Documentation on GitHub <BookMarked className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tech Stack & Architecture Section */}
        <section id="tech" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <SectionTitle icon={Cpu}>Tech & Architecture</SectionTitle>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  TypeScript <span className="text-primary">&</span> Swift: The Best of Both Worlds
                </h3>
                <p className="text-muted-foreground text-lg">
                  Peekaboo leverages TypeScript for its robust MCP SDK support and easy npm distribution, while a native
                  Swift CLI provides direct, high-performance access to macOS's ScreenCaptureKit.
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      icon: Zap,
                      text: "ScreenCaptureKit: Ensures non-intrusive, lightning-fast captures without focus changes.",
                    },
                    {
                      icon: ServerIcon,
                      text: "Node.js MCP Server: Handles agent communication, schema validation, and AI provider orchestration.",
                    },
                    {
                      icon: Code2,
                      text: "Swift CLI: Performs the actual screen capture and system interaction, outputting structured JSON.",
                    },
                    {
                      icon: Settings2,
                      text: "Configurable: Extensive environment variables for tailoring AI providers, logging, and paths.",
                    },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start">
                      <item.icon className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 lg:h-96 bg-card/50 p-6 rounded-lg border border-primary/20 shadow-xl">
                <pre className="text-xs text-muted-foreground overflow-auto h-full font-mono whitespace-pre-wrap">
                  {`AI Agent <---> Peekaboo MCP Server (Node.js/TypeScript)
  |
  |--- Calls ---> Swift CLI (peekaboo)
                  |
                  |--- Uses ---> macOS ScreenCaptureKit
                  |             |
                  |             +---> Screen/Window Pixels
                  |
                  |--- Optionally ---> AI Vision Models (Ollama/OpenAI/etc.)
                                      |
                                      +---> Analysis Text`}
                </pre>
                <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-lg border-2 border-primary animate-pulse opacity-30 pointer-events-none"></div>
              </div>
            </div>
            <div className="text-center mt-16">
              <Button variant="link" asChild className="text-primary text-lg">
                <Link href={`${GITHUB_URL}#architecture`} target="_blank" rel="noopener noreferrer">
                  Explore Full Architecture on GitHub <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Installation & Setup Teaser */}
        <section id="install" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <SectionTitle icon={Download}>Get Peekaboo</SectionTitle>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-8">
              Ready to give your AI agents eyes? Peekaboo is easy to install and configure. Requires macOS 14.0+ and
              Node.js 20.0+.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">For Cursor IDE Users:</h4>
                <CursorInstallButton />
                <p className="text-xs text-muted-foreground mt-1">One-click install!</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Via NPM/NPX:</h4>
                <code className="block bg-card/80 p-3 rounded-md text-primary font-mono text-sm shadow-md">
                  npx -y @steipete/peekaboo-mcp
                </code>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6"
            >
              <Link href={`${GITHUB_URL}#installation`} target="_blank" rel="noopener noreferrer">
                Full Installation & Configuration Guide <BookOpen className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              (Includes details on environment variables, AI provider setup, Ollama, and macOS permissions)
            </p>
          </div>
        </section>

        {/* Troubleshooting & Support Teaser */}
        <section id="support" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 text-center">
            <SectionTitle icon={AlertTriangle}>Troubleshooting & Support</SectionTitle>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-8">
              Encountered a mischievous spirit in the machine? The GitHub README provides comprehensive troubleshooting
              tips, common issues, and ways to get help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <FeatureCard
                icon={TestTube2}
                title="Testing & Debugging"
                description="Use MCP Inspector or direct CLI testing. Enable debug mode for detailed logs."
              />
              <FeatureCard
                icon={BookMarked}
                title="Common Issues"
                description="Solutions for permissions, AI analysis failures, CLI problems, and more."
              />
              <FeatureCard
                icon={Github}
                title="Get Help"
                description="Report issues, join discussions, or dive into the documentation on GitHub."
              />
            </div>
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-primary text-primary-foreground hover:bg-emerald-500 text-lg px-10 py-6"
            >
              <Link href={`${GITHUB_URL}#troubleshooting`} target="_blank" rel="noopener noreferrer">
                Visit Troubleshooting Guide <Wrench className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-background">
          <div className="container flex flex-col items-center justify-between gap-6 py-12 md:flex-row">
            <div className="flex items-center gap-3">
              <Ghost className="h-8 w-8 text-primary" />
              <p className="text-sm text-muted-foreground">
                Peekaboo MCP by{" "}
                <Link
                  href="https://steipete.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:text-primary"
                >
                  Peter Steinberger
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" /> GitHub
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                <Link href={NPM_URL} target="_blank" rel="noopener noreferrer">
                  <Package className="h-5 w-5 mr-2" /> NPM
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} MIT Licensed</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
