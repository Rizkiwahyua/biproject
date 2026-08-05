"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

function PageLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  useEffect(() => {
    // When the path changes, animate loader out with a minimum display duration
    if (visible && loadingStartTime !== null) {
      const elapsed = Date.now() - loadingStartTime;
      const minDuration = 400; // 400ms minimum loading screen display time
      const delay = Math.max(0, minDuration - elapsed);

      let hideTimer: NodeJS.Timeout;
      const timer = setTimeout(() => {
        setAnimating(false);
        hideTimer = setTimeout(() => {
          setVisible(false);
          setLoadingStartTime(null);
        }, 300); // 300ms matches the opacity transition duration
      }, delay);

      return () => {
        clearTimeout(timer);
        if (hideTimer) clearTimeout(hideTimer);
      };
    }
  }, [pathname, searchParams, visible, loadingStartTime]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      // Only trigger loader on local links that do not open in a new tab
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        targetAttr !== "_blank" &&
        !anchor.hasAttribute("download")
      ) {
        const currentUrl = window.location.pathname + window.location.search;
        if (href === currentUrl) return;

        setVisible(true);
        setLoadingStartTime(Date.now());
        // Wait a tiny frame to trigger the transition opacity
        requestAnimationFrame(() => {
          setAnimating(true);
        });
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-card/85 backdrop-blur-md transition-opacity duration-300 ${
        animating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Glowing circular backdrop */}
        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse" />
        
        {/* Spinning LSM Logo */}
        <div className="relative h-28 w-28 animate-float">
          <Image
            src="/LSM.png"
            alt="LSM Logo Loading"
            fill
            className="object-contain animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>

        {/* Loading text with animated dots */}
        <div className="flex items-center gap-1.5 text-lg font-black tracking-widest bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          <span>Loading</span>
          <span className="flex gap-1 items-end pb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderInner />
    </Suspense>
  );
}
