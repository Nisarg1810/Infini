import Link from "next/link";
import { Newspaper, Calendar, MapPin, ArrowRight } from "lucide-react";

export default function MediaNewsPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-amber/10 border border-infini-amber/30 text-infini-amber text-xs font-semibold">
            <Newspaper className="w-3.5 h-3.5" />
            MEDIA & NEWS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Media & Corporate News</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Latest announcements, partnership expansions, and project milestones across India and Middle East.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* NEWS ITEM 1 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-infini-cyan" /> August 2026</span>
                <span className="px-2.5 py-0.5 rounded-full bg-infini-cyan/10 text-infini-cyan font-semibold text-[10px]">Partnership</span>
              </div>
              <h3 className="font-bold text-infini-navy text-base">
                Metguard Anti-Corrosion Coating Partnership in 4 States & Middle East
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                INFINI Infra expands operations as marketing & business development associates for Visioncraft Industries Metguard protective coating across Maharashtra, Goa, Gujarat, Andhra Pradesh, and Middle East region.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Link href="/sectors/mechanical#metguard" className="text-xs font-bold text-infini-navy hover:text-infini-cyan flex items-center gap-1">
                Read Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* NEWS ITEM 2 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-infini-emerald" /> July 2026</span>
                <span className="px-2.5 py-0.5 rounded-full bg-infini-emerald/10 text-infini-emerald font-semibold text-[10px]">Railways</span>
              </div>
              <h3 className="font-bold text-infini-navy text-base">
                RDSO Approved Alumina Thermit Welding Supply & Installation Launch
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploying certified alumina thermit rail welding kits for heavy industrial container terminals, port railway sidings, and major track survey projects.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Link href="/sectors/mechanical#thermit-welding" className="text-xs font-bold text-infini-navy hover:text-infini-emerald flex items-center gap-1">
                Read Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* NEWS ITEM 3 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-infini-amber" /> June 2026</span>
                <span className="px-2.5 py-0.5 rounded-full bg-infini-amber/10 text-infini-amber font-semibold text-[10px]">Marine Tourism</span>
              </div>
              <h3 className="font-bold text-infini-navy text-base">
                Floating Docks & Seaplane Platforms for Tourism Projects
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expanding turnkey coastal engineering solutions for floating docks, naval vessel docking platforms, and seaplane landing structures across coastal states.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Link href="/sectors/tourism" className="text-xs font-bold text-infini-navy hover:text-infini-amber flex items-center gap-1">
                Read Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* Press Inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 text-center space-y-3">
          <h3 className="text-lg font-bold text-infini-navy">Media & Press Inquiries</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            For press releases, media kits, or corporate partnership inquiries, reach out to our communications team.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:info@infini-infra.com" 
              className="inline-block bg-infini-navy hover:bg-infini-cyan text-white hover:text-infini-navy px-6 py-2.5 rounded-full text-xs font-bold transition-colors"
            >
              Contact Press Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
