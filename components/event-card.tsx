import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  description: string
  date: string
  location?: string
  status: "upcoming" | "ongoing" | "closed"
  className?: string
}

const statusConfig = {
  upcoming: {
    label: "Segera Dibuka",
    className: "bg-primary/10 text-primary border-primary/20",
    dotClassName: "bg-primary",
  },
  ongoing: {
    label: "Sedang Berlangsung",
    className: "bg-accent/10 text-accent border-accent/20",
    dotClassName: "bg-accent animate-pulse",
  },
  closed: {
    label: "Ditutup",
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },
}

export function EventCard({ title, description, date, location, status, className }: EventCardProps) {
  const statusInfo = statusConfig[status]

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Decorative accent */}
      <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
      
      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300",
              statusInfo.className
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", statusInfo.dotClassName)} />
            {statusInfo.label}
          </span>
        </div>
        
        <h3 className="mb-3 text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="mb-5 flex-1 text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="mb-6 space-y-2.5">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <Button
          className={cn(
            "w-full transition-all duration-300 group/btn",
            status === "closed"
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-[#2d8f8f] text-white hover:opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          )}
          disabled={status === "closed"}
        >
          {status === "closed" ? "Pendaftaran Ditutup" : (
            <>
              Daftar Sekarang
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
