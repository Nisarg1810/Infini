import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Engineering Sector",
  description:
    "INFINI Infrastructure's Civil Engineering division delivers jetty construction & repairs, mass concrete works, breakwater positioning, RCC & PCC girders, paver block installation, and drainage infrastructure across Indian ports.",
  openGraph: {
    title: "Civil Engineering Sector | INFINI Infrastructure & Engineering",
    description:
      "Specialist civil contractor for port jetty works, RCC girders, breakwater concrete positioning, and heavy civil infrastructure at Indian ports and shipyards.",
    images: [{ url: "/images/civil_bridge.png", width: 1200, height: 630, alt: "INFINI Civil Engineering Sector" }],
  },
};

export default function CivilSectorPage() {
  const services = [
    {
      id: "jetty-works",
      title: "Jetty Construction & Repairs",
      description: "Civil construction including supply & installation works for jetty fixtures such as buffer stops, bollards, cleats, fenders, handrails, ladders, mast & deck light assemblies."
    },
    {
      id: "paver-block",
      title: "Paver Block Installation",
      description: "Heavy-duty industrial and port paver block installation for container yards, docks, and commercial roadways."
    },
    {
      id: "drainage",
      title: "Drainage Works",
      description: "Civil drainage infrastructure development, stormwater channels, and industrial wastewater drainage systems."
    },
    {
      id: "mass-concrete",
      title: "Mass Concrete Works & Breakwaters",
      description: "Mass concrete foundations and re-positioning & installation of concrete blocks for breakwater structures."
    },
    {
      id: "girders",
      title: "RCC & PCC Girders Work",
      description: "Reinforced cement concrete (RCC) and plain cement concrete (PCC) girder manufacturing, placement, and structural engineering."
    }
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <HardHat className="w-3.5 h-3.5" />
            CIVIL SECTOR
          </div>
          <h1 className="section-heading text-white text-4xl sm:text-5xl">Civil Engineering Sector</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Jetty construction, RCC/PCC girders, breakwater concrete positioning, paver blocks, and heavy civil works.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card-interactive p-8 rounded-3xl space-y-4 border-l-4 border-l-emerald-500 group hover:border-emerald-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B4F] group-hover:text-emerald-600 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B4F] hover:text-emerald-600 transition-colors">
                  Inquire for {item.title.split("&")[0]} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
