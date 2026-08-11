"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EdukasiCardProps {
  id: number;
  title: string;
  description: string;
  file: string | null;
  fileExtension: string | null;
  link: string | null;
  createdAt: string;
  href: string;
  className?: string;
}

function getYoutubeThumbnail(url: string | null) {
  if (!url) return null;
  try {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      const parsed = new URL(url);
      videoId = parsed.searchParams.get("v") || "";
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("youtube.com/embed/")[1].split("?")[0];
    }
    
    if (videoId) {
      // Use hqdefault for higher quality thumbnail
      return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }
  } catch (e) {
    console.error("Error extracting YouTube thumbnail ID:", e);
  }
  return null;
}

export function EdukasiCard({
  id,
  title,
  description,
  file,
  fileExtension,
  link,
  createdAt,
  href,
  className
}: EdukasiCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Determine thumbnail type and source
  const ytThumbnail = getYoutubeThumbnail(link);
  const isImageFile = file && ["jpg", "jpeg", "png", "webp", "gif"].includes(fileExtension?.toLowerCase() || "");
  const isPdfFile = file && fileExtension?.toLowerCase() === "pdf";

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 text-left",
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

      <div className="relative flex flex-col h-full justify-between">
        <div>
          {/* Thumbnail Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted mb-4 shadow-inner flex items-center justify-center">
            {ytThumbnail ? (
              <img
                src={ytThumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : isImageFile && file ? (
              <img
                src={file}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : isPdfFile ? (
              <div className="w-full h-full bg-gradient-to-br from-red-600/10 to-red-600/5 flex flex-col items-center justify-center p-4">
                <FileText className="h-10 w-10 text-red-600 mb-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-bold text-red-700/80 tracking-wider">PREVIEW PDF</span>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex flex-col items-center justify-center p-4">
                <FileText className="h-10 w-10 text-primary/60 mb-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-bold text-primary/70 tracking-wider">MATERI PEMBELAJARAN</span>
              </div>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="mb-2 text-base font-bold text-card-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Card Footer */}
        <div>
          <div className="flex items-center justify-center w-full mt-4">
            <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white py-2 text-sm font-semibold transition-all duration-300 shadow-sm border border-primary/10 group-hover:border-primary">
              Mulai Belajar
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
