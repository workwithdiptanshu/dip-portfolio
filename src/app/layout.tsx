import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
    title: "Diptanshu Mahish",
    description:
        "Diptanshu Mahish is a UI/UX designer, Apps and websites developer and a musician from Kolkata, India. He is well experienced in making super fast and creative designs and turn them into reality.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    authors: [{ name: "Diptanshu Mahish", url: "https://diptanshumahish.in" }],
    category: "Portfolio Website",
    abstract:
        "Diptanshu Mahish | Portfolio Website | UI/UX | Front end developer | Flutter | NextJS | Shop",
    keywords: [
        "Diptanshu Mahish",
        "diptanshumahish",
        "diptanshumahish2016@gmail.com",
        "Dip",
        "UI UX Diptanshu",
        "Nextjs Diptanshu Mahish",
        "diptanshumahish.in",
    ],
    robots: { follow: true },
    assets: "https://diptanshumahish.in/banner.png",
    twitter: {
        card: "summary_large_image",
        site: "https://diptanshumahish.in",
        creator: "@DiptanshuMahis5",
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
        title: "Diptanshu Mahish | Portfolio",
        url: "https://diptanshumahish.in",
        siteName: "Diptanshu Mahish",
        images: ["https://diptanshumahish.in/banner.png"],
        description:
            "Diptanshu Mahish is a UI/UX designer, Apps and websites developer and a musician from Kolkata, India. He is well experienced in making super fast yet creative designs and turn them into reality.",
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
