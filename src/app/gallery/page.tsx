"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Camera, ArrowRight, ExternalLink } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const galleryItems = [
    {
      id: 1,
      title: "Precast RCC Bridge Girders & Casting Yard",
      category: "CIVIL",
      description: "Post-tensioned precast RCC I-girders for highway flyovers and bridges, showing top flange shear stirrup rebar loops, burlap curing, and heavy crane erection.",
      image: "/images/civil/rcc_bridge_girders_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/rcc-pcc-girders"
    },
    {
      id: 2,
      title: "PSC Girder Reinforcement & Ducts",
      category: "CIVIL",
      description: "TMT steel rebar cage detailing with corrugated HDPE post-tensioning sheath ducts and helical spiral burst reinforcement rings.",
      image: "/images/civil/girder_rebar_cage_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/rcc-pcc-girders"
    },
    {
      id: 3,
      title: "Roof Slab Ready-Mix Concreting",
      category: "CIVIL",
      description: "Building roof slab concrete casting using mechanical boom placer pump hose, immersion needle vibrator compaction, and manual leveling.",
      image: "/images/civil/building_slab_pour_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/building-works"
    },
    {
      id: 4,
      title: "Multi-Storey RCC Building Framing",
      category: "CIVIL",
      description: "Monolithic reinforced concrete columns, beams, cast staircase core, formwork props, and precision AAC block masonry walls.",
      image: "/images/civil/building_rcc_frame_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/building-works"
    },
    {
      id: 5,
      title: "Crane Rail Fixture Alignment",
      category: "MECHANICAL",
      description: "Heavy crane rail supply, alignment, and fixing for container terminal operations.",
      image: "/images/crane_rail.png",
      tagColor: "bg-sky-500/20 text-sky-600 border border-sky-500/30",
      link: "/sectors/mechanical/crane-rail-fixtures"
    },
    {
      id: 6,
      title: "Bridge Girder Bed & Top Shear Loops",
      category: "CIVIL",
      description: "On-site casting yard photograph of finished bridge girders with exposed composite action shear loops and water tanker truck.",
      image: "/images/civil/civil_site_01.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/rcc-pcc-girders"
    },
    {
      id: 7,
      title: "Modular HDPE Floating Jetty & Jet Ski Berths",
      category: "TOURISM",
      description: "Interlocking high-density polyethylene (Basell Lupolen 5261Z) modular pontoon cubes with integrated dry-dock drive-on jet ski ramps and articulated gangway.",
      image: "/images/tourism/modular_hdpe_floating_jetty_hd.jpg",
      tagColor: "bg-amber-500/20 text-amber-600 border border-amber-500/30",
      link: "/sectors/tourism/floating-docks-jetties"
    },
    {
      id: 71,
      title: "Seaplane Landing Platform & Water Aerodrome",
      category: "TOURISM",
      description: "Low-freeboard floating seaplane pontoon terminal with non-marking elastomer fendering, articulated gangway, and DGCA/ICAO compliant floatplane boarding.",
      image: "/images/tourism/seaplane_floating_platform_hd.jpg",
      tagColor: "bg-amber-500/20 text-amber-600 border border-amber-500/30",
      link: "/sectors/tourism/seaplane-platforms"
    },
    {
      id: 72,
      title: "Aluminium Marina Pontoons & Finger Berths",
      category: "TOURISM",
      description: "Marine-grade 6061-T6 structural aluminium extrusion pontoons with composite teak decking, spud pile guide collars, and smart IP67 utility service pedestals.",
      image: "/images/tourism/aluminium_marina_pontoons_hd.jpg",
      tagColor: "bg-amber-500/20 text-amber-600 border border-amber-500/30",
      link: "/sectors/tourism/floating-docks-jetties"
    },
    {
      id: 8,
      title: "Girder Curing & RE Wall Approach",
      category: "CIVIL",
      description: "Burlap hessian curing blankets along girder webs adjoining reinforced earth bridge approach walls and compactor rollers.",
      image: "/images/civil/civil_site_06.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/rcc-pcc-girders"
    },
    {
      id: 9,
      title: "Metguard Protective Coating Application",
      category: "MECHANICAL",
      description: "Anti-corrosion coating substance application for steel structures and marine equipment.",
      image: "/images/metguard_coating.png",
      tagColor: "bg-sky-500/20 text-sky-600 border border-sky-500/30",
      link: "/sectors/mechanical/anti-corrosion-coating"
    },
    {
      id: 10,
      title: "Slab Shuttering & Rebar Mesh Preparation",
      category: "CIVIL",
      description: "High-density bottom and top rebar reinforcement grids laid over film-faced shuttering plywood prior to inspection and pour.",
      image: "/images/civil/civil_site_16.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/building-works"
    },
    {
      id: 11,
      title: "RDSO Thermit Rail Track Welding",
      category: "MECHANICAL",
      description: "Alumina thermit rail welding works for industrial railway siding tracks.",
      image: "/images/thermit_welding.png",
      tagColor: "bg-sky-500/20 text-sky-600 border border-sky-500/30",
      link: "/sectors/mechanical/rdso-thermit-welding"
    },
    {
      id: 12,
      title: "Structural Columns & Arch Hall Interior",
      category: "CIVIL",
      description: "High-ceiling structural building interior featuring monolithic concrete columns, roof beams, and AAC block portal walls.",
      image: "/images/civil/civil_site_23.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/building-works"
    },
    {
      id: 13,
      title: "Harbor Breakwater Armoring & Mass Concrete",
      category: "CIVIL",
      description: "Precast concrete tetrapod armoring blocks, crawler crane placement, and monolithic foundation capping along ocean sea walls.",
      image: "/images/civil/mass_concrete_breakwater_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/mass-concrete-works"
    },
    {
      id: 14,
      title: "Heavy-Duty Port Paver Block Installation",
      category: "CIVIL",
      description: "M50 grade 100mm interlocking concrete pavers laid in herringbone pattern for port container terminal reach-stacker roadways.",
      image: "/images/civil/industrial_paver_blocks_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/paver-block-works"
    },
    {
      id: 15,
      title: "Precast Box Culverts & Stormwater Drainage",
      category: "CIVIL",
      description: "Segmented precast RCC box culvert and deep U-drain installation with mobile crane, trench shoring, and Class D400 ductile iron grates.",
      image: "/images/civil/stormwater_drainage_culvert_hd.jpg",
      tagColor: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30",
      link: "/sectors/civil/drainage-works"
    },
  ];

  const filteredItems = activeCategory === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pb-16 space-y-16">
      {/* ─── HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.22),transparent_60%)]" />
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

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Camera className="w-3.5 h-3.5" />
            PROJECT PORTFOLIO &bull; REAL-TIME SITE PHOTOGRAPHY
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Project <span className="text-[#00C2FF]">Gallery</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed font-light">
            Showcase of bridge girders, building works, mechanical rail fixtures, and marine civil infrastructure executed by INFINI Infrastructure &amp; Engineering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["ALL", "CIVIL", "MECHANICAL", "TOURISM"].map((cat) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card group rounded-3xl overflow-hidden hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
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
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href={item.link} 
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#0B1B4F] group-hover:text-emerald-600 transition-colors pt-3 border-t border-slate-100"
                >
                  <span>Explore Technical Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl text-center space-y-4 border border-slate-200 hover:border-[#00C2FF]/40 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#0B1B4F]">Have Project Specific Photo or Specification Requirements?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Contact our project management team to request full site photographic progress logs, girder fabrication quality inspection reports (QAP), or structural engineering drawings.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-block bg-[#0B1B4F] text-white hover:bg-[#00C2FF] hover:text-[#0B1B4F] px-8 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-md"
            >
              Inquire For Technical Specs &amp; Proposals →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
