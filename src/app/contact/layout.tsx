import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with INFINI Infrastructure & Engineering Pvt. Ltd. at our Mumbai headquarters at WeWork NESCO IT Park, Goregaon East. Submit project inquiries for crane rails, floating docks, jetty works, and anti-corrosion coating.",
  openGraph: {
    title: "Contact INFINI Infrastructure & Engineering | Mumbai Headquarters",
    description:
      "Reach our engineering team for project estimations, site surveys, and technical inquiries. Based at WeWork NESCO IT Park, Goregaon East, Mumbai 400063.",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "Contact INFINI Infrastructure Mumbai" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
