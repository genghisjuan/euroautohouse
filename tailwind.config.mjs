export default {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./config/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        background: "var(--bg)",
        foreground: "var(--fg)",
      },
      fontFamily: {
        display: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: [],
};
