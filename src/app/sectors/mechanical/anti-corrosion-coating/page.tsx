import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Shield, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Globe, 
  Wrench, 
  Clock, 
  Layers, 
  Award,
  Check 
} from "lucide-react";

export const metadata = {
  title: "Metguard Anti-Corrosion Coating | Visioncraft Channel Partner | INFINI Infrastructure",
  description: "Official Channel Partners for Visioncraft Industries Metguard protective coating across Maharashtra, Gujarat, Goa, Andhra Pradesh & Middle East.",
};

export default function AntiCorrosionCoatingPage() {
  const territories = [
    { state: "Maharashtra", role: "Primary Industrial Hub & Commercial Ports" },
    { state: "Gujarat", role: "Petrochemical Corridors & Maritime Ports" },
    { state: "Goa", role: "Shipyards, Docks & Coastal Infrastructure" },
    { state: "Andhra Pradesh", role: "East Coast Ports, SEZs & Manufacturing Zones" },
    { state: "Middle East (Exports)", role: "UAE, Saudi Arabia & Oman Oil & Gas Assets" },
  ];

  const applications = [
    {
      title: "Marine Ports & Jetties",
      desc: "Protects steel piles, berthing structures, bollards, and walkways exposed to saline ocean waves and tidal splash zones.",
    },
    {
      title: "Industrial & Chemical Plants",
      desc: "Shields steel columns, roof trusses, and processing equipment against harsh chemical fumes, acid vapors, and moisture.",
    },
    {
      title: "Pipelines & Storage Tanks",
      desc: "Provides long-term external barrier protection for water, oil, and gas transmission pipes and fuel storage tanks.",
    },
    {
      title: "Railways & Crane Tracks",
      desc: "Prevents rusting and metal fatigue on outdoor crane runway beams, rail fixtures, and bridge structural components.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Surface Cleaning & Preparation",
      desc: "We start by thoroughly cleaning the metal surface. Using high-pressure washing or grit blasting (SA 2.5 standard), our team removes old rust, grease, and mill scale so the coating adheres securely to clean bare metal.",
    },
    {
      step: "02",
      title: "Precision Metguard Application",
      desc: "Our trained technicians apply the Metguard coating using industrial airless spray equipment. This creates an even, seamless barrier that seals all corners, edges, and weld joints against moisture and corrosive air.",
    },
    {
      step: "03",
      title: "Inspection & Quality Handover",
      desc: "Once the coating cures, we measure the dry film thickness (DFT) using calibrated digital gauges and inspect for complete pinhole-free coverage before issuing the official warranty certificate.",
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
            <Shield className="w-3.5 h-3.5" />
            PROTECTIVE COATINGS &bull; ASSET PROTECTION
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Metguard Anti-Corrosion <span className="text-[#00C2FF]">Coating Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Authorized channel partner and turnkey applicator for Visioncraft Industries Metguard. We supply and professionally apply long-lasting protective coatings to protect steel and concrete assets from rust and chemical damage.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (CLEAN, READABLE, PARAGRAPH-FOCUSED) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/metguard_coating.png"
            alt="Metguard Anti-Corrosion Protective Coating Application on Heavy Marine Steel"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Visioncraft Strategic Partnership
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Industrial Anti-Corrosive Barrier Coating Application
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Turnkey supply and on-site application for heavy marine steel structures, port cranes, storage tanks, and industrial pipelines.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT IS METGUARD & WHAT WE DO ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview &amp; Partnership</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What is Metguard and How Does It Protect Your Assets?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Corrosion is one of the biggest challenges for outdoor structures, especially in coastal regions and industrial areas. Salt-laden ocean air, high humidity, rainfall, and factory fumes rapidly attack steel, causing rust, metal weakening, and expensive repairs.
            </p>
            <p>
              <strong>Metguard</strong> is a high-performance chemical coating engineered by Visioncraft Industries to stop rust before it starts. When applied to metal, it forms a tough, non-porous protective barrier that completely blocks air, moisture, and chemicals from touching the surface underneath.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> is the official authorized channel partner and turnkey applicator for Metguard. We don&apos;t just supply the material — our certified crews visit your project site, properly prepare the metal surface, spray-apply the coating with industrial equipment, and test the finished layer to make sure it delivers maximum protection.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE IS IT USED? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Common Applications</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where is Metguard Coating Used?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Metguard is trusted across heavy industries where equipment is exposed to outdoor weather or chemical environments:
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Workflow</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              How We Apply Metguard on Your Site
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A protective coating only works as well as its surface preparation. Here is how our team delivers lasting quality from start to finish:
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

        {/* ─── SECTION 4: KEY ADVANTAGES (SIMPLE PARAGRAPH-FRIENDLY POINTS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Key Advantages</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Clients Choose Metguard Coating
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Compared to conventional paints that peel off after a few monsoons, Metguard provides industrial-grade protection:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Tested for 3,000+ Hours Against Salt Spray</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Metguard has been rigorously tested in accelerated salt spray chambers. It withstands over 3,000 hours of continuous salty mist without showing any signs of blistering, peeling, or rust creeping underneath.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Superb Adhesion That Never Flakes</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                The chemical formula chemically bonds with the steel surface. Even when exposed to strong winds, thermal expansion, or vibration from heavy machinery, the coating stays firmly attached.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Resistant to Sun, Heat &amp; Weather</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Harsh tropical sunlight often causes traditional paints to chalk and turn brittle. Metguard is UV-stable and maintains its flexibility across extreme temperatures from -20°C up to +150°C.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Cost Savings on Future Maintenance</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                By investing in a high-grade protective coat today, asset owners avoid repeating expensive sandblasting and repainting every 1 to 2 years, saving significant operational and shutdown costs.
              </p>
            </div>
          </div>
        </div>

        {/* ─── SECTION 5: REGIONAL TERRITORIES ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Service Coverage</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where We Supply &amp; Apply Metguard
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              INFINI Infrastructure holds exclusive marketing and application rights across major coastal and industrial states in India, as well as export capabilities for Middle East projects:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {territories.map((t) => (
              <div key={t.state} className="bg-white p-6 rounded-2xl border-l-4 border-l-[#00C2FF] border border-slate-200/80 space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-[#0B1B4F] font-bold text-base sm:text-lg">
                  <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0" />
                  {t.state}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. BOTTOM GET ESTIMATE & INQUIRY BANNER ─── */}
        <section className="glass-card-dark p-8 sm:p-12 rounded-3xl text-white border border-[#00C2FF]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Authorized Channel Partner
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Metguard Supply &amp; Application Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Need rust protection for an upcoming project? Connect with our coating engineers to get material specifications, lab test reports, or an on-site inspection and quote.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Proven 3,000+ Hr Salt Spray Resistance</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Turnkey Supply &amp; Application Crews</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Coating Estimate →
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
