import { CatSitting } from "@/components/cats/Cats";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Thank you | Diptanshu Mahish",
    description: "Thank you",
};

export default function page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
            <CatSitting
                color="moss"
                face="white"
                mood="happy"
                blink
                title="A happy red cat"
                className="cat-sway w-40 h-auto"
            />
            <h1 className="font-serif text-4xl sm:text-5xl tracking-[-0.02em]">
                Got it, thank you
            </h1>
            <p className="text-[15px] max-w-[360px]">
                Your message is in. I read everything and I&apos;ll reply as soon
                as I can.
            </p>
            <Link
                href="/"
                className="bg-ink text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-cat-moss transition-colors"
            >
                Back to home
            </Link>
        </main>
    );
}
