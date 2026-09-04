import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  BadgeCheck,
} from "lucide-react";

// ── News Items ──────────────────────────────────────────────────────
const newsItems = [
  {
    date: "August 2026",
    tag: "Partnership",
    tagColor: "bg-[#00C2FF]/10 text-[#00C2FF]",
    borderColor: "border-l-[#00C2FF]",
    iconColor: "text-[#00C2FF]",
    title: "Metguard Anti-Corrosion Coating Partnership Expanded to 4 States & Middle East",
    body: "INFINI Infra has been appointed as the official marketing & business development associate for Visioncraft Industries Metguard protective coating substance across Maharashtra, Goa, Gujarat, Andhra Pradesh, and the Middle East region. This expansion significantly enhances INFINI's portfolio in the industrial protective coating segment.",
    href: "/sectors/mechanical/anti-corrosion-coating",
  },
  {
    date: "July 2026",
    tag: "Railways",
    tagColor: "bg-emerald-500/10 text-emerald-600",
    borderColor: "border-l-emerald-500",
    iconColor: "text-emerald-500",
    title: "RDSO Approved Alumina Thermit Welding — Active Project Deployments",
    body: "INFINI Infrastructure is actively deploying RDSO-certified alumina thermit rail welding kits and crews across industrial container terminals, port railway sidings, and survey projects. All works are carried out by RDSO-approved technicians with full compliance to Indian Railways standards.",
    href: "/sectors/mechanical/rdso-thermit-welding",
  },
  {
    date: "June 2026",
    tag: "Marine Tourism",
    tagColor: "bg-amber-500/10 text-amber-600",
    borderColor: "border-l-amber-500",
    iconColor: "text-amber-500",
    title: "Floating Docks & Seaplane Platforms — Coastal Tourism Project Wins",
    body: "INFINI Infra has secured multiple contracts for modular floating pontoon jetty installation, seaplane landing platform construction, and floating berth development for coastal tourism projects across India. Our HDPE and aluminium floating dock systems deliver fast deployment with high tidal adaptability.",
    href: "/sectors/tourism/floating-docks-jetties",
  },
  {
    date: "April 2026",
    tag: "Ports & Shipyards",
    tagColor: "bg-sky-500/10 text-sky-600",
    borderColor: "border-l-sky-500",
    iconColor: "text-sky-500",
    title: "Crane Rail Fixture & Alignment Works at Major Indian Container Terminal",
    body: "INFINI's mechanical engineering team completed precision crane rail fixture installation, laser alignment, and resilient pad placement for STS quay cranes at a leading west coast Indian container port. Works included full soleplate levelling, adjustable clip installation, and continuous rail gap management.",
    href: "/sectors/mechanical/crane-rail-fixtures",
  },
  {
    date: "February 2026",
    tag: "Civil Works",
    tagColor: "bg-slate-500/10 text-slate-600",
    borderColor: "border-l-slate-400",
    iconColor: "text-slate-500",
    title: "Jetty Rehabilitation & Fender System Installation Completed",
    body: "Civil works including full jetty rehabilitation, buffer stop installation, bollard replacement, marine fender supply & fixing, and deck light assembly were successfully executed at a west coast Indian port facility ahead of monsoon deadlines.",
    href: "/sectors/civil/jetty-works-repairs",
  },
  {
    date: "November 2025",
    tag: "Company Milestone",
    tagColor: "bg-violet-500/10 text-violet-600",
    borderColor: "border-l-violet-500",
    iconColor: "text-violet-500",
    title: "INFINI Infrastructure Crosses 100+ Completed Turnkey Projects",
    body: "INFINI Infrastructure & Engineering Pvt. Ltd. achieved a landmark milestone of completing over 100 turnkey engineering projects across mechanical, civil, and marine sectors spanning 4 Indian states and international Middle East operations since inception.",
    href: "/contact",
  },
];

// ── Accreditations ──────────────────────────────────────────────────
const certifications = [
  {
    code: "RDSO",
    title: "RDSO Approved Contractor",
    subtitle: "Research Designs and Standards Organisation — Ministry of Railways, Govt. of India",
    body: "INFINI Infrastructure is a certified RDSO-approved alumina thermit rail welding contractor. All welding crews carry valid RDSO licenses and strictly follow approved procedures for rail track joints at ports, industrial sidings, and container terminals.",
    icon: ShieldCheck,
    color: "text-[#00C2FF]",
    bg: "bg-[#00C2FF]/10 border-[#00C2FF]/20",
    borderLeft: "border-l-[#00C2FF]",
  },
  {
    code: "METGUARD",
    title: "Visioncraft Industries — Official Channel Partner",
    subtitle: "Metguard Anti-Corrosion Protective Coating (Maharashtra, Goa, Gujarat, Andhra Pradesh & Middle East)",
    body: "Appointed as the official marketing & business development associate for Visioncraft Industries Metguard protective coating substance. We supply and apply Metguard coating for marine, industrial, and infrastructure steel structures across 4 Indian states and international markets.",
    icon: BadgeCheck,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
    borderLeft: "border-l-amber-500",
  },
  {
    code: "PVT LTD",
    title: "Registered Private Limited Company",
    subtitle: "Ministry of Corporate Affairs, Government of India — CIN Registered",
    body: "INFINI Infrastructure & Engineering Pvt. Ltd. is a duly incorporated private limited company under the Companies Act, 2013 with registered operations in Mumbai, Maharashtra. Full GST compliance, PAN registration, and statutory filings maintained.",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    borderLeft: "border-l-emerald-500",
  },
];

export default function MediaNewsPage() {
  return (
    <div className="py-10 sm:py-14 space-y-12 sm:space-y-16">

      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            MEDIA &amp; CORPORATE NEWS
          </div>
          <h1 className="section-heading text-white text-3xl sm:text-5xl font-extrabold tracking-tight">
            News, Updates &amp; Accreditations
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Latest corporate announcements, project milestones, industry partnerships, and official accreditations from INFINI Infrastructure &amp; Engineering Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* ─── CERTIFICATIONS & ACCREDITATIONS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="section-badge mb-3">Accreditations &amp; Approvals</span>
          <h2 className="section-heading text-2xl sm:text-3xl mb-3">Official Certifications</h2>
          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
            INFINI Infrastructure holds formal approvals and partnerships that underpin our credibility across ports, railways, and industrial sectors in India and abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComp = cert.icon;
            return (
              <div
                key={cert.code}
                className={`glass-card p-6 rounded-2xl border-l-4 ${cert.borderLeft} space-y-4 hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl ${cert.bg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComp className={`w-6 h-6 ${cert.color}`} />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className={`text-xs font-extrabold tracking-widest uppercase ${cert.color}`}>{cert.code}</div>
                  <h3 className="font-extrabold text-[#0B1B4F] text-sm leading-snug">{cert.title}</h3>
                  <p className="text-[11px] text-slate-500 italic">{cert.subtitle}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{cert.body}</p>
              </div>
            );
          })}
        </div>

        {/* Certification stats banner */}
        <div className="bg-[#0B1B4F] rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "100+", label: "Projects Completed", color: "text-[#00C2FF]" },
            { value: "RDSO", label: "Approved Welding", color: "text-amber-400" },
            { value: "4+", label: "States Covered", color: "text-emerald-400" },
            { value: "ME", label: "Middle East Ops", color: "text-sky-400" },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-2xl sm:text-3xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-white/60 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEWS GRID ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="section-badge mb-3">Latest Updates</span>
          <h2 className="section-heading text-2xl sm:text-3xl">Corporate News &amp; Project Updates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className={`glass-card p-6 rounded-2xl border-l-4 ${item.borderColor} space-y-4 hover:border-[#00C2FF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className={`w-3.5 h-3.5 ${item.iconColor}`} />
                    {item.date}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#0B1B4F] text-sm leading-snug group-hover:text-[#00C2FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-[#0B1B4F] hover:text-[#00C2FF] flex items-center gap-1 transition-colors"
                >
                  View Service Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRESS & MEDIA INQUIRY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-slate-200 hover:border-[#00C2FF]/40 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#00C2FF]" />
                <h3 className="section-heading text-xl font-extrabold">Media &amp; Press Inquiries</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For press releases, media kits, project case study requests, certification documents, or corporate partnership inquiries — reach our communications team directly.
              </p>
              <div className="flex flex-wrap gap-4 text-xs pt-1">
                <a href="mailto:info@infini-infra.com" className="flex items-center gap-1.5 font-semibold text-[#0B1B4F] hover:text-[#00C2FF] transition-colors">
                  <Mail className="w-4 h-4" /> info@infini-infra.com
                </a>
                <a href="http://www.infini-infra.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold text-[#00C2FF] hover:underline">
                  <ExternalLink className="w-4 h-4" /> www.infini-infra.com
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0B1B4F] text-white font-bold px-6 py-3 rounded-full text-xs hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-all duration-300 shadow-lg"
            >
              Contact Press Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
