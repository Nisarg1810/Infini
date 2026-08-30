import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFINI Infrastructure & Engineering Pvt. Ltd. | Turnkey Engineering",
  description: "Specialized engineering contractor for Mechanical, Civil Construction, Marine Floating Docks, Crane Rails, and Metguard Anti-Corrosion Coating.",
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* FLOATING DIRECT CONTACT & WHATSAPP ACTION BUTTONS (BOTTOM RIGHT CORNER) */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-center">
          
          {/* WHATSAPP ACTION BUTTON */}
          <a
            href="https://wa.me/919920350663?text=Hello%20INFINI%20Infrastructure%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-[#25D366]/30 group relative"
            aria-label="Chat with INFINI Infrastructure on WhatsApp"
            title="Chat on WhatsApp (+91 9920350663)"
          >
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M12.031 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.764.459 3.491 1.332 5.006l-1.366 4.997 5.116-1.342c1.46.797 3.111 1.218 4.792 1.218 5.514 0 9.996-4.483 9.996-9.997 0-5.514-4.482-9.997-9.996-9.997zm5.834 14.161c-.244.688-1.428 1.312-1.986 1.366-.523.051-1.205.075-3.486-.867-2.917-1.206-4.79-4.174-4.935-4.368-.145-.195-1.183-1.573-1.183-2.999 0-1.426.748-2.128 1.014-2.418.266-.29.58-.363.774-.363.194 0 .387.002.557.01.182.008.425-.069.664.507.244.588.826 2.016.898 2.161.073.146.121.316.024.511-.097.195-.146.316-.29.486-.146.17-.306.38-.437.51-.146.146-.299.305-.129.596.17.291.758 1.25 1.626 2.023 1.116.994 2.059 1.303 2.35 1.448.291.146.461.122.631-.073.17-.195.728-.849.922-1.14.195-.291.388-.243.655-.146.267.097 1.699.801 1.99 9.46.291.146.486.219.558.34.073.122.073.704-.171 1.392z"/>
            </svg>
            
            {/* Tooltip on hover */}
            <span className="absolute right-16 bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Chat on WhatsApp
            </span>
          </a>

          {/* CALL ACTION BUTTON */}
          <a
            href="tel:+919920350663"
            className="w-14 h-14 rounded-full bg-infini-cyan text-infini-navy flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 ring-4 ring-infini-cyan/30 group relative"
            aria-label="Call INFINI Engineers: +91 9920350663"
            title="Call +91 9920350663"
          >
            <Phone className="w-6 h-6" />
            
            {/* Tooltip on hover */}
            <span className="absolute right-16 bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Call +91 9920350663
            </span>
          </a>

        </div>
      </body>
    </html>
  );
}
