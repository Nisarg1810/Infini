"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Users, Briefcase, CheckCircle2, Send, Upload, Award, AlertCircle } from "lucide-react";

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

  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; phone?: boolean }>({});

  const validateEmail = (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) return "Email is required";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "Valid email required (e.g. name@company.com)";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    const trimmed = phone.trim();
    if (!trimmed) return "Mobile is required";
    const cleaned = trimmed.replace(/[\s\-\(\)\+]/g, "");
    if (!/^\d+$/.test(cleaned)) {
      return "Digits only";
    }
    if (cleaned.length < 10 || cleaned.length > 15) {
      return "Valid 10-digit mobile required";
    }
    return "";
  };

  const handleInputChange = (field: "email" | "phone", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = field === "email" ? validateEmail(value) : validatePhone(value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field: "email" | "phone") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = field === "email" ? validateEmail(formData.email) : validatePhone(formData.phone);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);

    setTouched({ email: true, phone: true });
    setErrors({ email: emailErr, phone: phoneErr });

    if (emailErr || phoneErr) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            CAREERS &amp; TALENT
          </div>
          <h1 className="section-heading text-white text-4xl sm:text-5xl font-extrabold tracking-tight">Join Our Engineering Team</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Build your career with INFINI Infrastructure &amp; Engineering Pvt. Ltd. We offer exceptional growth opportunities across mechanical, civil, railway, and marine engineering sectors.
          </p>
        </div>
      </section>

      {/* Main Career Content & Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Why Join & Open Roles */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0B1B4F]">Why Work at INFINI Infra?</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We empower our employees with cutting-edge engineering tools, safety protocols, and direct exposure to monumental infrastructure developments across India and the Middle East.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00C2FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-xs">Hands-on Technical Exposure</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Work directly on floating jetties, thermit welding, and heavy crane rails.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B1B4F] text-xs">Zero-Harm Safety Culture</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Strict safety protocols and continuous protective training.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Roles List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#00C2FF]" />
              Active Openings
            </h3>

            <div className="space-y-4">
              
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0B1B4F] text-sm">Civil &amp; Marine Structural Engineer</h4>
                    <span className="text-[11px] text-slate-500">Mumbai / On-Site Port Locations</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#00C2FF]/10 text-[#00C2FF] text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Experience in jetty construction, breakwater positioning, RCC girders, and dock repairs.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0B1B4F] text-sm">Mechanical &amp; Crane Rail Specialist</h4>
                    <span className="text-[11px] text-slate-500">Ports &amp; Container Terminals</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Expertise in crane rail fixture installation, steel fabrication, and RDSO thermit welding.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0B1B4F] text-sm">Business Development Associate (Protective Coatings)</h4>
                    <span className="text-[11px] text-slate-500">MH, GA, GJ, AP &amp; Middle East</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-bold">Full Time</span>
                </div>
                <p className="text-xs text-slate-600">Client expansion for Metguard anti-corrosion coating substance across industrial and port accounts.</p>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-5">
          <div className="glass-card-dark p-8 rounded-3xl text-white border border-[#00C2FF]/30 shadow-2xl sticky top-24">
            <h3 className="text-xl font-bold text-white mb-1">Apply for a Position</h3>
            <p className="text-xs text-slate-300 mb-6">Submit your candidate profile directly to our HR team.</p>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-white p-6 rounded-2xl text-center space-y-3">
                <Award className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base">Application Received!</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Thank you for applying to INFINI Infrastructure &amp; Engineering Pvt. Ltd. Our recruitment team will review your application and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", position: "Civil & Marine Structural Engineer", experience: "1-3 Years", portfolioUrl: "", coverLetter: "" });
                    setErrors({});
                    setTouched({});
                  }}
                  className="mt-2 text-xs font-bold text-[#00C2FF] underline hover:text-white transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
                
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00C2FF]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="rahul@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-white focus:outline-none transition-all ${
                        errors.email ? "border-red-400 focus:border-red-400" : "border-slate-700 focus:border-[#00C2FF]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[10px] font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Mobile *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-white focus:outline-none transition-all ${
                        errors.phone ? "border-red-400 focus:border-red-400" : "border-slate-700 focus:border-[#00C2FF]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-[10px] font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Applying For Position</label>
                  <select 
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00C2FF]"
                  >
                    <option value="Civil & Marine Structural Engineer">Civil &amp; Marine Structural Engineer</option>
                    <option value="Mechanical & Crane Rail Specialist">Mechanical &amp; Crane Rail Specialist</option>
                    <option value="Business Development Associate">Business Development Associate (Coatings)</option>
                    <option value="Land & Rail Survey Specialist">Land &amp; Rail Survey Specialist</option>
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
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00C2FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Cover Letter / Experience Summary</label>
                  <textarea 
                    rows={3} 
                    placeholder="Briefly describe your engineering background..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00C2FF]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#00C2FF] text-[#0B1B4F] hover:bg-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99]"
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
