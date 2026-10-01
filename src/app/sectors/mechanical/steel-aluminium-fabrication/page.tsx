import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ShieldCheck, Sparkles, Box, Check } from "lucide-react";

export const metadata = {
  title: "Steel & Aluminium Fabrication Works | INFINI Infrastructure",
  description: "Custom heavy structural steel and aluminium fabrication, reefer container platforms, marine gangways, equipment skids, and industrial gantries.",
};

export default function SteelAluminiumFabricationPage() {
  const applications = [
    {
      title: "Reefer Container Access Platforms",
      desc: "Multi-tier structural steel walkways, stair towers, and safety railings built for container ports to inspect and power refrigerated shipping containers safely at height.",
    },
    {
      title: "Equipment Mounting Skids & Gantries",
      desc: "Heavy steel frames and skid bases built to support heavy generators, pumps, compressors, and electrical transformers without structural bending.",
    },
    {
      title: "Marine Aluminium Gangways & Ramps",
      desc: "High-strength, lightweight marine aluminium gangways that connect port piers to floating docks and boats, remaining 100% rust-free in salt water.",
    },
    {
      title: "Industrial Walkways & Canopies",
      desc: "Custom factory roof canopies, mezzanine platforms, safety ladders with fall-protection cages, and non-slip checkered steel stairways.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "3D Detailing & Steel Cutting",
      desc: "We review your structural drawings, generate 3D fabrication models, and cut steel beams, channels, and plates to exact millimeter tolerances using CNC machines.",
    },
    {
      step: "02",
      title: "Certified Welding & Protective Coating",
      desc: "Certified welders assemble the steel members using MIG, TIG, or arc welding. The structure is grit-blasted and coated with hot-dip galvanizing or heavy-duty anti-corrosion paint.",
    },
    {
      step: "03",
      title: "Workshop Trial Fit & On-Site Erection",
      desc: "Before sending parts to your site, we pre-assemble sections in our workshop to verify every bolt hole lines up perfectly. Our installation team then mobilizes cranes to erect the structure on your site.",
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
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL &amp; STRUCTURAL ENGINEERING
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Steel &amp; Aluminium <span className="text-[#00C2FF]">Fabrication Works</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Custom heavy structural steel and marine aluminium fabrication: reefer container access platforms, equipment skids, overhead gantries, and industrial access walkways.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* ─── SECTION 1: WHAT WE DO (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Custom Metal Fabrication Built to Last
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              In busy ports, factories, and commercial infrastructure, standard off-the-shelf metal structures rarely fit the exact dimensions needed. Heavy equipment bases, elevated container walkways, and port gangways must be custom engineered to fit the site precisely and carry heavy loads safely.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides end-to-end custom fabrication in structural carbon steel and marine-grade aluminium. Whether you need a 3-tier access platform to inspect refrigerated containers at a container terminal, or heavy equipment skids for heavy machinery, our team manages the entire process from 3D drawings to on-site crane assembly.
            </p>
            <p>
              Every structure we build is protected against weather and rust with hot-dip galvanizing or high-performance industrial coatings. Before anything leaves our fabrication facility, we test-fit the parts to ensure zero delays when assembling on your site.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHAT WE FABRICATE ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Products</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What We Fabricate &amp; Erect
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We engineer custom metal structures for ports, manufacturing facilities, and coastal sites:
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
              How We Execute Fabrication Projects
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From engineering drawings to crane installation, here is our 3-step workflow:
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
              Why Choose INFINI for Fabrication?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on safety, accurate fit, and long-term durability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Trial Pre-Assembly in Workshop</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We test-fit modular frames, stairs, and handrails in our shop prior to dispatch. When sections reach your site, every bolt aligns perfectly without on-site cutting or re-drilling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Certified Industrial Welders</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our welding team is certified to AWS D1.1 structural welding standards. We conduct ultrasonic and dye penetrant testing on critical load-bearing joints to ensure zero defects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Marine-Grade Aluminium Specialists</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                For coastal ports, marinas, and boats, we fabricate gangways using high-tensile 6061-T6 and 6082-T6 marine aluminium that never rusts and weighs half as much as steel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Heavy-Duty Surface Protection</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All steel components undergo grit blasting followed by hot-dip galvanizing or high-build epoxy marine coatings to prevent rust in tough outdoor environments.
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
                Turnkey Engineering Consultation
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Custom Fabrication Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Have a design drawing or project requirement? Send your structural steel or aluminium specifications to our engineers for an itemized quotation and delivery schedule.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> AWS D1.1 Certified Welding</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Workshop Pre-Assembly Guarantee</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Fabrication Estimate →
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
