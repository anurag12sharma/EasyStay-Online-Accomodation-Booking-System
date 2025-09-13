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
        primary: '#3b82f6', // blue-500
        secondary: '#f7fafc', // gray-50
        accent: '#f59e42',   // orange-400
        surface: '#ffffff',
        muted: '#f1f5f9' // gray-100
      }
    }
  },
  plugins: [],
};
export default config;
