import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopicCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  className?: string
}

export function TopicCard({ title, description, icon: Icon, href = "#", className }: TopicCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Decorative circle */}
      <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-[3] group-hover:bg-primary/10" />
      
      <div className="relative">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Link>
  )
}
