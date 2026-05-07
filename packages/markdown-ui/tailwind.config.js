import baseConfig from "../ui/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
