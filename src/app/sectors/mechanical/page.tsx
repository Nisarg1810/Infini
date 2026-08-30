import Link from "next/link";
import { Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export default function MechanicalSectorPage() {
  const services = [
    {
      id: "crane-rail",
      title: "Crane Rail Fixtures – Supply & Install",
      description: "Precision crane rail design, supply, alignment, and installation works for Ports, Shipyards, Container Terminals, Steel & Cement Plants."
    },
    {
      id: "metguard",
      title: "Anti Corrosion Coating Substance (Metguard)",
      description: "Official channel partner for Visioncraft Industries Metguard protective coating substance (Supply & Application) across Maharashtra, Goa, Gujarat, Andhra Pradesh & Middle East."
    },
    {
      id: "fabrication",
      title: "Steel & Aluminium Fabrication",
      description: "All types of heavy industrial steel and aluminium structural fabrication, including reefer platforms and specialized marine structures."
    },
    {
      id: "survey",
      title: "Land & Rail Survey Works",
      description: "Topographical surveying, rail alignment, land mapping, and precision geodetic measurement services."
    },
    {
      id: "thermit-welding",
      title: "RDSO Approved Alumina Thermit Welding Kits",
      description: "Supply and installation of RDSO approved alumina thermit welding kits for all types of rail track welding works."
    },
    {
      id: "railway-siding",
      title: "Railway Siding Works",
      description: "Turnkey railway siding construction and track maintenance for container terminals, ports, and industrial logistics parks."
    }
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/10 border border-infini-cyan/30 text-infini-cyan text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            SECTORS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Mechanical Engineering Sector</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Crane rail installations, RDSO thermit welding, Metguard protective coatings, and heavy structural fabrication.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-infini-cyan">
              <div className="w-12 h-12 rounded-2xl bg-infini-navy text-white flex items-center justify-center">
                <Wrench className="w-6 h-6 text-infini-cyan" />
              </div>
              <h3 className="text-xl font-bold text-infini-navy">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-infini-navy hover:text-infini-cyan">
                  Inquire for {item.title.split("–")[0]} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
