import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ShieldCheck, Sparkles, Droplets } from "lucide-react";

export const metadata = {
  title: "Stormwater Drainage Infrastructure & RCC Box Culverts | INFINI",
  description:
    "Precast and cast-in-place stormwater drainage systems, RCC box culverts, and industrial U-drain channels constructed for ports, roads, and manufacturing parks across India.",
};

export default function DrainageWorksPage() {
  const applications = [
    {
      title: "Ports & Container Yards",
      desc: "Deep concrete perimeter drains and grated channels designed to evacuate heavy monsoon rains across massive 20-acre paved container terminals.",
    },
    {
      title: "Highway & Road Crossings",
      desc: "Reinforced concrete box culverts buried beneath roadways, allowing floodwater to pass underneath while heavy trucks drive safely above.",
    },
    {
      title: "Industrial & Manufacturing Campuses",
      desc: "Covered U-drain networks connecting factory roof downspouts, roads, and processing yards to oil-water separators and municipal discharge points.",
    },
    {
      title: "Railway Sidings & Track Embankments",
      desc: "Trackside drainage ditches and culverts that keep railway stone ballast dry and prevent water from weakening the track foundation bed.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Trench Excavation & Slope Leveling",
      desc: "Our survey team calculates the natural water flow gradient. Excavators dig the trench to exact depths, followed by a compacted stone bed to ensure water always drains downward naturally.",
    },
    {
      step: "02",
      title: "Crane Placement of Precast Culverts",
      desc: "Precast concrete U-drains or box culverts are lowered into the trench with mobile cranes. The modular pieces interlock with tongue-and-groove joints sealed with waterproof rubber gaskets.",
    },
    {
      step: "03",
      title: "Heavy Grating Covers & Backfilling",
      desc: "Heavy-duty ductile iron grating covers are bolted on top. The sides are backfilled with crushed stone and compacted so road vehicles and forklifts can drive directly across the drains.",
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
            CIVIL INFRASTRUCTURE &bull; STORMWATER DRAINAGE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Drainage Infrastructure &amp; <span className="text-[#00C2FF]">RCC Box Culverts</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Engineered stormwater drainage networks, precast modular RCC box culverts, deep U-drain channels, and heavy-duty traffic-rated grating covers for ports, industrial parks, and highways.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Hero Featured Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/civil/stormwater_drainage_culvert_hd.jpg"
            alt="Installation of Precast RCC Box Culverts and Deep Stormwater U-Drains with Mobile Crane and Trench Shoring"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Turnkey Stormwater Network
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Precast RCC Box Culverts &amp; Heavy U-Drain Installation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Mobile cranes lowering segmented box culverts and roadside U-drains with heavy-duty cast iron grates to manage torrential monsoon rain runoff.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT ARE DRAINAGE & BOX CULVERTS (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Proper Drainage is Essential for Every Large Site
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              During India&apos;s heavy monsoon rains, millions of liters of rainwater fall over ports, container yards, and industrial campuses. If there is no proper drainage system, water collects into deep puddles within minutes. This floods factory floors, damages expensive goods, rots road subgrades, and brings operations to an expensive halt.
            </p>
            <p>
              <strong>Stormwater drainage networks and RCC box culverts</strong> are the engineered solution. Concrete U-shaped channels run along road edges to collect surface runoff, while rectangular underground <strong>box culverts</strong> tunnel beneath roadways, allowing massive volumes of water to pass safely underneath while heavy trucks drive on top without flooding the road.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides complete turnkey drainage contracting. We calculate the water flow slope, dig safety trenches, install precast modular concrete culverts, and bolt down heavy-duty ductile iron grating covers that support loaded 40-tonne container trucks.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE ARE THEY USED? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Common Applications</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where We Install Drainage Networks
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We design and construct drainage networks for major industrial and transportation corridors:
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
              How We Build Drainage Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Proper water gradient and durable joint sealing are critical. Here is our 3-step workflow:
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
              Why Choose INFINI for Drainage Infrastructure?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We design drainage systems that protect your roads and buildings from flood damage:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Rapid Monsoon Water Discharge</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our channels are calculated with accurate slopes so water moves quickly away from your yard without leaving puddles or allowing mud and silt to accumulate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Precast Units for Fast Installation</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                By using factory-cured precast concrete culvert segments, we install up to 50 meters of drainage channel per day, avoiding long road closures and site delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Heavy-Duty 40-Tonne Grating Covers</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We install heavy ductile iron Class D400 grates that sit flush with the roadway. Loaded freight trucks and reach stackers can drive across safely without bending the grates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Watertight Rubber-Sealed Joints</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All joints between concrete culvert sections are sealed with elastomeric rubber gaskets and bitumen sealant so water never leaks out into the surrounding soil.
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
                Civil Drainage Division
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Drainage &amp; Box Culvert Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with our stormwater drainage engineers for culvert sizing, runoff volume calculations, and turnkey installation proposals.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> IRC &amp; MoRTH Standards Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Heavy-Duty Traffic-Rated Gratings</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Request Drainage Estimate →
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
