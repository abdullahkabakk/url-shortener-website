/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: "#EEEEEE",
          dark: "#222831"
        },
        navbar: {
            light: "#EEEEEE",
            dark: "#31363F"
        },
        primary: {
          light: "#3F72AF",
          dark: "#ACB1D6"
        }
      }
    },
  },
  plugins: [],
}  satisfies Config