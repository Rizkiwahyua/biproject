"use client";
import { useEffect, useState } from "react";
import { getLombas } from "@/lib/lomba";
import { Lomba } from "@/types/lomba";
import { formatTanggal } from "@/lib/date";

import { Newspaper, Trophy, Users, Award, Calendar, ArrowRight, Sparkles, Gamepad2, Lock, Brain, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventCard } from "@/components/event-card";

const stats = [
  { icon: Trophy, value: "10+", label: "Kompetisi Per Tahun" },
  { icon: Users, value: "100+", label: "Total Peserta" },
  { icon: Award, value: "10+", label: "Pemenang" },
  { icon: Calendar, value: "12", label: "Bulan Aktif" },
];

export default function LombaPage() {
  const [events, setEvents] = useState<Lomba[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

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
        const data = await getLombas();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Scroll to top of events grid when page changes
  useEffect(() => {
    if (currentPage > 1 || (typeof window !== "undefined" && window.scrollY > 400)) {
      const contentSection = document.getElementById("lomba-content");
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentPage]);

  if (events.length === 0) {
    return (
      <>
        <Navbar />

        <main className="flex-1 bg-background">
          <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4">
            <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
              <Newspaper className="mx-auto mb-5 h-16 w-16 text-muted-foreground" />

              <h2 className="text-2xl font-bold">Belum Ada Lomba</h2>

              <p className="mt-3 text-muted-foreground">Saat ini belum tersedia Lomba yang dapat ditampilkan. Silakan kembali lagi nanti.</p>

              <Button asChild className="mt-8">
                <Link href="/">Kembali ke Home</Link>
              </Button>
            </div>
          </section>

          {/* GAME EDUKASI SECTION EVEN IF NO LOMBA */}
          <section className="bg-muted/30 py-16 sm:py-24 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-3">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  Interaktif & Seru
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">Games Edukasi Rupiah</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Games wawasan dan logika Anda tentang mata uang Rupiah melalui permainan interaktif yang mendidik dan menyenangkan.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {/* GAME CARD 1: CR7s */}
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
                        Games kecepatan berpikir dan pengetahuan Anda tentang Rupiah melalui berbagai tantangan seru yang harus diselesaikan dalam waktu singkat!
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

                {/* GAME CARD 2: KUPIAH */}
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
                        Games pengetahuan, logika, dan kemampuan memecahkan misteri tentang Rupiah, pahlawan pada lembaran uang, serta budaya dan daerah Indonesia dalam petualangan kuis yang seru dan menantang!
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
      </>
    );
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header with Background Image */}
        <section 
          className="relative overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/movingg.png')" }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#02152c]/15" />

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-pulse-glow animation-delay-200" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

          <div className="relative mx-auto max-w-7xl px-4 text-center z-10">
            <div className="text-center animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Trophy className="h-4 w-4 text-accent" />
                Kompetisi
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Lomba & Kompetisi
              </h1>
              <p className="mx-auto max-w-2xl text-lg font-semibold text-white leading-relaxed">
                Ikuti berbagai kompetisi menarik seputar literasi keuangan dan uang Rupiah. Tunjukkan kreativitas dan pengetahuan Anda untuk memenangkan hadiah menarik!
              </p>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 50 480 60 720 60C960 60 1200 50 1440 30V60H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Stats */}
        <section className="relative -mt-1 bg-gradient-to-r from-accent via-[#e74c3c] to-accent animate-gradient">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 justify-center md:justify-start group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white leading-none sm:text-xl">{stat.value}</p>
                    <p className="text-xs text-white/80 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section id="lomba-content" className="bg-background">
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
              {currentItems.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  date={`${formatTanggal(event.release_date)} - ${formatTanggal(event.end_date)}`}
                  location={event.location}
                  status={event.status}
                  thumbnail={event.thumbnail}
                  isFull={event.is_full}
                  currentParticipants={event.current_participants}
                  maxParticipants={event.max_participants}
                  remainingQuota={event.remaining_quota}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-xl border border-border bg-card text-foreground hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  Sebelumnya
                </Button>
                
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`h-9 w-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        currentPage === pageNumber
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-xl border border-border bg-card text-foreground hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  Selanjutnya
                </Button>
              </div>
            )}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">Games Edukasi Rupiah</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Games wawasan and logika Anda tentang mata uang Rupiah melalui permainan interaktif yang mendidik dan menyenangkan.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* GAME CARD 1: CR7s */}
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
                      Games kecepatan berpikir dan pengetahuan Anda tentang Rupiah melalui berbagai tantangan seru yang harus diselesaikan dalam waktu singkat!
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

              {/* GAME CARD 2: KUPIAH */}
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
                      Games pengetahuan, logika, dan kemampuan memecahkan misteri tentang Rupiah, pahlawan pada lembaran uang, serta budaya dan daerah Indonesia dalam petualangan kuis yang seru dan menantang!
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
                <h2 className="mb-4 text-2xl font-bold text-card-foreground sm:text-3xl lg:text-4xl">Ingin Mengadakan Kompetisi?</h2>
                <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
                  Jika institusi Anda ingin berkolaborasi dengan Bank Indonesia dalam mengadakan kompetisi literasi keuangan, silakan hubungi kami untuk informasi lebih lanjut.
                </p>
                <Button
                  size="lg"
                  className="group/btn bg-gradient-to-r from-primary to-[#3b82f6] text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
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
  );
}
