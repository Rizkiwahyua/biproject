"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Shield, Wallet, FileText, CheckCircle, Sparkles, BookOpen, History, Youtube } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { apiFetch } from "@/lib/api";
import { TopicCard } from "@/components/topic-card";
import { TimelineItem } from "@/components/timeline-item";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import type { ApiCollection, Edukasi, EdukasiVideo } from "@/types/api";

const timelineData = [
  {
    year: "1946",
    title: "Oeang Republik Indonesia (ORI)",
    description: "Uang pertama Republik Indonesia diterbitkan pada 30 Oktober 1946 yang dikenal sebagai Oeang Republik Indonesia (ORI). Uang ini menjadi simbol kedaulatan ekonomi bangsa Indonesia yang baru merdeka.",
  },
  {
    year: "1950",
    title: "Penyatuan Mata Uang",
    description: "Setelah pengakuan kedaulatan, dilakukan penyatuan berbagai mata uang yang beredar di Indonesia menjadi satu mata uang resmi yaitu Rupiah.",
  },
  {
    year: "1953",
    title: "Bank Indonesia Didirikan",
    description: "Bank Indonesia resmi didirikan sebagai bank sentral Republik Indonesia, mengambil alih peran dari De Javasche Bank dalam mengelola kebijakan moneter dan mengedarkan uang.",
  },
  {
    year: "1959",
    title: "Sanering Pertama",
    description: "Pemerintah melakukan sanering (pemotongan nilai uang) untuk mengatasi inflasi. Uang pecahan Rp500 dan Rp1.000 dipotong nilainya menjadi 10% dari nilai semula.",
  },
  {
    year: "1965",
    title: "Uang Baru Pasca Inflasi",
    description: "Diterbitkan uang Rupiah baru dengan denominasi yang lebih rendah setelah periode hiperinflasi. Nilai tukar ditetapkan Rp1.000 lama = Rp1 baru.",
  },
  {
    year: "1993",
    title: "Era Uang Plastik",
    description: "Indonesia mulai menerbitkan uang polymer (plastik) untuk pecahan Rp50.000 sebagai langkah modernisasi dan meningkatkan keamanan uang.",
  },
  {
    year: "2004",
    title: "Seri Pahlawan Nasional",
    description: "Bank Indonesia menerbitkan uang kertas dengan gambar pahlawan nasional, memperkuat identitas nasional dalam mata uang.",
  },
  {
    year: "2016",
    title: "Uang NKRI",
    description: "Peluncuran 11 uang Rupiah emisi tahun 2016 dengan desain baru yang menampilkan 12 pahlawan nasional dan tema kebudayaan Indonesia. Uang ini memiliki fitur keamanan yang lebih canggih.",
  },
  {
    year: "2022",
    title: "Uang Rupiah Kertas Tahun Emisi 2022",
    description: "Bank Indonesia meluncurkan uang Rupiah kertas tahun emisi 2022 dengan fitur keamanan yang ditingkatkan dan desain yang diperbarui untuk mempersulit pemalsuan.",
  },
];

const funFacts = [
  {
    value: "30 Oktober",
    title: "Hari Oeang",
    description: "Tanggal 30 Oktober diperingati sebagai Hari Oeang, mengenang penerbitan ORI pertama kali.",
  },
  {
    value: "12 Pahlawan",
    title: "Wajah di Uang",
    description: "Saat ini terdapat 12 pahlawan nasional yang wajahnya tercetak di berbagai pecahan uang Rupiah.",
  },
  {
    value: "7 Pecahan",
    title: "Uang Kertas",
    description: "Terdapat 7 pecahan uang kertas yang beredar: Rp1.000, Rp2.000, Rp5.000, Rp10.000, Rp20.000, Rp50.000, dan Rp100.000.",
  },
];

function EdukasiContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("materi");
  const [apiMateri, setApiMateri] = useState<Edukasi[]>([]);
  const [loadingMateri, setLoadingMateri] = useState(true);

  const [videos, setVideos] = useState<EdukasiVideo[]>([]);
  const [loadingVideo, setLoadingVideo] = useState(true);

  const [showTeknik3d, setShowTeknik3d] = useState(false);
  const [showTeknik5j, setShowTeknik5j] = useState(false);

  useEffect(() => {
    apiFetch<ApiCollection<Edukasi>>("/edukasis")
      .then((response) => {
        setApiMateri(response.data);
        setLoadingMateri(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data edukasi:", err);
        setLoadingMateri(false);
      });
  }, []);

  // card videos
  useEffect(() => {
    apiFetch<ApiCollection<EdukasiVideo>>("/edukasi-videos")
      .then((response) => {
        setVideos(response.data);
        setLoadingVideo(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingVideo(false);
      });
  }, []);

  // helper link vidio
  function getYoutubeEmbed(url: string) {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  }

  useEffect(() => {
    if (tabParam === "sejarah") {
      setActiveTab("sejarah");
    } else {
      setActiveTab("materi");
    }
  }, [tabParam]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", value);
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section 
          className="relative overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/uang/banner.jpeg')" }}
        >
          {/* Very light Overlay to keep background colors clear and vibrant while assisting readability */}
          <div className="absolute inset-0 bg-slate-950/15" />

          <div className="relative mx-auto max-w-7xl px-4 text-center z-10">
            <div className="animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-sm">
                {activeTab === "materi" ? (
                  <>
                    <BookOpen className="h-4 w-4 text-sky-300" />
                    Edukasi Rupiah
                  </>
                ) : (
                  <>
                    <History className="h-4 w-4 text-sky-300" />
                    Sejarah Rupiah
                  </>
                )}
              </span>
              <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance transition-all duration-300 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                {activeTab === "materi" ? (
                  <>
                    Materi <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-white bg-clip-text text-transparent">Pembelajaran</span>
                  </>
                ) : (
                  <>
                    Perjalanan <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-white bg-clip-text text-transparent">Mata Uang</span> Rupiah
                  </>
                )}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-relaxed transition-all duration-300">
                {activeTab === "materi"
                  ? "Tingkatkan pengetahuan Anda tentang literasi keuangan dan mata uang Rupiah melalui berbagai materi edukasi yang kami sediakan."
                  : "Telusuri sejarah panjang mata uang Rupiah dari masa awal kemerdekaan hingga era modern, mencerminkan perjalanan ekonomi bangsa Indonesia."}
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

        {/* Tabs System */}
        <section className="bg-background relative -mt-10 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Tab Selector */}
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-card border border-border/80 rounded-2xl h-14 shadow-lg shadow-black/5">
                  <TabsTrigger value="materi" className="rounded-xl py-2.5 text-base font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white cursor-pointer">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Materi Edukasi
                  </TabsTrigger>
                  <TabsTrigger value="sejarah" className="rounded-xl py-2.5 text-base font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white cursor-pointer">
                    <History className="h-4 w-4 mr-2" />
                    Sejarah Rupiah
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab Content: Materi Edukasi */}
              <TabsContent value="materi" className="outline-none focus:outline-none">
                <div className="animate-fade-in">
                  {/* Topics Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
                    {loadingMateri ? (
                      <p className="text-muted-foreground">Memuat data edukasi...</p>
                    ) : apiMateri.length === 0 ? (
                      <p className="text-muted-foreground">Belum ada data edukasi.</p>
                    ) : (
                      apiMateri.map((materi) => <TopicCard key={materi.id} title={materi.judul} description={materi.deskripsi} icon={materi.link ? Youtube : FileText} href={`/edukasi/${materi.id}`} />)
                    )}
                  </div>

                  {/* Buttons to toggle additional info */}
                  <div className="mt-16 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setShowTeknik3d(!showTeknik3d)}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 border shadow-md hover:-translate-y-0.5 cursor-pointer ${
                        showTeknik3d
                          ? "bg-primary text-white border-primary shadow-primary/20"
                          : "bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <Shield className={`h-5 w-5 ${showTeknik3d ? "text-white" : "text-primary"}`} />
                      {showTeknik3d ? "Sembunyikan Teknik 3D" : "Tampilkan Teknik 3D"}
                    </button>

                    <button
                      onClick={() => setShowTeknik5j(!showTeknik5j)}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 border shadow-md hover:-translate-y-0.5 cursor-pointer ${
                        showTeknik5j
                          ? "bg-accent text-white border-accent shadow-accent/20"
                          : "bg-card text-card-foreground border-border hover:border-accent/50 hover:bg-accent/5"
                      }`}
                    >
                      <Wallet className={`h-5 w-5 ${showTeknik5j ? "text-white" : "text-accent"}`} />
                      {showTeknik5j ? "Sembunyikan Teknik 5J" : "Tampilkan Teknik 5J"}
                    </button>
                  </div>

                  {/* Additional Info Section (3D & 5J) */}
                  {(showTeknik3d || showTeknik5j) && (
                    <div className={`mt-8 grid gap-8 ${showTeknik3d && showTeknik5j ? "lg:grid-cols-2" : "max-w-2xl mx-auto"}`}>
                      {/* Teknik 3D */}
                      {showTeknik3d && (
                        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 animate-fade-in w-full text-left">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="relative">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110">
                              <Shield className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Teknik 3D</h3>
                            <p className="text-muted-foreground leading-relaxed">Cara mudah mengecek keaslian uang Rupiah:</p>
                            <ul className="mt-5 space-y-3">
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                  <CheckCircle className="h-3 w-3 text-primary" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Dilihat</strong> - Perhatikan gambar tersembunyi, benang pengaman, dan gambar saling isi
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                  <CheckCircle className="h-3 w-3 text-primary" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Diraba</strong> - Rasakan tekstur cetak intaglio yang kasar pada bagian tertentu
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                  <CheckCircle className="h-3 w-3 text-primary" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Diterawang</strong> - Lihat tanda air dan fitur pengaman saat diterawangkan ke cahaya
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Teknik 5J */}
                      {showTeknik5j && (
                        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 animate-fade-in w-full text-left">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="relative">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 transition-all duration-300 group-hover:scale-110">
                              <Wallet className="h-7 w-7 text-accent" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Teknik 5J</h3>
                            <p className="text-muted-foreground leading-relaxed">Cara mencintai uang Rupiah:</p>
                            <ul className="mt-5 space-y-3">
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <CheckCircle className="h-3 w-3 text-accent" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Jangan Dilipat</strong> - Mencegah kerusakan serat kertas dan menjaga uang tidak lusuh.
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <CheckCircle className="h-3 w-3 text-accent" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Jangan Dicoret</strong> - Menjaga kebersihan dan memastikan uang tetap sah.
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <CheckCircle className="h-3 w-3 text-accent" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Jangan Diremas</strong> - Menghindari kerusakan fisik seperti kerutan atau sobekan.
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <CheckCircle className="h-3 w-3 text-accent" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Jangan Distapler</strong> - Mencegah lubang atau kerusakan struktur kertas.
                                </span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                  <CheckCircle className="h-3 w-3 text-accent" />
                                </div>
                                <span>
                                  <strong className="text-foreground">Jangan Dibasahi</strong> - Menghindari jamur atau kerusakan tinta pada uang.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Tab Content: Sejarah Rupiah */}
              <TabsContent value="sejarah" className="outline-none focus:outline-none">
                <div className="animate-fade-in">
                  {/* Timeline section */}
                  <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="relative stagger-children">
                      {timelineData.map((item, index) => (
                        <TimelineItem key={item.year} year={item.year} title={item.title} description={item.description} isLast={index === timelineData.length - 1} />
                      ))}
                    </div>
                  </div>

                  {/* Fun Facts Section */}
                  <div className="mt-16 rounded-3xl bg-muted/30 p-8 sm:p-12">
                    <div className="mb-10 text-center">
                      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        <Sparkles className="h-4 w-4" />
                        Tahukah Kamu?
                      </span>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Fakta Menarik</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                      {funFacts.map((fact) => (
                        <div key={fact.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-[3] group-hover:bg-primary/10" />

                          <div className="relative">
                            <p className="mb-2 text-3xl font-bold bg-gradient-to-r from-primary to-[#3b82f6] bg-clip-text text-transparent">{fact.value}</p>
                            <h3 className="mb-2 text-lg font-semibold text-card-foreground">{fact.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* videos yt dari back-end */}
      <section className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-muted/20 via-background to-background py-20">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              <Youtube className="h-4 w-4" />
              Video Edukasi
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">Belajar Rupiah Melalui Video</h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Tonton video edukasi resmi Bank Indonesia mengenai Rupiah, literasi keuangan, dan berbagai materi pembelajaran lainnya.</p>
          </div>

          {loadingVideo ? (
            <div className="py-20 text-center text-muted-foreground">Memuat video...</div>
          ) : (
            <div className="space-y-10">
              {(videos.length > 0 ? videos : [
                {
                  id: 1,
                  judul: "Sosialisasi Cinta, Bangga, Paham Rupiah",
                  deskripsi: "Saksikan video sosialisasi resmi dari Bank Indonesia untuk memahami lebih lanjut pentingnya mencintai, menjaga, dan memahami uang Rupiah sebagai simbol kedaulatan bangsa Indonesia.",
                  link: "https://www.youtube.com/watch?v=3nQxV3n7N5w",
                  created_at: "",
                  updated_at: ""
                }
              ]).map((video) => (
                <div key={video.id} className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Detail Informasi (Kiri) */}
                    <div className="lg:col-span-5 flex flex-col items-start justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-4">
                        <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                        Video Pembelajaran
                      </span>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4 leading-snug">
                        {video.judul}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {video.deskripsi}
                      </p>
                    </div>

                    {/* Frame Video Embed (Kanan) */}
                    <div className="lg:col-span-7 overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-border/40 bg-black">
                      <iframe
                        src={getYoutubeEmbed(video.link)}
                        title={video.judul}
                        className="aspect-video w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function EdukasiPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1 flex items-center justify-center bg-background">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
          <Footer />
        </div>
      }
    >
      <EdukasiContent />
    </Suspense>
  );
}
