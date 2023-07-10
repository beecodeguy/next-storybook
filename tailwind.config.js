/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        sbPrimaryGreen: "#00B04C",
        sbError: {
          DEFAULT: "#DA2020",
          dark: "#B11212",
          light: "#FFFCFC",
        },
        sbWarning: {
          DEFAULT: "#DE8317",
          dark: "#C97512",
          light: "#FCF8F3",
        },
        sbInfo: {
          DEFAULT: "#0288D1",
          dark: "#05689E",
          light: "#F9FDFF",
        },
        sbSuccess: {
          DEFAULT: "#41DB84",
          dark: "#3DC277",
          light: "#F9FFFB",
        },
        sbBlack: "#101010",
        sbGray: "#6A6A6A",
        sbGradientGreen: "linear-gradient(177deg, #00B04C 0%, #037534 100%)",
        sbGradientError: "linear-gradient(177deg, #DA2020 0%, #9A0B0B 100%)",
        sbGradientDark: "#131313",
        sbGrey: {
          DEFAULT: "#F9F9F9",
          5: "#ECECEC",
          20: "#CFCFCF",
          40: "#8E8E8E",
          60: "#7D7D7D",
          80: "#737577",
          100: "#6A6A6A",
          120: "#585858",
          140: "#313334",
          160: "#212121",
          180: "#1B1D1D",
          200: "#171717",
          220: "#111111",
          primary: "#D7D7D7",
          dark: "#303030",
          disabled: "#F5F5F5",
        },
        sbGreen: {
          DEFAULT: "#00B04C",
          5: "#FCFEFD",
          20: "#EFFAF0",
          40: "#E1F4EA",
          80: "#032E15",
          dark: "#06BF56",
          primaryDark: "#0A843F",
          secondary: "#009E7F",
          secondaryDark: "#037962",
          light: "#F2FBF6",
        },
        orange: "#F8A547",
        waterBlue: "#ADE8FB",
        lightBlue: "#D0DBFF",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
