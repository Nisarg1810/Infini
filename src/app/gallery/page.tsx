"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Camera, ArrowRight, Anchor, Wrench, HardHat, Ship } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const galleryItems = [
    {
      id: 1,
      title: "Floating Jetty Installation",
      category: "TOURISM",
      description: "Modular floating dock and jetty platform assembly for coastal vessel access.",
      image: "/images/marine_jetty.png",
      tagColor: "bg-infini-amber/20 text-infini-amber border border-infini-amber/30"
    },
    {
      id: 2,
      title: "Crane Rail Fixture Alignment",
      category: "MECHANICAL",
      description: "Heavy crane rail supply, alignment, and fixing for container terminal operations.",
      image: "/images/crane_rail.png",
      tagColor: "bg-infini-cyan/20 text-infini-cyan border border-infini-cyan/30"
    },
    {
      id: 3,
      title: "Civil Bridge Girders & Infrastructure",
      category: "CIVIL",
      description: "Pre-cast RCC girders, mass concrete foundations, and bridge structural assembly.",
      image: "/images/civil_bridge.png",
      tagColor: "bg-infini-emerald/20 text-infini-emerald border border-infini-emerald/30"
    },
    {
      id: 4,
      title: "Metguard Protective Coating Application",
      category: "MECHANICAL",
      description: "Anti-corrosion coating substance application for steel structures and marine equipment.",
      image: "/images/metguard_coating.png",
      tagColor: "bg-infini-cyan/20 text-infini-cyan border border-infini-cyan/30"
    },
    {
      id: 5,
      title: "Jetty Fixtures & Fender System",
      category: "CIVIL",
      description: "Installation of buffer stops, bollards, cleats, fenders, and deck lighting for port jetties.",
      image: "/images/marine_jetty.png",
      tagColor: "bg-infini-emerald/20 text-infini-emerald border border-infini-emerald/30"
    },
    {
      id: 6,
      title: "RDSO Thermit Rail Track Welding",
      category: "MECHANICAL",
      description: "Alumina thermit rail welding works for industrial railway siding tracks.",
      image: "/images/crane_rail.png",
      tagColor: "bg-infini-cyan/20 text-infini-cyan border border-infini-cyan/30"
    },
  ];

  const filteredItems = activeCategory === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pb-12 space-y-16">
      {/* ─── HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Glow & Grid Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,27,79,0.95),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Camera className="w-3.5 h-3.5" />
            PROJECT PORTFOLIO
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Project <span className="text-[#00C2FF]">Gallery</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Showcase of mechanical, civil, and floating marine engineering projects executed by INFINI Infrastructure &amp; Engineering Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["ALL", "MECHANICAL", "CIVIL", "TOURISM"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#0B1B4F] text-white shadow-lg ring-2 ring-[#00C2FF]/50" 
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 hover:text-[#0B1B4F]"
              }`}
            >
              {cat === "ALL" ? "All Projects" : `${cat} Sector`}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card group rounded-3xl overflow-hidden hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase backdrop-blur-md ${item.tagColor}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-[#0B1B4F] text-base group-hover:text-[#00C2FF] transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl text-center space-y-4 border border-slate-200 hover:border-[#00C2FF]/40 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#0B1B4F]">Have Project Specific Photo Requirements?</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Contact our project management team to request technical case studies, site photographs, or equipment datasheets.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#0B1B4F] text-white hover:bg-[#00C2FF] hover:text-[#0B1B4F] px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-md"
          >
            Inquire For Technical Specs
          </Link>
        </div>
      </section>
    </div>
  );
}
