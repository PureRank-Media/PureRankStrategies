/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        'dark-primary': '#121212',      // Background
        'dark-secondary': '#1e1e1e',    // Surface/Card
        'dark-text-primary': '#f8f8f2',  // Primary Text
        'dark-text-secondary': '#a8a8a8',// Secondary Text
        'dark-accent-purple': '#bb86fc', // Purple Accent
        'dark-accent-blue': '#03dac6',   // Blue Accent
      },
    },
  },

  plugins: [],
}