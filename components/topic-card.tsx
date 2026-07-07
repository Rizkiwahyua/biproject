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
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Spotlight Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), color-mix(in srgb, var(--primary) 8%, transparent), transparent 80%)`
        }}
      />
      
      {/* Spotlight Border Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          border: '1px solid transparent',
          backgroundImage: `linear-gradient(var(--card), var(--card)), radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), color-mix(in srgb, var(--primary) 40%, var(--accent) 30%), transparent 80%)`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          margin: '-1px',
        }}
      />
      
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
