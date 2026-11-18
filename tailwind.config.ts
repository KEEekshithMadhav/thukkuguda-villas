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
        offwhite: "#F7F6F2",
        stone: "#E5E1D8",
        softgrey: "#D2D1CC",
        charcoal: "#30302E",
        taupe: "#A69B8B",
        white: "#FFFFFF",
        // Keep these for any legacy references during transition
        forest: "#0B3D2E",
        ivory: "#F7F6F2",
        gold: "#A69B8B",
        beige: "#E5E1D8",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
