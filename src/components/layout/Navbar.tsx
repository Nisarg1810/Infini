"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Wrench,
  HardHat,
  Ship,
  Sparkles,
  Award,
  Info,
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
  { label: "Vision, Mission & Core Values", href: "/about/vision-mission" },
  { label: "Why INFINI Infra", href: "/about/why-infini" },
  { label: "Media, Press & News", href: "/about/media-news" },
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


      {/* ── MAIN WHITE NAVBAR ── */}
      <nav className="bg-white shadow-md border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative flex items-center h-[88px] lg:h-[84px] lg:justify-between gap-4">

          {/* Logo — absolutely centered on mobile, static left on desktop */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center group">
            <img
              src="/images/logo.jpg"
              alt="INFINI Infrastructure & Engineering Pvt. Ltd."
              className="h-20 sm:h-24 lg:h-20 w-auto max-w-[300px] sm:max-w-[380px] lg:max-w-[400px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-slate-50 transition-all border-l-2 border-transparent hover:border-[#00C2FF] mx-2 rounded-r-md"
                    >
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
          <div className="ml-auto lg:ml-0 flex items-center gap-3 shrink-0">
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
                      className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#00C2FF]"
                    >
                      {item.label}
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
                <span>MECHANICAL</span>
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
                <span>CIVIL</span>
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
                <span>TOURISM</span>
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
