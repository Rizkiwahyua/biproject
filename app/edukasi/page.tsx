"use client"

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
  Smartphone,
  Sparkles
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TopicCard } from "@/components/topic-card"

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

export default function EdukasiPage() {
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
                <Sparkles className="h-4 w-4 text-primary" />
                Edukasi Keuangan
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Materi <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Pembelajaran</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
                Tingkatkan pengetahuan Anda tentang literasi keuangan dan mata uang Rupiah melalui berbagai materi edukasi yang kami sediakan.
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

        {/* Topics Grid */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                {/* Background gradient on hover */}
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
              
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                {/* Background gradient on hover */}
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
                      <span><strong className="text-foreground">Jangan Dilipat</strong> -Mencegah kerusakan serat kertas dan menjaga uang tidak lusuh.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span><strong className="text-foreground">Jangan Dicoret</strong> - Menjaga kebersihan dan memastikan uang tetap sah serta mudah diperiksa keasliannya.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span><strong className="text-foreground">Jangan Diremas</strong> Menghindari kerusakan fisik seperti kerutan atau sobekan.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span><strong className="text-foreground">Jangan Distapler</strong> Mencegah lubang atau kerusakan struktur kertas.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span><strong className="text-foreground">Jangan Dibasahi</strong> Menghindari jamur atau kerusakan tinta pada uang. </span>
                    </li>
                  </ul>
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
