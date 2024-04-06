/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  flowbite.content(),
];
export const theme = {
  extend: {
    colors: {
      'primeblue': '#0f1924',
    },
  },
};
export const plugins = [require('@tailwindcss/forms'),flowbite.plugin()];
