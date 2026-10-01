import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Award, CheckCircle2, ShieldCheck, Sparkles, Flame, Check } from "lucide-react";

export const metadata = {
  title: "RDSO Approved Alumina Thermit Welding | INFINI Infrastructure",
  description: "Supply and execution of RDSO-approved alumina thermit rail welding kits for heavy haul rail tracks, crane rails, and industrial siding networks across India.",
};

export default function RDSOThermitWeldingPage() {
  const applications = [
    {
      title: "Private Railway Sidings",
      desc: "Creating seamless continuous tracks for cement plants, steel mills, thermal power plants, and chemical manufacturing hubs connecting to the Indian Railways mainline.",
    },
    {
      title: "Seaports & Container Terminals",
      desc: "Welding heavy freight railway lines and port rail sidings to ensure heavy container trains can move without track damage or derailment risks.",
    },
    {
      title: "Heavy Crane Runway Tracks",
      desc: "Joining crane rail sections on port quays and factory bays so crane wheels roll smoothly without bumping over mechanical joint gaps.",
    },
    {
      title: "Industrial Merry-Go-Round (MGR) Tracks",
      desc: "High-frequency coal and mineral transport loops in power plants and mines where joints must withstand constant heavy axle loads 24/7.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Rail Alignment & Mould Setup",
      desc: "The rail ends are cleaned, cut square, and leveled. A precise 25mm welding gap is set, and heat-resistant prefabricated sand moulds are clamped tightly around the joint.",
    },
    {
      step: "02",
      title: "Pre-Heating & Thermit Pour",
      desc: "The rail ends are preheated to approximately 1000°C. The thermit portion is placed in a crucible and ignited. In seconds, an exothermic reaction creates liquid steel at 2,400°C that flows into the mould, fusing the two rails into one solid piece.",
    },
    {
      step: "03",
      title: "Trimming, Grinding & Ultrasonic Testing",
      desc: "While the steel is still hot, excess metal is sheared with a motorized hydraulic trimmer. Once cooled, the top and sides are ground with precision straightedges, followed by digital ultrasonic (USFD) testing to verify 100% flaw-free fusion.",
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
            <Award className="w-3.5 h-3.5" />
            RAILWAY &amp; TRACK MECHANICAL ENGINEERING
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            RDSO Approved <span className="text-[#00C2FF]">Alumina Thermit Welding</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Certified in-track alumina thermit welding for railway tracks, private sidings, and heavy crane rails. We supply RDSO-certified welding kits and deploy trained welding gangs across India.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/thermit_welding.png"
            alt="RDSO Alumina Thermit Rail Track Welding Execution"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              RDSO Certified Process
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              In-Track Rail Welding of 52kg / 60kg Rail Sections
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              High-purity molten steel reaction at 2,400°C permanently joins rail ends into a seamless track, eliminating noisy fishplate joints.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT IS THERMIT WELDING (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What is Alumina Thermit Welding and Why is It Better?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              In traditional rail tracks, rails are connected together with metal fishplates and bolts. Every time a loaded train rolls over these bolted joints, the wheels hammer against the gap. Over time, this constant hammering loosens the bolts, cracks the rail ends, depresses the track bed, and damages train wheel bearings.
            </p>
            <p>
              <strong>Alumina Thermit Welding</strong> permanently solves this problem right on the track. A special mixture of aluminium powder and iron oxide is placed in a crucible above the joint. When ignited, an intense reaction generates liquid steel at over <strong>2,400°C</strong>. This liquid steel pours directly between the two rail ends, fusing them together into one continuous, solid line of steel.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides complete turnkey thermit welding services strictly compliant with Indian Railways RDSO specifications. We supply the certified welding portions, moulds, and equipment, and deploy certified welding gangs to complete smooth, reliable in-track joints.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE IS IT USED? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Applications</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where is Thermit Welding Used?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our welding crews support major rail infrastructure across private and government projects:
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">The Method</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Step-by-Step Thermit Welding Process
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Here is how our certified technicians execute each weld safely and accurately:
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

        {/* ─── SECTION 4: KEY BENEFITS (SIMPLE & CLEAR) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Quality Assurance</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Choose INFINI for Rail Welding?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We ensure every single weld meets strict safety and durability benchmarks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">RDSO Certified Master Welders</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                All welding work is carried out by welders holding valid competency certificates issued by Indian Railways RDSO, guaranteeing proper technique and safety on live and private tracks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">100% Ultrasonic Testing (USFD)</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We test every finished weld with digital ultrasonic flaw detectors. This verifies the interior metal is completely solid, with zero hidden cracks or air bubbles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Ultra-Smooth Surface Grinding</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Using motorized profile grinders and 1-meter straightedges, we finish the rail top to within ±0.2 mm. Trains roll across the joint smoothly without any bumps or noise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Full Supply of Welding Kits</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We provide the complete package: certified thermit portions (52kg, 60kg, and crane rails), prefabricated moulds, single-use crucibles, igniters, and preheating torches.
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
                RDSO Certified Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Thermit Welding Quote
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Need to weld a railway siding, crane track, or industrial rail loop? Connect with our railway engineers for welding kit supply or on-site welding gang deployment.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> RDSO Approved Process</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> 100% USFD Testing Included</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Welding Estimate →
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
