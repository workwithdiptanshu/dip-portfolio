import Bakcground from "@/components/Common/Bakcground";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "dptnshu | Shop",
    description: "Coming soon",
};

export default function page() {
    return (
        <div className="max-h-screen h-screen w-screen flex items-center justify-center overflow-hidden">
            <Bakcground />
            <div className="flex flex-col gap-2 items-center">
                <Image
                    src="/Assets/logo-full.svg"
                    height={400}
                    width={900}
                    className="w-[70%] h-auto"
                    alt="Me"
                />
                <span>Coming Soon</span>
                <Link
                    href="/"
                    className="bg-black text-white py-1 px-4 rounded-md"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
