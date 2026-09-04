"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Globe, Clock } from "lucide-react";

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

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h1 className="section-heading text-white text-4xl sm:text-5xl">Contact Us</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Have a project requirement or inquiry? Connect with INFINI Infrastructure & Engineering Pvt. Ltd. at our Mumbai headquarters or send us a message directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left Column: Direct Contact Info & Address */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h2 className="section-heading text-2xl sm:text-3xl">Headquarters Information</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering leadership and project estimation teams are based at NESCO IT Park, Mumbai. We invite client representatives, port authorities, and industry partners to get in touch.
            </p>

            <div className="space-y-4 text-xs">
              
              {/* Address */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-[#00C2FF]">
                <div className="w-10 h-10 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-sm">Office Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    WeWork NESCO IT Park, Building 4, 10th Floor, North Wing, Western Express Highway, Goregaon East, Mumbai 400063.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-emerald-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-sm">Email Inquiry</h4>
                  <a href="mailto:info@infini-infra.com" className="text-[#0B1B4F] font-semibold hover:text-[#00C2FF] transition-colors block mt-1">
                    info@infini-infra.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-amber-500">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-sm">Direct Phone / Mobile</h4>
                  <div className="mt-1 space-y-0.5 font-semibold text-[#0B1B4F]">
                    <a href="tel:+919920350663" className="hover:text-amber-500 block">+91 9920350663</a>
                    <a href="tel:+917506696770" className="hover:text-amber-500 block">+91 7506696770</a>
                  </div>
                </div>
              </div>

              {/* Web Domain */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-[#0B1B4F]">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B4F]/10 text-[#0B1B4F] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-sm">Official Website</h4>
                  <a href="http://www.infini-infra.com" target="_blank" rel="noopener noreferrer" className="text-[#00C2FF] font-semibold hover:underline block mt-1">
                    www.infini-infra.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#0B1B4F]">Send Us a Direct Project Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Fill out the form below and our engineering team will respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500 text-[#0B1B4F] p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="font-extrabold text-lg">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for contacting INFINI Infrastructure & Engineering Pvt. Ltd. We have received your inquiry and will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Vijay Kataria" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="vijay@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Phone / Mobile *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9920350663" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Port Authority / Construction Co." 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Inquiry Sector / Requirement</label>
                  <select 
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                  >
                    <option value="Mechanical Sector">Mechanical Sector (Crane Rails, Welding, Fabrication)</option>
                    <option value="Metguard Anti-Corrosion Coating">Metguard Anti-Corrosion Coating (Supply & Apply)</option>
                    <option value="Civil Sector">Civil Sector (Jetty Construction, Girders, Concrete)</option>
                    <option value="Tourism Sector">Tourism Sector (Floating Docks, Seaplane Platforms)</option>
                    <option value="Marine Equipment Hiring">Marine Equipment Hiring (Barges, Dredgers, Boats)</option>
                    <option value="General Inquiry">General Partnership / Corporate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Project Details & Requirements *</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Please describe your project location, scope of work, timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-[#00C2FF] shadow-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B1B4F] text-white hover:bg-[#00C2FF] hover:text-[#0B1B4F] font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>
        </div>

      </section>

      {/* Interactive Live Google Map Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B4F] text-white rounded-3xl p-5 sm:p-8 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-bold text-lg sm:text-xl text-[#00C2FF] flex items-center gap-2">
              <MapPin className="w-5 h-5 shrink-0" />
              Mumbai Headquarters Location
            </h3>
            <span className="text-xs text-slate-300">WeWork NESCO IT Park, Goregaon East, Mumbai 400063</span>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner">
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
