import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

export function FeatureCard({ title, description, icon: Icon, href, className }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Decorative corner accent */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
      
      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="mb-5 flex-1 text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <span className="transition-all duration-300 group-hover:mr-1">Pelajari Selengkapnya</span>
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}
