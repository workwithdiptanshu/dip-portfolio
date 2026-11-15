import React from "react";
import Image from "next/image";
import { CatSitting } from "@/components/cats/Cats";

const BASE = "/Assets/work/bitgrain";

/** Bitgrain's own blue, so the panel reads as the product, not as the portfolio. */
export const BITGRAIN_BLUE = "#3D41DB";

/** Real templates from the library, placed around the editor like prints on a desk. */
const posters = [
    {
        name: "night-swim-club",
        alt: "Night Swim Club poster",
        pos: "left-[3%] top-[10%] w-[17%]",
        r: -9,
    },
    {
        name: "sazanami-koi-pond",
        alt: "Sazanami koi pond poster",
        pos: "left-[1%] bottom-[6%] w-[15%]",
        r: 6,
    },
    {
        name: "open-call-zine",
        alt: "Open Call zine cover",
        pos: "right-[2%] top-[6%] w-[17%]",
        r: 8,
    },
    {
        name: "setsugetsu-sake",
        alt: "Setsugetsu sake label",
        pos: "right-[4%] bottom-[5%] w-[15%]",
        r: -6,
    },
];

/** The editor on Bitgrain blue, with real templates scattered round it. */
export default function BitgrainStage({
    className = "mt-10",
}: {
    className?: string;
}) {
    return (
        <div
            className={`relative ${className} rounded-[36px] overflow-hidden px-4 sm:px-0 pt-8 sm:pt-0 pb-6 sm:pb-0 sm:h-[600px]`}
            style={{ backgroundColor: BITGRAIN_BLUE }}
        >
            <div className="relative sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[64%] z-10">
                <div
                    className="mat !border-[5px] !rounded-[16px] relative aspect-[1600/962]"
                    style={{ transform: "rotate(-1.5deg)" }}
                >
                    <Image
                        src={`${BASE}/editor.webp`}
                        alt="The Bitgrain editor, with a zine called Late Shift open"
                        fill
                        sizes="(min-width: 640px) 700px, 92vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {posters.map((p) => (
                <div
                    key={p.name}
                    className={`hidden sm:block absolute ${p.pos} transition-transform duration-500 hover:-translate-y-3 hover:z-20`}
                >
                    <div
                        className="mat !border-[5px] !rounded-[12px] relative aspect-[400/566]"
                        style={{ transform: `rotate(${p.r}deg)` }}
                    >
                        <Image
                            src={`${BASE}/templates/${p.name}.webp`}
                            alt={p.alt}
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                </div>
            ))}

            <div className="sm:hidden flex justify-center gap-3 pt-6">
                {posters.slice(0, 3).map((p) => (
                    <div
                        key={p.name}
                        className="mat !border-4 !rounded-[10px] relative w-[28%] aspect-[400/566]"
                        style={{ transform: `rotate(${p.r / 2}deg)` }}
                    >
                        <Image
                            src={`${BASE}/templates/${p.name}.webp`}
                            alt={p.alt}
                            fill
                            sizes="30vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <CatSitting
                color="marigold"
                face="moss"
                mood="open"
                blink
                className="hidden sm:block absolute left-[44%] -bottom-3 w-16 h-auto z-20"
            />
        </div>
    );
}
