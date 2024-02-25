/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["sunset"],
        base: true,
        styled: true,
        utils: true,
        logs: true,
    },
    plugins: [require("daisyui")],
};
