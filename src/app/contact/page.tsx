"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock, ExternalLink, ShieldCheck, Building2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Mechanical Sector",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters Address",
      content: "WeWork NESCO IT Park, Building 4, 10th Floor, North Wing, Western Express Highway, Goregaon East, Mumbai 400063",
      actionText: "Get Directions",
      actionHref: "https://maps.google.com/?q=WeWork+Nesco+IT+Park+Mumbai",
      color: "text-[#00C2FF]",
      bgColor: "bg-[#00C2FF]/10 border-[#00C2FF]/20",
      borderColor: "hover:border-[#00C2FF]",
    },
    {
      icon: Mail,
      title: "Official Email Inquiry",
      content: "info@infini-infra.com",
      actionText: "Send Mail",
      actionHref: "mailto:info@infini-infra.com",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      borderColor: "hover:border-emerald-500",
    },
    {
      icon: Phone,
      title: "Direct Engineering Hotline",
      content: "+91 9920350663 / +91 7506696770",
      actionText: "Call Now",
      actionHref: "tel:+919920350663",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      borderColor: "hover:border-amber-500",
    },
    {
      icon: Globe,
      title: "Official Corporate Portal",
      content: "www.infini-infra.com",
      actionText: "Visit Portal",
      actionHref: "https://www.infini-infra.com",
      color: "text-[#0B1B4F]",
      bgColor: "bg-[#0B1B4F]/10 border-[#0B1B4F]/20",
      borderColor: "hover:border-[#0B1B4F]",
    },
  ];

  return (
    <div className="py-10 sm:py-14 space-y-12 sm:space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h1 className="section-heading text-white text-3xl sm:text-5xl font-extrabold tracking-tight">
            Connect With Our Engineering Team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Have a project requirement or estimation inquiry? Contact INFINI Infrastructure &amp; Engineering Pvt. Ltd. at our Mumbai headquarters or send a direct technical inquiry below.
          </p>

          {/* Quick Contact Badges */}
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-300 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00C2FF]" />
              <span>Response Time: &lt; 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Headquarters: Goregaon East, Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Coverage: Coastal India &amp; Middle East</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT SECTION (INFO + FORM) ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="section-badge mb-3">Headquarters</span>
              <h2 className="section-heading text-2xl sm:text-3xl mb-3">Contact Information</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our project estimation, client relationship, and engineering leadership teams are headquartered at NESCO IT Park, Mumbai.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComp = info.icon;
                return (
                  <div
                    key={info.title}
                    className={`glass-card p-5 rounded-2xl border border-slate-200/90 transition-all duration-300 ${info.borderColor} hover:-translate-y-1 flex items-start gap-4 group`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${info.bgColor} flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                      <IconComp className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-[#0B1B4F] text-xs sm:text-sm">{info.title}</h4>
                        {info.actionHref && (
                          <a
                            href={info.actionHref}
                            target={info.actionHref.startsWith("http") ? "_blank" : undefined}
                            rel={info.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-[11px] font-semibold text-[#00C2FF] hover:underline inline-flex items-center gap-1 shrink-0"
                          >
                            {info.actionText} <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed break-words font-medium">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Working Hours Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/10 text-[#0B1B4F] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <h5 className="font-bold text-[#0B1B4F]">Business Operating Hours</h5>
                <p className="text-slate-500 mt-0.5">Monday – Saturday: 9:30 AM – 6:30 PM (IST)</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 hover:border-[#00C2FF]/40 transition-all duration-300">
              <div>
                <span className="section-badge mb-2">Direct Inquiry</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B4F]">Send Us a Project Requirement</h3>
                <p className="text-xs text-slate-500 mt-1">Fill in details about your project scope, location, and requirements. Our engineers will get back to you promptly.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/50 text-[#0B1B4F] p-8 rounded-2xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                  <h4 className="font-extrabold text-lg">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to INFINI Infrastructure &amp; Engineering Pvt. Ltd. Our technical estimation team has received your message and will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#0B1B4F] border-b-2 border-[#00C2FF] hover:text-[#00C2FF] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Vijay Kataria" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="vijay@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Phone / Mobile *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 9920350663" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Company / Organization</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Port Authority / Construction Co." 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1.5">Inquiry Sector / Service *</label>
                    <select 
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                      className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm font-medium"
                    >
                      <option value="Mechanical Sector">Mechanical Sector (Crane Rails, Welding, Fabrication)</option>
                      <option value="Metguard Anti-Corrosion Coating">Metguard Anti-Corrosion Coating (Supply &amp; Apply)</option>
                      <option value="Civil Sector">Civil Sector (Jetty Construction, Girders, Concrete)</option>
                      <option value="Tourism Sector">Tourism Sector (Floating Docks, Seaplane Platforms)</option>
                      <option value="Marine Equipment Hiring">Marine Equipment Hiring (Barges, Dredgers, Boats)</option>
                      <option value="General Inquiry">General Partnership / Corporate Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1.5">Project Scope &amp; Details *</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Please describe project location, technical specs, scope of work, timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/90 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#0B1B4F] text-white hover:bg-[#00C2FF] hover:text-[#0B1B4F] font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Technical Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ─── LIVE LOCATION MAP SECTION ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B4F] text-white rounded-3xl p-5 sm:p-8 border border-slate-800 space-y-4 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Headquarters Location
              </span>
              <h3 className="font-extrabold text-xl text-white flex items-center gap-2">
                WeWork NESCO IT Park, Goregaon East, Mumbai
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=WeWork+Nesco+IT+Park+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00C2FF] text-[#0B1B4F] font-bold px-5 py-2.5 rounded-full text-xs hover:bg-white transition-all duration-300 shrink-0 shadow-md"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner">
            <iframe
              title="INFINI Infrastructure Mumbai Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3787723927645!2d72.85584857595462!3d19.145811749788096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d2f9e42501%3A0xb35a3962b8004f14!2sWeWork%20Nesco%20IT%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1]"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
