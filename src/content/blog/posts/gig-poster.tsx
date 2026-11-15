import React from "react";
import Link from "next/link";
import { Aside, Figure, Meme, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "how-to-make-a-gig-poster-people-read",
    title: "How to make a gig poster people actually stop and read",
    description:
        "A gig poster has about two seconds to work. Here's how to lay one out so people know who, when and where at a glance, plus the sizes you need for print and Instagram.",
    date: "2026-09-05",
    tags: ["Music", "Posters", "Design"],
    keywords: [
        "how to make a gig poster",
        "gig poster design",
        "concert poster template",
        "band poster ideas",
        "event poster layout",
        "instagram gig poster size",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/templates/sazanami-koi-pond.webp",
        alt: "A poster template from Bitgrain",
        ratio: "400 / 566",
        bg: "#2F6B4F",
        rotate: -4,
    },
};

/** Who, when, where: the order a passer-by reads a poster in. */
function Hierarchy() {
    const rows = [
        { size: "text-[44px] sm:text-[64px] font-black tracking-tight leading-none", text: "THE NIGHT BUSES", note: "who: biggest, by far" },
        { size: "text-[22px] sm:text-[28px] font-semibold", text: "Fri 21 Nov · 8 pm", note: "when" },
        { size: "text-[18px] sm:text-[22px]", text: "The Basement, Indiranagar", note: "where" },
        { size: "text-[13px] text-black/60", text: "with Paper Kites (support) · tickets at the door", note: "everything else" },
    ];
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-4 sm:p-6 grid sm:grid-cols-[1fr_200px] gap-4">
                <div className="bg-cat-marigold rounded-[18px] p-6 sm:p-8 flex flex-col gap-3 font-sans text-ink">
                    {rows.map((r) => (
                        <p key={r.text} className={r.size}>{r.text}</p>
                    ))}
                </div>
                <ol className="flex flex-col justify-center gap-3 text-sm">
                    {rows.map((r, i) => (
                        <li key={r.note} className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-white text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                            {r.note}
                        </li>
                    ))}
                </ol>
            </div>
            <figcaption className="text-sm text-muted pt-3 px-2">A made-up gig, laid out in the order people read a poster.</figcaption>
        </figure>
    );
}

export function Body() {
    return (
        <>
            <p>
                A gig poster lives a hard life. It gets stapled to a pole between twelve
                others, shrunk into an Instagram story, or scrolled past at speed. Most
                people give it about two seconds. In that time, it has to answer three
                questions: <b>who, when and where</b>.
            </p>
            <p>Everything else is a bonus. Here&apos;s how to get those three across.</p>

            <h2>Get the order right</h2>
            <p>
                People read a poster in order of size. So decide what matters most, and make
                it the biggest by a lot, not by a little.
            </p>
            <Hierarchy />
            <ol>
                <li><b>Who.</b> The band or headline act. Make it huge.</li>
                <li><b>When.</b> Day, date and time. Include the day of the week; people think in &quot;this Friday&quot;, not dates.</li>
                <li><b>Where.</b> The venue, and the area if the venue isn&apos;t famous.</li>
                <li><b>The rest.</b> Support acts, tickets, price, age limits. Smaller, together, at the bottom.</li>
            </ol>
            <Pull>Make the band name the biggest thing by a lot, not by a little.</Pull>

            <h2>One strong image</h2>
            <p>
                A single bold photo or illustration does more than a collage. Push the
                contrast so it reads from across the street. If your band photo is a bit dull,
                a halftone or photocopy effect can make an ordinary picture look like a
                proper poster.
            </p>
            <Figure
                src="/Assets/blog/music/gig-poster-page.webp"
                alt="Bitgrain's gig poster maker"
                ratio="1440 / 900"
                caption="Bitgrain's gig poster maker: start from a template, drop in the band photo, add a printed texture."
            />

            <h2>Pick a typeface with a personality</h2>
            <p>
                Your poster&apos;s type says what kind of night it is before anyone reads a
                word. Chunky condensed letters say loud. A delicate serif says intimate.
                Pick one that sounds like your music, and use at most two typefaces.
            </p>

            <Meme
                variant="choice"
                caption="An original meme, drawn with my cats."
                panels={[
                    { cat: "indigo", face: "marigold", mood: "sleepy", bg: "lilac", text: "Band name in size 12, the venue's logo in size 90" },
                    { cat: "moss", face: "white", mood: "happy", bg: "marigold", text: "Band name so big it barely fits. Date right under it." },
                ]}
            />

            <h2>Make two versions</h2>
            <p>The same poster rarely works everywhere. Plan for at least two:</p>
            <ul>
                <li><b>Print.</b> A3 or A4 portrait is the usual for walls and windows. Leave a little margin so nothing gets cut off.</li>
                <li><b>Instagram.</b> A 4:5 portrait post (1080 × 1350) for the feed, and a tall 9:16 version (1080 × 1920) for stories, with the key details away from the top and bottom where the app puts its buttons.</li>
            </ul>

            <Aside note="the squint test">
                Pin it up, walk across the room, and squint. If you can still read the band
                name and the date, it works.
            </Aside>

            <h2>Templates are fine</h2>
            <p>
                There&apos;s no shame in starting from a template, as long as you make it
                yours: your photo, your colours, your words. Bitgrain&apos;s{" "}
                <a href="https://bitgrain.app/template-gallery" target="_blank" rel="noopener">template library</a>{" "}
                has posters you can change down to the last letter. And if you&apos;re making
                the album art too, read{" "}
                <Link href="/blogs/design-an-album-cover-that-works-small">how to design a cover that works small</Link>.
            </p>
        </>
    );
}
