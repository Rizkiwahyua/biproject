"use client"

import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const newsData = [
  {
    id: "1",
    title: "Sosialisasi Cinta Bangga Paham Rupiah di Lhokseumawe",
    summary: "Kantor Perwakilan Bank Indonesia Lhokseumawe menggelar kampanye edukasi CBP Rupiah kepada ribuan pelajar di tingkat SMA dan perguruan tinggi setempat.",
    content: "Lhokseumawe — Kantor Perwakilan Bank Indonesia (KPw BI) Lhokseumawe terus berkomitmen meningkatkan pemahaman masyarakat terhadap uang Rupiah melalui sosialisasi intensif Cinta, Bangga, Paham (CBP) Rupiah.\n\nDalam kegiatan edukasi yang dilaksanakan sepanjang bulan ini, BI menyasar kalangan pelajar SMA/SMK dan mahasiswa perguruan tinggi di wilayah Lhokseumawe dan Aceh Utara. Edukasi ini menekankan aspek 'Cinta' dengan merawat fisik uang agar tidak rusak, 'Bangga' dengan menggunakannya sebagai satu-satunya alat pembayaran yang sah, serta 'Paham' dalam membelanjakannya secara bijak untuk mendukung stabilitas ekonomi daerah.\n\nKepala KPw BI Lhokseumawe menyampaikan bahwa pemahaman literasi Rupiah sejak dini sangat penting untuk menekan peredaran uang palsu dan menjaga kualitas uang beredar di masyarakat.",
    date: "25 Juni 2026",
    readTime: "3 Min Baca",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "2",
    title: "Pengumuman Penerima Beasiswa Bank Indonesia Tahun 2026",
    summary: "KPw BI Lhokseumawe resmi merilis daftar nama mahasiswa yang lolos seleksi penerima beasiswa Bank Indonesia tahun 2026 dari berbagai universitas mitra.",
    content: "Lhokseumawe — Setelah melalui serangkaian tahapan seleksi administrasi dan wawancara yang ketat, Kantor Perwakilan Bank Indonesia (KPw BI) Lhokseumawe mengumumkan nama-nama mahasiswa yang terpilih sebagai penerima Beasiswa Bank Indonesia Tahun Buku 2026.\n\nBeasiswa ini diberikan kepada mahasiswa aktif dari perguruan tinggi mitra BI di wilayah kerja KPw BI Lhokseumawe yang memiliki prestasi akademik unggul serta aktif dalam organisasi sosial. Selain menerima bantuan dana pendidikan bulanan, para penerima beasiswa (disebut GenBI - Generasi Baru Indonesia) juga akan mendapatkan berbagai pelatihan kepemimpinan, wawasan kebangsaan, dan program pemberdayaan masyarakat.\n\nDaftar nama lengkap penerima beasiswa dapat diakses secara resmi melalui pengumuman yang didistribusikan ke masing-masing universitas mitra.",
    date: "18 Juni 2026",
    readTime: "4 Min Baca",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: "3",
    title: "Akseptasi Penggunaan QRIS di Kalangan UMKM Meningkat Pesat",
    summary: "Bank Indonesia mencatat adopsi pembayaran digital berbasis QRIS oleh pedagang pasar tradisional di Lhokseumawe mengalami lonjakan signifikan.",
    content: "Lhokseumawe — Tren digitalisasi sistem pembayaran terus berkembang pesat di Aceh. KPw BI Lhokseumawe melaporkan jumlah merchant atau UMKM yang menggunakan Quick Response Code Indonesian Standard (QRIS) sebagai metode pembayaran digital telah meningkat secara signifikan.\n\nPeningkatan ini didorong oleh kemudahan transaksi tanpa uang kembalian, pencatatan transaksi otomatis yang rapi bagi pedagang, serta faktor keamanan. BI Lhokseumawe aktif menyelenggarakan program onboarding digitalisasi pasar tradisional untuk mengedukasi pedagang kelontong, kuliner khas Aceh, hingga jasa transportasi lokal tentang efisiensi transaksi non-tunai.\n\nDiharapkan, dengan meningkatnya penggunaan QRIS ini, inklusi keuangan masyarakat di Lhokseumawe dapat tumbuh lebih kuat menuju era ekonomi digital.",
    date: "10 Juni 2026",
    readTime: "3 Min Baca",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "4",
    title: "Festival CBP Rupiah 2026 Resmi Dibuka, Total Hadiah Puluhan Juta",
    summary: "Ikuti berbagai cabang perlombaan kreatif mulai dari kompetisi video, poster digital, hingga essay dalam memeriahkan hari kemerdekaan.",
    content: "Lhokseumawe — Dalam rangka memperingati semangat kemerdekaan dan meningkatkan pemahaman literasi keuangan masyarakat, KPw BI Lhokseumawe meluncurkan 'Festival CBP Rupiah 2026'.\n\nFestival ini menghadirkan berbagai kompetisi kreatif tingkat nasional yang terbuka untuk umum, mahasiswa, dan pelajar SMA sederajat. Beberapa kategori perlombaan meliputi Lomba Video Kreatif Cinta Rupiah, Lomba Desain Poster Digital 'Rupiah Kebanggaanku', serta Kompetisi Essay Ekonomi Moneter. BI menyediakan total hadiah puluhan juta rupiah beserta sertifikat penghargaan resmi dari Bank Indonesia.\n\nPendaftaran dan pengumpulan karya dibuka secara online mulai hari ini hingga batas waktu pengiriman yang ditentukan di masing-masing buku panduan kompetisi.",
    date: "05 Juni 2026",
    readTime: "2 Min Baca",
    gradient: "from-rose-500 to-pink-600",
  },
]

export default function BeritaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header with Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 sm:py-20 lg:py-24">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          
          <div className="relative mx-auto max-w-7xl px-4 text-center animate-fade-in">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Newspaper className="h-4 w-4 text-primary" />
              Portal Berita
            </span>
            <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              Berita & <span className="bg-gradient-to-r from-[#4ecdc4] via-[#44a8a1] to-[#2d8f8f] bg-clip-text text-transparent">Kabar Terbaru</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
              Ikuti perkembangan kegiatan, program edukasi, dan pengumuman resmi dari Kantor Perwakilan Bank Indonesia Lhokseumawe.
            </p>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 50 480 60 720 60C960 60 1200 50 1440 30V60H0Z" className="fill-background"/>
            </svg>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* News Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
              {newsData.map((news) => (
                <div 
                  key={news.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Card Cover (Abstract Gradient Design) */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${news.gradient} flex items-center justify-center p-6 text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9IjIwMiIgdmlld0JveD0iMCAwIDIwMiAyMDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoMjAydjIwMkgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                    <Newspaper className="h-16 w-16 text-white/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {news.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {news.readTime}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="mb-2 text-lg font-bold text-card-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                        {news.summary}
                      </p>
                    </div>

                    {/* Modal dialog wrapper */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-muted text-foreground hover:bg-primary hover:text-white border-transparent transition-all duration-300 cursor-pointer group/btn"
                        >
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </DialogTrigger>

                      {/* Modal Content */}
                      <DialogContent className="max-w-2xl bg-card border-border sm:rounded-2xl overflow-hidden p-0 gap-0 shadow-2xl">
                        {/* Banner Header inside Dialog */}
                        <div className={`h-40 w-full bg-gradient-to-br ${news.gradient} flex items-center justify-center p-6 text-white relative`}>
                          <div className="absolute inset-0 bg-black/10" />
                          <Newspaper className="h-16 w-16 text-white/30" />
                        </div>

                        <div className="p-6 sm:p-8">
                          <DialogHeader className="mb-4">
                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {news.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {news.readTime}
                              </span>
                            </div>
                            <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight leading-tight">
                              {news.title}
                            </DialogTitle>
                          </DialogHeader>

                          {/* Full text content split by paragraphs */}
                          <div className="text-muted-foreground text-sm leading-relaxed space-y-4 max-h-60 overflow-y-auto pr-2 mt-4 scrollbar-thin">
                            {news.content.split("\n\n").map((para, index) => (
                              <p key={index}>{para}</p>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

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
