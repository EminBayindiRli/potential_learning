/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-green)",
        "primary-light": "var(--primary-green-light)",
        "primary-dark": "var(--primary-green-dark)",
        accent: "var(--accent-green)",
        background: "var(--background-white)",
        section: "var(--section-background)",
        subtle: "var(--subtle-green)",
        "neutral-black": "var(--neutral-black)",
        "text-gray": "var(--text-gray)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      borderRadius: {
        card: "12px",
        "card-lg": "24px",
        button: "16px",
        badge: "9999px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      fontSize: {
        "heading-1": ["72px", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "heading-2": ["60px", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        "heading-3": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-4": ["36px", { lineHeight: "1.25" }],
        "heading-5": ["30px", { lineHeight: "1.3" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 30px rgba(0,0,0,0.08)",
        "card-lg": "0 20px 40px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(90, 125, 58, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
