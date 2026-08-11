"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Lock, Brain, ArrowRight, Sparkles, Play } from "lucide-react";

export default function GamePage() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#02152c] via-[#082a52] to-[#1e3a5f] text-white py-24 sm:py-32">
          {/* Decorative Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>

          {/* Guilloche Banknote Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 C 20 20, 20 60, 40 40 C 60 20, 60 60, 80 40 M0 20 C 20 0, 20 40, 40 20 C 60 0, 60 40, 80 20 M0 60 C 20 40, 20 80, 40 60 C 60 40, 60 80, 80 60' stroke='%23ffffff' stroke-width='0.8' fill='none'/%3E%3Cpath d='M40 0 C 20 20, 60 20, 40 40 C 20 60, 60 60, 40 80' stroke='%23ffffff' stroke-width='0.4' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Large Floating Illustration - Hidden on mobile/tablet for responsiveness */}
          <div className="absolute right-0 bottom-0 h-full hidden lg:flex items-end pr-16 opacity-40 pointer-events-none">
            <Image
              src="/animation.png"
              alt="Decor"
              width={550}
              height={550}
              className="object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="animate-fade-in mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
                <Gamepad2 className="h-4 w-4 text-accent" />
                Interaktif & Seru
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Game Edukasi</h1>
            <p className="text-white/70 max-w-xl text-base sm:text-lg leading-relaxed">
              Tingkatkan pemahaman Anda tentang mata uang Rupiah dan keuangan melalui permainan interaktif yang mendidik dan menyenangkan.
            </p>
          </div>
        </section>

        {/* CARDS SECTION */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              
              {/* GAME CARD 1: QORI */}
              <a
                href="https://cr7s.cbprupiahlsm.id/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Mouse follow spotlight glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.08), transparent 80%)"
                  }}
                />
                
                {/* Gradient Border follow mouse */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  style={{
                    border: "1.5px solid transparent",
                    backgroundImage: "linear-gradient(var(--card), var(--card)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.4), transparent 80%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    margin: "-1.5px"
                  }}
                />

                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    {/* Game Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted mb-6 shadow-sm">
                      <img 
                        src="/CR7s.webp" 
                        alt="CR7s" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                        Kecepatan
                      </span>
                     </div>

                     <div className="flex items-center gap-2 mb-2">
                       <h2 className="text-2xl font-bold text-card-foreground group-hover:text-emerald-500 transition-colors">CR7s</h2>
                     </div>
                     <p className="text-sm font-semibold text-emerald-500 mb-3">Cinta Rupiah 7 Seconds</p>
                     <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      Uji kecepatan berpikir dan pengetahuan Anda tentang Rupiah melalui berbagai tantangan seru yang harus diselesaikan dalam waktu singkat!
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 group-hover:bg-emerald-400 group-hover:shadow-emerald-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                      Mulai Main
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-emerald-500 transition-colors">
                      cr7s.cbprupiahlsm.id
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>

              {/* GAME CARD 2: KUAR */}
              <a
                href="https://kupiah.cbprupiahlsm.id/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Mouse follow spotlight glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.08), transparent 80%)"
                  }}
                />
                
                {/* Gradient Border follow mouse */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  style={{
                    border: "1.5px solid transparent",
                    backgroundImage: "linear-gradient(var(--card), var(--card)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.4), transparent 80%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    margin: "-1.5px"
                  }}
                />

                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    {/* Game Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted mb-6 shadow-sm">
                      <img 
                        src="/kupiah.webp" 
                        alt="KUPIAH" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                        Petualangan
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-card-foreground group-hover:text-red-500 transition-colors">KUPIAH</h2>
                    </div>
                    <p className="text-sm font-semibold text-red-500 mb-3">Kuis Rupiah</p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      Uji pengetahuan, logika, dan kemampuan memecahkan misteri tentang Rupiah, pahlawan pada lembaran uang, serta budaya dan daerah Indonesia dalam petualangan kuis yang seru dan menantang!
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/25 group-hover:bg-red-400 group-hover:shadow-red-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                      Mulai Main
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-red-500 transition-colors">
                      kupiah.cbprupiahlsm.id
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
