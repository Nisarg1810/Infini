"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-[5.5rem] right-6 z-50 w-11 h-11 rounded-full bg-[#0B1B4F] text-white border border-[#00C2FF]/30
        flex items-center justify-center shadow-xl
        hover:bg-[#00C2FF] hover:text-[#0B1B4F] hover:border-[#00C2FF] hover:scale-110
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
