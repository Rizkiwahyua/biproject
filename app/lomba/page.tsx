"use client"

import { Trophy, Users, Award, Calendar, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"

const events = [
  {
    title: "Lomba Video Kreatif Cinta Rupiah",
    description: "Buat video kreatif tentang pentingnya mencintai dan menjaga keaslian Rupiah. Durasi video maksimal 3 menit dengan format MP4.",
    date: "15 April - 30 Mei 2026",
    location: "Online (Seluruh Indonesia)",
    status: "ongoing" as const,
  },
  {
    title: "Quiz Literasi Keuangan Nasional",
    description: "Uji pengetahuan Anda tentang literasi keuangan dan mata uang Rupiah. Tersedia hadiah menarik untuk 100 peserta terbaik.",
    date: "1 Juni - 15 Juni 2026",
    location: "Online",
    status: "upcoming" as const,
  },
  {
    title: "Lomba Poster Digital",
    description: "Desain poster digital dengan tema 'Rupiah Kebanggaanku'. Terbuka untuk pelajar SMA/SMK sederajat di seluruh Indonesia.",
    date: "1 Juli - 31 Juli 2026",
    location: "Online (Khusus Pelajar)",
    status: "upcoming" as const,
  },
  {
    title: "Kompetisi Essay Ekonomi",
    description: "Tulis essay tentang peran mata uang dalam pembangunan ekonomi Indonesia. Panjang essay 2.000-3.000 kata.",
    date: "1 Maret - 31 Maret 2026",
    location: "Online",
    status: "closed" as const,
  },
  {
    title: "Hackathon Fintech Edukasi",
    description: "Kembangkan aplikasi atau solusi teknologi untuk meningkatkan literasi keuangan masyarakat Indonesia.",
    date: "10 Februari - 20 Februari 2026",
    location: "Jakarta Convention Center",
    status: "closed" as const,
  },
  {
    title: "Lomba Karya Tulis Ilmiah",
    description: "Kompetisi karya tulis ilmiah tentang kebijakan moneter dan dampaknya terhadap ekonomi mikro.",
    date: "15 Januari - 28 Februari 2026",
    location: "Online (Mahasiswa)",
    status: "closed" as const,
  },
]

const stats = [
  { icon: Trophy, value: "50+", label: "Kompetisi Per Tahun" },
  { icon: Users, value: "100K+", label: "Total Peserta" },
  { icon: Award, value: "500+", label: "Pemenang" },
  { icon: Calendar, value: "12", label: "Bulan Aktif" },
]

export default function LombaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header with Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="text-center animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Trophy className="h-4 w-4 text-accent" />
                Kompetisi
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Lomba & <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Kompetisi</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
                Ikuti berbagai kompetisi menarik seputar literasi keuangan dan uang Rupiah. 
                Tunjukkan kreativitas dan pengetahuan Anda untuk memenangkan hadiah menarik!
              </p>
            </div>
          </div>
          
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 50 480 60 720 60C960 60 1200 50 1440 30V60H0Z" className="fill-background"/>
            </svg>
          </div>
        </section>

        {/* Stats */}
        <section className="relative -mt-1 bg-gradient-to-r from-accent via-[#e74c3c] to-accent animate-gradient">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center group">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-10">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Event Terbaru
              </span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Daftar Kompetisi</h2>
              <p className="mt-2 text-muted-foreground">Pilih kompetisi yang sesuai dengan minat dan kemampuan Anda</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
              {events.map((event) => (
                <EventCard
                  key={event.title}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  location={event.location}
                  status={event.status}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-10 text-center shadow-sm sm:p-14">
              {/* Decorative elements */}
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />
              
              <div className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-card-foreground sm:text-3xl lg:text-4xl">
                  Ingin Mengadakan Kompetisi?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
                  Jika institusi Anda ingin berkolaborasi dengan Bank Indonesia dalam mengadakan kompetisi 
                  literasi keuangan, silakan hubungi kami untuk informasi lebih lanjut.
                </p>
                <Button 
                  size="lg"
                  className="group/btn bg-gradient-to-r from-primary to-[#2d8f8f] text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="mailto:kompetisi@bi.go.id">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
