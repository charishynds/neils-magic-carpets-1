import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "hsl(150 30% 25%)",
          dark: "hsl(150 35% 16%)",
          light: "hsl(150 25% 33%)",
          muted: "hsl(150 15% 96%)",
        },
        rose: {
          DEFAULT: "hsl(338 40% 70%)",
          light: "hsl(338 35% 80%)",
        },
      },
      screens: {
        nav: "900px",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 50s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
