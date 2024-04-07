import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                "bg-back": "#EFEAF5",
                "theme-blue-dark": "#4D33B3",
                "bg-wg": "#121024",
                "bg-katze": "#111",
                "bg-wally": "#472C1f",
            },
        },
    },
    plugins: [],
};
export default config;
