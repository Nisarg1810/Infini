"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Wrench, 
  HardHat, 
  Ship, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users,
  Anchor,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Activity,
  Building2,
  Compass,
  Layers,
  MapPin,
  Clock
} from "lucide-react";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 0,
      title: "Marine Floating Docks & Waterfront Infrastructure",
      subtitle: "Designing, supplying, and installing modular floating pontoon jetties, seaplane platforms, and naval berthing systems across coastal India & the Middle East.",
      badge: "TOURISM & MARINE SECTOR",
      badgeColor: "bg-infini-amber/20 border-infini-amber/40 text-infini-amber",
      bgImage: "/images/marine_jetty.png",
      ctaText: "Explore Floating Docks",
      ctaLink: "/sectors/tourism/floating-docks-jetties"
    },
    {
      id: 1,
      title: "Heavy Port Crane Rail Fixtures & Engineering",
      subtitle: "Turnkey supply, precision alignment, soleplate fixing, and adjustable clip installation for container port quays and shipyard gantry cranes.",
      badge: "MECHANICAL SECTOR",
      badgeColor: "bg-infini-cyan/20 border-infini-cyan/40 text-infini-cyan",
      bgImage: "/images/crane_rail.png",
      ctaText: "Explore Crane Rail Systems",
      ctaLink: "/sectors/mechanical/crane-rail-fixtures"
    },
    {
      id: 2,
      title: "Civil Construction, RCC Girders & Breakwater Jetties",
      subtitle: "Mass concrete foundations, pre-cast RCC & PCC girders, paver block container yards, and jetty rehabilitation works.",
      badge: "CIVIL SECTOR",
      badgeColor: "bg-infini-emerald/20 border-infini-emerald/40 text-infini-emerald",
      bgImage: "/images/civil_bridge.png",
      ctaText: "Explore Civil Construction",
      ctaLink: "/sectors/civil/jetty-works-repairs"
    },
    {
      id: 3,
      title: "Visioncraft Metguard Anti-Corrosion Coating",
      subtitle: "Official Channel Partner & Associate for Metguard protective coating substance across Maharashtra, Gujarat, Goa, Andhra Pradesh & Middle East.",
      badge: "PROTECTIVE COATING PARTNER",
      badgeColor: "bg-infini-cyan/20 border-infini-cyan/40 text-infini-cyan",
      bgImage: "/images/metguard_coating.png",
      ctaText: "Metguard Product Specs",
      ctaLink: "/sectors/mechanical/anti-corrosion-coating"
    }
  ];

  // Auto slide effect every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="space-y-20 pb-16 bg-slate-50">
      
      {/* HIGH-IMPACT HERO CAROUSEL BANNER */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
        
        {/* Background Image Carousel with Smooth Transition */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img 
              src={slide.bgImage} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center filter brightness-70 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-infini-navy-dark/95 via-infini-navy/85 to-infini-navy-dark/70 backdrop-blur-[2px]"></div>
          </div>
        ))}

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-infini-cyan/20 rounded-full blur-3xl pointer-events-none animate-pulse z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Animated Sector Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentSlide.badge}</span>
            </div>

            {/* Dynamic Slide Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight min-h-[140px] sm:min-h-[160px] flex items-center">
              {currentSlide.title}
            </h1>

            {/* Slide Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href={currentSlide.ctaLink} 
                className="bg-infini-cyan text-infini-navy font-extrabold hover:bg-white px-8 py-4 rounded-full text-sm shadow-xl shadow-infini-cyan/25 hover:shadow-infini-cyan/50 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/30 hover:border-infini-cyan text-slate-100 hover:text-white px-7 py-4 rounded-full text-sm font-bold transition-all backdrop-blur-md bg-white/10"
              >
                Request Consultation
              </Link>
            </div>

            {/* Slide Navigation Dots & Controls */}
            <div className="flex items-center gap-6 pt-8 border-t border-slate-700/80">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? "w-10 bg-infini-cyan" : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <button 
                  onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-infini-cyan hover:text-infini-navy transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span>0{activeSlide + 1} / 0{heroSlides.length}</span>
                <button 
                  onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-infini-cyan hover:text-infini-navy transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Hero Contact & Highlights Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card-dark p-8 rounded-3xl space-y-6 shadow-2xl border border-infini-cyan/30 relative overflow-hidden group">
              
              <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-infini-cyan/20 border border-infini-cyan/40 flex items-center justify-center text-infini-cyan shrink-0">
                  <Anchor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">INFINI Infrastructure</h3>
                  <p className="text-xs text-slate-300">Mumbai Headquarters • NESCO IT Park</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-200">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
                  <span>Floating Docks & Seaplane Landing Platforms</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" />
                  <span>Crane Rail Fixtures for Ports & Shipyards</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-infini-amber shrink-0" />
                  <span>RDSO Approved Alumina Thermit Rail Welding</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
                  <span>Visioncraft Metguard Anti-Corrosion Coating</span>
                </div>
              </div>

              {/* Direct Call / Inquiry Buttons */}
              <div className="pt-2 space-y-2">
                <a 
                  href="tel:+919920350663" 
                  className="w-full bg-infini-cyan text-infini-navy font-extrabold hover:bg-white text-center py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Engineers: +91 9920350663</span>
                </a>
                <Link 
                  href="/about/why-infini" 
                  className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-center py-3 rounded-xl text-xs font-semibold block transition-colors border border-slate-700"
                >
                  Learn About Our Engineering Promoters →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STAT COUNTER BANNER (INSPIRED BY WEST COAST MARINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="space-y-2 text-center border-r border-slate-100 last:border-none">
            <div className="w-12 h-12 rounded-2xl bg-infini-navy/10 text-infini-navy mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-infini-navy">100+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Turnkey Projects</div>
          </div>

          <div className="space-y-2 text-center border-r border-slate-100 last:border-none">
            <div className="w-12 h-12 rounded-2xl bg-infini-cyan/10 text-infini-cyan mx-auto flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-infini-navy">4+ States</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">MH, GA, GJ, AP & ME</div>
          </div>

          <div className="space-y-2 text-center border-r border-slate-100 last:border-none">
            <div className="w-12 h-12 rounded-2xl bg-infini-emerald/10 text-infini-emerald mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-infini-navy">RDSO</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Approved Welding</div>
          </div>

          <div className="space-y-2 text-center">
            <div className="w-12 h-12 rounded-2xl bg-infini-amber/10 text-infini-amber mx-auto flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-infini-navy">100%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">On-Time Execution</div>
          </div>

        </div>
      </section>

      {/* 3 CORE SECTORS FANCY BOXES (MMP GROUP & WEST COAST MARINE STYLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-infini-navy font-bold text-xs uppercase tracking-widest bg-infini-navy/10 px-4 py-1.5 rounded-full border border-infini-navy/20">
            OUR CORE SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-infini-navy">
            Engineered Excellence Across 3 Major Verticals
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From heavy ports & crane rail installations to tourism floating platforms and anti-corrosion protection, INFINI provides end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MECHANICAL SECTOR CARD */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/images/crane_rail.png" 
                alt="Mechanical Sector Crane Rail Fixtures" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infini-navy-dark via-infini-navy/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-infini-navy/80 border border-infini-cyan/40 flex items-center justify-center text-infini-cyan">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">MECHANICAL</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-infini-cyan/20 border border-infini-cyan/40 text-infini-cyan text-[10px] font-bold uppercase">
                  6 Services
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>Crane Rail Fixtures (Ports & Shipyards)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>Metguard Anti Corrosion (Supply & Apply)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>Steel & Aluminium Fabrication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>Land & Rail Survey Works</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>RDSO Approved Thermit Welding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-cyan shrink-0"></span>
                  <span>Railway Siding Works</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <Link 
                  href="/sectors/mechanical" 
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-infini-navy hover:text-white bg-slate-100 hover:bg-infini-navy py-3 rounded-xl transition-all duration-300"
                >
                  Explore Mechanical Sector
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CIVIL SECTOR CARD */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/images/civil_bridge.png" 
                alt="Civil Sector Construction Girders" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infini-navy-dark via-infini-navy/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-infini-emerald/80 border border-white/40 flex items-center justify-center text-white">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">CIVIL</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-infini-emerald/20 border border-infini-emerald/40 text-infini-emerald text-[10px] font-bold uppercase">
                  5 Services
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-emerald shrink-0"></span>
                  <span>Jetty Works & Repairs (Bollards, Fenders)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-emerald shrink-0"></span>
                  <span>Paver Block Works (Container Yards)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-emerald shrink-0"></span>
                  <span>Drainage Works Infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-emerald shrink-0"></span>
                  <span>Mass Concrete Works & Breakwaters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-emerald shrink-0"></span>
                  <span>RCC & PCC Pre-cast Girders</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <Link 
                  href="/sectors/civil" 
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-infini-navy hover:text-white bg-slate-100 hover:bg-infini-emerald py-3 rounded-xl transition-all duration-300"
                >
                  Explore Civil Sector
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* TOURISM SECTOR CARD */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/images/marine_jetty.png" 
                alt="Tourism Sector Floating Docks" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infini-navy-dark via-infini-navy/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-infini-amber/80 border border-white/40 flex items-center justify-center text-white">
                    <Ship className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">TOURISM</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-infini-amber/20 border border-infini-amber/40 text-infini-amber text-[10px] font-bold uppercase">
                  Marine Docks
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-amber shrink-0"></span>
                  <span>Floating Docks - Platforms - Jetties</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-amber shrink-0"></span>
                  <span>Seaplane Landing Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-amber shrink-0"></span>
                  <span>Naval Vessel Docking Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-infini-amber shrink-0"></span>
                  <span>Marine Equipment Hiring (Barges, Dredgers)</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <Link 
                  href="/sectors/tourism" 
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-infini-navy hover:text-white bg-slate-100 hover:bg-infini-amber py-3 rounded-xl transition-all duration-300"
                >
                  Explore Tourism Sector
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING PONTOONS & WATERFRONT ENGINEERING SECTION (WEST COAST MARINE UI STYLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-infini-amber font-bold text-xs uppercase tracking-widest bg-infini-amber/10 px-4 py-1.5 rounded-full border border-infini-amber/20">
              WATERFRONT & MARINA SOLUTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-infini-navy leading-snug">
              Modular Floating Pontoon Jetties & Docking Systems
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              INFINI Infra delivers engineered floating dock solutions designed for fluctuating tidal waters, passenger ferry terminals, luxury yacht berths, and naval defense installations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-infini-navy text-xs">HDPE & Aluminum Pontoons</h4>
                <p className="text-[11px] text-slate-500">Modular lightweight floating berths for fast deployment.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-infini-navy text-xs">Heavy Concrete Pontoons</h4>
                <p className="text-[11px] text-slate-500">High-stability breakwater floating jetties for heavy vessels.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/sectors/tourism/floating-docks-jetties" 
                className="bg-infini-navy text-white hover:bg-infini-amber font-extrabold px-7 py-3.5 rounded-full text-xs transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
              >
                <span>View Floating Dock Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl h-80 sm:h-96">
            <img 
              src="/images/floating_dock.png" 
              alt="Floating Dock Pontoon System" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-infini-navy-dark/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-infini-amber">Coastal Infrastructure</span>
              <h3 className="text-lg font-bold">Tidal Anchoring & Gangway Access Systems</h3>
            </div>
          </div>

        </div>
      </section>

      {/* METGUARD PARTNERSHIP SPOTLIGHT WITH IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-infini-cyan/30 shadow-2xl bg-gradient-to-r from-infini-navy-dark via-infini-navy to-[#0A1A4E]">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 text-white flex flex-col justify-center">
            <span className="text-infini-cyan text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              OFFICIAL CHANNEL PARTNER
            </span>
            <h2 className="text-3xl font-extrabold leading-snug">
              Visioncraft Industries Metguard (Protective Coating Substance)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              INFINI Infra operates as marketing & business development associates for Visioncraft Industries Metguard anti-corrosion protective coating substance across 4 key states in India (**Maharashtra, Gujarat, Goa, Andhra Pradesh**) and the **Middle East**.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-bold pt-2">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">Maharashtra</div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">Gujarat</div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">Goa</div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">Andhra Pradesh</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="bg-infini-cyan hover:bg-white text-infini-navy font-bold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-lg"
              >
                Inquire for Metguard Supply & Application
              </Link>
              <Link 
                href="/sectors/mechanical/anti-corrosion-coating" 
                className="text-xs text-slate-300 hover:text-white underline"
              >
                Read Product Specifications →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px]">
            <img 
              src="/images/metguard_coating.png" 
              alt="Metguard Anti Corrosion Coating Application" 
              className="w-full h-full object-cover object-center filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-infini-navy-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-infini-navy lg:to-transparent"></div>
          </div>

        </div>
      </section>

      {/* WHY INFINI INFRA HIGHLIGHTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-infini-navy">Why Choose INFINI Infra?</h2>
            <p className="text-slate-600 text-sm">Backed by experienced promoters, qualified engineers, and strict safety adherence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-infini-navy/10 text-infini-navy flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-infini-navy text-sm">Qualified Engineering Team</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Backed by technical experts and skilled manpower with extensive hands-on experience.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-infini-cyan/10 text-infini-cyan flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-infini-navy text-sm">Strict Safety Standards</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Zero-compromise safety protocols adherence on marine and high-risk construction sites.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-infini-emerald/10 text-infini-emerald flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-infini-navy text-sm">High-Quality Workmanship</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Precision execution for RDSO approved thermit rail welding, girders, and jetties.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-infini-amber/10 text-infini-amber flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-infini-navy text-sm">Timely Completion</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Punctual delivery schedule for public sector, ports, shipyards, and private contracts.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-infini-navy text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border border-infini-cyan/20">
          <h2 className="text-3xl font-extrabold">Ready to Partner on Your Next Infrastructure Project?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get in touch with our engineering leadership at NESCO IT Park, Goregaon East, Mumbai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-infini-cyan text-infini-navy font-extrabold px-8 py-3.5 rounded-full text-xs hover:bg-white transition-colors flex items-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Our Engineers
            </Link>
            <Link 
              href="/career" 
              className="border border-slate-400 text-slate-200 hover:text-white px-7 py-3.5 rounded-full text-xs font-semibold transition-colors"
            >
              Explore Career Opportunities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
