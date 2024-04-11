"use client";
import { animatePageIn } from "@/components/onboard/animations";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animatePageIn();
    }, []);
    return (
        <div className="relative">
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
            <div className="counter fixed z-50 w-screen h-screen flex items-end justify-end text-8xl font-bold text-white p-8">
                0
            </div>

            {children}
        </div>
    );
}
