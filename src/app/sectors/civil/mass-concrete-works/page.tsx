import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ShieldCheck, Sparkles, Waves, Anchor, Compass } from "lucide-react";

export const metadata = {
  title: "Mass Concrete Works & Breakwaters | Marine Civil Contracting | INFINI",
  description:
    "Large-volume mass concrete casting, precast tetrapod breakwater armoring, and marine harbor gravity walls engineered across coastal India.",
};

export default function MassConcreteWorksPage() {
  const capabilities = [
    {
      title: "Tetrapods & Sea Armor Blocks",
      desc: "Casting heavy 4-legged concrete blocks (tetrapods weighing 5 to 30 tonnes). When stacked along the sea, they interlock like puzzle pieces to break strong ocean waves.",
    },
    {
      title: "Mass Concrete Foundations",
      desc: "Pouring massive, several-meter-thick concrete foundation slabs for port structures, bridge abutments, and industrial machinery bases.",
    },
    {
      title: "Temperature-Controlled Concreting",
      desc: "Using chilled water and special low-heat concrete mixes so the core of large concrete blocks does not overheat and crack while hardening.",
    },
    {
      title: "Heavy Marine Crane Placement",
      desc: "Using giant 150 to 250-tonne crawler cranes to lift and position heavy armor blocks safely along open coastal shorelines and harbor entrances.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Block Casting in On-Site Yard",
      desc: "We establish high-speed casting beds using heavy steel moulds. High-grade marine concrete is poured and vibrated to create uniform, crack-free armor blocks.",
    },
    {
      step: "02",
      title: "Moisture Curing & Strength Verification",
      desc: "Blocks undergo continuous water curing to reach full design strength. Quality inspectors test cube samples to verify compressive strength before mobilization.",
    },
    {
      step: "03",
      title: "Crane Placement Along the Breakwater",
      desc: "Heavy crawler cranes and barge-mounted cranes lift and place blocks along the seawall, guided by GPS coordinates to achieve a tight, interlocking defensive barrier.",
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
            CIVIL INFRASTRUCTURE &bull; COASTAL DEFENSE
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Mass Concrete Works &amp; <span className="text-[#00C2FF]">Breakwaters</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey casting and crane placement of precast concrete tetrapods, mass foundation pours, harbor breakwaters, and coastal defense sea walls across India.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Hero Featured Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/civil/mass_concrete_breakwater_hd.jpg"
            alt="Heavy Mass Concrete Capping and Breakwater Tetrapod Armoring Crane Installation"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Coastal Defense Construction
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Coastal Breakwater Armoring &amp; Heavy Sea Walls
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Heavy crawler cranes positioning multi-tonne interlocking tetrapods along high-energy open sea walls to protect port basins.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT IS MASS CONCRETE & BREAKWATERS (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What Are Breakwaters and Why Does Mass Concrete Need Special Care?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              A <strong>breakwater</strong> is an offshore wall built in the sea to protect a port, harbour, or shoreline. Without breakwaters, heavy ocean waves and monsoon storms would crash directly into docked ships and port facilities. By placing massive interlocking concrete blocks (such as 4-legged tetrapods) in the water, the force of the waves is broken, creating calm, safe water inside the harbour.
            </p>
            <p>
              When pouring very thick concrete blocks or foundations (over 1 to 3 meters thick), the chemical reaction of cement creates immense heat inside the concrete. If the inside gets too hot while the outside cools quickly, the concrete can develop deep cracks. This is why <strong>mass concrete engineering</strong> requires special temperature controls — using chilled water, ice, and special low-heat cement mixes to keep the concrete strong and crack-free.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> specializes in large-scale mass concrete casting and breakwater construction. We set up on-site casting yards, manufacture thousands of heavy armor blocks, and deploy heavy crawler cranes to position them accurately along coastal sea walls.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHAT WE BUILD ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Capabilities</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What We Construct &amp; Install
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We execute both precast marine armoring units and large in-situ foundation pours:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => (
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
              How We Execute Breakwater Projects
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From yard setup to heavy marine crane lifting, here is our 3-step workflow:
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Quality Assurance</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Mass Concrete?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bring proven marine experience and heavy lifting machinery to coastal projects:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Zero Thermal Cracking Guarantee</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                By controlling temperatures with chilled water and temperature sensors embedded in the concrete, we ensure mass concrete pours cure without internal stress cracks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">High-Capacity Crane Fleet</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Lifting 25-tonne concrete tetrapods over rocks and into ocean waves requires serious machinery. We deploy heavy crawler and barge cranes to place blocks safely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Saltwater &amp; Sulfate Resistant Concrete</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We use high-grade marine concrete with mineral admixtures that stop salt water from penetrating, ensuring breakwater blocks last for decades without crumbling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">On-Site Casting Yard Mobilization</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Transporting thousands of 20-tonne blocks by public road is difficult and expensive. We set up the casting yard right on or near your site to save time and transport costs.
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
                Coastal Marine Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Breakwater or Mass Concrete Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with our coastal civil engineering team for tetrapod casting schedules, breakwater armoring quantities, and crane mobilization quotes.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Marine Sulfate-Resistant Mixes</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Heavy Crawler Crane Deployment</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Project Estimate →
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
