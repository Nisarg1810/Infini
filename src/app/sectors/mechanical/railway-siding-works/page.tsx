import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function RailwaySidingWorksPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Hero Banner with Realistic Image Background */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20 overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/railway_siding.png" 
            alt="Railway Siding Construction" 
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-infini-navy-dark/95 via-infini-navy/85 to-infini-navy-dark/75"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/20 border border-infini-cyan/40 text-infini-cyan text-xs font-semibold backdrop-blur-md">
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Railway Siding Works for Container Terminals & Ports</h1>
          <p className="text-slate-200 text-sm max-w-2xl leading-relaxed">
            Turnkey railway siding construction, track linking, turnout installation, and ballast maintenance for container terminals, ICDs, ports, and steel plants.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Complete Track Linking & Siding Execution</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra executes complete private and port railway siding projects from earthworks grading and ballast spreading to sleeper laying, rail installation, turnout assembly, and final destressing.
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>In-Plant Private Railway Siding Infrastructure</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>Container Terminal & Inland Container Depot (ICD) Railway Tracks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>Port Railway Network Expansion & Siding Maintenance</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-cyan/30 shadow-2xl">
            <h3 className="text-lg font-bold text-infini-cyan">Railway Siding Inquiry</h3>
            <p className="text-xs text-slate-300">Consult with our railway engineering specialists.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-cyan text-infini-navy hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Request Consultation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
