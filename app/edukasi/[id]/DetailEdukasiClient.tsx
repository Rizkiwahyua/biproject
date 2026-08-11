"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Download, ExternalLink, FileText, Youtube } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getEdukasi } from "@/lib/edukasi";
import { formatTanggal } from "@/lib/date";
import { Button } from "@/components/ui/button";
import { Edukasi } from "@/types/api";
import { useIsMobile } from "@/components/ui/use-mobile";

function getYoutubeEmbedUrl(url: string | null) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    return url;
  } catch {
    return null;
  }
}




interface DetailEdukasiClientProps {
  id: string;
}

export default function DetailEdukasiClient({ id }: DetailEdukasiClientProps) {
  const isMobile = useIsMobile();
  const [edukasi, setEdukasi] = useState<Edukasi | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Extract real ID from browser URL path (e.g., /edukasi/4 -> "4")
      // because Apache rewrite serves detail.html with id="detail"
      const segments = window.location.pathname.split("/").filter(Boolean);
      const urlId = segments.length >= 2 ? segments[segments.length - 1] : null;
      const resolvedId = urlId && urlId !== "detail" ? urlId : (id !== "detail" ? id : null);

      if (!resolvedId) {
        setLoading(false);
        return;
      }
      try {
        const data = await getEdukasi(Number(resolvedId));
        setEdukasi(data);
      } catch (error) {
        console.error("Gagal memuat edukasi:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen flex-col bg-background">
          <main className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="text-muted-foreground text-sm">Memuat materi edukasi...</p>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  if (!edukasi) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen flex-col bg-background">
          <main className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Materi edukasi tidak ditemukan.</p>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-background min-h-screen">
        {/* HEADER SECTION */}
        <section className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <Link href="/edukasi" className="group mb-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Kembali ke daftar edukasi
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">{edukasi.judul}</h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {edukasi.deskripsi}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                Dipublikasikan: {formatTanggal(edukasi.created_at)}
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT & ATTACHMENT SECTION */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="space-y-8">
            {/* Image Preview directly in the main section if it is an image */}
            {edukasi.file && ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(edukasi.file_extension || '') && (
              <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="text-primary h-6 w-6" />
                    Preview Lampiran
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="outline" size="sm" asChild className="cursor-pointer">
                      <a href={edukasi.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Buka di Tab Baru <ExternalLink size={14} />
                      </a>
                    </Button>
                    <Button size="sm" className="bg-[#CF1A25] text-white hover:bg-[#CF1A25]/90 cursor-pointer" asChild>
                      <a href={edukasi.file} download className="flex items-center gap-2">
                        <Download size={14} /> Unduh Gambar
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative w-full overflow-hidden rounded-xl border bg-muted shadow-md flex items-center justify-center p-2">
                  <img 
                    src={edukasi.file} 
                    alt={edukasi.judul} 
                    className="max-w-full h-auto object-contain max-h-[600px] rounded-lg" 
                  />
                </div>
              </div>
            )}

            {/* Video Embed if any */}
            {edukasi.link && (
              <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Youtube className="text-red-500 h-6 w-6" />
                  Video Edukasi Pendukung
                </h3>
                <div className="overflow-hidden rounded-xl border bg-black shadow-md">
                  <div className="aspect-video w-full">
                    <iframe
                      src={getYoutubeEmbedUrl(edukasi.link) ?? edukasi.link}
                      className="h-full w-full"
                      title={`${edukasi.judul} Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" asChild>
                    <a href={edukasi.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Buka Video di YouTube <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {/* PDF Preview directly in the main section if it is a PDF */}
            {edukasi.file && edukasi.file_extension === 'pdf' && (
              <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="text-primary h-6 w-6" />
                    Materi PDF
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="outline" size="sm" asChild className="cursor-pointer">
                      <a href={edukasi.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Buka PDF di Tab Baru <ExternalLink size={14} />
                      </a>
                    </Button>
                    <Button size="sm" className="bg-[#CF1A25] text-white hover:bg-[#CF1A25]/90 cursor-pointer" asChild>
                      <a href={edukasi.file} download className="flex items-center gap-2">
                        <Download size={14} /> Unduh Materi PDF
                      </a>
                    </Button>
                  </div>
                </div>
                {isMobile ? (
                  <div className="rounded-xl border bg-muted/50 p-6 text-center space-y-4">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Pratinjau PDF tidak didukung di mobile</p>
                      <p className="text-sm text-muted-foreground">
                        Untuk kenyamanan membaca, silakan buka dokumen di tab baru atau unduh menggunakan tombol di atas.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[800px] overflow-hidden rounded-xl border bg-muted shadow-md">
                    <iframe
                      src={edukasi.file}
                      className="w-full h-full border-0"
                      title={`${edukasi.judul} PDF`}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
