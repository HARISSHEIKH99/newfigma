import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // screens:{
      //   'xs':'480px',
      //    'sm': '640',
      //    'md': '768',
      //    'lg': '1024',
      //    'xl': '1280',
      //    '2xl': '1536',
         
      // },


    },
  },
  plugins: [],
};
export default config;
