/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                340: "340px",
            },
            height: {
                100: "100dvh",
                90: "90dvh",
            },
            spacing: {
                700: "700px",
            },
            colors: {
                btn: "rgb(66, 66, 66)",
                skyblue: "#00A3FF",
            },
        },
    },
    plugins: [],
};
