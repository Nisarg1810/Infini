import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Compass, CheckCircle2, ShieldCheck, Sparkles, MapPin, Check } from "lucide-react";

export const metadata = {
  title: "Land & Rail Survey Works | DGPS Track Mapping | INFINI Infrastructure",
  description: "Precision geodetic surveying, rail track alignment mapping, laser profile measurement, and land topography for railway sidings, ports, and industrial corridors.",
};

export default function LandRailSurveyPage() {
  const applications = [
    {
      title: "Railway Track Geometry & Alignment",
      desc: "Measuring horizontal track curves, slope gradients, and track centerlines required to prepare Indian Railways engineering scale plans (ESP).",
    },
    {
      title: "Crane Runway Parallelism Checks",
      desc: "Checking the exact distance and height between two crane rails to ensure giant cranes can travel back and forth without binding or twisting.",
    },
    {
      title: "Land Topography & Contour Mapping",
      desc: "Mapping ground elevation, boundaries, and drainage paths across raw land to calculate exactly how much soil needs to be cut or filled.",
    },
    {
      title: "As-Built CAD & GIS Drawings",
      desc: "Creating final verified digital drawings of completed tracks, buildings, and underground pipelines for your engineering archives.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "GPS Control & Reference Setup",
      desc: "Our survey team establishes permanent reference marks on site using Differential GPS (DGPS) satellite receivers tied to official coordinates.",
    },
    {
      step: "02",
      title: "Total Station Data Collection",
      desc: "Using high-precision electronic Total Stations and digital laser levels, we record millions of coordinates across the ground, rail tracks, and surrounding structures.",
    },
    {
      step: "03",
      title: "CAD Processing & Certified Report",
      desc: "The raw survey data is processed into clean 2D CAD layouts, 3D elevation maps, and track alignment charts certified by our senior land surveyors.",
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
            <Compass className="w-3.5 h-3.5" />
            GEODETIC &amp; RAILWAY TRACK SURVEYING
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Land &amp; Rail <span className="text-[#00C2FF]">Survey Works</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            High-precision electronic surveying, railway track alignment mapping, crane runway calibration, and topographical land surveys for industrial projects and ports.
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
              Why Accurate Surveying is the Foundation of Any Project
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Before laying a single railway sleeper, erecting a crane runway, or pouring concrete foundations, accurate measurement of the land is essential. Even a minor height miscalculation of a few centimeters can cause rainwater to pool, building foundations to settle unevenly, or train wheels to bind against track curves.
            </p>
            <p>
              <strong>Land and Rail Surveying</strong> is the engineering science of measuring ground contours, distances, and track alignments with millimeter precision. Modern electronic instruments like Total Stations and satellite DGPS record the exact shape of the terrain so engineers can design and build with total confidence.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> maintains in-house survey teams equipped with advanced digital survey instruments. We mobilize quickly to project sites across India to map raw land, audit existing railway tracks, check crane rail parallelism, and provide clean CAD drawings ready for construction.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHAT WE SURVEY ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Services</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Our Survey Solutions
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide comprehensive surveying for transportation, ports, and industrial developments:
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
              How We Conduct Site Surveys
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From site arrival to delivery of certified CAD maps, here is our 3-step workflow:
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Accuracy Guaranteed</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Land &amp; Rail Surveying?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We combine modern electronic instruments with experienced senior surveyors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Millimeter Calibration Accuracy</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We use 1-second angular electronic Total Stations and digital levels, ensuring measurements are accurate down to the single millimeter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Fast Site Mobilization Across India</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our survey units are portable and ready for rapid deployment to remote coastal areas, factory plots, and railway sidings without long waiting times.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Accurate Earthwork Volume Calculations</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our 3D surface modeling calculates exact cutting and filling earthwork volumes, preventing billing disputes with excavation contractors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Ready-to-Use Digital CAD Drawings</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                You receive clean, geo-referenced AutoCAD drawings with layer separation, elevation contours, and cross-section profiles ready for your project consultants.
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
                Geomatic Survey Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Site or Rail Alignment Survey Quote
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Need a topographical land survey, railway siding alignment check, or crane rail calibration? Talk to our survey engineers for mobilization timelines and pricing.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> DGPS &amp; Total Station Equipment</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Certified Geomatic Surveyors</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Inquire Survey Mobilization →
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
