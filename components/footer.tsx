import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUpRight, Instagram } from "lucide-react"

const footerLinks = {
  navigasi: [
    { href: "/", label: "Beranda" },
    { href: "/edukasi", label: "Edukasi" },
    { href: "/berita", label: "Berita" },
    { href: "/lomba", label: "Lomba" },
  ],
  resources: [
    { href: "#", label: "Materi Pembelajaran" },
    { href: "#", label: "Video Tutorial" },
    { href: "#", label: "Infografis" },
    { href: "#", label: "FAQ" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-card to-muted/30">
      {/* Decorative accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/indonesia-logo.svg"
                  alt="Logo Bank Indonesia"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Kantor Perwakilan Bank Indonesia Lhokseumawe</p>
                <p className="text-sm text-primary font-medium">cbprupiahlsm</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Kampanye literasi keuangan Bank Indonesia untuk meningkatkan pemahaman masyarakat tentang uang Rupiah.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://www.instagram.com/cbp_rupiah_lsm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-200"
                aria-label="Instagram CBP Rupiah Lhokseumawe"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Navigasi</h3>
            <ul className="space-y-3">
              {footerLinks.navigasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-all duration-200 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Sumber Daya</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-all duration-200 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>54JR+XF3, Kuta Blang, Kec. Banda Sakti, Kota Lhokseumawe, Aceh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span> - </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>cbprupiahlsm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bank Indonesia. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
