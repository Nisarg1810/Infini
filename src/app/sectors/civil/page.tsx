import Link from "next/link";
import { HardHat, ArrowRight } from "lucide-react";

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
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-emerald/10 border border-infini-emerald/30 text-infini-emerald text-xs font-semibold">
            <HardHat className="w-3.5 h-3.5" />
            SECTORS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Civil Engineering Sector</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Jetty construction, RCC/PCC girders, breakwater concrete positioning, paver blocks, and heavy civil works.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-infini-emerald">
              <div className="w-12 h-12 rounded-2xl bg-infini-emerald text-white flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-infini-navy">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-infini-navy hover:text-infini-emerald">
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
