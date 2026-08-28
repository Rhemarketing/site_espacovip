import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta Gold / Champagne Sofisticado
        gold: {
          50: "#FAF7F2",
          100: "#F4EFE4",
          200: "#E9DCBF",
          300: "#DEC79A",
          400: "#D4AF37",
          500: "#C6A87D", // Primária principal
          600: "#B39255",
          700: "#94763C",
          800: "#6B542B",
          900: "#3D2F18",
          950: "#221A0C",
        },
        vip: {
          gold: "#C6A87D",
          "gold-light": "#E9DCBF",
          "gold-dark": "#94763C",
          "gold-glow": "rgba(198, 168, 125, 0.25)",
        },
        // Paleta Dark Slate Profundo & Corporativo
        dark: {
          base: "#070A10",
          card: "#0D131F",
          surface: "#121A2B",
          hover: "#18233A",
          border: "#1E2C46",
          muted: "#334155",
        },
        // Paleta Tech & Saúde (Secundárias)
        tech: {
          cyan: "#0EA5E9",
          emerald: "#10B981",
          purple: "#8B5CF6",
        },
        // Tons de texto neutros
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        "gold-sm": "0 2px 10px rgba(198, 168, 125, 0.15)",
        "gold-md": "0 4px 20px rgba(198, 168, 125, 0.25)",
        "gold-lg": "0 8px 32px rgba(198, 168, 125, 0.35)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(198, 168, 125, 0.2)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DFBE82 0%, #C6A87D 50%, #9E7B45 100%)",
        "gold-text-gradient": "linear-gradient(135deg, #FFF1DB 0%, #C6A87D 50%, #9E7B45 100%)",
        "dark-radial": "radial-gradient(circle at top, #121A2B 0%, #070A10 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(18, 26, 43, 0.8) 0%, rgba(13, 19, 31, 0.95) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
