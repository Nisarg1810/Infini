import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.infini-infra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INFINI Infrastructure & Engineering Pvt. Ltd. | Turnkey Engineering Contractor",
    template: "%s | INFINI Infrastructure & Engineering",
  },
  description:
    "Specialized turnkey engineering contractor in Mumbai specializing in Mechanical, Civil Construction, Marine Floating Docks & Jetties, Crane Rail Fixtures, RDSO Thermit Welding, and Metguard Anti-Corrosion Coating across India & Middle East.",
  keywords: [
    "turnkey engineering contractor Mumbai",
    "crane rail fixtures installation",
    "floating dock jetty supplier India",
    "RDSO thermit welding contractor",
    "Metguard anti-corrosion coating",
    "marine infrastructure contractor",
    "civil jetty construction Mumbai",
    "seaplane platform India",
    "port engineering services",
    "INFINI Infrastructure Engineering",
  ],
  authors: [{ name: "INFINI Infrastructure & Engineering Pvt. Ltd.", url: siteUrl }],
  creator: "INFINI Infrastructure & Engineering Pvt. Ltd.",
  publisher: "INFINI Infrastructure & Engineering Pvt. Ltd.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "INFINI Infrastructure & Engineering",
    title: "INFINI Infrastructure & Engineering Pvt. Ltd. | Turnkey Engineering Contractor",
    description:
      "Specialized turnkey engineering contractor in Mumbai — Crane Rails, Floating Docks, RDSO Welding, Metguard Coating & Civil Infrastructure across India & Middle East.",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "INFINI Infrastructure & Engineering – Marine & Civil Contractor Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFINI Infrastructure & Engineering Pvt. Ltd.",
    description:
      "Specialized turnkey engineering contractor — Crane Rails, Floating Docks, RDSO Welding & Metguard Coating across India & Middle East.",
    images: ["/images/hero_bg.png"],
  },
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased ${cormorant.variable} ${inter.variable}`}>
        <ScrollProgressBar />
        <Navbar />
        <Breadcrumb />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />

        {/* ─── FLOATING WHATSAPP BUTTON ─── */}
        <a
          href="https://wa.me/919920350663?text=Hello%20INFINI%20Infrastructure%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
          aria-label="Chat with INFINI Infrastructure on WhatsApp"
        >
          {/* Speech Bubble — hidden by default, shown on hover */}
          <div className="
            relative bg-white text-slate-800 text-xs font-medium px-4 py-2.5 rounded-2xl
            shadow-xl border border-slate-100 whitespace-nowrap
            opacity-0 translate-x-2 pointer-events-none
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 ease-out
          ">
            💬 Chat on <span className="font-bold text-[#25D366]">WhatsApp</span>
            <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-0 h-0
              border-t-[7px] border-t-transparent
              border-b-[7px] border-b-transparent
              border-l-[7px] border-l-white" />
          </div>

          {/* Button */}
          <div className="relative w-14 h-14 shrink-0">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
            {/* Main button */}
            <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.998 2.003c-5.514 0-9.995 4.48-9.995 9.994 0 1.762.459 3.487 1.331 4.999l-1.33 4.862 4.987-1.308a9.963 9.963 0 004.664 1.16h.004c5.514 0 9.994-4.481 9.994-9.994 0-5.514-4.48-9.994-9.994-9.994l-.661.281zm0 18.307h-.003a8.289 8.289 0 01-4.224-1.157l-.303-.18-3.14.823.838-3.062-.197-.314a8.273 8.273 0 01-1.268-4.416c0-4.576 3.726-8.302 8.302-8.302 4.575 0 8.302 3.726 8.302 8.302 0 4.575-3.727 8.302-8.302 8.302l-.005.004z"/>
              </svg>
            </div>
          </div>
        </a>

      </body>
    </html>
  );
}
