"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Wrench,
  HardHat,
  Ship,
  Sparkles,
  Award,
  Info,
  Mail,
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => setOpenDropdown(key);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">


      {/* ── MAIN WHITE NAVBAR ── */}
      <nav className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" 
          : "bg-white shadow-md border-b border-slate-100"
      }`}>
        <div className={`max-w-6xl mx-auto relative flex items-center justify-between gap-4 px-1 sm:px-0 transition-all duration-300 ${
          scrolled ? "h-[58px] sm:h-[64px] lg:h-[64px]" : "h-[88px] sm:h-[96px] lg:h-[84px]"
        }`}>

          {/* Mobile Menu Toggle — Left Corner */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#0B1B4F] hover:text-[#00C2FF] p-2 transition-colors z-20"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo — Big and Centered on Mobile, Static Left on Desktop */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center shrink-0 group z-10">
            <Image
              src="/images/logo.jpg"
              alt="INFINI Infrastructure & Engineering Pvt. Ltd."
              width={320}
              height={80}
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                scrolled
                  ? "h-11 xs:h-12 sm:h-14 lg:h-14 max-w-[180px] xs:max-w-[220px] sm:max-w-[300px] lg:max-w-[320px]"
                  : "h-16 xs:h-20 sm:h-24 lg:h-20 max-w-[240px] xs:max-w-[300px] sm:max-w-[400px] lg:max-w-[400px]"
              }`}
              priority
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

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#0B1B4F] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </nav>

      {/* ── MOBILE DRAWER SIDEBAR ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl overflow-y-auto max-h-[85vh] transition-all duration-300">
          <div className="p-4 space-y-1.5">

            {/* HOME */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-[#0B1B4F] hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-all"
            >
              <Home className="w-4 h-4 text-slate-500" />
              <span>Home</span>
            </Link>

            {/* ABOUT US */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition-all rounded-xl ${
                  mobileExpanded === "about"
                    ? "bg-[#0B1B4F]/5 text-[#00C2FF]"
                    : "text-[#0B1B4F] hover:bg-slate-100"
                }`}
              >
                <span>About Us</span>
                {mobileExpanded === "about" ? (
                  <ChevronDown className="w-4 h-4 text-[#00C2FF]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {mobileExpanded === "about" && (
                <div className="my-1.5 ml-4 pl-3.5 border-l-2 border-[#00C2FF]/30 space-y-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all"
                    >
                      <span className="text-[#00C2FF] font-bold text-sm">›</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MECHANICAL SECTOR */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "mechanical" ? null : "mechanical")}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition-all rounded-xl ${
                  mobileExpanded === "mechanical"
                    ? "bg-[#0B1B4F]/5 text-[#00C2FF]"
                    : "text-[#0B1B4F] hover:bg-slate-100"
                }`}
              >
                <span>Mechanical Sector</span>
                {mobileExpanded === "mechanical" ? (
                  <ChevronDown className="w-4 h-4 text-[#00C2FF]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {mobileExpanded === "mechanical" && (
                <div className="my-1.5 ml-4 pl-3.5 border-l-2 border-[#00C2FF]/30 space-y-1">
                  {mechanicalLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all"
                    >
                      <span className="text-[#00C2FF] font-bold text-sm">›</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CIVIL SECTOR */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "civil" ? null : "civil")}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition-all rounded-xl ${
                  mobileExpanded === "civil"
                    ? "bg-[#0B1B4F]/5 text-[#00C2FF]"
                    : "text-[#0B1B4F] hover:bg-slate-100"
                }`}
              >
                <span>Civil Sector</span>
                {mobileExpanded === "civil" ? (
                  <ChevronDown className="w-4 h-4 text-[#00C2FF]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {mobileExpanded === "civil" && (
                <div className="my-1.5 ml-4 pl-3.5 border-l-2 border-[#00C2FF]/30 space-y-1">
                  {civilLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all"
                    >
                      <span className="text-[#00C2FF] font-bold text-sm">›</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* TOURISM & MARINE SECTOR */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "tourism" ? null : "tourism")}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition-all rounded-xl ${
                  mobileExpanded === "tourism"
                    ? "bg-[#0B1B4F]/5 text-[#00C2FF]"
                    : "text-[#0B1B4F] hover:bg-slate-100"
                }`}
              >
                <span>Tourism &amp; Marine Sector</span>
                {mobileExpanded === "tourism" ? (
                  <ChevronDown className="w-4 h-4 text-[#00C2FF]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {mobileExpanded === "tourism" && (
                <div className="my-1.5 ml-4 pl-3.5 border-l-2 border-[#00C2FF]/30 space-y-1">
                  {tourismLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all"
                    >
                      <span className="text-[#00C2FF] font-bold text-sm">›</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* GALLERY */}
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-[#0B1B4F] hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-all"
            >
              <span>Project Gallery</span>
            </Link>

            {/* CAREERS */}
            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-[#0B1B4F] hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-all"
            >
              <span>Careers</span>
            </Link>

            {/* CTA BUTTON */}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#00C2FF] text-[#0B1B4F] text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:bg-[#0B1B4F] hover:text-white transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
