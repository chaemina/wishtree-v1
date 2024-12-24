import type { Config } from "tailwindcss";

export default {
  content: [
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  safelist: [
    'translate-x-[-10px]',
    'translate-x-[-30px]',
    'translate-x-[-70px]',
    'translate-x-[-90px]',
    'translate-x-[30px]',
    'translate-x-[40px]',
    'translate-x-[50px]',
    'translate-x-[80px]',
    'translate-x-[100px]',
    'translate-x-[140px]',
    'translate-x-[200px]',
    'translate-x-[250px]',
    'translate-x-[300px]',
    'translate-x-[700px]',
    'translate-x-[710px]',
    'translate-x-[650px]',
    'translate-x-[-100px]',
    'translate-x-[-120px]',
    'translate-x-[-150px]',
    'translate-x-[-180px]',
    'translate-x-[-300px]',
    'translate-x-[-700px]',
    'translate-x-[-450px]',

    'translate-y-[10px]',
    'translate-y-[20px]',
    'translate-y-[120px]',
    'translate-y-[150px]',
    'translate-y-[200px]',
    'translate-y-[220px]',
    'translate-y-[240px]',
    'translate-y-[250px]',
    'translate-y-[280px]',
    'translate-y-[300px]',
    'translate-y-[330px]',
    'translate-y-[350px]',
    'translate-y-[380px]',
    'translate-y-[400px]',
    'translate-y-[450px]',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myRed : "#D85B59",
        myYellow: "#FEE500",
        bgCard : "#FDCD69"
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
