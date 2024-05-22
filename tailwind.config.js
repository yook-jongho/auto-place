/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                340: "340px",
                450: "450px",
                480: "480px",
            },
            height: {
                100: "100dvh",
                90: "90dvh",
                700: "700px",
            },
            spacing: {
                700: "700px",
            },
            colors: {
                btn: "rgb(66, 66, 66)",
                skyblue: "#00A3FF",
                input: "#DBDBDB",
            },
        },
    },
    plugins: [],
};
