import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BitgrainStage from "@/components/work/BitgrainStage";
import { MarginNote } from "@/components/Common/Handwriting";

const BASE = "/Assets/work/bitgrain";

const stats = [
    { value: "#5", label: "Product of the Day on Product Hunt" },
    { value: "10k+", label: "Visitors a month" },
    { value: "500+", label: "People signed up" },
    { value: "Solo", label: "Designed, built and launched by me" },
];

/** Real outputs from the darkroom, all from the same photo. */
const effects = [
    { name: "halftone", label: "Halftone", note: "true CMYK screens" },
    { name: "dither", label: "Dither", note: "crisp, one-bit" },
    { name: "riso", label: "Riso", note: "real ink separations" },
    { name: "grain", label: "Grain", note: "film, not noise" },
];

/** A few of the others, so the four photos don't read as the whole set. */
const moreEffects = [
    "ASCII",
    "Glitch",
    "Pixelate",
    "Crosshatch",
    "Pop art",
    "Posterize",
    "Misprint",
    "Photocopy",
    "Scanlines",
    "Fold",
    "Dust",
    "Grunge",
];

const wall = [
    "still-water-retreat",
    "city-half-marathon",
    "paper-faces",
    "grid-conference",
    "uttorer-dorja",
    "night-swim-club",
    "open-call-zine",
];

export default function BitgrainFeature() {
    return (
        <section
            id="bitgrain"
            className="max-w-[1080px] mx-auto px-4 pt-20 sm:pt-28 scroll-mt-6"
        >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="flex flex-col gap-4 max-w-[600px]">
                    <div className="flex items-center gap-3 text-sm">
                        <Image
                            src={`${BASE}/logo.svg`}
                            alt=""
                            width={687}
                            height={566}
                            className="h-6 w-auto"
                        />
                        <span className="text-muted">My own product, live</span>
                        <MarginNote
                            arrow="down-right"
                            rotate={-4}
                            className="ml-4 sm:ml-8 whitespace-nowrap"
                            arrowClassName="w-8 h-auto translate-y-3"
                        >
                            made it all myself
                        </MarginNote>
                    </div>
                    <h2 className="font-serif text-[34px] sm:text-[52px] leading-[1.05] tracking-[-0.02em]">
                        Bitgrain, the thing I&rsquo;m proudest of
                    </h2>
                    <p className="text-[15px] sm:text-base leading-relaxed max-w-[520px]">
                        A design studio in the browser for posters, covers and
                        zines, with a darkroom that makes photos look like
                        they came off a press. I designed it, built it and
                        launched it on my own.
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <Link
                        href="/work/bitgrain"
                        className="bg-ink text-white rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 hover:bg-cat-moss transition-colors"
                    >
                        Read the case study <ArrowUpRight size={15} />
                    </Link>
                    <Link
                        href="https://bitgrain.app"
                        target="_blank"
                        className="bg-card rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 hover:bg-ink hover:text-white transition-colors"
                    >
                        Try it <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>

            <BitgrainStage />

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                {stats.map((s) => (
                    <div key={s.label} className="bg-card rounded-[24px] p-5">
                        <dt className="sr-only">{s.label}</dt>
                        <dd className="text-3xl sm:text-4xl font-medium tracking-tight leading-none">
                            {s.value}
                        </dd>
                        <dd className="text-xs text-muted pt-2 leading-tight">
                            {s.label}
                        </dd>
                    </div>
                ))}
            </dl>

            {/* The engine. */}
            <div className="mt-16 grid sm:grid-cols-[280px_1fr] gap-8 sm:gap-12 items-start">
                <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-2xl leading-snug">
                        Photos that look printed, not filtered
                    </h3>
                    <p className="text-sm text-black/65 leading-relaxed">
                        Most photo filters look like filters. I wanted these
                        to hold up next to real print: halftone dots that sit
                        on a proper screen, riso colour that misregisters the
                        way ink does, grain that reads as film. I wrote each
                        one from scratch and tuned it by eye until it stopped
                        looking digital.
                    </p>
                    <Link
                        href="/work/bitgrain"
                        className="w-fit text-sm underline underline-offset-4 decoration-black/30 hover:decoration-black"
                    >
                        How it works under the hood
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {effects.map((e, i) => (
                            <figure key={e.name} className="flex flex-col gap-2.5">
                                <div
                                    className="mat !border-4 !rounded-[14px] relative aspect-[4/3]"
                                    style={{ transform: `rotate(${[-2.5, 2, -1.5, 2.5][i]}deg)` }}
                                >
                                    <Image
                                        src={`${BASE}/effects/${e.name}.webp`}
                                        alt={`A portrait through Bitgrain's ${e.label.toLowerCase()} effect`}
                                        fill
                                        sizes="240px"
                                        className="object-cover"
                                    />
                                </div>
                                <figcaption className="text-xs text-center">
                                    {e.label}{" "}
                                    <span className="text-muted">· {e.note}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ul className="flex flex-wrap gap-1.5" aria-label="More effects">
                        {moreEffects.map((name) => (
                            <li key={name} className="text-xs bg-card rounded-full px-3 py-1">
                                {name}
                            </li>
                        ))}
                        <li className="text-xs text-muted px-2 py-1">and more</li>
                    </ul>
                </div>
            </div>

            {/* The templates. */}
            <div className="mt-16 grid sm:grid-cols-[280px_1fr] gap-8 sm:gap-12 items-center">
                <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-2xl leading-snug">
                        Templates I&rsquo;d actually print
                    </h3>
                    <p className="text-sm text-black/65 leading-relaxed">
                        Template sites are mostly filler. I held this library
                        to a simpler bar: every piece should look good enough
                        to print as it is, with real type, a real grid and
                        nothing that looks like a stock mockup. Each one is
                        reviewed by hand before it goes live.
                    </p>
                </div>
                <Link
                    href="https://bitgrain.app/templates"
                    target="_blank"
                    aria-label="Browse Bitgrain's templates"
                    className="flex pl-2 py-4 overflow-hidden sm:overflow-visible"
                >
                    {wall.map((name, i) => (
                        <span
                            key={name}
                            className="relative shrink-0 -ml-8 sm:-ml-6 first:ml-0 transition-transform duration-300 hover:-translate-y-4"
                            style={{ zIndex: i }}
                        >
                            <span
                                className="mat !border-4 !rounded-[10px] relative block w-[92px] sm:w-[118px] aspect-[400/566]"
                                style={{ transform: `rotate(${-10 + i * 3.3}deg)` }}
                            >
                                <Image
                                    src={`${BASE}/templates/${name}.webp`}
                                    alt=""
                                    fill
                                    sizes="130px"
                                    className="object-cover"
                                />
                            </span>
                        </span>
                    ))}
                </Link>
            </div>
        </section>
    );
}
