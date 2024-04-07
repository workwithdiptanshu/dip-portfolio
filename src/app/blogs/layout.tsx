import Footer from "@/components/Common/Footer";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            {children}

            <Footer />
        </div>
    );
}
