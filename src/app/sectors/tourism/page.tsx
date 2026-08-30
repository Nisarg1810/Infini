import Link from "next/link";
import { Ship, Anchor, ArrowRight } from "lucide-react";

export default function TourismSectorPage() {
  const services = [
    {
      id: "floating-docks",
      title: "Floating Docks - Platforms - Jetties",
      description: "Modular floating dock systems, platforms, and floating jetties for coastal tourism projects, commercial ports, shipyards, and naval vessel docking."
    },
    {
      id: "seaplane",
      title: "Seaplane Landing Platforms",
      description: "Engineered waterfront floating platforms and access structures for island tourism, coastal aviation, and seaplane boarding terminals."
    },
    {
      id: "marine-hiring",
      title: "Marine Equipment Leasing & Hiring Services",
      description: "Leasing services for marine equipment including barges, dredgers, life-rafts, marine navigation beacons, and personal passenger boats / yachts."
    }
  ];

  return (
    <div className="py-12 space-y-16">
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-amber/10 border border-infini-amber/30 text-infini-amber text-xs font-semibold">
            <Ship className="w-3.5 h-3.5" />
            SECTORS
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Tourism & Waterfront Sector</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Floating docks, seaplane landing platforms, naval vessel docking, and marine equipment hiring services.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-infini-amber flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-infini-amber text-white flex items-center justify-center">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-infini-navy">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-infini-navy hover:text-infini-amber">
                  Inquire for Requirements <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
