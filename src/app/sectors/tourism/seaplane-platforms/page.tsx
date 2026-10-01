import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Plane, CheckCircle2, ShieldCheck, Sparkles, Anchor, Waves } from "lucide-react";

export const metadata = {
  title: "Water Aerodromes & Seaplane Floating Platforms | INFINI Infrastructure",
  description:
    "Turnkey water aerodrome floating infrastructure: low-freeboard seaplane docks, aircraft fendering, passenger boarding gangways, and DGCA-compliant terminals across India.",
};

export default function SeaplanePlatformsPage() {
  const features = [
    {
      title: "Low-Height Boarding Alignment",
      desc: "Engineered to sit low in the water (just 25cm to 35cm above the surface), perfectly matching the door step height of seaplanes so passengers can walk on and off with ease.",
    },
    {
      title: "Soft Non-Marking Bumpers",
      desc: "Lined with soft polyurethane and rubber cushion fenders along all contact edges. This protects the delicate aluminium skin of the airplane floats from dents and scratches during parking.",
    },
    {
      title: "Clear Overhead Wing Space",
      desc: "All dock anchoring lines and mooring points are kept low or underwater. There are zero tall poles or posts that could collide with the aircraft's wings or spinning propellers.",
    },
    {
      title: "Wide Passenger Boarding Ramps",
      desc: "Spacious, non-slip aluminium gangways connect the floating dock to the shoreline. The ramp adjusts automatically to rising and falling water levels without steep slopes.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Water Runway & Wave Survey",
      desc: "We analyze water depths, wind directions, and wave heights at your water aerodrome location to design the optimum floating terminal layout and mooring orientation.",
    },
    {
      step: "02",
      title: "Platform Assembly & Aircraft Bumpers",
      desc: "High-buoyancy modular pontoons are assembled and outfitted with heavy-duty non-slip composite decking, soft aircraft protective fenders, and safety handrails.",
    },
    {
      step: "03",
      title: "Underwater Anchoring & Safety Handover",
      desc: "The platform is anchored using underwater elastic tension lines and seabed anchor blocks, followed by stability testing and civil aviation safety verification.",
    },
  ];

  return (
    <div className="pb-16 space-y-16">
      
      {/* ─── 1. HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Glow & Grid Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.18),transparent_70%)]" />
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
            <Plane className="w-3.5 h-3.5" />
            WATER AERODROMES &bull; SEAPLANE PLATFORMS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Seaplane Floating <span className="text-[#00C2FF]">Platforms &amp; Terminals</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey water aerodrome floating infrastructure: low-freeboard passenger boarding docks, aircraft-safe protective fendering, and DGCA-compliant island and reservoir terminals.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Hero Featured Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/tourism/seaplane_floating_platform_hd.jpg"
            alt="Engineered Seaplane Floating Terminal Dock with Passenger Ramp and Floatplane Berthing"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Water Aerodrome Infrastructure
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Seaplane Passenger Boarding Terminal &amp; Berthing Dock
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Engineered with low walking height, soft aircraft rubber bumpers, and underwater anchoring for safe passenger boarding during tidal shifts.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT ARE SEAPLANE PLATFORMS (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What is a Seaplane Platform and Why Does It Need Special Engineering?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              A <strong>seaplane</strong> is an airplane equipped with pontoon floats instead of wheels, allowing it to land directly on calm sea bays, rivers, and large water reservoirs. Under regional aviation connectivity initiatives (like the UDAN Seaplane route network in India), seaplanes make it possible to fly tourists directly to scenic islands, pilgrim shrines, and waterfront resorts without needing a costly paved runway.
            </p>
            <p>
              However, once an airplane touches down on water, boarding passengers requires a specialized dock. Regular boat docks are too tall, have rough wooden or concrete edges, and use high vertical poles. If an airplane drifts into a standard dock, its delicate aluminium floats can be punctured, and its spinning propellers or wings can strike tall dock posts.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> designs and installs dedicated floating water aerodrome terminals. Our platforms sit at the exact low height of the aircraft door, are cushioned with non-marking rubber bumpers to protect the plane&apos;s skin, and keep all anchor lines underwater so wings have 100% clear overhead space.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: SPECIALIZED DESIGN FEATURES ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Aviation Safety</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Key Safety Features for Seaplanes
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every detail is engineered to protect the aircraft and provide an easy walk for passengers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
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
              How We Deliver a Water Aerodrome Project
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From water depth surveys to final aviation handover, here is our 3-step workflow:
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Quality &amp; Compliance</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Water Aerodromes?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We build floating infrastructure that meets strict aviation regulations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">DGCA &amp; ICAO Safety Compliance</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All platform dimensions, buoyancy reserves, and passenger ramps are engineered to comply with civil aviation guidelines for water aerodromes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Zero Damage to Aircraft Floats</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                By using soft non-marking polymer bumpers along the full docking edge, we ensure delicate aluminium aircraft floats never get scratched, dented, or discolored.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Underwater Anchoring with Zero High Posts</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We anchor the platform to underwater concrete deadweights using elastic tension lines. This guarantees there are no tall vertical poles to strike airplane wingtips.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Rapid Setup on Remote Lakes &amp; Islands</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Because our platforms are modular, parts can be easily transported by truck or boat to remote island beaches and dam reservoirs and assembled in just a few days.
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
                Water Aerodrome Division
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Seaplane Platform Proposal
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Planning a seaplane tourism terminal, island flight base, or reservoir aerodrome? Connect directly with our marine aviation engineers for site feasibility, layout drawings, and budget quotes.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Civil Aviation Standards Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Turnkey Pontoon, Fendering &amp; Mooring</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Inquire Seaplane Platform →
              </Link>
              <Link
                href="/sectors/tourism/floating-docks-jetties"
                className="border border-white/30 hover:border-white text-white text-center px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300"
              >
                View Floating Docks →
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
