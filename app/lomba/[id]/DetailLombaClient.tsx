"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Trophy, ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

import { getLomba } from "@/lib/lomba";
import { formatTanggal } from "@/lib/date";
import { Lomba } from "@/types/lomba";

interface DetailLombaClientProps {
  id: string;
}

export default function DetailLombaClient({ id }: DetailLombaClientProps) {
  const params = useParams();
  const lombaId = params?.id ? String(params.id) : id;
  const [lomba, setLomba] = useState<Lomba | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLomba() {
      if (!lombaId || lombaId === "detail") {
        setLoading(false);
        return;
      }
      try {
        const data = await getLomba(Number(lombaId));
        setLomba(data);
      } catch (error) {
        console.error("Gagal memuat detail lomba:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLomba();
  }, [lombaId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-5xl py-20 text-center">Memuat data lomba...</main>
        <Footer />
      </>
    );
  }

  if (!lomba) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-5xl py-20 text-center">Data lomba tidak ditemukan.</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Header */}

        <section className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <Link href="/lomba" className="mb-6 inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={18} />
              Kembali ke daftar lomba
            </Link>

            <h1 className="text-4xl font-bold">{lomba.title}</h1>

            <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {formatTanggal(lomba.release_date)} - {formatTanggal(lomba.end_date)}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {lomba.location}
              </div>

              <div className="flex items-center gap-2">
                <Trophy size={18} />
                {lomba.status_label}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left */}

            <div className="lg:col-span-2">
              <div className="rounded-xl border bg-card p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold">Deskripsi Lomba</h2>

                <p className="leading-8 text-muted-foreground">{lomba.description}</p>
              </div>
            </div>

            {/* Right */}

            <div>
              <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-5 text-xl font-semibold">Informasi Lomba</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>

                    <p className="font-medium">{lomba.status_label}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>

                    <p className="font-medium">{lomba.location}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Jenis</p>

                    <p className="font-medium capitalize">{lomba.location_type}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Pendaftaran</p>

                    <p className="font-medium">{formatTanggal(lomba.release_date)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Penutupan</p>

                    <p className="font-medium">{formatTanggal(lomba.end_date)}</p>
                  </div>
                </div>

                {lomba.status === "ongoing" && (
                  <Button asChild className="mt-8 w-full bg-gradient-to-r from-primary to-[#2d8f8f] hover:opacity-90">
                    <Link href={`/lomba/${lomba.id}/registrasi`}>
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}

                {lomba.status === "upcoming" && (
                  <Button disabled className="mt-8 w-full cursor-not-allowed bg-yellow-500 text-white hover:bg-yellow-500">
                    Pendaftaran Belum Dibuka
                  </Button>
                )}

                {lomba.status === "closed" && (
                  <Button disabled className="mt-8 w-full cursor-not-allowed bg-muted text-muted-foreground">
                    Pendaftaran Ditutup
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
