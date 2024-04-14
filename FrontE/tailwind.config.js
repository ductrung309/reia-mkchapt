/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  corePlugins: {
    // Tắt các styles reset mặc định (base)
    preflight: false,
  },
  // Import CSS của DaisyUI vào phần components
  components: {
    "./src/components/**/*.{js,jsx,ts,tsx}": [
      "@tailwind base",
      "@tailwind components",
      "@tailwind utilities",
    ],
  },
};
