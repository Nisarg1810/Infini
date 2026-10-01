import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, CheckCircle2, ShieldCheck, Sparkles, Anchor, Waves } from "lucide-react";

export const metadata = {
  title: "Modular Floating Docks, Jetties & Marinas | INFINI Waterfront Infrastructure",
  description:
    "Turnkey supply and installation of modular floating HDPE pontoon docks, marine-grade aluminium yacht marinas, and concrete floating breakwaters across India.",
};

export default function FloatingDocksJettiesPage() {
  const dockTypes = [
    {
      step: "01",
      title: "Modular HDPE Plastic Docks",
      desc: "Interlocking high-density plastic cubes that float on water with a non-slip textured surface. 100% rust-proof and rot-proof. Ideal for jet skis, speedboats, public ferry boarding, and resort swimming decks.",
      badge: "Most Popular & Flexible",
      badgeColor: "bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/30",
    },
    {
      step: "02",
      title: "Marine Aluminium Yacht Marinas",
      desc: "Built with heavy-duty structural marine aluminium frames and topped with beautiful wood-composite decking. Includes power sockets, freshwater taps, and safety lighting for luxury yacht clubs and marinas.",
      badge: "Luxury & Commercial",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    },
    {
      step: "03",
      title: "Heavy Concrete Floating Breakwaters",
      desc: "Massive pre-stressed concrete floating pontoons engineered for rough open sea bays. Their heavy weight calms strong waves while acting as a sturdy dock for large commercial ferries and patrol boats.",
      badge: "Heavy Sea & Ports",
      badgeColor: "bg-[#0B1B4F]/10 text-[#0B1B4F] border-[#0B1B4F]/30",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Water Depth & Tide Survey",
      desc: "We survey water depths, seasonal tidal ranges, and wave heights at your site to design the correct pontoon size, buoyancy, and seabed anchor lines.",
    },
    {
      step: "02",
      title: "Modular Assembly & Access Gangway",
      desc: "Pontoon sections and hinged aluminium access ramps are pre-assembled. The articulated gangway allows people to walk comfortably onto the dock at both high and low tide.",
    },
    {
      step: "03",
      title: "Seabed Anchoring & Commissioning",
      desc: "The floating dock is secured to vertical steel guide piles or heavy underwater deadweight anchors with elastomeric ropes, followed by full stability testing.",
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
            <Ship className="w-3.5 h-3.5" />
            WATERFRONT &bull; FLOATING MARINAS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Modular Floating Docks, <span className="text-[#00C2FF]">Jetties &amp; Marinas</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey supply and installation of modular floating HDPE pontoon docks, aluminium yacht marinas, passenger ferry jetties, and articulated gangways across coastal India and inland lakes.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Showcase Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/tourism/modular_hdpe_floating_dock_hd.jpg"
              alt="Modular HDPE Floating Pontoon Jetty and Jet Ski Drive-On Dock in Coastal Bay"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-0.5 rounded-full inline-block mb-1.5">
                Modular HDPE Docks
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white drop-shadow">Modular Pontoons &amp; Jet Ski Berths</h4>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">Anti-skid cubes with articulated aluminium gangways for watersports and tourist boats.</p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/tourism/aluminium_marina_pontoons_hd.jpg"
              alt="Luxury Aluminium Alloy Marina Pontoon with Composite Decking and Utility Pedestals"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900 px-3 py-0.5 rounded-full inline-block mb-1.5">
                Marine Aluminium Marinas
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white drop-shadow">Commercial Marina &amp; Yacht Berths</h4>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">Wood-composite decking with power pedestals and fresh water for private yachts.</p>
            </div>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT ARE FLOATING DOCKS (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose Floating Docks Over Fixed Concrete Jetties?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              In coastal seas and rivers, the water level never stays the same. Ocean tides can rise and fall by 3 to 8 meters twice a day, while hydroelectric dams and lakes experience huge water level changes between the monsoon and summer.
            </p>
            <p>
              When a boat dock is built fixed in concrete, passengers face a major problem: at high tide the water may submerge the walkway, and at low tide the boat sits far below the dock, making boarding dangerous. A <strong>floating dock</strong> rests right on top of the water and automatically glides up and down with the tide. The walking platform is always at the perfect, level height for passengers to step safely onto boats.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides complete turnkey floating waterfront construction across India. We supply the floating pontoons, fabricate rust-proof aluminium access gangways, anchor the system securely to the seabed, and handle installation with zero disruption to the marine environment.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: THE 3 FLOATING DOCK SYSTEMS ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Systems</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Types of Floating Docks We Build
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Depending on your location and boat traffic, we offer three proven floating dock solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dockTypes.map((type) => (
              <div key={type.step} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#00C2FF]">{type.step}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${type.badgeColor}`}>
                      {type.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-[#0B1B4F] mt-2">{type.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 3: STEP-BY-STEP PROCESS ─── */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Method</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              How We Deliver Floating Dock Projects
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Safe marine installation with zero damage to beaches or marine life:
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
              Why Choose INFINI Floating Docks?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We make waterfront access safe, modern, and effortless:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Automatically Rises &amp; Falls With Tides</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our docks adapt smoothly to tidal swings of up to 10 meters. The walking deck remains constant relative to the boat, making embarkation completely safe for children, tourists, and elderly passengers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">100% Rust-Proof &amp; Low Maintenance</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Made from marine-grade polyethylene, anodized aluminium, and composite wood that never corrode or rot in salt water. You never need to repaint or treat against marine borers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Eco-Friendly &amp; CRZ Approved</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Floating pontoons cause zero damage to coral reefs, tidal mangroves, or seabed ecology. They are easily permitted under Coastal Regulation Zone (CRZ) rules and can be relocated if needed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Modular &amp; Expandable Over Time</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                As your tourism, ferry, or marina business grows, you can easily add extra pontoon cubes or additional boat slips in a single day without any civil demolition.
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
                Waterfront Marine Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Floating Jetty or Marina Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with our marine engineers for water depth assessments, pontoon layout drawings, and turnkey supply and installation estimates.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> PIANC Marina Standards Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Full Pontoon &amp; Anchoring Warranty</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Floating Dock Estimate →
              </Link>
              <Link
                href="/sectors/tourism/seaplane-platforms"
                className="border border-white/30 hover:border-white text-white text-center px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300"
              >
                View Seaplane Platforms →
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
