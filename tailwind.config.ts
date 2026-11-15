import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            fontFamily: {
                serif: ["var(--font-serif)", "Georgia", "serif"],
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                hand: ["var(--font-hand)", "cursive"],
            },
            colors: {
                paper: "#F3EEE4",
                card: "#E6DFD1",
                ink: "#1C1A17",
                muted: "#7B7468",
                cat: {
                    moss: "#2F6B4F",
                    lilac: "#C3B8F0",
                    indigo: "#2E2A7A",
                    marigold: "#F2B23A",
                    peach: "#F5A48C",
                },
                "bg-back": "#F3EEE4",
                "theme-blue-dark": "#4D33B3",
                "bg-wg": "#121024",
                "bg-katze": "#111",
                "bg-wally": "#472C1f",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
