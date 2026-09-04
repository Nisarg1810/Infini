import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Opportunities",
  description:
    "Join INFINI Infrastructure & Engineering Pvt. Ltd. — We are actively hiring Civil & Marine Engineers, Crane Rail Specialists, and Business Development Associates across Mumbai, India, and Middle East.",
  openGraph: {
    title: "Careers at INFINI Infrastructure & Engineering | Engineering Jobs Mumbai",
    description:
      "Explore career openings in marine civil engineering, crane rail installation, RDSO thermit welding, and protective coating sales. Apply directly to our Mumbai engineering team.",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "Careers at INFINI Infrastructure Mumbai" }],
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
