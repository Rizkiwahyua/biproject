"use client"

import { BookOpen, History, Trophy, ArrowRight, Banknote, Shield, Users, Sparkles, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"

const features = [
  {
    title: "Edukasi Keuangan",
    description: "Pelajari berbagai materi tentang literasi keuangan dan pengelolaan uang yang bijak untuk kehidupan sehari-hari.",
    icon: BookOpen,
    href: "/edukasi",
  },
  {
    title: "Sejarah Rupiah",
    description: "Telusuri perjalanan sejarah mata uang Rupiah dari masa ke masa hingga bentuknya yang kita kenal saat ini.",
    icon: History,
    href: "/sejarah",
  },
  {
    title: "Lomba & Kompetisi",
    description: "Ikuti berbagai lomba dan kompetisi menarik seputar literasi keuangan dengan hadiah yang menarik.",
    icon: Trophy,
    href: "/lomba",
  },
]

const stats = [
  { value: "275M+", label: "Pengguna Rupiah", icon: Users },
  { value: "17.000+", label: "Pulau di Indonesia", icon: TrendingUp },
  { value: "1945", label: "Tahun Kemerdekaan", icon: Award },
  { value: "7", label: "Pecahan Uang Kertas", icon: Banknote },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Modern Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse-glow animation-delay-400" />
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col justify-center">
                {/* Badge */}
                <div className="animate-fade-in mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Kampanye Literasi Keuangan Kantor Perwakilan Bank Indonesia Lhokseumawe
                  </span>
                </div>
                
                {/* Headline */}
                <h1 className="animate-fade-in animation-delay-100 mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                  Cinta, Bangga,{" "}
                  <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">
                    Paham Rupiah
                  </span>
                </h1>
                
                {/* Description */}
                <p className="animate-fade-in animation-delay-200 mb-10 max-w-xl text-lg text-white/70 leading-relaxed sm:text-xl">
                  Tingkatkan pemahaman Anda tentang mata uang Rupiah dan literasi keuangan. 
                  Bersama Bank Indonesia, mari wujudkan masyarakat yang cerdas finansial.
                </p>
                
                {/* CTA Buttons */}
                <div className="animate-fade-in animation-delay-300 flex flex-col gap-4 sm:flex-row">
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-[#2d8f8f] text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    asChild
                  >
                    <Link href="/edukasi">
                      Mulai Belajar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    asChild
                  >
                    <Link href="/sejarah">
                      Jelajahi Sejarah
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Hero Visual */}
              <div className="relative flex items-center justify-center lg:justify-end animate-fade-in animation-delay-400">
                <div className="relative h-80 w-full max-w-md lg:h-[420px]">
                  {/* Floating decorative elements */}
                  <div className="absolute left-0 top-1/4 h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm animate-float flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute right-0 top-0 h-14 w-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-float animation-delay-200 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="absolute bottom-10 left-10 h-12 w-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm animate-float animation-delay-400 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white/60" />
                  </div>
                  
                  {/* Main visual card */}
                  <div className="relative mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur-md">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-4 ring-primary/20">
                      <Banknote className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">Rupiah Indonesia</h3>
                    <p className="text-center text-sm text-white/60 leading-relaxed">
                      Mata uang resmi Republik Indonesia sejak
                    </p>
                    <div className="mt-8 flex gap-3">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-sm">
                        <Shield className="h-3.5 w-3.5 text-primary" />
                        <span>Aman</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-sm">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        <span>275M+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 100V50C240 83 480 100 720 100C960 100 1200 83 1440 50V100H0Z" className="fill-background"/>
            </svg>
          </div>
        </section>

        {/* Highlight Banner */}
        <section className="relative -mt-1 bg-gradient-to-r from-accent via-[#e74c3c] to-accent animate-gradient">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Banknote className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Kenali Ciri Keaslian Uang Rupiah</h3>
                  <p className="text-sm text-white/80">
                    Pelajari cara membedakan uang asli dan palsu
                  </p>
                </div>
              </div>
              <Button 
                className="bg-white text-accent hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
                asChild
              >
                <Link href="/edukasi">
                  Pelajari Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 stagger-children">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={stat.label} 
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110" />
                    <div className="relative">
                      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Jelajahi
              </span>
              <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                Mulai Perjalanan Literasi Keuangan Anda
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Temukan berbagai materi edukasi, sejarah mata uang, dan kesempatan untuk menguji pengetahuan Anda
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  href={feature.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-300" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="text-center">
              <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance animate-fade-in">
                Siap Meningkatkan Literasi Keuangan Anda?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 animate-fade-in animation-delay-100">
                Bergabunglah dengan jutaan masyarakat Indonesia yang telah meningkatkan pemahaman mereka tentang keuangan dan mata uang Rupiah.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in animation-delay-200">
                <Button 
                  size="lg" 
                  className="group bg-white text-[#203a43] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
                  asChild
                >
                  <Link href="/edukasi">
                    Mulai Belajar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" 
                  asChild
                >
                  <Link href="/lomba">
                    Lihat Kompetisi
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
