import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

        {/* FLOATING WHATSAPP BUTTON WITH SPEECH BUBBLE */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          
          {/* Speech bubble tooltip */}
          <a
            href="https://wa.me/919920350663?text=Hello%20INFINI%20Infrastructure%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            aria-label="Chat with INFINI Infrastructure on WhatsApp"
          >
            {/* Bubble label */}
            <div className="relative bg-white text-slate-700 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 whitespace-nowrap">
              Need Help? <span className="font-bold text-slate-900">Chat with us</span>
              {/* Tail pointing right */}
              <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white" />
            </div>

            {/* WhatsApp circle button */}
            <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-[#25D366]/30 shrink-0">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.764.459 3.491 1.332 5.006l-1.366 4.997 5.116-1.342c1.46.797 3.111 1.218 4.792 1.218 5.514 0 9.996-4.483 9.996-9.997 0-5.514-4.482-9.997-9.996-9.997zm5.834 14.161c-.244.688-1.428 1.312-1.986 1.366-.523.051-1.205.075-3.486-.867-2.917-1.206-4.79-4.174-4.935-4.368-.145-.195-1.183-1.573-1.183-2.999 0-1.426.748-2.128 1.014-2.418.266-.29.58-.363.774-.363.194 0 .387.002.557.01.182.008.425-.069.664.507.244.588.826 2.016.898 2.161.073.146.121.316.024.511-.097.195-.146.316-.29.486-.146.17-.306.38-.437.51-.146.146-.299.305-.129.596.17.291.758 1.25 1.626 2.023 1.116.994 2.059 1.303 2.35 1.448.291.146.461.122.631-.073.17-.195.728-.849.922-1.14.195-.291.388-.243.655-.146.267.097 1.699.801 1.99.946.291.146.486.219.558.34.073.122.073.704-.171 1.392z"/>
              </svg>
            </div>
          </a>

        </div>

      </body>
    </html>
  );
}
