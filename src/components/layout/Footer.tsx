import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  Award,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071236] text-slate-300 border-t border-slate-800">

      {/* UPPER FOOTER GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* BRAND COLUMN WITH LOGO & CONTACT DETAILS */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white px-3.5 sm:px-4 py-2 rounded-xl border border-white/20 shadow-md inline-block max-w-full">
              <img
                src="/images/logo.jpg"
                alt="INFINI Infrastructure & Engineering Pvt. Ltd. Logo"
                className="h-12 sm:h-16 w-auto max-w-[220px] sm:max-w-[280px] object-contain"
              />
            </div>

            <p className="text-xs text-slate-300/90 leading-relaxed">
              Turnkey engineering contractor specializing in Mechanical, Civil Construction, Marine Floating Docks, Crane Rail Systems, and Metguard Protective Coatings.
            </p>

            <div className="space-y-2.5 text-xs pt-1 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span className="leading-tight">WeWork NESCO IT Park, Building 4, 10th Floor, North Wing, Western Express Highway, Goregaon East, Mumbai 400063</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>+91 9920350663 / +91 7506696770</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>info@infini-infra.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>www.infini-infra.com</span>
              </div>
            </div>
          </div>

          {/* QUICK SECTORS LINKS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2.5">
              Core Sectors
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Mechanical Sector", href: "/sectors/mechanical" },
                { label: "Crane Rail Fixtures", href: "/sectors/mechanical/crane-rail-fixtures" },
                { label: "Anti Corrosion Coating", href: "/sectors/mechanical/anti-corrosion-coating" },
                { label: "Thermit Rail Welding", href: "/sectors/mechanical/rdso-thermit-welding" },
                { label: "Civil Construction", href: "/sectors/civil" },
                { label: "Floating Docks & Jetties", href: "/sectors/tourism/floating-docks-jetties" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#00C2FF] transition-colors flex items-center gap-1.5 py-0.5">
                    <ChevronRight className="w-3 h-3 text-[#00C2FF] shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY & ABOUT */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2.5">
              Company
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Vision & Mission", href: "/about/vision-mission" },
                { label: "Why INFINI Infra", href: "/about/why-infini" },
                { label: "Media & News", href: "/about/media-news" },
                { label: "Project Gallery", href: "/gallery" },
                { label: "Careers", href: "/career" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#00C2FF] transition-colors block py-0.5">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPLIANCE & ACCREDITATIONS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2.5">
              Certifications
            </h3>
            <div className="space-y-3">
              <div className="bg-[#0B1B4F]/80 p-3.5 rounded-xl border border-[#00C2FF]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00C2FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">RDSO Approved Welding</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Approved Alumina Thermit Rail Welding Contractor</p>
                </div>
              </div>

              <div className="bg-[#0B1B4F]/80 p-3.5 rounded-xl border border-emerald-500/30 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">Metguard Channel Partner</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Official Partner for MH, GJ, GA, AP & Middle East</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-slate-800/80 bg-[#040B22] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">INFINI Infrastructure &amp; Engineering Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00C2FF] font-semibold text-[11px] tracking-wider uppercase">Innovation Meets Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
