import Link from "next/link";
import { Compass, Target, ShieldCheck, Sparkles, Award, ArrowRight } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/10 border border-infini-cyan/30 text-infini-cyan text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            ABOUT US
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Vision & Mission</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Empowering modern infrastructure through mechanical precision, marine dock engineering, and sustainable civil construction.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OUR VISION */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-infini-cyan">
            <div className="w-12 h-12 rounded-2xl bg-infini-cyan/10 text-infini-cyan flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-infini-navy">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be recognized as a premier engineering and infrastructure firm across India and the Middle East, setting benchmark standards in marine dock installations, rail thermit welding, structural fabrication, and protective anti-corrosion solutions.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-infini-emerald">
            <div className="w-12 h-12 rounded-2xl bg-infini-emerald/10 text-infini-emerald flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-infini-navy">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver superior engineering workmanship with zero compromise on safety, strict adherence to project timelines, and technical excellence backed by qualified engineers, expert technicians, and reliable equipment fleets.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-infini-navy">Our Core Values</h2>
          <p className="text-xs text-slate-500">Guided by principles that define our commitment to clients and safety.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="text-infini-cyan font-extrabold text-lg">01. Integrity</div>
            <h3 className="font-bold text-infini-navy text-sm">Transparent Partnerships</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Building long-term trust with port authorities, industrial clients, and commercial developers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="text-infini-emerald font-extrabold text-lg">02. Safety</div>
            <h3 className="font-bold text-infini-navy text-sm">Zero-Harm Environment</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Prioritizing safety protocols across breakwaters, jetties, and heavy structural installations.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="text-infini-amber font-extrabold text-lg">03. Quality</div>
            <h3 className="font-bold text-infini-navy text-sm">RDSO & ISO Standards</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Certified alumina thermit welding, high-grade concrete works, and anti-corrosion applications.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="text-infini-navy font-extrabold text-lg">04. Innovation</div>
            <h3 className="font-bold text-infini-navy text-sm">Modern Engineering</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Integrating floating dock platforms, seaplane landing structures, and smart port logistics.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-infini-navy">Explore Why Clients Choose INFINI Infra</h3>
            <p className="text-xs text-slate-500 mt-1">Learn more about our promoter expertise and engineering team background.</p>
          </div>
          <Link 
            href="/about/why-infini" 
            className="bg-infini-navy hover:bg-infini-navy-light text-white px-6 py-3 rounded-full text-xs font-bold transition-colors shrink-0 flex items-center gap-2"
          >
            Why INFINI Infra <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
