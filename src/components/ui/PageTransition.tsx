"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      // Trigger loading bar
      setLoading(true);
      setPrevPath(pathname);

      // Short timeout to simulate route change
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  if (!loading) return null;

  return (
    <>
      {/* Top loading bar */}
      <div className="fixed inset-0 z-[9998] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00C2FF] via-[#00e5ff] to-[#00C2FF] shadow-[0_0_8px_rgba(0,194,255,0.8)] animate-page-load" />
        </div>
      </div>

      {/* Subtle full-page flash overlay */}
      <div className="fixed inset-0 z-[9997] bg-white/30 backdrop-blur-[1px] pointer-events-none animate-fade-out" />
    </>
  );
}
