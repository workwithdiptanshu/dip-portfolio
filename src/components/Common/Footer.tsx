import React from "react";
import Link from "next/link";
import { CatHead, INK, Ink, Mood } from "@/components/cats/Cats";

/** The footer links, as paper tags: each its own colour, each stuck on at its own angle. */
const links: { label: string; href: string; bg: Ink; text: "ink" | "white"; tilt: number; external?: boolean }[] = [
    { label: "works", href: "/work", bg: "marigold", text: "ink", tilt: -4 },
    { label: "blogs", href: "/blogs", bg: "lilac", text: "ink", tilt: 3 },
    { label: "résumé", href: "/resume.pdf", bg: "peach", text: "ink", tilt: -2, external: true },
    { label: "github", href: "https://github.com/diptanshumahish", bg: "ink", text: "white", tilt: 4, external: true },
    { label: "linkedin", href: "https://linkedin.com/in/diptanshumahish", bg: "indigo", text: "white", tilt: -3, external: true },
    { label: "x (twitter)", href: "https://x.com/diptanshuSays", bg: "moss", text: "white", tilt: 2, external: true },
];

/** The row of cats peeking up from the bottom of every page. */
const parade: { color: Ink; face: Ink; mood: Mood }[] = [
    { color: "marigold", face: "moss", mood: "open" },
    { color: "peach", face: "indigo", mood: "happy" },
    { color: "indigo", face: "marigold", mood: "open" },
    { color: "lilac", face: "indigo", mood: "sleepy" },
    { color: "moss", face: "white", mood: "wink" },
    { color: "marigold", face: "indigo", mood: "happy" },
    { color: "lilac", face: "moss", mood: "open" },
    { color: "peach", face: "white", mood: "sleepy" },
    { color: "indigo", face: "peach", mood: "happy" },
    { color: "moss", face: "marigold", mood: "open" },
];

export default function Footer({ cta = true }: { cta?: boolean }) {
    return (
        <footer className="relative overflow-hidden pt-16">
            <div className="max-w-[824px] mx-auto px-4">
                {cta && (
                    <div className="relative pt-[92px] sm:pt-[100px]">
                        {/* A cat peeking over the top of the card, holding on. */}
                        <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-0 w-[120px] sm:w-[140px] z-0">
                            <CatHead color="marigold" face="ink" mood="open" blink className="w-full h-auto" />
                        </div>
                        <span
                            aria-hidden
                            className="absolute z-20 top-[84px] sm:top-[92px] left-1/2 -translate-x-[58px] sm:-translate-x-[66px] w-7 h-4 rounded-full bg-cat-marigold"
                        />
                        <span
                            aria-hidden
                            className="absolute z-20 top-[84px] sm:top-[92px] left-1/2 translate-x-[30px] sm:translate-x-[38px] w-7 h-4 rounded-full bg-cat-marigold"
                        />
                        <Link
                            href="/hire"
                            className="group relative z-10 block overflow-hidden rounded-[32px] bg-cat-moss text-white pt-14 sm:pt-16 text-center"
                        >
                            <p className="font-hand text-base sm:text-lg leading-relaxed pt-3 px-6">got an idea, or just want to chat?</p>
                            <p
                                className="font-sans font-medium tracking-[-0.04em] leading-[0.8] whitespace-nowrap pt-10 sm:pt-14 translate-y-[12%] transition-transform duration-500 group-hover:translate-y-[2%]"
                                style={{ fontSize: "clamp(64px, 17vw, 150px)" }}
                            >
                                Say hello
                            </p>
                        </Link>
                    </div>
                )}

                <ul className="flex flex-wrap sm:flex-nowrap justify-center gap-x-2.5 gap-y-4 pt-6 sm:-mx-16">
                    {links.map((l) => {
                        return (
                            <li key={l.label}>
                                <Link
                                    href={l.href}
                                    target={l.external ? "_blank" : undefined}
                                    style={{ backgroundColor: INK[l.bg], color: INK[l.text], transform: `rotate(${l.tilt}deg)` }}
                                    className="group relative flex items-center gap-2 whitespace-nowrap rounded-[10px] pl-[22px] pr-3.5 py-2 text-[13px] font-medium transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
                                >
                                    {/* The punched hole, like a luggage tag. */}
                                    <span aria-hidden className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-paper" />
                                    {l.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <p className="text-center text-xs text-muted pt-8">
                    &copy; Diptanshu Mahish {new Date().getFullYear()}
                </p>
            </div>

            <div aria-hidden className="flex justify-center gap-3 sm:gap-6 pt-10 -mb-1 sm:-mb-3 px-2">
                {parade.map((c, i) => (
                    <CatHead
                        key={i}
                        color={c.color}
                        face={c.face}
                        mood={c.mood}
                        blink
                        className={`cat-sway shrink-0 w-12 sm:w-20 h-auto ${i > 5 ? "hidden sm:block" : ""}`}
                        style={
                            {
                                "--r": `${(i % 2 ? 1 : -1) * (6 + (i % 3) * 4)}deg`,
                                animationDelay: `${i * 0.4}s`,
                            } as React.CSSProperties
                        }
                    />
                ))}
            </div>
        </footer>
    );
}
