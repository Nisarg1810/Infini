import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Engineering Sector | RCC Girders, Building Works & Marine Infrastructure",
  description:
    "INFINI Infrastructure's Civil Engineering division delivers precast RCC bridge girders, commercial building structural works, jetty construction & repairs, mass concrete works, and heavy civil infrastructure across India.",
  openGraph: {
    title: "Civil Engineering Sector | INFINI Infrastructure & Engineering",
    description:
      "Specialist civil contractor for RCC bridge girders, building works, port jetty works, mass concrete positioning, and heavy infrastructure across India.",
    images: [{ url: "/images/civil/rcc_bridge_girders_hd.jpg", width: 1200, height: 630, alt: "INFINI Civil Engineering Sector" }],
  },
};

export default function CivilSectorPage() {
  const services = [
    {
      id: "girders",
      title: "RCC & PCC Girders for Bridges",
      href: "/sectors/civil/rcc-pcc-girders",
      image: "/images/civil/rcc_bridge_girders_hd.jpg",
      tag: "FLAGSHIP CIVIL",
      tagColor: "bg-[#00C2FF]/15 text-[#00C2FF] border-[#00C2FF]/30",
      description: "Pre-cast and cast-in-place Reinforced Cement Concrete (RCC) and Prestressed Concrete (PSC) I-girders and box girders for highway flyovers, rail bridges, and heavy viaducts.",
      features: ["M45/M50 High-grade concrete casting", "Post-tensioned tendon profiling & grouting", "Casting yard fabrication & gantry handling", "Launcher erection & bridge deck integration"]
    },
    {
      id: "building-works",
      title: "Building Works & RCC Framing",
      href: "/sectors/civil/building-works",
      image: "/images/civil/building_rcc_frame_hd.jpg",
      tag: "STRUCTURAL",
      tagColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
      description: "Multi-storey RCC framed institutional and commercial buildings, monolithic column casting, boom pump roof slab concreting, and precision AAC block masonry walls.",
      features: ["Ready-mix concrete boom pump slab casting", "Precision column & beam formwork shuttering", "Monolithic staircase cores & retaining walls", "High-durability AAC & concrete block masonry"]
    },
    {
      id: "jetty-works",
      title: "Jetty Construction & Repairs",
      href: "/sectors/civil/jetty-works-repairs",
      image: "/images/jetty_construction.png",
      tag: "MARINE CIVIL",
      tagColor: "bg-sky-500/15 text-sky-600 border-sky-500/30",
      description: "Civil construction including supply & installation works for jetty fixtures such as buffer stops, bollards, cleats, fenders, handrails, ladders, and deck light assemblies.",
      features: ["Substructure pile cap & deck slab repairs", "Mooring bollards & marine fender systems", "Anti-corrosion cathodic concrete protection", "High-load vessel docking deck rehabilitation"]
    },
    {
      id: "mass-concrete",
      title: "Mass Concrete Works & Breakwaters",
      href: "/sectors/civil/mass-concrete-works",
      image: "/images/civil/mass_concrete_breakwater_hd.jpg",
      tag: "HEAVY CONCRETE",
      tagColor: "bg-amber-500/15 text-amber-600 border-amber-500/30",
      description: "Mass concrete foundations, structural block casting, and re-positioning & installation of concrete blocks for marine harbor breakwater structures.",
      features: ["Thermal-controlled mass concrete foundation pours", "Tetrapod and accropode armoring block casting", "Heavy crawler crane marine placement", "Harbor shoreline stabilization works"]
    },
    {
      id: "paver-block",
      title: "Paver Block Installation",
      href: "/sectors/civil/paver-block-works",
      image: "/images/civil/industrial_paver_blocks_hd.jpg",
      tag: "PORT YARDS",
      tagColor: "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
      description: "Heavy-duty industrial and port paver block installation for high-capacity container yards, dock aprons, and heavy industrial vehicle roadways.",
      features: ["80mm-120mm M50 interlock paver blocks", "Laser-graded sub-base compaction", "Heavy axle load container terminal yards", "Integrated surface drainage slope finishing"]
    },
    {
      id: "drainage",
      title: "Drainage Works & Culverts",
      href: "/sectors/civil/drainage-works",
      image: "/images/civil/stormwater_drainage_culvert_hd.jpg",
      tag: "DRAINAGE",
      tagColor: "bg-teal-500/15 text-teal-600 border-teal-500/30",
      description: "Civil drainage infrastructure development, RCC stormwater channels, box culverts, and industrial effluent wastewater collection systems.",
      features: ["Precast & cast-in-place RCC storm drains", "Reinforced box culverts for heavy axle roads", "Sedimentation traps & oil-water separators", "Monsoon flood mitigation engineering"]
    }
  ];

  return (
    <div className="pb-16 space-y-16">
      {/* ─── HEADER BANNER ─── */}
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

        <div className="relative z-10 max-w-6xl mx-auto space-y-5">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <HardHat className="w-3.5 h-3.5" />
            CORE CIVIL INFRASTRUCTURE
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
            Civil Engineering &amp; <span className="text-[#00C2FF]">Infrastructure</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            Engineered excellence across precast RCC bridge girders, multi-storey building construction, coastal breakwaters, jetty rehabilitation, and industrial civil infrastructure.
          </p>
        </div>
      </section>

      {/* ─── FEATURED SPOTLIGHT: BRIDGE GIRDERS & BUILDING WORKS ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-600">Site Execution Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4F]">Signature Civil Specializations</h2>
          <p className="text-sm text-slate-600">
            From precision post-tensioned bridge girders to heavy RCC building construction, explore our on-ground execution capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: RCC Girders */}
          <div className="glass-card rounded-3xl overflow-hidden group border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-72 w-full overflow-hidden bg-slate-900">
              <Image 
                src="/images/civil/rcc_bridge_girders_hd.jpg" 
                alt="RCC Girders for Bridges" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F]">
                  Bridges &amp; Flyovers
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                  Precast Yard
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold text-white">RCC &amp; PCC Girders for Bridges</h3>
                <p className="text-xs text-slate-300 mt-1">Post-tensioned I-Girders • Casting Beds • Bridge Substructures</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated on-site and off-site precast casting yards executing M45/M50 prestressed concrete (PSC) I-girders with post-tensioning HDPE duct sheaths, precision rebar reinforcement, curing regimes, and crane launching.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> High-Capacity Casting Beds</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Multistrand Tendon Ducts</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Burlap / Hessian Curing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Hydraulic Launcher Launching</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link 
                  href="/sectors/civil/rcc-pcc-girders" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] transition-colors"
                >
                  Explore Girder Capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Building Works */}
          <div className="glass-card rounded-3xl overflow-hidden group border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-72 w-full overflow-hidden bg-slate-900">
              <Image 
                src="/images/civil/building_rcc_frame_hd.jpg" 
                alt="Building Works & RCC Structural Frame" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                  Building Works
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                  RCC Structural
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold text-white">Building Works &amp; RCC Framing</h3>
                <p className="text-xs text-slate-300 mt-1">Multi-Storey Frames • Boom Pump Slabs • AAC Masonry</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-scope commercial, institutional, and industrial building structural construction. Monolithic column and beam formwork, ready-mix concrete pump pouring with needle compaction, and precision AAC block masonry walls.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Boom Pump Slab Concreting</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Heavy Shuttering Propping</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Monolithic Staircase Cores</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Thermal Block Masonry</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link 
                  href="/sectors/civil/building-works" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1B4F] hover:text-emerald-600 transition-colors"
                >
                  Explore Building Works <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL CIVIL SERVICES GRID ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">All Civil Services &amp; Divisions</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">Select any specialization for detailed technical specs and project photos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card rounded-2xl overflow-hidden group hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <span className="absolute bottom-3 left-4 text-white font-bold text-base line-clamp-1">{item.title}</span>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  <ul className="space-y-1.5 text-[11px] text-slate-700">
                    {item.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link href={item.href} className="w-full inline-flex items-center justify-between text-xs font-bold text-[#0B1B4F] group-hover:text-emerald-600 transition-colors pt-3 border-t border-slate-100">
                  <span>View Technical Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1B4F] via-[#102A71] to-[#0B1B4F] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#00C2FF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-[#00C2FF]">Civil Infrastructure Contracting</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Have an Upcoming Bridge, Building, or Port Project?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Connect with INFINI&apos;s civil engineering consultants for tender estimation, structural casting schedules, site mobilization, and quality assurance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white text-center py-3.5 px-6 rounded-xl text-xs font-bold transition-colors shadow-lg"
            >
              Request Civil Proposal
            </Link>
            <Link 
              href="/gallery" 
              className="border border-white/30 hover:border-white text-white text-center py-3.5 px-6 rounded-xl text-xs font-bold transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
