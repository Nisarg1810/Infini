import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Anchor, 
  CheckCircle2, 
  ShieldCheck, 
  HardHat, 
  Sparkles, 
  Wrench, 
  Compass, 
  Zap, 
  Layers 
} from "lucide-react";

export const metadata = {
  title: "Jetty Construction & Repairs | Port Berthing, Fixtures & Rehabilitation | INFINI",
  description:
    "Turnkey civil construction, rehabilitation, and fixture installation for marine port jetties, oil terminals, barge berths, and passenger ferry terminals across India.",
};

export default function JettyWorksRepairsPage() {
  const services = [
    {
      title: "Concrete Pile & Deck Repairs",
      desc: "Repairing cracked concrete pillars and deck slabs damaged by ocean salt water. We encase weakened piles in concrete jackets and install rust-stopping anodes.",
    },
    {
      title: "Heavy Mooring Bollards & Cleats",
      desc: "Supplying and bolting heavy cast-steel bollards (15 to 150 tonnes capacity) deep into the dock floor so large ships and barges can tie up safely.",
    },
    {
      title: "Shock-Absorbing Rubber Fenders",
      desc: "Installing heavy marine rubber fenders along the jetty edge. These act like giant cushions that absorb the impact when ships bump against the dock.",
    },
    {
      title: "Safety Railings, Ladders & Lighting",
      desc: "Fabricating rust-proof marine stainless steel handrails, diver access ladders, vessel buffer stops, and 30-meter high floodlight towers for night operations.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Underwater & Deck Inspection",
      desc: "Our engineers and diving inspectors examine the underwater piles, deck slab underside, and mooring points to identify cracks, concrete spalling, and rusted rebar.",
    },
    {
      step: "02",
      title: "High-Pressure Cleaning & Concreting",
      desc: "Damaged concrete is cleaned using high-pressure water jets. We place new reinforcing steel jackets around the piles and pump in high-strength waterproof micro-concrete.",
    },
    {
      step: "03",
      title: "Hardware Anchoring & Load Testing",
      desc: "We core-drill into the concrete deck, anchor new bollards and rubber fenders with marine epoxy bolts, and conduct load pull-tests before handing over the jetty.",
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
            CIVIL INFRASTRUCTURE &bull; PORTS &amp; HARBOURS
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Jetty Construction &amp; <span className="text-[#00C2FF]">Structural Repairs</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey marine civil engineering, underwater pile rehabilitation, concrete deck repairs, and complete fixture installation: mooring bollards, rubber fenders, safety ladders, and lighting.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ─── PRIMARY VISUAL SHOWCASE ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/jetty_construction.png" 
              alt="Jetty Civil Construction and Deck Works" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F]">
                Marine Civil Works
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-bold text-[#00C2FF] uppercase tracking-wider">Port Infrastructure</span>
              <h3 className="text-lg sm:text-xl font-bold">Jetty Deck &amp; Substructure Repairs</h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                Restoring eroded marine concrete piles, pouring waterproof deck overlays, and installing rust-stopping sacrificial anodes.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/10]">
            <Image 
              src="/images/marine_jetty.png" 
              alt="Marine Berthing and Mooring Fixtures" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                Turnkey Fixtures
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Berthing Hardware</span>
              <h3 className="text-lg sm:text-xl font-bold">Mooring Bollards &amp; Rubber Fenders</h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                Heavy cast-steel ship mooring bollards, energy-absorbing rubber fenders, stainless steel handrails, and vessel safety stops.
              </p>
            </div>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT WE DO (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What Are Jetty Works and Why Do Jetties Need Regular Repairs?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              A <strong>jetty</strong> is a specialized concrete or steel dock built out into the sea or river where cargo ships, passenger ferries, and naval vessels park to load and unload goods or passengers.
            </p>
            <p>
              Because jetties live in the ocean, they face constant punishment. Salty sea water and pounding waves slowly soak into the concrete, causing the steel reinforcement bars inside to rust and expand. Over time, chunks of concrete crack and fall off (a problem called spalling). At the same time, large vessels bumping against the dock can bend metal railings and crack old rubber bumpers.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides complete turnkey jetty engineering. We construct new jetty extensions and repair aging berths. Our marine crews restore underwater concrete pillars, repair damaged dock decks, and supply and bolt down all essential hardware — including heavy ship-tying bollards, rubber fenders, and safety ladders.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: SCOPE OF SERVICES ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Services</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What We Repair &amp; Install
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We cover both the heavy civil concrete work and the mechanical hardware outfitting:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item, idx) => (
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">The Method</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              How We Repair &amp; Upgrade a Jetty
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Working in tidal marine conditions requires careful timing and proven techniques:
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Quality First</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Jetty Works?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Marine environments are unforgiving. We ensure lasting protection and safety:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Underwater &amp; Tidal Experience</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our crews understand how to plan concrete pours around low tides and currents, ensuring micro-concrete cures strongly even in marine splash zones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Heavy Ship Mooring Pull Tests</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We don&apos;t just install bollards — we anchor them with high-bond chemical resin capsules and test them to verify they safely hold large cargo ships without pulling out.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Marine Grade SS316 &amp; High-Density Rubber</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All handrails, ladders, and bolts are manufactured from 316-grade stainless steel or hot-dip galvanized steel, and fenders are made from UV-resistant virgin rubber.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Turnkey Civil + Mechanical Execution</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Instead of hiring one civil contractor for concrete and another vendor for bollards and fenders, INFINI handles the entire scope with a single contract and warranty.
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
                Marine Civil Division
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Jetty Construction or Repair Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Need an inspection of an existing jetty or a proposal for new berthing fixtures? Connect directly with our marine engineers for an on-site visit and quotation.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> PIANC &amp; Port Standards Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Full Turnkey Civil &amp; Fixtures Warranty</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Request Jetty Estimate →
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
