import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
    title: "dptsnhu",
    description: "Diptanshu Mahish | Portfolio | Shop",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    authors: [{ name: "Diptanshu Mahish", url: "https://diptanshumahish.me" }],
    category: "Portfolio Websites",
    abstract:
        "Diptanshu Mahish | Portfolio Website | UI/UX | Front end developer | Flutter | NextJS | Shop",
    keywords: [
        "Diptanshu Mahish",
        "diptanshumahish",
        "diptanshumahish2016@gmail.com",
        "Dip",
        "UI UX Diptanshu",
        "Nextjs Diptanshu Mahish",
    ],
    robots: { follow: true },
    assets: "https://diptanshumahish.me/banner.png",
    twitter: {
        card: "summary_large_image",
        site: "https://diptanshumahish.me",
        creator: "@DiptanshuMahis5",
        images: "https://diptanshumahish.me/banner.png",
    },

    classification: "Portfolio Website",
    appleWebApp: true,
    applicationName: "Diptanshu Mahish | Portfolio",
    openGraph: {
        type: "website",
        countryName: "India",
        emails: ["diptanshumahish2016@gmail.com"],
        title: "Diptanshu Mahish | Portfolio",
        url: "https://diptanshumahish.me",
        siteName: "Diptanshu Mahish",
        images: ["https://diptanshumahish.me/banner.png"],
        description: "Diptanshu Mahish | Portfolio website. | Shop  ",
        determiner: "the",
        locale: "IN",
        alternateLocale: "US",
    },
    metadataBase: new URL("https://diptanshumahish.me"),
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
            <body className={`${generalSans.className} bg-bg-back`}>
                {children}
            </body>
        </html>
    );
}
