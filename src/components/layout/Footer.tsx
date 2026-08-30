import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-infini-navy-dark text-slate-300 border-t border-slate-700/80">
      
      {/* UPPER FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        
        {/* BRAND COLUMN WITH HORIZONTAL BIG LOGO (TEXT REMOVED) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-md inline-block">
            <img 
              src="/images/logo.jpg" 
              alt="INFINI Infrastructure & Engineering Pvt. Ltd. Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            INFINI Infrastructure & Engineering Pvt. Ltd. delivers specialized turnkey engineering solutions spanning Mechanical, Civil Construction, Marine Floating Docks, Crane Rail Systems, and Metguard Anti-Corrosion Coatings across India and international markets.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
              <span>WeWork NESCO IT Park, Building 4, 10th Floor, North Wing, Western Express Highway, Goregaon East, Mumbai 400063</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>+91 9920350663 / +91 7506696770</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>info@infini-infra.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>www.infini-infra.com</span>
            </div>
          </div>
        </div>

        {/* QUICK SECTORS LINKS */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
            Engineering Sectors
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/sectors/mechanical" className="hover:text-infini-cyan transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-infini-cyan" />
                <span>Mechanical Sector (6 Services)</span>
              </Link>
            </li>
            <li>
              <Link href="/sectors/civil" className="hover:text-infini-emerald transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-infini-emerald" />
                <span>Civil Construction (5 Services)</span>
              </Link>
            </li>
            <li>
              <Link href="/sectors/tourism" className="hover:text-infini-amber transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-infini-amber" />
                <span>Tourism & Marine Docks (2 Services)</span>
              </Link>
            </li>
            <li>
              <Link href="/sectors/mechanical/anti-corrosion-coating" className="hover:text-infini-cyan transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-infini-cyan" />
                <span>Metguard Coating Substance</span>
              </Link>
            </li>
            <li>
              <Link href="/sectors/mechanical/rdso-thermit-welding" className="hover:text-infini-cyan transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-infini-cyan" />
                <span>RDSO Thermit Welding Kits</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY & ABOUT */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
            Company
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/about/vision-mission" className="hover:text-infini-cyan transition-colors">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link href="/about/why-infini" className="hover:text-infini-cyan transition-colors">
                Why INFINI Infra
              </Link>
            </li>
            <li>
              <Link href="/about/media-news" className="hover:text-infini-cyan transition-colors">
                Media & Expansion News
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-infini-cyan transition-colors">
                Project Gallery
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-infini-cyan transition-colors">
                Careers & Opportunities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-infini-cyan transition-colors">
                Contact Headquarters
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPLIANCE & ACCREDITATIONS */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
            Standards & Certifications
          </h3>
          <div className="space-y-3 text-xs">
            <div className="glass-card-dark p-3 rounded-xl border border-infini-cyan/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-infini-cyan shrink-0" />
              <div>
                <h4 className="font-bold text-white text-[11px]">RDSO Approved Welding</h4>
                <p className="text-[10px] text-slate-400">Certified for Indian Railways track welding</p>
              </div>
            </div>

            <div className="glass-card-dark p-3 rounded-xl border border-infini-emerald/30 flex items-center gap-3">
              <Award className="w-6 h-6 text-infini-emerald shrink-0" />
              <div>
                <h4 className="font-bold text-white text-[11px]">Metguard Authorized Partner</h4>
                <p className="text-[10px] text-slate-400">MH, GA, GJ, AP & Middle East territory</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-slate-800 bg-black/40 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">INFINI Infrastructure & Engineering Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-infini-cyan font-bold">"INNOVATION MEETS INFRASTRUCTURE"</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
