import Link from "next/link";
import { Compass, Target, ShieldCheck, Sparkles, Award, ArrowRight } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            ABOUT US
          </div>
          <h1 className="section-heading text-white text-4xl sm:text-5xl">Vision &amp; Mission</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Empowering modern infrastructure through mechanical precision, marine dock engineering, and sustainable civil construction.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OUR VISION */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-[#00C2FF] hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/25 text-[#00C2FF] flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="section-heading text-2xl">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be recognized as a premier engineering and infrastructure firm across India and the Middle East, setting benchmark standards in marine dock installations, rail thermit welding, structural fabrication, and protective anti-corrosion solutions.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-emerald-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="section-heading text-2xl">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver superior engineering workmanship with zero compromise on safety, strict adherence to project timelines, and technical excellence backed by qualified engineers, expert technicians, and reliable equipment fleets.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-badge">Guided Principles</span>
          <h2 className="section-heading text-3xl mt-2">Our Core Values</h2>
          <p className="text-xs sm:text-sm text-slate-500">Principles that define our commitment to clients, safety, and workmanship.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:border-[#00C2FF]/50 transition-all duration-300">
            <div className="text-[#00C2FF] font-extrabold text-lg">01. Integrity</div>
            <h3 className="font-bold text-[#0B1B4F] text-sm sm:text-base">Transparent Partnerships</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Building long-term trust with port authorities, industrial clients, and commercial developers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-emerald-500 font-extrabold text-lg">02. Safety</div>
            <h3 className="font-bold text-[#0B1B4F] text-sm sm:text-base">Zero-Harm Environment</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Prioritizing safety protocols across breakwaters, jetties, and heavy structural installations.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:border-amber-500/50 transition-all duration-300">
            <div className="text-amber-500 font-extrabold text-lg">03. Quality</div>
            <h3 className="font-bold text-[#0B1B4F] text-sm sm:text-base">RDSO &amp; ISO Standards</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Certified alumina thermit welding, high-grade concrete works, and anti-corrosion applications.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:border-[#0B1B4F]/50 transition-all duration-300">
            <div className="text-[#0B1B4F] font-extrabold text-lg">04. Innovation</div>
            <h3 className="font-bold text-[#0B1B4F] text-sm sm:text-base">Modern Engineering</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Integrating floating dock platforms, seaplane landing structures, and smart port logistics.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B4F] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold">Explore Why Clients Choose INFINI Infra</h3>
            <p className="text-xs text-slate-300 mt-1">Learn more about our promoter expertise and engineering team background.</p>
          </div>
          <Link 
            href="/about/why-infini" 
            className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white px-6 py-3 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-2"
          >
            Why INFINI Infra <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
