import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Aside, Meme, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "design-an-album-cover-that-works-small",
    title: "How to design an album cover that still works at the size of a thumbnail",
    description:
        "Most people will see your cover smaller than a postage stamp, in a list, next to fifty others. Here's how to design album art that still stands out at that size.",
    date: "2026-10-31",
    tags: ["Music", "Album art", "Design"],
    keywords: [
        "how to design an album cover",
        "album cover design tips",
        "album art ideas",
        "make album cover stand out",
        "single artwork design",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/templates/night-swim-club.webp",
        alt: "The Night Swim Club poster template",
        ratio: "400 / 566",
        bg: "#C3B8F0",
        rotate: 4,
    },
};

/** The same covers at full size and at the size people actually see them. */
function SizeTest() {
    const covers = [
        { src: "/Assets/work/bitgrain/library/lowlight-album.webp", label: "Lowlight" },
        { src: "/Assets/work/bitgrain/library/kolabagan.webp", label: "Kolabagan" },
        { src: "/Assets/work/bitgrain/library/midnight-noodles.webp", label: "Midnight Noodles" },
    ];
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-5 sm:p-8 grid sm:grid-cols-[1fr_auto] gap-8 items-center">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {covers.map((c) => (
                        <div key={c.src} className="mat relative aspect-square !border-4 !rounded-[10px]">
                            <Image src={c.src} alt={c.label} fill sizes="200px" className="object-cover" />
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-[18px] p-4 flex flex-col gap-2.5 min-w-[200px]">
                    <span className="text-xs text-muted pb-1">How they really look, in a list</span>
                    {covers.map((c) => (
                        <div key={c.src} className="flex items-center gap-3">
                            <span className="relative w-10 h-10 rounded-[6px] overflow-hidden shrink-0">
                                <Image src={c.src} alt="" fill sizes="40px" className="object-cover" />
                            </span>
                            <span className="text-sm">{c.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <figcaption className="text-sm text-muted pt-3 px-2">
                Covers from Bitgrain&apos;s template library, at full size and at list size. Bold shapes survive. Fine print doesn&apos;t.
            </figcaption>
        </figure>
    );
}

export function Body() {
    return (
        <>
            <p>
                When you design an album cover, you see it huge on your screen. Every detail
                looks great. But that&apos;s not how most people will meet it. They&apos;ll see
                it in a playlist, a search result, a share on someone&apos;s story:{" "}
                <b>about the size of your thumbnail</b>, next to dozens of others.
            </p>
            <p>So design for that size first. Here&apos;s how.</p>

            <SizeTest />

            <h2>1. One idea, not five</h2>
            <p>
                The covers that work small usually have one clear thing on them: a face, a
                shape, a colour, a word. When you try to fit in a collage, the band photo, a
                logo and a pattern, it all turns to mud at small sizes.
            </p>
            <Pull>If you can&apos;t describe your cover in five words, it&apos;s probably too busy.</Pull>

            <h2>2. Big shapes, strong contrast</h2>
            <p>
                Squint at your cover, or step back from your screen. What&apos;s left? Those
                big light and dark shapes are what people will see on a phone. If everything
                is mid-grey and similar, it&apos;ll vanish in a list.
            </p>

            <h2>3. Type big, or no type</h2>
            <p>
                Your artist name and title are already written right next to the cover in
                every app. You don&apos;t have to put them on the art. If you do, make them big
                enough to read at thumbnail size. Thin, small text is the first thing to
                disappear.
            </p>

            <Meme
                caption="An original meme. The cat has strong opinions about kerning."
                panels={[
                    { cat: "marigold", face: "indigo", mood: "open", bg: "indigo", top: "my cover", bottom: "at 3000px" },
                    { cat: "marigold", face: "indigo", mood: "sleepy", bg: "peach", top: "my cover", bottom: "in a playlist" },
                ]}
            />

            <h2>4. Own a colour</h2>
            <p>
                Look at the playlists your music will sit in. If every cover is dark and
                moody, a flat bright colour will jump out. If everything is bright, go quiet.
                Standing out is relative.
            </p>

            <h2>5. Texture helps</h2>
            <p>
                A bit of grain, halftone or a riso-style print effect makes a cover feel
                physical, like something you could hold. It also gives a simple image more
                character without adding clutter. (I&apos;m biased: I built{" "}
                <Link href="/work/bitgrain">a tool for exactly this</Link>. I wrote about{" "}
                <Link href="/blogs/why-indie-covers-love-the-printed-look">why indie music loves the printed look</Link>{" "}
                too.)
            </p>

            <h2>6. Test it like a listener</h2>
            <p>
                Before you release, shrink your cover to about 60 pixels wide and put it in a
                screenshot of a real playlist, next to real covers. Look at it on your phone.
                Can you tell what it is? Would you notice it? That two-minute test will tell
                you more than an hour of zooming in.
            </p>
            <Aside note="don't forget">
                Your cover also needs to meet the store rules: square, 3000 × 3000, no links
                or logos. I put all of those in{" "}
                <Link href="/blogs/album-cover-size-and-rules-for-streaming">a checklist here</Link>.
            </Aside>
        </>
    );
}
