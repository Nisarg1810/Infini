"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  HardHat, 
  Ship, 
  Info, 
  Award,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* TOP COMPLIANCE & CONTACT BAR */}
      <div className="bg-slate-100 text-slate-700 text-[11px] py-1 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <a href="tel:+919920350663" className="flex items-center gap-1 hover:text-infini-cyan transition-colors font-medium">
              <Phone className="w-3 h-3 text-infini-navy" />
              <span>+91 9920350663</span>
            </a>
            <a href="mailto:info@infini-infra.com" className="flex items-center gap-1 hover:text-infini-cyan transition-colors font-medium">
              <Mail className="w-3 h-3 text-infini-navy" />
              <span>info@infini-infra.com</span>
            </a>
            <span className="hidden md:flex items-center gap-1 text-slate-500 font-medium">
              <MapPin className="w-3 h-3 text-infini-navy" />
              <span>Goregaon East, Mumbai 400063</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold text-infini-navy">
            <span className="bg-infini-navy/10 px-2 py-0.5 rounded border border-infini-navy/20 text-infini-navy">
              RDSO APPROVED WELDING KITS
            </span>
            <span className="hidden sm:inline-block text-infini-emerald">
              ★ ISO & SAFETY COMPLIANT
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - BALANCED COMPACT HEIGHT */}
      <nav className="bg-white px-4 sm:px-6 lg:px-8 py-1 shadow-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* BALANCED HORIZONTAL LOGO */}
          <Link href="/" className="flex items-center group shrink-0 py-0.5">
            <img 
              src="/images/logo.jpg" 
              alt="INFINI Infrastructure & Engineering Pvt. Ltd. Logo" 
              className="h-14 sm:h-16 md:h-18 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
              HOME
            </Link>

            {/* ABOUT US DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
                <span>ABOUT US</span>
                <ChevronDown className="w-4 h-4 text-infini-navy" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 space-y-1 animate-fadeIn z-50">
                  <Link 
                    href="/about/vision-mission" 
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-xs font-semibold text-infini-navy hover:text-infini-cyan transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-infini-cyan" />
                    <span>Vision, Mission & Core Values</span>
                  </Link>
                  <Link 
                    href="/about/why-infini" 
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-xs font-semibold text-infini-navy hover:text-infini-cyan transition-all"
                  >
                    <Award className="w-4 h-4 text-infini-emerald" />
                    <span>Why INFINI Infra</span>
                  </Link>
                  <Link 
                    href="/about/media-news" 
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-xs font-semibold text-infini-navy hover:text-infini-cyan transition-all"
                  >
                    <Info className="w-4 h-4 text-infini-amber" />
                    <span>Media, Press & News</span>
                  </Link>
                </div>
              )}
            </div>

            {/* SECTORS DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setSectorsDropdownOpen(true)}
              onMouseLeave={() => setSectorsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
                <span>SECTORS</span>
                <ChevronDown className="w-4 h-4 text-infini-navy" />
              </button>

              {sectorsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 grid grid-cols-3 gap-6 animate-fadeIn z-50">
                  
                  {/* MECHANICAL */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-infini-navy font-bold text-xs uppercase tracking-wider border-b border-slate-200 pb-2">
                      <Wrench className="w-4 h-4 text-infini-cyan" />
                      <span>Mechanical</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      <li>
                        <Link href="/sectors/mechanical/crane-rail-fixtures" className="hover:text-infini-cyan transition-colors block py-1">
                          Crane Rail Fixtures
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/mechanical/anti-corrosion-coating" className="hover:text-infini-cyan transition-colors block py-1">
                          Anti Corrosion Coating
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/mechanical/steel-aluminium-fabrication" className="hover:text-infini-cyan transition-colors block py-1">
                          Steel & Aluminium Fab.
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/mechanical/land-rail-survey" className="hover:text-infini-cyan transition-colors block py-1">
                          Land & Rail Survey
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/mechanical/rdso-thermit-welding" className="hover:text-infini-cyan transition-colors block py-1">
                          Thermit Rail Welding
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/mechanical/railway-siding-works" className="hover:text-infini-cyan transition-colors block py-1">
                          Railway Siding Works
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* CIVIL */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-infini-navy font-bold text-xs uppercase tracking-wider border-b border-slate-200 pb-2">
                      <HardHat className="w-4 h-4 text-infini-emerald" />
                      <span>Civil</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      <li>
                        <Link href="/sectors/civil/jetty-works-repairs" className="hover:text-infini-emerald transition-colors block py-1">
                          Jetty Works & Repairs
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/civil/paver-block-works" className="hover:text-infini-emerald transition-colors block py-1">
                          Paver Block Works
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/civil/drainage-works" className="hover:text-infini-emerald transition-colors block py-1">
                          Drainage Works
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/civil/mass-concrete-works" className="hover:text-infini-emerald transition-colors block py-1">
                          Mass Concrete Works
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/civil/rcc-pcc-girders" className="hover:text-infini-emerald transition-colors block py-1">
                          RCC & PCC Girders
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* TOURISM */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-infini-navy font-bold text-xs uppercase tracking-wider border-b border-slate-200 pb-2">
                      <Ship className="w-4 h-4 text-infini-amber" />
                      <span>Tourism</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      <li>
                        <Link href="/sectors/tourism/floating-docks-jetties" className="hover:text-infini-amber transition-colors block py-1">
                          Floating Docks & Jetties
                        </Link>
                      </li>
                      <li>
                        <Link href="/sectors/tourism/seaplane-platforms" className="hover:text-infini-amber transition-colors block py-1">
                          Seaplane Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <Link href="/gallery" className="text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
              GALLERY
            </Link>

            <Link href="/career" className="text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
              CAREERS
            </Link>

            <Link href="/contact" className="text-sm font-bold text-infini-navy hover:text-infini-cyan transition-colors py-2">
              CONTACT US
            </Link>
          </div>

          {/* CTA ACTION BUTTON */}
          <div className="hidden lg:block shrink-0">
            <Link 
              href="/contact" 
              className="bg-infini-navy text-white font-bold px-5 py-2 rounded-full text-xs hover:bg-infini-cyan hover:text-infini-navy hover:shadow-md transition-all duration-300 inline-block"
            >
              PROJECT INQUIRY
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-infini-navy hover:text-infini-cyan p-2"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-infini-navy px-6 py-6 border-b border-slate-200 space-y-4 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-infini-cyan"
          >
            HOME
          </Link>

          <div className="space-y-2 border-t border-slate-200 pt-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">About Us</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-700 font-semibold">
              <Link href="/about/vision-mission" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-infini-cyan">
                Vision & Mission
              </Link>
              <Link href="/about/why-infini" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-infini-cyan">
                Why INFINI Infra
              </Link>
              <Link href="/about/media-news" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-infini-cyan">
                Media & News
              </Link>
            </div>
          </div>

          <div className="space-y-2 border-t border-slate-200 pt-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sectors & Services</span>
            <div className="pl-3 space-y-2 text-xs font-semibold">
              <Link href="/sectors/mechanical" onClick={() => setMobileMenuOpen(false)} className="block text-infini-navy hover:text-infini-cyan">
                Mechanical Sector (6 Services)
              </Link>
              <Link href="/sectors/civil" onClick={() => setMobileMenuOpen(false)} className="block text-infini-emerald hover:text-infini-navy">
                Civil Sector (5 Services)
              </Link>
              <Link href="/sectors/tourism" onClick={() => setMobileMenuOpen(false)} className="block text-infini-amber hover:text-infini-navy">
                Tourism Sector (2 Services)
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2 text-sm font-bold">
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block hover:text-infini-cyan">
              GALLERY
            </Link>
            <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="block hover:text-infini-cyan">
              CAREERS
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-infini-cyan">
              CONTACT US
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
