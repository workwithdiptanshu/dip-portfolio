import Bakcground from "@/components/Common/Bakcground";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Loading",
    description: "Loading",
};

export default function Loading() {
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
                <span className="text-lg ">Loading</span>
                <Loader2 className="animate-spin" />
            </div>
        </div>
    );
}
