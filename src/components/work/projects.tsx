import React from "react";
import Image from "next/image";

/** A photo on a white mat, at an angle. Positioned by the caller. */
export function Mat({
    src,
    alt,
    className,
    rotate,
    sizes = "360px",
}: {
    src: string;
    alt: string;
    className: string;
    rotate: number;
    sizes?: string;
}) {
    return (
        <div
            className={`mat absolute transition-transform duration-500 ${className}`}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
        </div>
    );
}

/** A white card on the slant, for work that has no screenshot. */
export function Note({
    className,
    rotate,
    children,
    dark = false,
}: {
    className: string;
    rotate: number;
    children: React.ReactNode;
    dark?: boolean;
}) {
    return (
        <div
            className={`mat absolute flex flex-col justify-center p-5 ${
                dark ? "!bg-ink text-white" : ""
            } ${className}`}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            {children}
        </div>
    );
}

export function MiniCalendar({ highlight = 13 }: { highlight?: number }) {
    return (
        <>
            <span className="font-serif text-lg pb-3">November</span>
            <span className="grid grid-cols-7 gap-1 text-[11px] text-center">
                {Array.from({ length: 28 }, (_, d) => (
                    <span
                        key={d}
                        className={`rounded-md py-1 ${d === highlight ? "bg-cat-moss text-white" : "bg-paper"}`}
                    >
                        {d + 1}
                    </span>
                ))}
            </span>
        </>
    );
}

export const APPS = [
    { name: "dailyThings", note: "Plan your day", bg: "bg-cat-marigold" },
    { name: "Zen Clock", note: "Focus timers, no ads", bg: "bg-cat-lilac" },
    { name: "Simply Expenses", note: "Track spending", bg: "bg-cat-peach" },
];

const wordmark = "text-xl sm:text-2xl font-semibold tracking-[-0.03em] leading-none";

export interface Project {
    slug: string;
    name: string;
    /** Shown in grey after the name. */
    kind: string;
    href: string;
    /** One sentence, for cards. */
    line: string;
    /** The name set in type, for the small tile. */
    mark: React.ReactNode;
    /** Tilted pieces on a grey card. */
    cover: React.ReactNode;
}

export const projects: Project[] = [
    {
        slug: "bitgrain",
        name: "Bitgrain",
        kind: "Design studio",
        href: "/work/bitgrain",
        line: "A design studio in the browser that makes posters and zines look printed.",
        mark: (
            <Image
                src="/Assets/work/bitgrain/logo.svg"
                alt="Bitgrain"
                width={687}
                height={566}
                className="h-9 w-auto"
            />
        ),
        cover: (
            <>
                <Mat src="/Assets/work/bitgrain/editor.webp" alt="The Bitgrain editor" className="left-[2%] top-6 w-[70%] h-[74%]" rotate={-3} sizes="560px" />
                <Mat src="/Assets/work/bitgrain/templates/night-swim-club.webp" alt="Night Swim Club, a Bitgrain template" className="right-[3%] top-0 w-[26%] h-[92%]" rotate={6} sizes="200px" />
            </>
        ),
    },
    {
        slug: "concepts",
        name: "Concepts",
        kind: "Websites",
        href: "/concepts",
        line: "The websites well-loved small businesses should have, built unasked.",
        mark: <span className="font-hand text-lg sm:text-xl leading-none">concepts</span>,
        cover: (
            <>
                <Mat src="/Assets/work/concepts/tea-emporium-darjeeling.webp" alt="Concept site for a tea house in Darjeeling" className="left-0 top-2 w-[52%] h-[58%]" rotate={-5} sizes="400px" />
                <Mat src="/Assets/work/concepts/ink-link-tattoo-omaha.webp" alt="Concept site for a tattoo shop in Omaha" className="left-[18%] bottom-0 w-[50%] h-[56%]" rotate={3} sizes="400px" />
                <Mat src="/Assets/work/concepts/shinning-studio-weddings-m.webp" alt="Concept site for a wedding studio, on a phone" className="right-[17%] top-0 w-[20%] h-[94%]" rotate={-4} sizes="200px" />
                <Mat src="/Assets/work/concepts/bucket-of-love-m.webp" alt="Concept site for a fried chicken kitchen, on a phone" className="right-0 top-5 w-[20%] h-[90%]" rotate={7} sizes="200px" />
            </>
        ),
    },
    {
        slug: "rustybase",
        name: "Rustybase",
        kind: "Database, in Rust",
        href: "/work/rustybase",
        line: "A MongoDB-style database in one small binary, for building on a laptop.",
        mark: <span className={`${wordmark} font-mono tracking-tight`}>rustybase</span>,
        cover: (
            <>
                <Mat src="/Assets/work/rustybase/site.webp" alt="The Rustybase website" className="left-[2%] top-6 w-[66%] h-[70%]" rotate={-4} sizes="480px" />
                <Note dark className="right-[3%] bottom-2 w-[38%] font-mono text-xs sm:text-sm" rotate={6}>
                    <span>
                        <span className="text-cat-marigold">$</span> rustybase serve
                    </span>
                </Note>
            </>
        ),
    },
    {
        slug: "calendify",
        name: "Calendify",
        kind: "npm package",
        href: "/work/calendify",
        line: "A calendar package that hands you the dates and leaves the design to you.",
        mark: <span className={wordmark}>calendify</span>,
        cover: (
            <>
                <Note className="left-[4%] top-2 w-[52%] h-[88%] !justify-start" rotate={-4}>
                    <MiniCalendar />
                </Note>
                <Note dark className="right-0 bottom-6 w-[46%] font-mono text-xs sm:text-sm" rotate={6}>
                    <span>
                        <span className="text-cat-marigold">$</span> npm i calendify
                    </span>
                </Note>
            </>
        ),
    },
    {
        slug: "android-apps",
        name: "Android apps",
        kind: "Archived",
        href: "/work/android-apps",
        line: "Three apps I designed, built and published on my own.",
        mark: <span className={`${wordmark} text-lg sm:text-xl`}>3 apps</span>,
        cover: (
            <>
                {APPS.map((a, i) => (
                    <Note
                        key={a.name}
                        className={`${["left-0 top-6", "left-[34%] top-0", "right-0 top-8"][i]} w-[31%] h-[80%] !p-0 overflow-hidden`}
                        rotate={[-8, 3, 9][i]}
                    >
                        <span className={`${a.bg} flex-1 flex items-end p-4 font-serif text-lg leading-tight`}>
                            {a.name}
                        </span>
                        <span className="text-xs text-muted p-3">{a.note}</span>
                    </Note>
                ))}
            </>
        ),
    },
];

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug)!;
}

/** The project after this one, wrapping round. */
export function nextProject(slug: string) {
    const i = projects.findIndex((p) => p.slug === slug);
    return projects[(i + 1) % projects.length];
}
