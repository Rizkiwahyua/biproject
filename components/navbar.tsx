"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/edukasi", label: "Education" },
  { href: "/berita", label: "Entertainment" },
  { href: "/lomba", label: "Engagement" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" className="group flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-80 shrink-0">
          <Image src="/BIlogo.png" alt="Logo BI" width={180} height={50} className="h-8 sm:h-12 w-auto object-contain" />
          <Image src="/logocbp.png" alt="Logo CBP" width={150} height={45} className="h-8 sm:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground")}>
              {pathname === link.href && <span className="absolute inset-0 rounded-xl bg-primary/10" />}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
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
      <div className={cn("border-t border-border/50 bg-card/95 backdrop-blur-xl md:hidden transition-all duration-300 overflow-hidden", mobileMenuOpen ? "max-h-80" : "max-h-0 border-t-0")}>
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
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
            {/* Set 1 */}
            <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" /> INFO TERKINI: Kampanye Literasi Keuangan KPw Bank Indonesia Lhokseumawe</span>
            <span className="flex items-center gap-2">🪙 CINTA RUPIAH: Kenali, Rawat, dan Jaga Rupiah Kita</span>
            <span className="flex items-center gap-2">🇮🇩 BANGGA RUPIAH: Rupiah sebagai Simbol Kedaulatan Negara</span>
            <span className="flex items-center gap-2">💡 PAHAM RUPIAH: Pahami Penggunaan dan Pengelolaan Keuangan dengan BIjak</span>
            <span className="flex items-center gap-2">🏆 LOMBA LITERASI: Ikuti kompetisi literasi keuangan TE 2022 terbaru!</span>
            
            {/* Set 2 for seamless looping */}
            <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" /> INFO TERKINI: Kampanye Literasi Keuangan KPw Bank Indonesia Lhokseumawe</span>
            <span className="flex items-center gap-2">🪙 CINTA RUPIAH: Kenali, Rawat, dan Jaga Rupiah Kita</span>
            <span className="flex items-center gap-2">🇮🇩 BANGGA RUPIAH: Rupiah sebagai Simbol Kedaulatan Negara</span>
            <span className="flex items-center gap-2">💡 PAHAM RUPIAH: Pahami Penggunaan dan Pengelolaan Keuangan dengan BIjak</span>
            <span className="flex items-center gap-2">🏆 LOMBA LITERASI: Ikuti kompetisi literasi keuangan TE 2022 terbaru!</span>
          </div>
        </div>
      </div>
    </header>
  );
}
