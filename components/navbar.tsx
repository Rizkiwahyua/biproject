"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/edukasi", label: "Edukasi" },
  { href: "/berita", label: "Berita" },
  { href: "/lomba", label: "Lomba" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >

          <Link href="/">
            <Image src="/BIlogo.png" alt="Logo" width={180} height={150} />
          </Link>
          <Link href="/">
            <Image src="/logocbp.png" alt="Logo" width={140} height={130} />
          </Link>

          {/* <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">
              kantor Perwakilan Bank Indonesia Lhokseumawe
            </p>
            <p className="text-xs text-primary font-medium">
              Cinta Bangga Paham Rupiah LSM{" "}
            </p>
          </div> */}

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {pathname === link.href && (
                <span className="absolute inset-0 rounded-xl bg-primary/10" />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="group bg-gradient-to-r from-primary to-[#2d8f8f] text-white hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            asChild
          >
            <Link href="/game">
              Mulai Game
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
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "border-t border-border/50 bg-card/95 backdrop-blur-xl md:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-80" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="mt-3 bg-gradient-to-r from-primary to-[#2d8f8f] text-white hover:opacity-90 transition-all duration-300"
            asChild
          >
            <Link href="/game" onClick={() => setMobileMenuOpen(false)}>
              Mulai Game
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
