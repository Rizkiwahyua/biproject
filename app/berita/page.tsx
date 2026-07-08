"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBeritas } from "@/lib/berita";
import { Berita } from "@/types/berita";
import { formatTanggal } from "@/lib/date";

import { Newspaper, Calendar, ArrowRight, User, Building2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const API_STORAGE = process.env.NEXT_PUBLIC_STORAGE_URL || "https://cbprupiahlsm.id/admin-cbp/public/storage";

export default function BeritaPage() {
  const gradients = ["from-emerald-600 to-teal-500", "from-blue-600 to-indigo-500", "from-orange-500 to-red-500", "from-purple-600 to-pink-500"];
  const [newsData, setNewsData] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

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
                <Link href="/">Kembali ke Beranda</Link>
              </Button>
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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#02152c] via-[#082a52] to-[#1e3a5f] py-16 sm:py-20 lg:py-24">
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
              Berita & <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#00529C] bg-clip-text text-transparent">Kabar Terbaru</span>
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
      </main>

      <Footer />
    </div>
  );
}
