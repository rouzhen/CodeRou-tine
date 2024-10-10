/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        2: '2px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        silkscreen: ['var(--font-silkscreen)'],
        sixtyfour: ['var(--font-sixtyfour)'],
        raleway: ['var(--font-raleway)'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '500px',
        md: '628px',
        lg: '884px',
        xl: '1140px',
        '2xl': '1296px',
      },
    },
  },
  plugins: [],
};
