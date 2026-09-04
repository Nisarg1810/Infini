"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Wrench,
  HardHat,
  Ship,
  Sparkles,
  Award,
  Info,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const mechanicalLinks = [
  { label: "Crane Rail Fixtures", href: "/sectors/mechanical/crane-rail-fixtures" },
  { label: "Anti Corrosion Coating", href: "/sectors/mechanical/anti-corrosion-coating" },
  { label: "Steel & Aluminium Fabrication", href: "/sectors/mechanical/steel-aluminium-fabrication" },
  { label: "Land & Rail Survey", href: "/sectors/mechanical/land-rail-survey" },
  { label: "Thermit Rail Welding", href: "/sectors/mechanical/rdso-thermit-welding" },
  { label: "Railway Siding Works", href: "/sectors/mechanical/railway-siding-works" },
];

const civilLinks = [
  { label: "Jetty Works & Repairs", href: "/sectors/civil/jetty-works-repairs" },
  { label: "Paver Block Works", href: "/sectors/civil/paver-block-works" },
  { label: "Drainage Works", href: "/sectors/civil/drainage-works" },
  { label: "Mass Concrete Works", href: "/sectors/civil/mass-concrete-works" },
  { label: "RCC & PCC Girders", href: "/sectors/civil/rcc-pcc-girders" },
];

const tourismLinks = [
  { label: "Floating Docks & Jetties", href: "/sectors/tourism/floating-docks-jetties" },
  { label: "Seaplane Platforms", href: "/sectors/tourism/seaplane-platforms" },
];

const aboutLinks = [
  { label: "Vision, Mission & Core Values", href: "/about/vision-mission", icon: <Sparkles className="w-4 h-4 text-[#00C2FF]" /> },
  { label: "Why INFINI Infra", href: "/about/why-infini", icon: <Award className="w-4 h-4 text-[#22C55E]" /> },
  { label: "Media, Press & News", href: "/about/media-news", icon: <Info className="w-4 h-4 text-[#F97316]" /> },
];

type DropdownKey = "about" | "mechanical" | "civil" | "tourism" | null;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const handleMouseEnter = (key: DropdownKey) => setOpenDropdown(key);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ── TOP DARK CONTACT BAR ── */}
      <div className="bg-[#0B1B4F] text-white text-[11px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">

          {/* Contact details */}
          <div className="flex items-center divide-x divide-white/20">
            <a
              href="tel:+919920350663"
              className="flex items-center gap-1.5 pr-4 hover:text-[#00C2FF] transition-colors group"
            >
              <Phone className="w-3 h-3 text-[#00C2FF]" />
              <span className="font-medium">+91 9920350663</span>
            </a>
            <a
              href="mailto:info@infini-infra.com"
              className="flex items-center gap-1.5 px-4 hover:text-[#00C2FF] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#00C2FF]" />
              <span className="font-medium">info@infini-infra.com</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 pl-4 text-white/60 font-medium">
              <span className="text-[#22C55E] font-bold">★</span> ISO &amp; RDSO Approved
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-[#00C2FF] transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#00C2FF] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00C2FF] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#00C2FF] transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN WHITE NAVBAR ── */}
      <nav className="bg-white shadow-md border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[68px] gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <img
              src="/images/logo.jpg"
              alt="INFINI Infrastructure & Engineering Pvt. Ltd."
              className="h-12 sm:h-14 w-auto max-w-[240px] sm:max-w-[300px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">

            {/* HOME */}
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] hover:bg-slate-50 transition-all duration-200"
            >
              HOME
            </Link>

            {/* ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] hover:bg-slate-50 transition-all duration-200">
                ABOUT US
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-slate-50 transition-all"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MECHANICAL */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("mechanical")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] hover:bg-slate-50 transition-all duration-200">
                <Wrench className="w-3.5 h-3.5 text-[#00C2FF]" />
                MECHANICAL
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "mechanical" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "mechanical" && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  {mechanicalLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-slate-50 transition-all border-l-2 border-transparent hover:border-[#00C2FF] mx-2 rounded-r-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CIVIL */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("civil")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#22C55E] hover:bg-slate-50 transition-all duration-200">
                <HardHat className="w-3.5 h-3.5 text-[#22C55E]" />
                CIVIL
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "civil" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "civil" && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  {civilLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#22C55E] hover:bg-slate-50 transition-all border-l-2 border-transparent hover:border-[#22C55E] mx-2 rounded-r-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* TOURISM */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("tourism")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#F97316] hover:bg-slate-50 transition-all duration-200">
                <Ship className="w-3.5 h-3.5 text-[#F97316]" />
                TOURISM
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "tourism" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "tourism" && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  {tourismLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#F97316] hover:bg-slate-50 transition-all border-l-2 border-transparent hover:border-[#F97316] mx-2 rounded-r-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* GALLERY */}
            <Link
              href="/gallery"
              className="px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] hover:bg-slate-50 transition-all duration-200"
            >
              GALLERY
            </Link>

            {/* CAREERS */}
            <Link
              href="/career"
              className="px-3 py-2 rounded-lg text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] hover:bg-slate-50 transition-all duration-200"
            >
              CAREERS
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-[#0B1B4F] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-all duration-300"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0B1B4F] hover:text-[#00C2FF] p-2 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-y-auto max-h-[80vh]">
          <div className="px-5 py-4 space-y-1">

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] border-b border-slate-100"
            >
              HOME
            </Link>

            {/* About mobile accordion */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-[#0B1B4F]"
              >
                ABOUT US
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "about" && (
                <div className="pb-2 pl-4 space-y-0.5">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#00C2FF]"
                    >
                      {item.icon} {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mechanical mobile accordion */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "mechanical" ? null : "mechanical")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-[#0B1B4F]"
              >
                <span className="flex items-center gap-2"><Wrench className="w-4 h-4 text-[#00C2FF]" /> MECHANICAL</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "mechanical" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "mechanical" && (
                <div className="pb-2 pl-4 space-y-0.5">
                  {mechanicalLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#00C2FF]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Civil mobile accordion */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "civil" ? null : "civil")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-[#0B1B4F]"
              >
                <span className="flex items-center gap-2"><HardHat className="w-4 h-4 text-[#22C55E]" /> CIVIL</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "civil" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "civil" && (
                <div className="pb-2 pl-4 space-y-0.5">
                  {civilLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#22C55E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tourism mobile accordion */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "tourism" ? null : "tourism")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-[#0B1B4F]"
              >
                <span className="flex items-center gap-2"><Ship className="w-4 h-4 text-[#F97316]" /> TOURISM</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "tourism" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "tourism" && (
                <div className="pb-2 pl-4 space-y-0.5">
                  {tourismLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#F97316]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] border-b border-slate-100"
            >
              GALLERY
            </Link>

            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-sm font-bold text-[#0B1B4F] hover:text-[#00C2FF] border-b border-slate-100"
            >
              CAREERS
            </Link>

            <div className="pt-3 pb-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#0B1B4F] text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-full hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-all"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
