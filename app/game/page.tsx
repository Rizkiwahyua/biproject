import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function GamePage() {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                {/* HERO */}

                <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-32">
                    {/* BACKGROUND IMAGE BESAR */}
                    <div className="absolute right-0 bottom-0 h-full flex items-end pr-16 opacity-50">
                        <Image
                            src="/animation.png"
                            alt="Decor"
                            width={600}
                            height={600}
                            className="object-contain"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="relative max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-4">Game Edukasi</h1>
                        <p className="text-white/70 max-w-xl">
                            Belajar tentang Rupiah dengan cara yang seru dan interaktif
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="bg-muted/30 py-16">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* QORI */}
                        <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-teal-700 to-teal-500 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* icon background */}
                            <div className="absolute top-0 right-0 text-7xl opacity-20 p-4">
                                🔐
                            </div>
                            <h2 className="text-2xl font-bold mb-2">QORI</h2>
                            <p className="mb-6 text-white/80">
                                Qode Misteri CBP — pecahkan kode dan uji logikamu!
                            </p>
                            <button className="bg-white text-teal-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                                Mulai
                            </button>
                        </div>

                        {/* KUAR */}
                        <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* icon background */}
                            <div className="absolute top-0 right-0 text-7xl opacity-20 p-4">
                                🧠
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Kuah Pliek u</h2>
                            <p className="mb-6 text-white/80">
                                Kuis Wawasan Rupiah, Pahlawan dan Literasi Keuangan
                            </p>
                            <button className="bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                                Mulai
                            </button>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
