import Link from "next/link";
import { Award, ShieldCheck, Users, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhyInfiniPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-emerald/10 border border-infini-emerald/30 text-infini-emerald text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            WHY INFINI INFRA
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Why Choose INFINI Infra</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Backed by experienced promoters, qualified engineering leadership, and a steadfast commitment to quality workmanship & timely execution.
          </p>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Leadership & Expertise Statement */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-infini-cyan/20">
          <h2 className="text-2xl font-bold text-infini-cyan">Promoter Leadership & Technical Strength</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our chief promoter possesses dependable expertise across mechanical & civil construction, with extensive industry exposure. INFINI INFRASTRUCTURE & ENGINEERING PVT. LTD. is backed by a professional and qualified team comprising experienced engineers, technical experts, and skilled manpower capable of solving the unique challenges of port, railway, and civil infrastructure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-infini-cyan shrink-0" />
              <span className="text-xs text-slate-200">Experienced Engineers & Technicians</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-infini-emerald shrink-0" />
              <span className="text-xs text-slate-200">Strict Safety Standards Adherence</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-infini-amber shrink-0" />
              <span className="text-xs text-slate-200">On-Time Project Execution</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-infini-navy text-white flex items-center justify-center">
              <Users className="w-6 h-6 text-infini-cyan" />
            </div>
            <h3 className="text-lg font-extrabold text-infini-navy">Qualified Technical Workforce</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with certified rail welding crews, marine structural engineers, land survey experts, and civil construction teams ready for rapid deployment across India and the Middle East.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-infini-emerald text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-infini-navy">Uncompromising Safety & Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict compliance with port safety norms, RDSO welding standards, breakwater concrete block positioning criteria, and ISO environmental standards.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-infini-amber text-white flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-infini-navy">Timely Completion Assurance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Efficient project management workflows ensuring on-time delivery for public sector dockyard projects, container terminals, and commercial developments.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-infini-cyan text-infini-navy flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-infini-navy">Strategic Partner Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official marketing & business development associates for Visioncraft Industries Metguard protective coatings across 4 major Indian states and Middle East territories.
            </p>
          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-infini-navy text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Interested in Joining Our Engineering Team?</h3>
            <p className="text-xs text-slate-300 mt-1">We are actively seeking talented engineers, technical experts, and skilled professionals.</p>
          </div>
          <Link 
            href="/career" 
            className="bg-infini-cyan hover:bg-white text-infini-navy px-6 py-3 rounded-full text-xs font-bold transition-colors shrink-0 flex items-center gap-2"
          >
            Join Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
