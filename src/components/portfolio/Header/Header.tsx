import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CatHead, Ink, INK, Paw } from "@/components/cats/Cats";
import { MarginNote } from "@/components/Common/Handwriting";

const C = "/Assets/work/concepts";
const B = "/Assets/work/bitgrain";

type Piece =
    | { kind: "postcard"; src: string; alt: string; city: string; stamp: Ink; label: string }
    | { kind: "polaroid"; src: string; alt: string; label: string }
    | { kind: "phone"; src: string; alt: string; label: string }
    | { kind: "print"; src: string; alt: string; label: string; ratio: string };

/** The strip under the hero: real work, laid out like things pinned to a desk. */
const pieces: Piece[] = [
    { kind: "polaroid", src: `${B}/editor.webp`, alt: "The Bitgrain editor", label: "bitgrain.app" },
    { kind: "postcard", src: `${C}/krishna-creations-kanpur.webp`, alt: "Concept site for a leather goods maker in Kanpur", city: "Kanpur", stamp: "marigold", label: "leather goods" },
    { kind: "phone", src: `${C}/shinning-studio-weddings-m.webp`, alt: "Concept site for a wedding studio in Chandigarh, on a phone", label: "wedding films" },
    { kind: "print", src: `${B}/templates/night-swim-club.webp`, alt: "Night Swim Club, a Bitgrain template", label: "a bitgrain poster", ratio: "400 / 566" },
    { kind: "postcard", src: `${C}/ink-link-tattoo-omaha.webp`, alt: "Concept site for a tattoo shop in Omaha", city: "Omaha", stamp: "moss", label: "walk-in tattoos" },
    { kind: "postcard", src: `${C}/tea-emporium-darjeeling.webp`, alt: "Concept site for a tea house in Darjeeling", city: "Darjeeling", stamp: "lilac", label: "tea since 1940" },
    { kind: "phone", src: `${C}/collective-hive-tattoo-m.webp`, alt: "Concept site for a tattoo collective in Omaha, on a phone", label: "three artists" },
    { kind: "postcard", src: `${C}/bucket-of-love.webp`, alt: "Concept site for a fried chicken kitchen in Lubbock", city: "Lubbock", stamp: "peach", label: "fried chicken" },
    { kind: "print", src: `${B}/templates/sazanami-koi-pond.webp`, alt: "Sazanami, a Bitgrain template", label: "koi pond poster", ratio: "400 / 566" },
    { kind: "postcard", src: `${C}/shree-balaji-netralaya.webp`, alt: "Concept site for an eye hospital in Patna", city: "Patna", stamp: "indigo", label: "eye hospital" },
    { kind: "phone", src: `${C}/bucket-of-love-m.webp`, alt: "Concept site for Bucket of Love, on a phone", label: "on a phone" },
    { kind: "postcard", src: `${C}/collective-hive-tattoo.webp`, alt: "Concept site for a tattoo collective in Omaha", city: "Omaha", stamp: "marigold", label: "appointment only" },
];

/** A postage stamp with a cat on it, and the city's postmark over the corner. */
function Stamp({ ink, city }: { ink: Ink; city: string }) {
    return (
        <span aria-hidden className="absolute top-2.5 right-2.5 z-10">
            <span className="block bg-white p-[3px] border-[3px] border-dotted border-paper rotate-[4deg] shadow-sm">
                <span className="flex items-center justify-center w-11 h-[52px]" style={{ backgroundColor: INK[ink] }}>
                    <CatHead color={ink === "marigold" || ink === "lilac" || ink === "peach" ? "indigo" : "white"} face={ink === "indigo" ? "marigold" : ink === "moss" ? "moss" : "white"} mood="happy" className="w-7 h-auto" />
                </span>
            </span>
            {/* Postmark: a ring with the city, and the wavy cancel lines. */}
            <span className="absolute -left-12 top-5 flex items-center -rotate-[14deg] opacity-80">
                <svg viewBox="0 0 40 24" className="w-9 h-auto" fill="none">
                    {[5, 12, 19].map((y) => (
                        <path key={y} d={`M1 ${y} q 5 -3 10 0 t 10 0 t 10 0 t 9 0`} stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
                    ))}
                </svg>
                <span className="w-[54px] h-[54px] -ml-1 rounded-full border-[1.5px] border-ink flex flex-col items-center justify-center bg-white/30 backdrop-blur-[0.5px]">
                    <span className="text-[7px] uppercase tracking-[0.12em] leading-none font-semibold text-ink">{city}</span>
                    <span className="w-8 h-px bg-ink my-1" />
                    <span className="text-[6px] uppercase tracking-[0.1em] leading-none text-ink">concepts</span>
                </span>
            </span>
        </span>
    );
}

/** Small differences in angle and height, so it reads as placed by hand. */
const TILT = [-3, 2, -1.5, 3, -2.5, 1.5, -2, 2.5];
const DROP = ["sm:translate-y-2", "sm:-translate-y-3", "sm:translate-y-5", "sm:-translate-y-1", "sm:translate-y-3", "sm:-translate-y-4"];

function PieceView({ p, hidden }: { p: Piece; hidden: boolean }) {
    const alt = hidden ? "" : p.alt;
    if (p.kind === "postcard")
        return (
            <div className="relative w-[300px] sm:w-[380px] bg-white rounded-[4px] p-2 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[2px]">
                    <Image src={p.src} alt={alt} fill sizes="380px" className="object-cover object-top" />
                </div>
                <Stamp ink={p.stamp} city={p.city} />
            </div>
        );
    if (p.kind === "polaroid")
        return (
            <div className="w-[300px] sm:w-[360px] bg-white p-2.5 pb-0 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[1600/962] overflow-hidden">
                    <Image src={p.src} alt={alt} fill sizes="360px" className="object-cover object-top" />
                </div>
                <p className="font-hand text-[15px] text-ink text-center py-3">{p.label}</p>
            </div>
        );
    if (p.kind === "phone")
        return (
            <div className="relative w-[124px] sm:w-[140px] aspect-[390/800] rounded-[26px] border-[5px] border-ink bg-ink overflow-hidden shadow-[0_14px_30px_-16px_rgba(0,0,0,0.45)]">
                <Image src={p.src} alt={alt} fill sizes="140px" className="object-cover object-top rounded-[20px]" />
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full bg-ink" />
            </div>
        );
    return (
        <div className="relative">
            <span aria-hidden className="absolute z-10 -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/70 rotate-[-5deg] shadow-sm" />
            <div className="mat relative w-[150px] sm:w-[172px] !border-[5px] !rounded-[6px]" style={{ aspectRatio: p.ratio }}>
                <Image src={p.src} alt={alt} fill sizes="180px" className="object-cover" />
            </div>
        </div>
    );
}

export default function Header() {
    return (
        <header className="relative">
            {/* The two big cats, cropped by the edges of the page. */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-[640px] overflow-hidden">
                <CatHead
                    color="lilac"
                    face="indigo"
                    mood="open"
                    blink
                    className="cat-sway absolute -left-[22vw] sm:-left-[9vw] top-32 sm:top-24 w-[52vw] sm:w-[34vw] max-w-[520px] h-auto"
                    style={{ "--r": "-14deg" } as React.CSSProperties}
                />
                <CatHead
                    color="moss"
                    face="white"
                    mood="happy"
                    blink
                    className="cat-sway absolute -right-[22vw] sm:-right-[8vw] top-28 sm:top-10 w-[52vw] sm:w-[34vw] max-w-[520px] h-auto"
                    style={{ "--r": "12deg", animationDelay: "1.5s" } as React.CSSProperties}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[44vw] sm:pt-20 pb-16">
                <Paw color="moss" className="w-8 h-8 mb-5 -rotate-12" />
                <h1 className="font-serif text-[40px] sm:text-[56px] leading-[1.08] tracking-[-0.02em] max-w-[560px]">
                    Product engineer who ships things people use
                </h1>
                <p className="text-[15px] sm:text-base leading-relaxed max-w-[440px] pt-5">
                    I&apos;m a founding engineer at Supaboard in Bengaluru. I take
                    products from an empty folder to paying customers, and I care
                    how they look as much as how they work.
                </p>
                <div className="relative flex items-center gap-5 pt-7">
                    <Link
                        href="/hire"
                        className="bg-ink text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-cat-moss transition-colors"
                    >
                        Chat with me
                    </Link>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="text-sm underline underline-offset-4 decoration-black/30 hover:decoration-black"
                    >
                        Résumé
                    </Link>
                    <MarginNote
                        arrow="right"
                        rotate={-5}
                        className="hidden sm:inline-flex absolute right-full mr-3 top-6 whitespace-nowrap"
                        arrowClassName="w-12 h-auto translate-y-2"
                    >
                        I reply within a day
                    </MarginNote>
                </div>
            </div>

            <div className="relative overflow-hidden pt-8 pb-10">
                <MarginNote
                    arrow="down-right"
                    rotate={-6}
                    className="absolute z-10 left-[6%] sm:left-[14%] top-0"
                    arrowClassName="w-10 h-auto translate-y-3"
                >
                    all real, nothing mocked up
                </MarginNote>
                <div className="marquee flex w-max items-center gap-8 sm:gap-10 px-4 py-6">
                    {[...pieces, ...pieces].map((p, i) => {
                        const hidden = i >= pieces.length;
                        return (
                            <figure
                                key={i}
                                aria-hidden={hidden}
                                className={`group shrink-0 ${DROP[i % DROP.length]}`}
                            >
                                {/* The label tilts with its picture, like it was written on the same sheet. */}
                                <div
                                    className="flex flex-col items-center gap-3 transition-transform duration-500 group-hover:!rotate-0 group-hover:-translate-y-2"
                                    style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}
                                >
                                    <PieceView p={p} hidden={hidden} />
                                    {p.kind !== "polaroid" && (
                                        <figcaption className="font-hand text-[12px] text-muted">
                                            {p.label}
                                        </figcaption>
                                    )}
                                </div>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
