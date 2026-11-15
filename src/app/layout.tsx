import type { Metadata, Viewport } from "next";
import { Homemade_Apple, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { CatFilters } from "@/components/cats/Cats";

export const metadata: Metadata = {
    title: "Diptanshu Mahish | Product Engineer",
    description:
        "Diptanshu Mahish is a product engineer based in Bengaluru, India. Founding engineer at Supaboard.ai, creator of Bitgrain and Rustybase. He builds customer-facing web and mobile products from 0 to 1 across React, TypeScript, Flutter and Rust.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    authors: [{ name: "Diptanshu Mahish", url: "https://diptanshumahish.in" }],
    category: "Portfolio Website",
    abstract:
        "Diptanshu Mahish | Product Engineer | Frontend Engineer | Design Engineer | React | TypeScript | Flutter | Rust",
    keywords: [
        "Diptanshu Mahish",
        "diptanshumahish",
        "Product Engineer",
        "Frontend Engineer",
        "Design Engineer",
        "Supaboard",
        "Bitgrain",
        "Rustybase",
        "React Developer Bengaluru",
        "diptanshumahish.in",
    ],
    robots: { follow: true },
    assets: "https://diptanshumahish.in/banner.png",
    twitter: {
        card: "summary_large_image",
        site: "https://diptanshumahish.in",
        creator: "@diptanshuSays",
        images: "https://diptanshumahish.in/banner.png",
    },

    classification: "Portfolio Website",
    appleWebApp: true,
    applicationName: "Diptanshu Mahish | Portfolio",
    openGraph: {
        type: "website",
        countryName: "India",
        emails: [
            "diptanshumahish2016@gmail.com",
            "workwithdiptanshu@gmail.com",
        ],
        title: "Diptanshu Mahish | Product Engineer",
        url: "https://diptanshumahish.in",
        siteName: "Diptanshu Mahish",
        images: ["https://diptanshumahish.in/banner.png"],
        description:
            "Product engineer based in Bengaluru, India. Founding engineer at Supaboard.ai, creator of Bitgrain and Rustybase. Shipping customer-facing web and mobile products from 0 to 1.",
        determiner: "the",
        locale: "IN",
        alternateLocale: "US",
    },
    metadataBase: new URL("https://diptanshumahish.in"),
    creator: "Diptanshu Mahish",
};
export const viewport: Viewport = {
    themeColor: "#F3EEE4",
};

const serif = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    variable: "--font-serif",
    display: "swap",
});

const sans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

/** Handwriting, for notes in the margins and anything that should feel written. */
const hand = Homemade_Apple({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-hand",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${serif.variable} ${sans.variable} ${hand.variable}`}>
             <head>
        <meta name="google-adsense-account" content="ca-pub-3294424742179691" />
      </head>
            <body className="font-sans bg-paper text-ink antialiased">
                <CatFilters />
                {children}
            </body>
        </html>
    );
}
