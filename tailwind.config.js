/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        hero: "3.75rem", // 60px
      },
      lineHeight: {
        hero: "1.05",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-[var(--accent)]",
    "text-[var(--accent)]",
    "text-[var(--text)]",
    "text-[var(--text-muted)]",
    "border-[var(--border)]",
    "bg-[var(--card-bg)]",
    "shadow-[var(--accent)]/30"
  ]
};
