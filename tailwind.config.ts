import type { Config } from "tailwindcss";

// Конфигурация Tailwind CSS для проекта
const config: Config = {
  // Указываем где искать классы Tailwind
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Кастомные цвета для темной темы
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
