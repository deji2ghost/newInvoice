/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleFragments: {
          "#EFEBFF": "#EFEBFF",
          "#BEADFF": "#BEADFF",
          "#633CFF": "#633CFF"
        },
        greyFragments: {
          "#FAFAFA": "#FAFAFA",
          "#D9D9D9": "#D9D9D9",
          "#737373": "#737373",
          "#333333": "#333333",
        },
        redFragment: {
          "#FF3939": "#FF3939"
        }
      }
    },
  },
  plugins: [],
}

