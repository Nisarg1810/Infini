import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ArrowRight, Building2, ShieldCheck, Layers, Hammer, Ruler, Activity, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Works & RCC Structural Construction | INFINI Infrastructure",
  description:
    "INFINI executes turnkey commercial, industrial, and institutional building construction: multi-storey RCC framed structures, boom pump slab casting, formwork engineering, and AAC block masonry.",
  openGraph: {
    title: "Building Works & RCC Structural Construction | INFINI Infrastructure",
    description:
      "Commercial building construction, reinforced concrete frame casting, boom pump roof slab concreting, and high-performance masonry works.",
    images: [{ url: "/images/civil/building_rcc_frame_hd.jpg", width: 1200, height: 630, alt: "Building Works & RCC Construction" }],
  },
};

export default function BuildingWorksPage() {
  const sitePhotos = [
    {
      src: "/images/civil/civil_site_15.jpg",
      title: "Boom Pump Slab Concreting",
      caption: "Ready-mix concrete delivery via mechanical boom pump hose with immersion needle compaction on slab mesh."
    },
    {
      src: "/images/civil/civil_site_16.jpg",
      title: "Slab Shuttering & Rebar Mesh",
      caption: "High-density bottom and top rebar reinforcement grids laid over film-faced shuttering plywood."
    },
    {
      src: "/images/civil/civil_site_14.jpg",
      title: "Column & Beam Formwork",
      caption: "Upper-level column scaffolding, heavy wooden batten beam formwork, and reinforcement dowels."
    },
    {
      src: "/images/civil/civil_site_20.jpg",
      title: "Multi-Storey RCC Frame Structure",
      caption: "Monolithic concrete columns, integrated staircase tower, AAC block masonry, and column starter rebars."
    },
    {
      src: "/images/civil/civil_site_23.jpg",
      title: "High-Ceiling Hall Interior",
      caption: "Structural concrete columns, overhead roof beams, and precision blockwork with grand arched portals."
    },
    {
      src: "/images/civil/civil_site_17.jpg",
      title: "Retaining Wall & Formwork Props",
      caption: "Reinforced concrete retaining wall casting with rebar dowels and heavy timber shuttering support props."
    },
  ];

  return (
    <div className="pb-16 space-y-16">
      
      {/* ─── 1. HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.18),transparent_70%)]" />
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
            <Building2 className="w-3.5 h-3.5" />
            CIVIL INFRASTRUCTURE &bull; STRUCTURAL BUILDINGS
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Works &amp; <span className="text-[#00C2FF]">RCC Structural Framing</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey commercial, institutional, and industrial building construction: multi-storey RCC frame casting, boom pump slab pours, and precision AAC block masonry.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ─── PRIMARY VISUAL SHOWCASE ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/civil/building_rcc_frame_hd.jpg" 
              alt="Multi-Storey RCC Building Frame & AAC Masonry" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F]">
                RCC Framework
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-bold text-[#00C2FF] uppercase tracking-wider">Multi-Storey Structural Frame</span>
              <h3 className="text-lg sm:text-xl font-bold">Monolithic Columns &amp; AAC Block Masonry</h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                Heavy concrete columns, cantilever beams, casting of central staircase shear walls, and perimeter scaffolding.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/civil/building_slab_pour_hd.jpg" 
              alt="Roof Slab Concreting via Mechanical Boom Placer Pump" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                Slab Pour Execution
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">High-Velocity RMC Placement</span>
              <h3 className="text-lg sm:text-xl font-bold">Boom Pump Roof Slab Concreting</h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                Continuous ready-mix concrete placement with high-frequency immersion vibrator compaction and laser screed level finishing.
              </p>
            </div>
          </div>
        </div>

        {/* ─── OVERVIEW STATEMENT ─── */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
            Turnkey Civil General Contracting for Modern Buildings
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            INFINI Infrastructure delivers end-to-end civil construction for commercial complexes, industrial administration headquarters, port offices, and institutional buildings. We handle everything from deep foundation excavation and raft footing casting to monolithic column formwork, high-velocity concrete boom pumping, and precision AAC block masonry walls.
          </p>
        </div>

        {/* ─── REAL-TIME SITE EXECUTION GALLERY ─── */}
        <div className="space-y-6 pt-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Real Project Documentation</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B4F]">On-Site Building Construction Progress</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Photographs from our live building projects documenting slab pours, rebar inspections, and structural masonry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitePhotos.map((photo, idx) => (
              <div 
                key={idx} 
                className="glass-card group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-200/80 hover:border-[#00C2FF]/60"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image 
                      src={photo.src} 
                      alt={photo.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-[#0B1B4F]/90 text-[#00C2FF] px-2.5 py-0.5 rounded-full border border-[#00C2FF]/30">
                      Site Record #{idx + 1}
                    </span>
                  </div>
                  <div className="p-5 space-y-1.5">
                    <h4 className="font-bold text-base text-[#0B1B4F] group-hover:text-[#00C2FF] transition-colors">{photo.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TECHNICAL CAPABILITY CARDS ─── */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B4F] flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#00C2FF]" />
            Core Building Construction Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-7 rounded-2xl space-y-3 border-l-4 border-l-[#00C2FF] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-[#0B1B4F]">Monolithic RCC Framing</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Design and casting of heavy column grids, grade beams, post-tensioned floor slabs, and integrated shear walls engineered for seismic zone IV and V compliance.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl space-y-3 border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-[#0B1B4F]">Boom Pump Concrete Delivery</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Deployment of 36m to 42m mobile boom placers for rapid, uninterrupted pours of up to 400 m³ per shift, eliminating cold joints and ensuring monolithic bond.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl space-y-3 border-l-4 border-l-indigo-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold">
                <Hammer className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-[#0B1B4F]">Precision AAC Block Masonry</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                High-thermal-insulation Autoclaved Aerated Concrete (AAC) blocks laid with polymer-modified thin-bed mortar, providing plumb, crack-resistant portal and partition walls.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl space-y-3 border-l-4 border-l-teal-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                <Ruler className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-[#0B1B4F]">Engineered Formwork Systems</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Film-faced shuttering plywood, cuplock staging systems, telescopic steel props, and tie-rod column boxes ensuring fair-faced concrete finish with zero bulging.
              </p>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM GET ESTIMATE & INQUIRY BANNER ─── */}
        <section className="glass-card-dark p-8 sm:p-12 rounded-3xl text-white border border-[#00C2FF]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Civil General Contractor
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Commercial Building Construction Proposal
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Submit architectural blueprints, structural drawings, or BOQs to our civil engineering team for turnkey execution schedules and material cost optimization.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> IS 456 &amp; National Building Code (NBC)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Dedicated Project Managers &amp; QC Engineers</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Building Estimate →
              </Link>
              <Link
                href="/sectors/civil"
                className="border border-white/30 hover:border-white text-white text-center px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300"
              >
                Explore Civil Sector
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
