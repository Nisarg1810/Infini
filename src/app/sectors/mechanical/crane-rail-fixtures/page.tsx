import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ShieldCheck, Sparkles, Anchor, Compass } from "lucide-react";

export const metadata = {
  title: "Crane Rail Fixtures – Supply & Installation | INFINI Infrastructure",
  description: "Turnkey supply, laser alignment, fixing, and installation works for heavy crane rails across Ports, Shipyards, Container Terminals, Steel & Cement Plants.",
};

export default function CraneRailFixturesPage() {
  const applications = [
    {
      title: "Ports & Container Terminals",
      desc: "Heavy runway tracks for giant quay cranes (Ship-to-Shore) and container yard cranes (RTG / RMG) carrying heavy shipping containers day and night.",
    },
    {
      title: "Steel Plants & Heavy Mills",
      desc: "Overhead crane rails running across melting shops, rolling mills, and casting bays handling molten metal ladles and heavy steel coils.",
    },
    {
      title: "Shipyards & Dry Docks",
      desc: "High-capacity gantry crane tracks and slipway rails built to support massive shipbuilding sections and repair operations.",
    },
    {
      title: "Warehouses & Manufacturing Bays",
      desc: "Standard overhead travelling crane (EOT) tracks installed on concrete columns or steel building structures for smooth factory handling.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Laser Track Survey & Leveling",
      desc: "Our engineering survey team uses precision laser instruments to check the exact straightness, span width, and elevation across the entire runway beam.",
    },
    {
      step: "02",
      title: "Fixing Clips, Pads & Soleplates",
      desc: "We place durable grooved rubber pads under the rails to absorb vibration and install heavy adjustable clips that firmly clamp the rail without restricting expansion.",
    },
    {
      step: "03",
      title: "Welding, Grouting & Load Testing",
      desc: "Rail joints are welded into smooth continuous track lines. High-strength non-shrink epoxy grout is poured underneath, followed by full test runs with the client's cranes.",
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
            MECHANICAL SECTOR &bull; CRANE RUNWAYS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Crane Rail Systems – <span className="text-[#00C2FF]">Supply &amp; Installation</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
            Turnkey supply, high-precision laser alignment, fixing clips, rubber pads, and installation of heavy crane tracks for seaports, container terminals, steel plants, and industrial factories.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT (FULL-WIDTH CLEAN LAYOUT) ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Showcase Image */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
          <Image 
            src="/images/crane_rail.png"
            alt="Heavy Crane Rail System and Port Quay Fixtures Installation"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#00C2FF] text-[#0B1B4F] px-3 py-1 rounded-full inline-block">
              Heavy Port &amp; Factory Engineering
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              Quay Crane &amp; Overhead Gantry Rail Alignment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Precision leveling, adjustable clips, continuous rubber pads, and welded smooth joints to handle heavy crane wheel loads.
            </p>
          </div>
        </div>

        {/* ─── SECTION 1: WHAT WE DO (SIMPLE PARAGRAPHS) ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              What Are Crane Rails and Why is Precision So Important?
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Heavy industrial cranes — such as port container cranes and factory overhead cranes — move immense loads weighing anywhere from 10 tonnes to over 100 tonnes. These cranes travel along specialized heavy steel rails mounted on concrete beams or steel structures.
            </p>
            <p>
              If a crane rail track is slightly crooked, uneven, or loose, the consequences are immediate: crane wheels squeak and wear out rapidly, motors draw excessive power, and dangerous vibrations can damage the building foundations. In severe cases, wheels can bind or jump off the track completely.
            </p>
            <p>
              <strong>INFINI Infrastructure</strong> provides complete end-to-end crane rail engineering. We supply the rails, specialized adjustable clips, vulcanized rubber pads, and high-strength anchor bolts. Our experienced installation team aligns the tracks using laser instruments so your cranes run smooth, quiet, and reliably for years to come.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: WHERE ARE OUR CRANE RAILS INSTALLED? ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Industries Served</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Where Are Crane Rails Installed?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We engineer and install crane rail systems across four primary sectors:
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
              How We Install &amp; Align Crane Rails
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From site survey to final commissioning, here is our simple 3-step installation workflow:
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Key Advantages</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F]">
              Why Work With INFINI for Crane Rails?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We take the headache out of track installation by delivering a complete, proven package:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Laser-Straight Alignment Guarantee</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                Our tracks are calibrated to strict tolerances (within ±1 mm vertical and ±2 mm horizontal), ensuring your cranes glide effortlessly without side-to-side jerking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Heavy Vibration Dampening</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                By placing reinforced elastic rubber pads underneath the rails, we cushion shock loads, lower plant noise levels, and prevent cracks in concrete supporting corbels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Gapless Welded Joints</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                We weld rail ends into continuous lines using thermit welding. This eliminates joint gaps where crane wheels bump and crack, significantly extending crane wheel lifespan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg text-[#0B1B4F]">Single-Source Turnkey Contractor</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                You don&apos;t have to hire separate vendors for rails, pads, bolts, and grouting. We supply all components, execute the installation, and hand over a ready-to-run track.
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
                Turnkey Engineering Team
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Crane Rail Track Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Planning a new crane runway or need to realign and repair existing tracks? Talk to our crane rail specialists for an on-site inspection, budget estimate, and technical schedule.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Precision Laser Alignment</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Full Supply, Fixing &amp; Grouting</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white hover:text-[#0B1B4F] text-center px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl"
              >
                Get Crane Rail Estimate →
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
