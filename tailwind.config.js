/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // ← penting agar Tailwind baca semua file JSX
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
          },
      },
    },
    plugins: [],
  };
  