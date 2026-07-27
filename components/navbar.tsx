"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { apiFetch } from "@/lib/api";
import { ApiCollection, RunningText } from "@/types/api";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/edukasi", label: "Learning" },
  { href: "/berita", label: "Sharing" },
  { href: "/lomba", label: "Moving" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [runningTexts, setRunningTexts] = useState<RunningText[]>([]);

  useEffect(() => {
    async function loadRunningTexts() {
      try {
        const response = await apiFetch<ApiCollection<RunningText>>("/running-texts");

        setRunningTexts(response.data);
      } catch (error) {
        console.error("Gagal mengambil running text:", error);
      }
    }

    loadRunningTexts();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" className="group flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-80 shrink-0">
          <Image src="/BIlogo.png" alt="Logo BI" width={180} height={50} className="h-7 sm:h-10 w-auto object-contain" />
          <Image src="/logocbp.png" alt="Logo CBP" width={150} height={45} className="h-7 sm:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-sm font-semibold transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{link.label}</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2.5px] rounded-full bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <Button className="bg-[#CF1A25] text-white border border-[#CF1A25] hover:bg-[#CF1A25]/90 hover:text-white transition-all duration-300 hover:-translate-y-0.5" asChild>
            <Link href="https://pintar.bi.go.id/" target="_blank" rel="noopener noreferrer">
              BI.PINTAR
            </Link>
          </Button>
          <Button className="group bg-gradient-to-r from-primary to-[#3b82f6] text-white hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5" asChild>
            <Link href="/game">
              Start Game
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("border-t border-border/50 bg-card/95 backdrop-blur-xl md:hidden transition-all duration-300 overflow-hidden", mobileMenuOpen ? "max-h-[450px]" : "max-h-0 border-t-0")}>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200", pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground")}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Button className="w-full bg-[#CF1A25] text-white border border-[#CF1A25] hover:bg-[#CF1A25]/90 hover:text-white transition-all duration-300" asChild>
              <Link href="https://pintar.bi.go.id/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                BI.PINTAR
              </Link>
            </Button>
            <Button className="w-full bg-gradient-to-r from-primary to-[#3b82f6] text-white hover:opacity-90 transition-all duration-300" asChild>
              <Link href="/game" onClick={() => setMobileMenuOpen(false)}>
                Start Game
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Ticker Banner */}
      <div className="border-t border-border/50 bg-primary/5 py-2 overflow-hidden text-xs text-foreground font-semibold">
        <div className="relative flex overflow-x-hidden w-full">
          {/* Running text */}
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
            {/* Set pertama */}
            {runningTexts.map((item) => (
              <span key={`first-${item.id}`} className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                {item.running_text}
              </span>
            ))}

            {/* Set kedua supaya looping */}
            {runningTexts.map((item) => (
              <span key={`second-${item.id}`} className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                {item.running_text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
