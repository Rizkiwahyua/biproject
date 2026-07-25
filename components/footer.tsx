import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUpRight, Instagram } from "lucide-react"

const footerLinks = {
  navigasi: [
    { href: "/", label: "Home" },
    { href: "/edukasi", label: "Learn" },
    { href: "/berita", label: "Share" },
    { href: "/lomba", label: "Move" },
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
                <p className="text-sm text-primary font-medium">cbprupiahlsm.id</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Kampanye Cinta Bangga Paham Rupiah Bank Indonesia untuk meningkatkan pemahaman masyarakat tentang uang Rupiah.
            </p>

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

          {/* Media Sosial */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Media Sosial</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.instagram.com/cbp_rupiah_lsm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Instagram className="h-5 w-5 transition-transform duration-300" />
                </span>
                <span className="font-medium text-xs sm:text-sm">cbp_rupiah_lsm</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@cbp_rupiah_lsm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <svg className="h-4 w-4 fill-current transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-1.06-.8-1.77-1.95-2.07-3.23-.02 2.61-.01 5.2-.02 7.8-.08 1.83-.58 3.69-1.68 5.12-1.2 1.56-3.08 2.58-5.02 2.78-2.28.23-4.66-.46-6.19-2.12-1.74-1.89-2.31-4.72-1.5-7.17C2.5 8.9 4.8 6.94 7.51 6.57c.72-.1 1.46-.07 2.18.06v4.11a5.05 5.05 0 0 0-3.32 1.48 4.79 4.79 0 0 0-.64 5.79c.92 1.62 2.92 2.55 4.78 2.22 1.4-.25 2.61-1.25 3.11-2.58.26-.69.31-1.44.3-2.18V.02z" />
                  </svg>
                </span>
                <span className="font-medium text-xs sm:text-sm">cbp_rupiah_lsm</span>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Jl. Merdeka No.1, Lhokseumawe, Aceh 24312</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>(0645) 44000</span>
              </li>
              {/* <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>cbprupiahlsm.com</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} kantor Perwakilan Bank Indonesia Lhokseumawe. Hak Cipta Dilindungi.
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
