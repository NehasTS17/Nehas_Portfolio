/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Instagram Color Theme
        primary: {
          50: '#fef7ff',    // Very light purple
          100: '#fceeff',   // Light purple
          200: '#f5d4ff',   // Lighter purple
          300: '#e8b4ff',   // Light purple
          400: '#d68dff',   // Medium light purple
          500: '#833ab4',   // Instagram purple
          600: '#6b2d91',   // Darker purple
          700: '#5a2477',   // Dark purple
          800: '#4a1d5f',   // Very dark purple
          900: '#3d174f',   // Deep purple
        },
        secondary: {
          50: '#fff5f5',    // Very light red
          100: '#ffeaea',   // Light red
          200: '#fecaca',   // Lighter red
          300: '#fca5a5',   // Light red
          400: '#f87171',   // Medium light red
          500: '#fd1d1d',   // Instagram red
          600: '#dc2626',   // Darker red
          700: '#b91c1c',   // Dark red
          800: '#991b1b',   // Very dark red
          900: '#7f1d1d',   // Deep red
        },
        accent: {
          50: '#fffef5',    // Very light orange
          100: '#fffce8',   // Light orange
          200: '#fef3c7',   // Lighter orange
          300: '#fde68a',   // Light orange
          400: '#fcd34d',   // Medium light orange
          500: '#fcb045',   // Instagram orange
          600: '#f59e0b',   // Darker orange
          700: '#d97706',   // Dark orange
          800: '#b45309',   // Very dark orange
          900: '#92400e',   // Deep orange
        },
        // Instagram backgrounds
        light: {
          bg: '#ffffff',    // White background
          surface: '#fafafa', // Light gray surface
          border: '#dbdbdb',  // Light border
          text: '#262626',   // Dark text
          'text-secondary': '#8e8e8e', // Secondary text
        },
        dark: {
          bg: '#000000',     // Black background
          surface: '#121212', // Dark surface
          card: '#1a1a1a',   // Card background
          border: '#262626', // Dark border
          text: '#ffffff',   // White text
          'text-secondary': '#a8a8a8', // Secondary text
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
