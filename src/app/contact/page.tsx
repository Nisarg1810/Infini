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
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/10 border border-infini-cyan/30 text-infini-cyan text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Have a project requirement or inquiry? Connect with INFINI Infrastructure & Engineering Pvt. Ltd. at our Mumbai headquarters or send us a message directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Contact Info & Address */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-infini-navy">Headquarters Information</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our engineering leadership and project estimation teams are based at NESCO IT Park, Mumbai. We invite client representatives, port authorities, and industry partners to get in touch.
            </p>

            <div className="space-y-4 text-xs">
              
              {/* Address */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-infini-cyan">
                <div className="w-10 h-10 rounded-xl bg-infini-cyan/10 text-infini-cyan flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-infini-navy text-sm">Office Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    WeWork NESCO IT Park, Building 4, 10th Floor, North Wing, Western Express Highway, Goregaon East, Mumbai 400063.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-infini-emerald">
                <div className="w-10 h-10 rounded-xl bg-infini-emerald/10 text-infini-emerald flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-infini-navy text-sm">Email Inquiry</h4>
                  <a href="mailto:info@infini-infra.com" className="text-infini-navy font-semibold hover:text-infini-cyan transition-colors block mt-1">
                    info@infini-infra.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-infini-amber">
                <div className="w-10 h-10 rounded-xl bg-infini-amber/10 text-infini-amber flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-infini-navy text-sm">Direct Phone / Mobile</h4>
                  <div className="mt-1 space-y-0.5 font-semibold text-infini-navy">
                    <a href="tel:+919920350663" className="hover:text-infini-amber block">+91 9920350663</a>
                    <a href="tel:+917506696770" className="hover:text-infini-amber block">+91 7506696770</a>
                  </div>
                </div>
              </div>

              {/* Web Domain */}
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-infini-navy">
                <div className="w-10 h-10 rounded-xl bg-infini-navy/10 text-infini-navy flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-infini-navy text-sm">Official Website</h4>
                  <a href="http://www.infini-infra.com" target="_blank" rel="noopener noreferrer" className="text-infini-cyan font-semibold hover:underline block mt-1">
                    www.infini-infra.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-infini-navy">Send Us a Direct Project Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Fill out the form below and our engineering team will respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-infini-emerald/10 border border-infini-emerald text-infini-navy p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-infini-emerald mx-auto" />
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. HDFC Bank Ltd / Port Authority" 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Inquiry Sector / Requirement</label>
                  <select 
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-infini-cyan shadow-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-infini-navy text-white hover:bg-infini-cyan hover:text-infini-navy font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>
        </div>

      </section>

      {/* Embedded Location Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-infini-cyan flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Mumbai Headquarters Location
            </h3>
            <span className="text-xs text-slate-400">Goregaon East, Mumbai</span>
          </div>
          <div className="w-full h-64 bg-slate-800 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-slate-700 space-y-2">
            <Building2 className="w-12 h-12 text-infini-cyan" />
            <p className="font-bold text-sm text-white">WeWork NESCO IT Park, Building 4, 10th Floor, North Wing</p>
            <p className="text-xs text-slate-400">Western Express Highway, Goregaon East, Mumbai 400063</p>
          </div>
        </div>
      </section>

    </div>
  );
}
