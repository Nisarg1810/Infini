"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  CheckCircle,
  Users,
  ShieldCheck,
  Award,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 0,
      title: "Marine Floating Docks & Waterfront Infrastructure",
      subtitle: "Designing, supplying and installing modular floating pontoon jetties and seaplane platforms across coastal India.",
      badge: "TOURISM & MARINE SECTOR",
      badgeColor: "bg-amber-500/20 border-amber-400/50 text-amber-300",
      bgImage: "/images/hero_bg.png",
      ctaText: "Floating Docks",
      ctaLink: "/sectors/tourism/floating-docks-jetties",
    },
    {
      id: 1,
      title: "Heavy Port Crane Rail Fixtures & Engineering",
      subtitle: "Turnkey supply, precision alignment and clip installation for container port quays and shipyard gantry cranes.",
      badge: "MECHANICAL SECTOR",
      badgeColor: "bg-sky-400/20 border-sky-400/50 text-sky-300",
      bgImage: "/images/crane_rail.png",
      ctaText: "Crane Rail Systems",
      ctaLink: "/sectors/mechanical/crane-rail-fixtures",
    },
    {
      id: 2,
      title: "Civil Construction, RCC Girders & Breakwater Jetties",
      subtitle: "Mass concrete foundations, pre-cast RCC girders, paver block yards and jetty rehabilitation works.",
      badge: "CIVIL SECTOR",
      badgeColor: "bg-emerald-400/20 border-emerald-400/50 text-emerald-300",
      bgImage: "/images/civil_bridge.png",
      ctaText: "Civil Construction",
      ctaLink: "/sectors/civil/jetty-works-repairs",
    },
    {
      id: 3,
      title: "Visioncraft Metguard Anti-Corrosion Coating",
      subtitle: "Official Channel Partner for Metguard protective coating across Maharashtra, Gujarat, Goa, Andhra Pradesh & Middle East.",
      badge: "PROTECTIVE COATING",
      badgeColor: "bg-sky-400/20 border-sky-400/50 text-sky-300",
      bgImage: "/images/metguard_coating.png",
      ctaText: "Product Specs",
      ctaLink: "/sectors/mechanical/anti-corrosion-coating",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="bg-white">

      {/* ─── HERO ─── */}
      <section className="relative w-full overflow-hidden min-h-[520px] h-[85vh] sm:h-[90vh]">

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/60 sm:bg-black/55" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 z-10 py-12">
          <span className={`inline-block px-4 py-1.5 rounded-full border text-xs sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm backdrop-blur-md ${heroSlides[activeSlide].badgeColor}`}>
            {heroSlides[activeSlide].badge}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mb-4 sm:mb-6 drop-shadow-lg tracking-tight">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal px-2 drop-shadow">
            {heroSlides[activeSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href={heroSlides[activeSlide].ctaLink}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00C2FF] text-[#0B1B4F] font-bold px-8 py-3.5 rounded-full text-sm sm:text-base hover:bg-white hover:shadow-xl transition-all duration-300 gap-2 shadow-lg"
            >
              {heroSlides[activeSlide].ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/80 text-white font-bold px-8 py-3.5 rounded-full text-sm sm:text-base hover:bg-white hover:text-[#0B1B4F] transition-all duration-300 text-center shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {heroSlides.map((slide, idx) => (
            <button key={slide.id} onClick={() => setActiveSlide(idx)} aria-label={`Slide ${idx + 1}`}>
              {idx === activeSlide
                ? <span key={`a-${activeSlide}`} className="hero-dot-active block" />
                : <span className="hero-dot-inactive block" />
              }
            </button>
          ))}
        </div>

        {/* Arrows — visible on sm and up */}
        <button
          onClick={() => setActiveSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-[#00C2FF]/80 text-white items-center justify-center transition-colors"
          aria-label="Previous"
        ><ChevronLeft className="w-5 h-5" /></button>
        <button
          onClick={() => setActiveSlide((p) => (p + 1) % heroSlides.length)}
          className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-[#00C2FF]/80 text-white items-center justify-center transition-colors"
          aria-label="Next"
        ><ChevronRight className="w-5 h-5" /></button>

      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="border-b border-slate-200 bg-[#0B1B4F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "100+", label: "Turnkey Projects" },
            { value: "4+", label: "States & Middle East" },
            { value: "RDSO", label: "Approved Welding" },
            { value: "100%", label: "On-Time Execution" },
          ].map((s, idx) => (
            <div
              key={s.label}
              className={`py-6 px-4 sm:px-6 text-center ${idx % 2 === 0 ? "border-r border-white/10" : ""
                } ${idx < 2 ? "border-b border-white/10 md:border-b-0" : ""
                } ${idx < 3 ? "md:border-r md:border-white/10" : "md:border-r-0"
                }`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#00C2FF]">{s.value}</div>
              <div className="text-xs sm:text-xs text-white/70 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="section-badge mb-4">About INFINI</span>
            <h2 className="section-heading mb-5">
              Specialized Engineering Contractor Based in Mumbai
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
              INFINI Infrastructure & Engineering Pvt. Ltd. is a turnkey engineering contractor specializing in Mechanical, Civil, and Marine infrastructure. We serve ports, shipyards, railways, and coastal development projects across India and the Middle East.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {[
                "RDSO Approved Alumina Thermit Rail Welding Contractor",
                "Official Channel Partner — Visioncraft Metguard Coating",
                "Floating Dock & Seaplane Platform Specialist",
                "Port Crane Rail Fixture & Alignment Experts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about/vision-mission"
              className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1B4F] border-b-2 border-[#00C2FF] pb-0.5 hover:text-[#00C2FF] transition-colors"
            >
              Learn about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/marine_jetty.png"
              alt="INFINI Infrastructure Engineering"
              className="w-full h-60 sm:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── OUR SECTORS ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="section-badge mb-3">What We Do</span>
            <h2 className="section-heading">Our Core Sectors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mechanical */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src="/images/crane_rail.png" alt="Mechanical Sector" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-lg">Mechanical</span>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      { label: "Crane Rail Fixtures", href: "/sectors/mechanical/crane-rail-fixtures" },
                      { label: "Anti Corrosion Coating", href: "/sectors/mechanical/anti-corrosion-coating" },
                      { label: "Steel & Aluminium Fabrication", href: "/sectors/mechanical/steel-aluminium-fabrication" },
                      { label: "Land & Rail Survey", href: "/sectors/mechanical/land-rail-survey" },
                      { label: "Thermit Rail Welding", href: "/sectors/mechanical/rdso-thermit-welding" },
                      { label: "Railway Siding Works", href: "/sectors/mechanical/railway-siding-works" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 hover:text-[#00C2FF] transition-colors group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span>{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link href="/sectors/mechanical" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1B4F] hover:text-[#00C2FF] transition-colors">
                  View Sector <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Civil */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src="/images/civil_bridge.png" alt="Civil Sector" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-lg">Civil</span>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      { label: "Jetty Works & Repairs", href: "/sectors/civil/jetty-works-repairs" },
                      { label: "Paver Block Works", href: "/sectors/civil/paver-block-works" },
                      { label: "Drainage Works", href: "/sectors/civil/drainage-works" },
                      { label: "Mass Concrete Works", href: "/sectors/civil/mass-concrete-works" },
                      { label: "RCC & PCC Girders", href: "/sectors/civil/rcc-pcc-girders" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 hover:text-[#22C55E] transition-colors group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span>{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link href="/sectors/civil" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1B4F] hover:text-[#22C55E] transition-colors">
                  View Sector <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tourism */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src="/images/marine_jetty.png" alt="Tourism Sector" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-lg">Tourism & Marine</span>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      { label: "Floating Docks & Jetties", href: "/sectors/tourism/floating-docks-jetties" },
                      { label: "Seaplane Platforms", href: "/sectors/tourism/seaplane-platforms" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 hover:text-[#F97316] transition-colors group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span>{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link href="/sectors/tourism" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1B4F] hover:text-[#F97316] transition-colors">
                  View Sector <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FLOATING DOCKS SPOTLIGHT ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-md order-2 lg:order-1">
            <img src="/images/floating_dock.png" alt="Floating Dock Systems" className="w-full h-60 sm:h-80 object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-badge mb-4">Tourism &amp; Marine</span>
            <h2 className="section-heading mb-4">
              Modular Floating Pontoon Jetties &amp; Docking Systems
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              INFINI Infra delivers engineered floating dock solutions designed for fluctuating tidal waters, passenger ferry terminals, luxury yacht berths, and naval defense installations.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {[
                { title: "HDPE & Aluminum", desc: "Lightweight floating berths for fast deployment." },
                { title: "Concrete Pontoons", desc: "High-stability floating jetties for heavy vessels." },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-lg p-3.5 sm:p-4">
                  <h4 className="font-bold text-[#0B1B4F] text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/sectors/tourism/floating-docks-jetties"
              className="inline-flex items-center gap-2 bg-[#0B1B4F] text-white font-semibold px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-colors"
            >
              View Floating Dock Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── METGUARD PARTNERSHIP ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0B1B4F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <span className="section-badge section-badge-dark mb-4">Official Channel Partner</span>
            <h2 className="section-heading section-heading-dark mb-4">
              Visioncraft Metguard Anti-Corrosion Coating
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
              INFINI Infra operates as marketing & business development associates for Visioncraft Industries Metguard protective coating across Maharashtra, Gujarat, Goa, Andhra Pradesh and the Middle East.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-7">
              {["Maharashtra", "Gujarat", "Goa", "Andhra Pradesh", "Middle East"].map((state) => (
                <span key={state} className="text-[11px] sm:text-xs bg-white/10 border border-white/20 text-white/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md">{state}</span>
              ))}
            </div>
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3">
              <Link href="/contact" className="w-full xs:w-auto text-center bg-[#00C2FF] text-[#0B1B4F] font-bold px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm hover:bg-white transition-colors">
                Inquire for Supply & Application
              </Link>
              <Link href="/sectors/mechanical/anti-corrosion-coating" className="text-xs sm:text-sm text-white/70 hover:text-white underline underline-offset-4 flex items-center gap-1">
                Product Specs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/metguard_coating.png" alt="Metguard Coating" className="w-full h-60 sm:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* ─── WHY INFINI ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <span className="section-badge mb-3">Why Choose Us</span>
            <h2 className="section-heading">What Sets INFINI Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { title: "Qualified Team", desc: "Technical experts and skilled manpower with extensive hands-on experience.", icon: Users },
              { title: "Safety First", desc: "Zero-compromise safety protocols on marine and high-risk construction sites.", icon: ShieldCheck },
              { title: "Quality Workmanship", desc: "Precision execution for RDSO approved welding, girders, and jetties.", icon: Award },
              { title: "Timely Delivery", desc: "Punctual delivery for ports, shipyards, public sector and private contracts.", icon: Clock },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-[#00C2FF]/50 transition-all duration-300 bg-white hover:shadow-lg group">
                  <div className="w-11 h-11 rounded-xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/10 flex items-center justify-center text-[#0B1B4F] mb-4 group-hover:bg-[#0B1B4F] group-hover:text-[#00C2FF] group-hover:border-[#0B1B4F] transition-all duration-300 shadow-sm">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bold text-[#0B1B4F] mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-3">Ready to Start Your Next Project?</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-7">
            Get in touch with our engineering leadership at NESCO IT Park, Goregaon East, Mumbai.
          </p>
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1B4F] text-white font-bold px-6 sm:px-7 py-3 rounded-md text-xs sm:text-sm hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-colors">
              <Phone className="w-4 h-4" /> Contact Our Engineers
            </Link>
            <Link href="/career" className="w-full xs:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-600 font-semibold px-6 sm:px-7 py-3 rounded-md text-xs sm:text-sm hover:border-[#0B1B4F] hover:text-[#0B1B4F] transition-colors">
              Career Opportunities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
