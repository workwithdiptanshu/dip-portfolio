"use client";
import Bakcground from "@/components/Common/Bakcground";
import { animatePageIn } from "@/components/onboard/animations";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animatePageIn();
    }, []);
    return (
        <div className="relative overflow-hidden">
            <Image
                src="/Assets/back-dark-3.svg"
                height={100}
                width={300}
                alt="Dip logo"
                id="lBack"
                className="z-50  h-screen w-screen fixed inset-0 opacity-20 object-cover"
            />
            <div
                id="overlay"
                className="h-screen z-30 fixed inset-0 w-screen flex"
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div
                id="name"
                className="absolute inset-0 h-screen w-screen flex flex-col items-center justify-center"
            >
                <Image
                    src="/Assets/logo-full.svg"
                    height={100}
                    width={300}
                    alt="Dip logo"
                    className="z-50 invert animate-pulse"
                />
            </div>
            <div
                id="MBar"
                className=" z-50 absolute inset-0 h-[160vh] w-screen flex items-center justify-start"
            >
                <div
                    id="MBarInner"
                    className="w-[0%] h-[20px] bg-yellow-100 opacity-40"
                ></div>
            </div>
            <div className="counter fixed z-50 w-screen h-[120vh] animate-pulse flex items-center justify-center lg:text-[140px] text-6xl font-black text-white p-8">
                0
            </div>

            {children}
        </div>
    );
}
