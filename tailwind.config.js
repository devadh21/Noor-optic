/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "dark-green": "#1a3c34",
        gold: "#d4a54a",
        cream: "#f5f0e8",
      },
      fontFamily: {
        "outfit-bold": ["Outfit-Bold"],
        "outfit-semibold": ["Outfit-SemiBold"],
        inter: ["Inter"],
      },
      pressedStyles: [
        'active:scale-95',
        'active:opacity-70'
      ],
    },
  },
};