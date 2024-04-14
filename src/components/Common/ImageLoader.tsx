"use client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { ImgHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    alt: string;
    src: string;
    height: number;
    width: number;
    className: string;
}
export default function ImageLoader({
    alt,
    className,
    height,
    src,
    width,
}: Props) {
    const [loading, setLoaded] = useState(true);
    return (
        <div className={twMerge(className, "w-full, h-full relative")}>
            <Image
                onLoad={() => {
                    setLoaded(false);
                }}
                className={twMerge(
                    "w-full, h-auto",
                    loading ? "opacity-0" : "opacity-100"
                )}
                alt={alt}
                src={src}
                priority
                height={height}
                width={width}
            />
            <div
                className={twMerge(
                    "absolute inset-0 w-full lg:max-h-[400px] h-full flex items-center justify-center flex-col gap-2",
                    loading ? "opacity-100" : "opacity-0"
                )}
            >
                <Loader2 className="text-white animate-spin" />
                <span className="text-xs text-gray-300">Loading </span>
            </div>
        </div>
    );
}
