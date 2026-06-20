import { cn } from "@/lib/utils"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
  className?: string
}

export function TimelineItem({ year, title, description, isLast = false, className }: TimelineItemProps) {
  return (
    <div className={cn("group relative flex gap-8 pb-10", className)}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[23px] top-14 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
      )}
      
      {/* Year circle */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2d8f8f] text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/40">
        {year.slice(-2)}
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
        
        <div className="relative">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-1.5 text-xs font-bold text-primary border border-primary/20">
              {year}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
