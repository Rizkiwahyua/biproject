"use client";
import { useEffect, useState } from "react";
import { getLombas } from "@/lib/lomba";
import { Lomba } from "@/types/lomba";
import { formatTanggal } from "@/lib/date";

import { Newspaper, Trophy, Users, Award, Calendar, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventCard } from "@/components/event-card";

const stats = [
  { icon: Trophy, value: "50+", label: "Kompetisi Per Tahun" },
  { icon: Users, value: "100K+", label: "Total Peserta" },
  { icon: Award, value: "500+", label: "Pemenang" },
  { icon: Calendar, value: "12", label: "Bulan Aktif" },
];

export default function LombaPage() {
  const [events, setEvents] = useState<Lomba[]>([]);

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

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="text-center animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Trophy className="h-4 w-4 text-accent" />
                Kompetisi
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Lomba & <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#00529C] bg-clip-text text-transparent">Kompetisi</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
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
