import type { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, Users, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose INFINI Infra",
  description:
    "Learn why leading ports, shipyards, and railway authorities choose INFINI Infrastructure & Engineering — qualified technical workforce, RDSO-approved welding, zero-harm safety culture, and 100% on-time project delivery.",
  openGraph: {
    title: "Why Choose INFINI Infrastructure & Engineering | Port & Rail Contractor",
    description:
      "Experienced promoters, certified engineering teams, strict safety standards, and strategic partnerships make INFINI the preferred turnkey contractor across India & Middle East.",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "Why Choose INFINI Infrastructure" }],
  },
};

export default function WhyInfiniPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            WHY INFINI INFRA
          </div>
          <h1 className="section-heading text-white text-4xl sm:text-5xl">Why Choose INFINI Infra</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Backed by experienced promoters, qualified engineering leadership, and a steadfast commitment to quality workmanship &amp; timely execution.
          </p>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Leadership & Expertise Statement */}
        <div className="glass-card-dark text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="section-heading text-white text-2xl font-bold">Promoter Leadership &amp; Technical Strength</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our chief promoter possesses dependable expertise across mechanical &amp; civil construction, with extensive industry exposure. INFINI INFRASTRUCTURE &amp; ENGINEERING PVT. LTD. is backed by a professional and qualified team comprising experienced engineers, technical experts, and skilled manpower capable of solving the unique challenges of port, railway, and civil infrastructure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00C2FF] shrink-0" />
              <span className="text-xs text-slate-200">Experienced Engineers &amp; Technicians</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-200">Strict Safety Standards Adherence</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-200">On-Time Project Execution</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/15 flex items-center justify-center text-[#0B1B4F] shadow-sm group-hover:bg-[#0B1B4F] group-hover:text-[#00C2FF] group-hover:border-[#0B1B4F] transition-all duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0B1B4F]">Qualified Technical Workforce</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with certified rail welding crews, marine structural engineers, land survey experts, and civil construction teams ready for rapid deployment across India and the Middle East.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0B1B4F]">Uncompromising Safety &amp; Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict compliance with port safety norms, RDSO welding standards, breakwater concrete block positioning criteria, and ISO environmental standards.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-amber-500 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0B1B4F]">Timely Completion Assurance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Efficient project management workflows ensuring on-time delivery for public sector dockyard projects, container terminals, and commercial developments.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/25 flex items-center justify-center text-[#00C2FF] shadow-sm group-hover:bg-[#00C2FF] group-hover:text-[#0B1B4F] group-hover:border-[#00C2FF] transition-all duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0B1B4F]">Strategic Partner Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official marketing &amp; business development associates for Visioncraft Industries Metguard protective coatings across 4 major Indian states and Middle East territories.
            </p>
          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B4F] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold">Interested in Joining Our Engineering Team?</h3>
            <p className="text-xs text-slate-300 mt-1">We are actively seeking talented engineers, technical experts, and skilled professionals.</p>
          </div>
          <Link 
            href="/career" 
            className="bg-[#00C2FF] text-[#0B1B4F] hover:bg-white px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shrink-0 flex items-center gap-2"
          >
            Join Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
