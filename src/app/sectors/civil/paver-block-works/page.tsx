import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const metadata = {
  title: "Industrial Paver Block Installation | Port & Logistics Pavements | INFINI",
  description:
    "Heavy-duty interlocking concrete paver block installation (80mm-120mm M50) for container terminals, freight yards, and port internal roads across India.",
};

export default function PaverBlockWorksPage() {
  const applications = [
    {
      title: "Seaport Container Terminals",
      desc: "High-capacity port aprons and container yards designed to support heavy container reach-stackers and giant rubber-tyred gantry cranes.",
    },
    {
      title: "Inland Container Depots (ICDs)",
      desc: "Heavy freight yards where thousands of loaded 20-foot and 40-foot shipping containers are stacked and shifted by forklifts day and night.",
    },
    {
      title: "Factory Internal Roads & Truck Bays",
      desc: "Durable roadway pavements for cement plants, steel mills, and chemical factories carrying heavy multi-axle cargo trailers.",
    },
    {
      title: "Logistics Hubs & Warehouses",
      desc: "Clean, rut-free loading dock aprons and parking lots built for continuous truck traffic and heavy pallet jack movements.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Sub-Base Grading & Compaction",
      desc: "We level and heavily compact the soil foundation, followed by crushed stone layers (GSB and Wet Mix Macadam) using heavy vibrating road rollers to ensure the ground will never sink under loaded trucks.",
    },
    {
      step: "02",
      title: "Bedding Sand & Block Laying",
      desc: "A uniform layer of clean, coarse bedding sand is screeded. Our paving crews lay 80mm–100mm M50-grade concrete blocks in an interlocking herringbone pattern for maximum load sharing.",
    },
    {
      step: "03",
      title: "Vibrating Compaction & Joint Sand",
      desc: "Fine jointing sand is swept into the narrow gaps between blocks. A heavy plate compactor vibrates the blocks, locking them tightly together into a single, indestructible pavement surface.",
    },
  ];

  return (
    <div className="pb-16 space-y-16">
      
      {/* ─── 1. HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Glow & Grid Overlays */}
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
            <HardHat className="w-3.5 h-3.5" />
            INDUSTRIAL PAVEMENTS &bull; PORTS &amp; ROADS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Heavy-Duty Industrial <span className="text-[#00C2FF]">Paver Block Works</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey pavement construction using high-strength interlocking concrete blocks (80mm–100mm M50) for container terminals, port yards, freight corridors, and factory roadways.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Hero Featured Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/civil/industrial_paver_blocks_hd.jpg"
            alt="Heavy-Duty Interlocking Paver Block Installation in Seaport Container Terminal Yard"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Heavy Freight Pavement
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              100mm M50 Interlocking Paver Blocks in Port Container Terminal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Precision interlocking pattern with heavy roller compaction, engineered to support 30-tonne axle loads from loaded container reach stackers.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT ARE HEAVY-DUTY PAVERS (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Do Ports and Factories Use Interlocking Paver Blocks Instead of Asphalt?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              In busy shipping ports, container yards, and industrial factories, standard asphalt or regular concrete roads quickly fail. Giant container reach-stackers, heavy forklifts, and loaded multi-axle trucks exert immense wheel pressure (often 25 to 30 tonnes per axle). When asphalt gets hot in summer, these heavy tires press into it, creating deep, dangerous ruts.
            </p>
            <p>
              <strong>Heavy-duty interlocking concrete paver blocks</strong> (80mm to 100mm thick with high M50 concrete strength) are the worldwide gold standard for heavy freight yards. Laid in an interlocking zig-zag pattern over a compacted stone base, each block locks tightly against its neighbors. When a heavy wheel passes over, the weight is shared across dozens of surrounding blocks rather than resting on a single spot.
            </p>
            <p>
              Another huge advantage is maintenance: if underground water pipes, electric cables, or drainage channels need service, workers can simply remove the paver blocks by hand, make the repairs, and put the exact same blocks back in place — with zero demolition, zero jackhammers, and zero ugly road patches.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE ARE THEY USED? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Common Applications</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where We Install Industrial Paver Blocks
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We design and construct high-load pavements across key industrial facilities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {applications.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 hover:border-[#00C2FF]/60 hover:shadow-md transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-lg text-[#0B1B4F]">{item.title}</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 3: STEP-BY-STEP PROCESS ─── */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Method</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              How We Build Heavy Industrial Pavements
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A durable pavement requires proper compaction under the blocks. Here is our 3-step workflow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-3">
                <span className="text-2xl font-black text-[#00C2FF]">{step.step}</span>
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 4: KEY ADVANTAGES ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Key Advantages</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Paver Blocks?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We deliver industrial-grade pavements engineered for decades of heavy service:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Handles 30+ Tonne Axle Loads</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We use high-density M50 grade concrete blocks (80mm to 100mm thick) that can easily support heavy container reach-stackers and loaded freight trailers without cracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Easy Underground Utility Repairs</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                If underground cables or pipes ever need repair, blocks can be lifted out and re-laid after the work is done. No noisy jackhammers, no asphalt cutting, and no road damage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Resistant to Heavy Rains &amp; Oil Spills</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Unlike asphalt which softens when exposed to diesel, oil, or standing monsoon water, high-grade concrete blocks are completely impervious to fuel leaks and puddles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Concrete Edge Curb Beams Included</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We cast sturdy concrete edge restraint curbs around the entire perimeter. This locks the blocks in place so the edges never slide outward when heavy trucks turn sharp corners.
              </p>
            </div>
          </div>
        </div>

        {/* ─── 3. BOTTOM GET ESTIMATE & INQUIRY BANNER ─── */}
        <section className="glass-card-dark p-8 sm:p-12 rounded-3xl text-white border border-[#00C2FF]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Industrial Pavement Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Paver Block Pavement Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Planning a new container yard, warehouse road, or factory loading apron? Connect with our civil pavement engineers for square meter pricing, sub-base recommendations, and completion schedules.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> M50 High-Strength Concrete Blocks</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Heavy Roller Compaction Included</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Pavement Estimate →
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
