"use client";

import { useEffect, useState, Suspense } from "react";

function PageLoaderInner() {
  // Welcome Screen Splash States
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeAnimating, setWelcomeAnimating] = useState(true);
  const [panelsSliding, setPanelsSliding] = useState(false);

  useEffect(() => {
    // Welcome Splash Screen Sequence on initial load (Fast, frosted-glass entry)
    const gifDuration = 1500; // 1.5 seconds display time for the GIF
    const fadeDuration = 400;  // 400ms fade transition duration

    const gifTimer = setTimeout(() => {
      setWelcomeAnimating(false); // Scale and fade out the GIF
      setPanelsSliding(true); // Fade out the backdrop blur and background opacity
      
      const removeTimer = setTimeout(() => {
        setShowWelcome(false); // Remove welcome screen from DOM
      }, fadeDuration);
      
      return () => clearTimeout(removeTimer);
    }, gifDuration);

    return () => clearTimeout(gifTimer);
  }, []);

  return (
    <>
      {/* 1. INITIAL WELCOME SPLASH LOADER (Shown once on first load) */}
      {showWelcome && (
        <div 
          className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#02152c]/15 backdrop-blur-2xl transition-all duration-500 ease-out pointer-events-auto ${
            panelsSliding ? "opacity-0 backdrop-blur-none pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Glowing circular backdrop for the GIF */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl animate-pulse transition-opacity duration-500 ${
              welcomeAnimating ? "opacity-100" : "opacity-0"
            }`} 
          />

          {/* Bukaweb GIF in the center */}
          <div 
            className={`relative z-10 transition-all duration-500 ease-out w-[90%] max-w-[420px] aspect-square flex items-center justify-center ${
              welcomeAnimating ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img 
              src="/bukaweb.gif" 
              alt="Welcome Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderInner />
    </Suspense>
  );
}
