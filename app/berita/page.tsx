"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBeritas } from "@/lib/berita";
import { Berita } from "@/types/berita";
import { formatTanggal } from "@/lib/date";

import { Newspaper, Calendar, ArrowRight, User, Building2, Gamepad2, Lock, Brain, Play } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const API_STORAGE = process.env.NEXT_PUBLIC_STORAGE_URL || "https://cbprupiahlsm.id/admin-cbp/public/storage";

export default function BeritaPage() {
  const gradients = ["from-emerald-600 to-teal-500", "from-blue-600 to-indigo-500", "from-orange-500 to-red-500", "from-purple-600 to-pink-500"];
  const [newsData, setNewsData] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBeritas();
        setNewsData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="py-20 text-center">Memuat berita...</main>
        <Footer />
      </>
    );
  }

  if (newsData.length === 0) {
    return (
      <>
        <Navbar />

        <main className="flex-1 bg-background">
          <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4">
            <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
              <Newspaper className="mx-auto mb-5 h-16 w-16 text-muted-foreground" />

              <h2 className="text-2xl font-bold">Belum Ada Berita</h2>

              <p className="mt-3 text-muted-foreground">Saat ini belum tersedia berita yang dapat ditampilkan. Silakan kembali lagi nanti.</p>

              <Button asChild className="mt-8">
                <Link href="/">Kembali ke Home</Link>
              </Button>
            </div>
          </section>

          {/* GAME EDUKASI SECTION EVEN IF NO NEWS */}
          <section className="bg-muted/30 py-16 sm:py-24 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-3">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  Interaktif & Seru
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">Game Edukasi Rupiah</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Uji wawasan dan logika Anda tentang mata uang Rupiah melalui permainan interaktif yang mendidik dan menyenangkan.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {/* GAME CARD 1: QORI */}
                <a
                  href="https://qoricbp.cbprupiahlsm.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={handleMouseMove}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-emerald-900/10 p-8 shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1.5"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.15), transparent 80%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                    style={{
                      border: "1.5px solid transparent",
                      backgroundImage: "linear-gradient(rgba(2, 44, 34, 0.9), rgba(2, 44, 34, 0.9)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.5), transparent 80%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      margin: "-1.5px",
                    }}
                  />
                  <div className="absolute -right-6 -top-6 text-9xl text-emerald-500/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none font-bold">Q</div>
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300">
                      <Lock className="h-7 w-7" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-foreground">QORI</h2>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">Misteri</span>
                    </div>
                    <p className="text-sm font-medium text-emerald-500/80 mb-3">Qode Misteri CBP</p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                      Pecahkan kode rahasia CBP, uji pemikiran kritis Anda, dan selesaikan berbagai misi logika Rupiah dalam petualangan teka-teki misterius ini!
                    </p>
                  </div>
                  <div className="relative flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 group-hover:bg-emerald-400 group-hover:shadow-emerald-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                      Mulai Main
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500/75 group-hover:text-emerald-400 transition-colors">
                      qoricbp.cbprupiahlsm.id
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>

                {/* GAME CARD 2: KUAR */}
                <a
                  href="https://quiz.cbprupiahlsm.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={handleMouseMove}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/40 to-red-900/10 p-8 shadow-md transition-all duration-300 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1.5"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.15), transparent 80%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                    style={{
                      border: "1.5px solid transparent",
                      backgroundImage: "linear-gradient(rgba(45, 10, 10, 0.9), rgba(45, 10, 10, 0.9)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.5), transparent 80%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      margin: "-1.5px",
                    }}
                  />
                  <div className="absolute -right-6 -top-6 text-9xl text-red-500/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none font-bold">K</div>
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 shadow-inner group-hover:scale-110 group-hover:bg-red-500/20 group-hover:text-red-300 transition-all duration-300">
                      <Brain className="h-7 w-7" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-foreground">Kuah Pliek u</h2>
                      <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400 border border-red-500/20">Kuis</span>
                    </div>
                    <p className="text-sm font-medium text-red-500/80 mb-3">Kuis Wawasan Rupiah</p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                      Uji pengetahuan Anda tentang CBP Rupiah, pahlawan-pahlawan di lembaran uang, dan wawasan literasi keuangan dengan kuis khas daerah yang menantang!
                    </p>
                  </div>
                  <div className="relative flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/25 group-hover:bg-red-400 group-hover:shadow-red-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                      Mulai Main
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-red-500/75 group-hover:text-red-400 transition-colors">
                      quiz.cbprupiahlsm.id
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header with Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#02152c] via-[#082a52] to-[#1e3a5f]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

          {/* Ornamen Pojok (Bingkai) */}
          <div className="absolute bottom-0 left-0 w-36 h-48 md:w-48 md:h-64 bg-[url(/pinto-aceh-corner.png)] bg-left-bottom bg-no-repeat bg-contain opacity-[0.40] mix-blend-screen pointer-events-none" />
          <div className="absolute top-0 right-0 w-36 h-48 md:w-48 md:h-64 bg-[url(/pinto-aceh-corner.png)] bg-right-top bg-no-repeat bg-contain rotate-180 opacity-[0.40] mix-blend-screen pointer-events-none" />

          {/* Ornamen Menyebar Pinto Aceh (Kiri Atas) */}
          <div className="absolute top-[12%] left-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[url(/pinto-aceh-bg.png)] bg-center bg-no-repeat bg-contain opacity-[0.22] mix-blend-screen pointer-events-none" />

          {/* Ornamen Menyebar Pinto Aceh (Kanan Bawah) */}
          <div className="absolute bottom-[12%] right-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[url(/pinto-aceh-bg.png)] bg-center bg-no-repeat bg-contain opacity-[0.22] mix-blend-screen pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 text-center animate-fade-in">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Newspaper className="h-4 w-4 text-primary" />
              Portal Berita
            </span>
            <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              Kabar Terbaru & <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#00529C] bg-clip-text text-transparent">Game</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">Ikuti perkembangan kegiatan, program edukasi, dan pengumuman resmi dari Kantor Perwakilan Bank Indonesia Lhokseumawe.</p>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 50 480 60 720 60C960 60 1200 50 1440 30V60H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* News Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
              {newsData.map((news, index) => (
                <div key={news.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                  {/* Card Cover (Abstract Gradient Design) */}
                  <div className="relative h-44 w-full overflow-hidden">
                    {news.image ? (
                      <img src={`${API_STORAGE}/${news.image}`} alt={news.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                        <Newspaper className="h-16 w-16 text-white/40" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9IjIwMiIgdmlld0JveD0iMCAwIDIwMiAyMDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoMjAydjIwMkgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatTanggal(news.published_at)}
                        </span>

                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {news.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {news.source}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-lg font-bold text-card-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">{news.title}</h3>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">{news.excerpt}</p>
                    </div>

                    <Button asChild className="w-full bg-muted text-foreground hover:bg-primary hover:text-white transition-all duration-300">
                      <Link href={`/berita/${news.id}`}>
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GAME EDUKASI SECTION */}
        <section className="bg-muted/30 py-16 sm:py-24 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-3">
                <Gamepad2 className="h-4 w-4 text-primary" />
                Interaktif & Seru
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">Game Edukasi Rupiah</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Uji wawasan dan logika Anda tentang mata uang Rupiah melalui permainan interaktif yang mendidik dan menyenangkan.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* GAME CARD 1: QORI */}
              <a
                href="https://qoricbp.cbprupiahlsm.id/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-emerald-900/10 p-8 shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1.5"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.15), transparent 80%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  style={{
                    border: "1.5px solid transparent",
                    backgroundImage: "linear-gradient(rgba(2, 44, 34, 0.9), rgba(2, 44, 34, 0.9)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.5), transparent 80%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    margin: "-1.5px",
                  }}
                />
                <div className="absolute -right-6 -top-6 text-9xl text-emerald-500/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none font-bold">Q</div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300">
                    <Lock className="h-7 w-7" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">QORI</h2>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">Misteri</span>
                  </div>
                  <p className="text-sm font-medium text-emerald-500/80 mb-3">Qode Misteri CBP</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                    Pecahkan kode rahasia CBP, uji pemikiran kritis Anda, dan selesaikan berbagai misi logika Rupiah dalam petualangan teka-teki misterius ini!
                  </p>
                </div>
                <div className="relative flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 group-hover:bg-emerald-400 group-hover:shadow-emerald-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                    Mulai Main
                    <Play className="h-4 w-4 fill-white" />
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500/75 group-hover:text-emerald-400 transition-colors">
                    qoricbp.cbprupiahlsm.id
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>

              {/* GAME CARD 2: KUAR */}
              <a
                href="https://quiz.cbprupiahlsm.id/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/40 to-red-900/10 p-8 shadow-md transition-all duration-300 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1.5"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.15), transparent 80%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  style={{
                    border: "1.5px solid transparent",
                    backgroundImage: "linear-gradient(rgba(45, 10, 10, 0.9), rgba(45, 10, 10, 0.9)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.5), transparent 80%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    margin: "-1.5px",
                  }}
                />
                <div className="absolute -right-6 -top-6 text-9xl text-red-500/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none font-bold">K</div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 shadow-inner group-hover:scale-110 group-hover:bg-red-500/20 group-hover:text-red-300 transition-all duration-300">
                    <Brain className="h-7 w-7" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">Kuah Pliek u</h2>
                    <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400 border border-red-500/20">Kuis</span>
                  </div>
                  <p className="text-sm font-medium text-red-500/80 mb-3">Kuis Wawasan Rupiah</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                    Uji pengetahuan Anda tentang CBP Rupiah, pahlawan-pahlawan di lembaran uang, dan wawasan literasi keuangan dengan kuis khas daerah yang menantang!
                  </p>
                </div>
                <div className="relative flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/25 group-hover:bg-red-400 group-hover:shadow-red-400/30 group-hover:translate-x-0.5 transition-all duration-300">
                    Mulai Main
                    <Play className="h-4 w-4 fill-white" />
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-red-500/75 group-hover:text-red-400 transition-colors">
                    quiz.cbprupiahlsm.id
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
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
