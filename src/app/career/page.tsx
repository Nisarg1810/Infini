"use client";

import { useState } from "react";
import { Users, Briefcase, CheckCircle2, Send, Upload, Award } from "lucide-react";

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Civil & Marine Structural Engineer",
    experience: "1-3 Years",
    portfolioUrl: "",
    coverLetter: "",
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
            <Users className="w-3.5 h-3.5" />
            CAREERS & TALENT
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Join Our Engineering Team</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Build your career with INFINI Infrastructure & Engineering Pvt. Ltd. We offer exceptional growth opportunities across mechanical, civil, railway, and marine engineering sectors.
          </p>
        </div>
      </section>

      {/* Main Career Content & Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Why Join & Open Roles */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-infini-navy">Why Work at INFINI Infra?</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We empower our employees with cutting-edge engineering tools, safety protocols, and direct exposure to monumental infrastructure developments across India and the Middle East.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-infini-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-infini-navy text-xs">Hands-on Technical Exposure</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Work directly on floating jetties, thermit welding, and heavy crane rails.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-infini-emerald shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-infini-navy text-xs">Zero-Harm Safety Culture</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Strict safety protocols and continuous protective training.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Roles List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-infini-navy flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-infini-cyan" />
              Active Openings
            </h3>

            <div className="space-y-4">
              
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-cyan space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-infini-navy text-sm">Civil & Marine Structural Engineer</h4>
                    <span className="text-[11px] text-slate-500">Mumbai / On-Site Port Locations</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-infini-cyan/10 text-infini-cyan text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Experience in jetty construction, breakwater positioning, RCC girders, and dock repairs.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-emerald space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-infini-navy text-sm">Mechanical & Crane Rail Specialist</h4>
                    <span className="text-[11px] text-slate-500">Ports & Container Terminals</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-infini-emerald/10 text-infini-emerald text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Expertise in crane rail fixture installation, steel fabrication, and RDSO thermit welding.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-amber space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-infini-navy text-sm">Business Development Associate (Protective Coatings)</h4>
                    <span className="text-[11px] text-slate-500">MH, GA, GJ, AP & Middle East</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-infini-amber/10 text-infini-amber text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Client expansion for Metguard anti-corrosion coating substance across industrial and port accounts.</p>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-5">
          <div className="glass-card-dark p-8 rounded-3xl text-white border border-infini-cyan/30 shadow-2xl sticky top-24">
            <h3 className="text-xl font-bold text-white mb-1">Apply for a Position</h3>
            <p className="text-xs text-slate-300 mb-6">Submit your candidate profile directly to our HR team.</p>

            {submitted ? (
              <div className="bg-infini-emerald/20 border border-infini-emerald/40 text-white p-6 rounded-2xl text-center space-y-3">
                <Award className="w-12 h-12 text-infini-emerald mx-auto" />
                <h4 className="font-bold text-base">Application Received!</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Thank you for applying to INFINI Infrastructure & Engineering Pvt. Ltd. Our recruitment team will review your application and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="rahul@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Mobile *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Applying For Position</label>
                  <select 
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                  >
                    <option value="Civil & Marine Structural Engineer">Civil & Marine Structural Engineer</option>
                    <option value="Mechanical & Crane Rail Specialist">Mechanical & Crane Rail Specialist</option>
                    <option value="Business Development Associate">Business Development Associate (Coatings)</option>
                    <option value="Land & Rail Survey Specialist">Land & Rail Survey Specialist</option>
                    <option value="Other Technical / Skilled Role">Other Technical / Skilled Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Resume / LinkedIn Profile Link</label>
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/in/yourprofile or Drive Link" 
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({...formData, portfolioUrl: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Cover Letter / Experience Summary</label>
                  <textarea 
                    rows={3} 
                    placeholder="Briefly describe your engineering background..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-infini-cyan"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-infini-cyan text-infini-navy hover:bg-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
