import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media, News & Certifications",
  description:
    "Latest news, press releases, project milestones, and accreditations of INFINI Infrastructure & Engineering Pvt. Ltd. including RDSO Approved Alumina Thermit Welding and Visioncraft Metguard Channel Partnership.",
  openGraph: {
    title: "Media & News | INFINI Infrastructure & Engineering",
    description:
      "Corporate announcements, project milestones, RDSO welding approvals, and Metguard partnership news from INFINI Infrastructure & Engineering Pvt. Ltd.",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "INFINI Media and News" }],
  },
};

export default function MediaNewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
