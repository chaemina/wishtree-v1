import type { Config } from "tailwindcss";

export default {
  content: [
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  safelist: [
    'translate-x-[300px]',
    'translate-y-[10px]',
    'translate-x-[-300px]',
    'translate-y-[120px]',
    'translate-x-[-250px]',
    'translate-y-[300px]',
    'translate-x-[250px]',
    'translate-y-[400px]',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myRed : "#D85B59",
        myYellow: "#FEE500",
      },
      screens: {
        'mobile': '200px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '760px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  important : true,
} satisfies Config;
