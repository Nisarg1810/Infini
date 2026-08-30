import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        infini: {
          navy: "#0B1B4F",
          "navy-dark": "#061033",
          "navy-light": "#162B75",
          cyan: "#00C2FF",
          "cyan-glow": "#38BDF8",
          emerald: "#22C55E",
          amber: "#F97316",
          slate: "#F8FAFC",
        },
        surface: {
          base: "#000000",
          dark: "#0A0A0A",
          raised: "#0B1B4F",
          accent: "#00C2FF",
        },
        tokenText: {
          primary: "#FFFFFF",
          secondary: "#333333",
          tertiary: "#0A0A0A",
          inverse: "#3452FF",
        }
      },
      fontSize: {
        "xs": ["12px", "18px"],
        "sm": ["14px", "22px"],
        "md": ["15px", "24px"],
        "base": ["16px", "32px"],
        "lg": ["16px", "26px"],
        "xl": ["20px", "30px"],
        "2xl": ["22px", "32px"],
        "3xl": ["25.5px", "36px"],
        "4xl": ["33.6px", "44px"],
      },
      spacing: {
        "token-1": "3px",
        "token-2": "4px",
        "token-3": "6px",
        "token-4": "7px",
        "token-5": "8px",
        "token-6": "10px",
        "token-7": "12px",
        "token-8": "13px",
      },
      borderRadius: {
        "token-xs": "4px",
        "token-pill": "200px",
      },
      transitionDuration: {
        "instant": "200ms",
        "fast": "300ms",
        "normal": "450ms",
        "slow": "550ms",
        "slower": "650ms",
      },
      boxShadow: {
        "token-raised": "rgba(0, 0, 0, 0.25) 0px 20px 45px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
