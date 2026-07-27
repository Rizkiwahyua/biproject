"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Building2 } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getBerita } from "@/lib/berita";
import { formatTanggal } from "@/lib/date";
import { Berita } from "@/types/berita";

const API_STORAGE = process.env.NEXT_PUBLIC_STORAGE_URL || "https://cbprupiahlsm.id/admin-cbp/public/storage";

interface DetailBeritaClientProps {
  id: string;
}

export default function DetailBeritaClient({ id }: DetailBeritaClientProps) {
  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Extract real ID from browser URL path (e.g., /berita/1 -> "1")
      // because Apache rewrite serves detail.html with id="detail"
      const segments = window.location.pathname.split("/").filter(Boolean);
      const urlId = segments.length >= 2 ? segments[segments.length - 1] : null;
      const resolvedId = urlId && urlId !== "detail" ? urlId : id !== "detail" ? id : null;

      if (!resolvedId) {
        setLoading(false);
        return;
      }
      try {
        const data = await getBerita(Number(resolvedId));
        setBerita(data);
      } catch (error) {
        console.error("Gagal memuat berita:", error);
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
        <main className="py-20 text-center">Memuat berita...</main>
        <Footer />
      </>
    );
  }

  if (!berita) {
    return (
      <>
        <Navbar />
        <main className="py-20 text-center">Berita tidak ditemukan.</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* HEADER */}

        <section className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <Link href="/berita" className="mb-6 inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={18} />
              Kembali ke daftar berita
            </Link>

            <h1 className="text-4xl font-bold leading-tight">{berita.title}</h1>

            <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {formatTanggal(berita.published_at)}
              </div>

              <div className="flex items-center gap-2">
                <User size={18} />
                {berita.author}
              </div>

              <div className="flex items-center gap-2">
                <Building2 size={18} />
                {berita.source}
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE */}
        {berita.image && (
          <section className="mx-auto max-w-3xl px-4 pt-10">
            <div className="overflow-hidden rounded-xl border bg-muted shadow-sm">
              <img src={`${API_STORAGE}/${berita.image}`} alt={berita.title} className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover" />
            </div>

            {/* Excerpt */}
            {berita.excerpt && (
              <div className="mt-4 border-l-4 border-primary pl-4">
                <p className="text-sm md:text-base leading-7 text-muted-foreground italic">{berita.excerpt}</p>
              </div>
            )}
          </section>
        )}

        {/* CONTENT */}

        <section className="mx-auto max-w-5xl px-4 py-12">
          <article className="rounded-xl border bg-card p-8 shadow-sm">
            <div
              className="
                prose
                prose-neutral
                max-w-none
                prose-headings:font-bold
                prose-img:rounded-xl
              "
              dangerouslySetInnerHTML={{
                __html: berita.content,
              }}
            />
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
