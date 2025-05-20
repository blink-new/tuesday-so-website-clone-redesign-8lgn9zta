/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        tuesday: {
          blue: '#5271F1',
          purple: '#7141EF',
          gray: '#7B7C85',
          darkBlue: '#101428',
          light: '#FAFBFF',
          dark: '#101428',
          black: '#000000',
          white: '#FFFFFF',
        },
        primary: {
          50: '#f0f4ff',
          100: '#e1e9ff',
          200: '#c9d6ff',
          300: '#a5baff',
          400: '#7a94ff',
          500: '#5271F1', // main blue
          600: '#3149ca',
          700: '#2a3da3',
          800: '#273686',
          900: '#23326f',
          DEFAULT: '#5271F1',
          foreground: '#FFFFFF',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dbd0ff',
          300: '#c1adff',
          400: '#9f7dff',
          500: '#7141EF', // main purple
          600: '#5a1fdf',
          700: '#4a12be',
          800: '#3d129c',
          900: '#34117e',
          DEFAULT: '#7141EF',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: '#F2F5FF',
          foreground: '#7B7C85'
        },
        accent: {
          DEFAULT: '#E8EDFF',
          foreground: '#101428',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'sans-serif'
        ]
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}