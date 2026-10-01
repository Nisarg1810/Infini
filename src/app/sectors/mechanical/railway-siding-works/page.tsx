import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Train, CheckCircle2, ShieldCheck, Sparkles, Compass } from "lucide-react";

export const metadata = {
  title: "Railway Siding Works – Container Terminals & Ports | INFINI Infrastructure",
  description: "Turnkey railway siding construction, track linking, point and crossing turnouts, and ballast maintenance for container terminals, ICDs, and industrial plants across India.",
};

export default function RailwaySidingWorksPage() {
  const applications = [
    {
      title: "Manufacturing & Heavy Industrial Plants",
      desc: "Dedicated tracks for cement factories, steel mills, and chemical hubs to bring raw materials in and dispatch finished products directly by train.",
    },
    {
      title: "Thermal Power Stations & Coal Loops",
      desc: "Heavy-duty merry-go-round (MGR) rail tracks designed for continuous 24/7 coal unloading directly into boiler conveyor systems.",
    },
    {
      title: "Seaports & Container Terminals",
      desc: "Dockside railway networks allowing reach-stackers and gantry cranes to load shipping containers directly from cargo ships onto freight rakes.",
    },
    {
      title: "Inland Container Depots (ICDs) & Logistics Parks",
      desc: "Multi-line rail sorting yards with embedded concrete track aprons for heavy forklift and container truck movements.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Earthworks & Ballast Foundation",
      desc: "We prepare and compact the soil formation subgrade to ensure it supports 25-tonne axle loads without sinking. Next, a uniform layer of clean crushed stone ballast is spread and leveled.",
    },
    {
      step: "02",
      title: "Concrete Sleepers & Track Linking",
      desc: "Heavy pre-stressed concrete (PSC) sleepers are evenly spaced along the route. High-strength 60kg steel rails are positioned on rubber pads and secured using elastic rail clips.",
    },
    {
      step: "03",
      title: "Turnouts, Welding & Approvals",
      desc: "We assemble track switches (points and crossings) for train diverting, weld rail joints into smooth continuous lines, and coordinate safety inspections with Zonal Railway officials for formal line commissioning.",
    },
  ];

  return (
    <div className="pb-16 space-y-16">
      
      {/* ─── 1. HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Glow & Grid Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.2),transparent_60%)]" />
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
            <Train className="w-3.5 h-3.5" />
            RAILWAY SIDING INFRASTRUCTURE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Railway Siding Works – <span className="text-[#00C2FF]">Ports &amp; Industrial Plants</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey private railway siding construction, track linking, turnout installation, and ballast packing for container terminals, industrial plants, and seaports across India.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/railway_siding.png"
            alt="Railway Siding Construction and Track Linking for Container Terminal"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Turnkey Private Rail Line
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Freight Siding Track Linking &amp; Ballast Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Heavy 60kg rail on concrete sleepers with mechanical tamping for 25-tonne axle load container freight trains.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT IS A RAILWAY SIDING (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What is a Private Railway Siding and Why Do Businesses Build One?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              A <strong>private railway siding</strong> is a dedicated railway track that branches off the Indian Railways main line and runs directly inside a commercial facility — such as a cement plant, power station, steel mill, or port container yard.
            </p>
            <p>
              Instead of loading goods onto hundreds of road trucks (which can be delayed by traffic, bad weather, or high fuel costs), a private siding allows businesses to load and unload entire freight trains right inside their gates. A single train can carry the equivalent of 70 to 100 heavy trucks, making rail transport vastly faster, cheaper, and safer.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> manages the entire siding project from start to finish. We handle earthwork preparation, stone ballast dumping, concrete sleeper laying, rail linking, track switches (turnouts), thermit welding, and coordination with Indian Railways engineers for final safety approval.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE ARE OUR SIDINGS BUILT? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Sectors Served</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where Are Railway Sidings Used?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We design and construct freight sidings for diverse high-volume industries:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 hover:border-[#00C2FF]/60 hover:shadow-md transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-lg text-[#0B1B4F]">{app.title}</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {app.desc}
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
              How We Build a Railway Siding
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From raw ground to active train traffic, here is our 3-step turnkey construction process:
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

        {/* ─── SECTION 4: KEY ADVANTAGES (SIMPLE & CLEAR) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Key Advantages</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Your Railway Siding?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Building a railway siding requires specialized track knowledge and regulatory experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Complete Indian Railways Compliance</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All our tracks strictly follow the Indian Railways Permanent Way Manual (IRPWM). Gauge, cross-level, and track curves are aligned so freight rakes can enter without restriction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Built for Heavy 25-Tonne Axle Loads</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We use 60kg rail on pre-stressed concrete monoblock sleepers with compacted stone ballast. This heavy-duty design easily withstands loaded freight trains without track sinkage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Turnout Switches &amp; Crossings Assembly</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We assemble and align 1-in-8.5 and 1-in-12 track turnouts using cast manganese steel crossings, allowing trains to smoothly switch tracks inside your yard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Annual Track Maintenance Contracts</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Even after construction, our maintenance gangs provide routine inspections, ballast tamping, switch lubrication, and rail realignments to keep your line operating safely.
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
                Turnkey Railway Contractor
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Railway Siding Project Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Planning a new private rail connection or need track rehabilitation for your existing siding? Talk to our railway engineers for layout feasibility, budget estimates, and execution timelines.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Indian Railways Standards Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Complete Turnkey Siding Construction</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Inquire Siding Project →
              </Link>
              <Link
                href="/sectors/mechanical"
                className="border border-white/30 hover:border-white text-white text-center px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300"
              >
                Explore Mechanical Sector
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
