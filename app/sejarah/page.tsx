"use client"

import { Sparkles, History } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TimelineItem } from "@/components/timeline-item"

const timelineData = [
  {
    year: "1946",
    title: "Oeang Republik Indonesia (ORI)",
    description: "Uang pertama Republik Indonesia diterbitkan pada 30 Oktober 1946 yang dikenal sebagai Oeang Republik Indonesia (ORI). Uang ini menjadi simbol kedaulatan ekonomi bangsa Indonesia yang baru merdeka.",
  },
  {
    year: "1950",
    title: "Penyatuan Mata Uang",
    description: "Setelah pengakuan kedaulatan, dilakukan penyatuan berbagai mata uang yang beredar di Indonesia menjadi satu mata uang resmi yaitu Rupiah.",
  },
  {
    year: "1953",
    title: "Bank Indonesia Didirikan",
    description: "Bank Indonesia resmi didirikan sebagai bank sentral Republik Indonesia, mengambil alih peran dari De Javasche Bank dalam mengelola kebijakan moneter dan mengedarkan uang.",
  },
  {
    year: "1959",
    title: "Sanering Pertama",
    description: "Pemerintah melakukan sanering (pemotongan nilai uang) untuk mengatasi inflasi. Uang pecahan Rp500 dan Rp1.000 dipotong nilainya menjadi 10% dari nilai semula.",
  },
  {
    year: "1965",
    title: "Uang Baru Pasca Inflasi",
    description: "Diterbitkan uang Rupiah baru dengan denominasi yang lebih rendah setelah periode hiperinflasi. Nilai tukar ditetapkan Rp1.000 lama = Rp1 baru.",
  },
  {
    year: "1993",
    title: "Era Uang Plastik",
    description: "Indonesia mulai menerbitkan uang polymer (plastik) untuk pecahan Rp50.000 sebagai langkah modernisasi dan meningkatkan keamanan uang.",
  },
  {
    year: "2004",
    title: "Seri Pahlawan Nasional",
    description: "Bank Indonesia menerbitkan uang kertas dengan gambar pahlawan nasional, memperkuat identitas nasional dalam mata uang.",
  },
  {
    year: "2016",
    title: "Uang NKRI",
    description: "Peluncuran 11 uang Rupiah emisi tahun 2016 dengan desain baru yang menampilkan 12 pahlawan nasional dan tema kebudayaan Indonesia. Uang ini memiliki fitur keamanan yang lebih canggih.",
  },
  {
    year: "2022",
    title: "Uang Rupiah Kertas Tahun Emisi 2022",
    description: "Bank Indonesia meluncurkan uang Rupiah kertas tahun emisi 2022 dengan fitur keamanan yang ditingkatkan dan desain yang diperbarui untuk mempersulit pemalsuan.",
  },
]

const funFacts = [
  {
    value: "30 Oktober",
    title: "Hari Oeang",
    description: "Tanggal 30 Oktober diperingati sebagai Hari Oeang, mengenang penerbitan ORI pertama kali.",
  },
  {
    value: "12 Pahlawan",
    title: "Wajah di Uang",
    description: "Saat ini terdapat 12 pahlawan nasional yang wajahnya tercetak di berbagai pecahan uang Rupiah.",
  },
  {
    value: "7 Pecahan",
    title: "Uang Kertas",
    description: "Terdapat 7 pecahan uang kertas yang beredar: Rp1.000, Rp2.000, Rp5.000, Rp10.000, Rp20.000, Rp50.000, dan Rp100.000.",
  },
]

export default function SejarahPage() {
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
                <History className="h-4 w-4 text-primary" />
                Sejarah Rupiah
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Perjalanan <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Mata Uang</span> Rupiah
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
                Telusuri sejarah panjang mata uang Rupiah dari masa awal kemerdekaan hingga era modern, 
                mencerminkan perjalanan ekonomi bangsa Indonesia.
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

        {/* Timeline */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="relative stagger-children">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-10 text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Tahukah Kamu?
              </span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Fakta Menarik</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
              {funFacts.map((fact) => (
                <div 
                  key={fact.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Decorative circle */}
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-[3] group-hover:bg-primary/10" />
                  
                  <div className="relative">
                    <p className="mb-2 text-3xl font-bold bg-gradient-to-r from-primary to-[#2d8f8f] bg-clip-text text-transparent">{fact.value}</p>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
