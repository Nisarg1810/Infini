import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Explore INFINI Infrastructure & Engineering's project portfolio — floating jetties, crane rail installations, civil jetty works, mass concrete structures, and Metguard anti-corrosion coating applications.",
  openGraph: {
    title: "Project Gallery | INFINI Infrastructure & Engineering",
    description:
      "Browse our portfolio of completed engineering projects across ports, shipyards, railways, and coastal infrastructure in India and the Middle East.",
    images: [{ url: "/images/marine_jetty.png", width: 1200, height: 630, alt: "INFINI Infrastructure Project Gallery" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
