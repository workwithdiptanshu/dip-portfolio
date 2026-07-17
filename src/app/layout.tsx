import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    themeColor: "#353451",
    
};

const generalSans = localFont({
    src: [
        {
            path: "./fonts/medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/bold.woff2",
            weight: "600",
            style: "bold",
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
             <head>
        <meta name="google-adsense-account" content="ca-pub-3294424742179691" />
      </head>
            <body className={`${generalSans.className} bg-bg-back`}>
                {children}
            </body>
        </html>
    );
}
