"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { ArrowLeft, Calendar, MapPin, Trophy, Upload } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

import { getLomba, registerLomba } from "@/lib/lomba";
import { formatTanggal } from "@/lib/date";
import { Lomba } from "@/types/lomba";

interface RegistrasiLombaClientProps {
  id: string;
}

export default function RegistrasiLombaClient({ id }: RegistrasiLombaClientProps) {
  const [lomba, setLomba] = useState<Lomba | null>(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    file?: string;
  }>({});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
      address?: string;
      file?: string;
    } = {};
    if (!form.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Format email tidak valid.";
      }
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Nomor HP wajib diisi.";
    }
    if (!form.address.trim()) {
      newErrors.address = "Alamat wajib diisi.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!lomba) return;
    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("lomba_id", String(lomba.id));
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("address", form.address);

      if (file) {
        formData.append("file", file);
      }

      await registerLomba(formData);

      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
        text: "Data pendaftaran berhasil dikirim.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
      setFile(null);
      setErrors({});
    } catch (error: any) {
      if (error.errors) {
        setErrors({
          name: error.errors.name?.[0],
          email: error.errors.email?.[0],
          phone: error.errors.phone?.[0],
          address: error.errors.address?.[0],
          file: error.errors.file?.[0],
        });
        return;
      }

      if (error.message) {
        Swal.fire({
          icon: "warning",
          title: "Pendaftaran Gagal",
          text: error.message,
        });
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan pada server.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      // Extract real ID from browser URL path (e.g., /lomba/1/registrasi -> "1")
      // because Apache rewrite serves detail/registrasi.html with id="detail"
      const segments = window.location.pathname.split("/").filter(Boolean);
      // URL pattern: /lomba/<id>/registrasi, so ID is at index 1
      const urlId = segments.length >= 3 && segments[0] === "lomba" ? segments[1] : null;
      const resolvedId = urlId && urlId !== "detail" ? urlId : (id !== "detail" ? id : null);

      if (!resolvedId) {
        setLoading(false);
        return;
      }
      try {
        const data = await getLomba(Number(resolvedId));
        setLomba(data);
      } catch (error) {
        console.error("Gagal memuat data lomba untuk registrasi:", error);
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
        <main className="py-20 text-center">Memuat...</main>
        <Footer />
      </>
    );
  }

  if (!lomba) {
    return (
      <>
        <Navbar />
        <main className="py-20 text-center">Lomba tidak ditemukan</main>
        <Footer />
      </>
    );
  }

  if (lomba.status !== "ongoing") {
    return (
      <>
        <Navbar />

        <main className="bg-background">
          <section className="mx-auto max-w-3xl px-4 py-20">
            <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
              <h2 className="text-3xl font-bold">Pendaftaran Tidak Tersedia</h2>
              <p className="mt-4 text-muted-foreground">{lomba.status === "upcoming" ? "Pendaftaran belum dibuka." : "Pendaftaran telah ditutup."}</p>
              <Button asChild className="mt-8">
                <Link href={`/lomba/${lomba.id}`}>Kembali ke Detail Lomba</Link>
              </Button>
            </div>
          </section>
        </main>

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
            <Link href={`/lomba/${lomba.id}`} className="mb-6 inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={18} />
              Kembali ke Detail Lomba
            </Link>
            <h1 className="text-4xl font-bold">Form Registrasi</h1>
            <p className="mt-3 text-muted-foreground">Lengkapi data berikut untuk mengikuti lomba.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* FORM */}

            <div className="lg:col-span-2">
              <div className="rounded-xl border bg-card p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold">Data Peserta</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Nama Lengkap</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border p-3" />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border p-3" />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Nomor HP</label>
                    <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border p-3" />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Alamat</label>
                    <textarea rows={4} name="address" value={form.address} onChange={handleChange} className="w-full rounded-lg border p-3" />
                    {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Upload Berkas (PDF/DOC/DOCX)</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full rounded-lg border p-3" />
                    {errors.file && <p className="mt-1 text-sm text-red-500">{errors.file}</p>}
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
                  </Button>
                </form>
              </div>
            </div>

            {/* SIDEBAR */}

            <div>
              <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-5 text-xl font-semibold">Informasi Lomba</h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">{lomba.title}</p>
                  </div>

                  <div className="flex gap-2">
                    <Calendar size={18} />
                    <span>{formatTanggal(lomba.release_date)} - {formatTanggal(lomba.end_date)}</span>
                  </div>

                  <div className="flex gap-2">
                    <MapPin size={18} />
                    {lomba.location}
                  </div>

                  <div className="flex gap-2">
                    <Trophy size={18} />
                    {lomba.status_label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
