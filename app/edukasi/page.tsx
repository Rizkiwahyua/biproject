"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { 
  Banknote, 
  Shield, 
  Wallet, 
  PiggyBank, 
  CreditCard, 
  TrendingUp,
  FileText,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  BookOpen,
  History
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TopicCard } from "@/components/topic-card"
import { TimelineItem } from "@/components/timeline-item"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const topics = [
  {
    title: "Mengenal Uang Rupiah",
    description: "Pelajari karakteristik dan ciri-ciri uang Rupiah yang berlaku di Indonesia",
    icon: Banknote,
  },
  {
    title: "Ciri Keaslian Uang",
    description: "Ketahui cara membedakan uang asli dan palsu dengan teknik 3D (Dilihat, Diraba, Diterawang)",
    icon: Shield,
  },
  {
    title: "Pengelolaan Keuangan",
    description: "Tips dan trik mengelola keuangan pribadi dengan bijak dan efektif",
    icon: Wallet,
  },
  {
    title: "Menabung & Investasi",
    description: "Panduan dasar menabung dan memulai investasi untuk masa depan",
    icon: PiggyBank,
  },
  {
    title: "Transaksi Non-Tunai",
    description: "Memahami berbagai metode pembayaran digital yang aman dan nyaman",
    icon: CreditCard,
  },
  {
    title: "Inflasi & Ekonomi",
    description: "Pahami konsep inflasi dan dampaknya terhadap perekonomian sehari-hari",
    icon: TrendingUp,
  },
  {
    title: "Perencanaan Keuangan",
    description: "Langkah-langkah membuat rencana keuangan untuk mencapai tujuan finansial",
    icon: FileText,
  },
  {
    title: "Waspadai Penipuan",
    description: "Kenali modus penipuan keuangan dan cara melindungi diri dari kejahatan finansial",
    icon: AlertTriangle,
  },
]

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

function EdukasiContent() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState("materi")

  useEffect(() => {
    if (tabParam === "sejarah") {
      setActiveTab("sejarah")
    } else {
      setActiveTab("materi")
    }
  }, [tabParam])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("tab", value)
      window.history.pushState({}, "", url.toString())
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header with Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <div className="animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {activeTab === "materi" ? (
                  <>
                    <BookOpen className="h-4 w-4 text-primary" />
                    Edukasi Keuangan
                  </>
                ) : (
                  <>
                    <History className="h-4 w-4 text-primary" />
                    Sejarah Rupiah
                  </>
                )}
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance transition-all duration-300">
                {activeTab === "materi" ? (
                  <>
                    Materi <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Pembelajaran</span>
                  </>
                ) : (
                  <>
                    Perjalanan <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Mata Uang</span> Rupiah
                  </>
                )}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed transition-all duration-300">
                {activeTab === "materi" 
                  ? "Tingkatkan pengetahuan Anda tentang literasi keuangan dan mata uang Rupiah melalui berbagai materi edukasi yang kami sediakan."
                  : "Telusuri sejarah panjang mata uang Rupiah dari masa awal kemerdekaan hingga era modern, mencerminkan perjalanan ekonomi bangsa Indonesia."}
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

        {/* Tabs System */}
        <section className="bg-background relative -mt-10 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Tab Selector */}
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-card border border-border/80 rounded-2xl h-14 shadow-lg shadow-black/5">
                  <TabsTrigger 
                    value="materi" 
                    className="rounded-xl py-2.5 text-base font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Materi Edukasi
                  </TabsTrigger>
                  <TabsTrigger 
                    value="sejarah" 
                    className="rounded-xl py-2.5 text-base font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white cursor-pointer"
                  >
                    <History className="h-4 w-4 mr-2" />
                    Sejarah Rupiah
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab Content: Materi Edukasi */}
              <TabsContent value="materi" className="outline-none focus:outline-none">
                <div className="animate-fade-in">
                  {/* Topics Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
                    {topics.map((topic) => (
                      <TopicCard
                        key={topic.title}
                        title={topic.title}
                        description={topic.description}
                        icon={topic.icon}
                      />
                    ))}
                  </div>

                  {/* Additional Info Section (3D & 5J) */}
                  <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Teknik 3D */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110">
                          <Shield className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-card-foreground">Teknik 3D</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Cara mudah mengecek keaslian uang Rupiah:
                        </p>
                        <ul className="mt-5 space-y-3">
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span><strong className="text-foreground">Dilihat</strong> - Perhatikan gambar tersembunyi, benang pengaman, dan gambar saling isi</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span><strong className="text-foreground">Diraba</strong> - Rasakan tekstur cetak intaglio yang kasar pada bagian tertentu</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span><strong className="text-foreground">Diterawang</strong> - Lihat tanda air dan fitur pengaman saat diterawangkan ke cahaya</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Teknik 5J */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 transition-all duration-300 group-hover:scale-110">
                          <Wallet className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-card-foreground">Teknik 5J</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Cara mencintai uang Rupiah:
                        </p>
                        <ul className="mt-5 space-y-3">
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                              <CheckCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span><strong className="text-foreground">Jangan Dilipat</strong> - Mencegah kerusakan serat kertas dan menjaga uang tidak lusuh.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                              <CheckCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span><strong className="text-foreground">Jangan Dicoret</strong> - Menjaga kebersihan dan memastikan uang tetap sah.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                              <CheckCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span><strong className="text-foreground">Jangan Diremas</strong> - Menghindari kerusakan fisik seperti kerutan atau sobekan.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                              <CheckCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span><strong className="text-foreground">Jangan Distapler</strong> - Mencegah lubang atau kerusakan struktur kertas.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                              <CheckCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span><strong className="text-foreground">Jangan Dibasahi</strong> - Menghindari jamur atau kerusakan tinta pada uang.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tab Content: Sejarah Rupiah */}
              <TabsContent value="sejarah" className="outline-none focus:outline-none">
                <div className="animate-fade-in">
                  
                  {/* Timeline section */}
                  <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
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

                  {/* Fun Facts Section */}
                  <div className="mt-16 rounded-3xl bg-muted/30 p-8 sm:p-12">
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
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

                </div>
              </TabsContent>
            </Tabs>

          </div>
        </section>

        {/* Video Edukasi & Download Section */}
        <section className="bg-muted/30 border-t border-border/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Embed Video Youtube */}
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                    <Sparkles className="h-3 w-3" />
                    Video Pembelajaran
                  </span>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Sosialisasi Cinta, Bangga, Paham Rupiah</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Saksikan video sosialisasi resmi dari Bank Indonesia untuk memahami lebih lanjut pentingnya mencintai, menjaga, dan memahami uang Rupiah sebagai simbol kedaulatan bangsa Indonesia.
                  </p>
                </div>
                <div className="lg:col-span-7 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black shadow-lg relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/j-cw_ozfayQ"
                    title="Video Edukasi Cinta Bangga Paham Rupiah"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Download Materi Section */}
            <div className="mt-16">
              <div className="mb-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground">Unduh Materi Pembelajaran</h3>
                <p className="text-sm text-muted-foreground mt-1">Dapatkan buku panduan dan materi presentasi resmi dari Bank Indonesia</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Materi CBP */}
                <div className="group relative flex items-center justify-between p-6 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Materi Cinta Bangga Paham Rupiah</h4>
                      <p className="text-xs text-muted-foreground">PDF (9.1 MB) • Buku Panduan Lengkap 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4 shrink-0 cursor-pointer" asChild>
                    <a href="/materi_cbp.pdf" download="Materi_Cinta_Bangga_Paham_Rupiah_BI.pdf">Unduh</a>
                  </Button>
                </div>

                {/* Materi Kebanksentralan */}
                <div className="group relative flex items-center justify-between p-6 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Materi Kebanksentralan (BI Talk)</h4>
                      <p className="text-xs text-muted-foreground">PDF (2.7 MB) • Presentasi Edukasi 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4 shrink-0 cursor-pointer" asChild>
                    <a href="/materi_kebanksentralan.pdf" download="Materi_Kebanksentralan_BI_Talk.pdf">Unduh</a>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function EdukasiPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    }>
      <EdukasiContent />
    </Suspense>
  )
}
