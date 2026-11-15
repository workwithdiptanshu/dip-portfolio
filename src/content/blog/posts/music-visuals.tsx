import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Aside, Meme, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "music-visuals-on-a-small-budget",
    title: "Spotify Canvas, visualisers and lyric clips: music visuals on a small budget",
    description:
        "You don't need a music video budget to give a release some motion. Ideas for Spotify Canvas loops, short clips and visualisers you can make yourself, and how to keep them looking like you.",
    date: "2026-08-15",
    tags: ["Music", "Video"],
    keywords: [
        "spotify canvas ideas",
        "spotify canvas length",
        "music visualizer for song",
        "lyric video ideas",
        "cheap music video ideas",
        "visuals for independent artists",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/close/crt.webp",
        alt: "A close crop of a CRT screen effect",
        ratio: "1 / 1",
        bg: "#2E2A7A",
        rotate: 3,
    },
};

function LoopStrip() {
    const frames = [
        { src: "/Assets/work/bitgrain/close/crt.webp", label: "CRT" },
        { src: "/Assets/work/bitgrain/close/glitch.webp", label: "Glitch" },
        { src: "/Assets/work/bitgrain/close/manga-screentone.webp", label: "Screentone" },
        { src: "/Assets/work/bitgrain/close/dither.webp", label: "Dither" },
    ];
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-4 sm:p-6 grid grid-cols-4 gap-3">
                {frames.map((f, i) => (
                    <div key={f.src} className="flex flex-col gap-2">
                        <div
                            className="relative aspect-[9/16] rounded-[14px] overflow-hidden border-[4px] border-ink"
                            style={{ transform: `rotate(${[-2, 1.5, -1, 2][i]}deg)` }}
                        >
                            <Image src={f.src} alt={`${f.label} effect`} fill sizes="200px" className="object-cover" />
                        </div>
                        <span className="text-xs text-center text-muted">{f.label}</span>
                    </div>
                ))}
            </div>
            <figcaption className="text-sm text-muted pt-3 px-2">
                Tall, simple, textured: the shape a Canvas loop or a story clip needs.
            </figcaption>
        </figure>
    );
}

export function Body() {
    return (
        <>
            <p>
                A release used to need a cover, and maybe a video if you had money. Now every
                platform wants motion: a looping Canvas on Spotify, short vertical clips for
                Reels and TikTok, a visualiser for YouTube. If you&apos;re an independent
                artist, that can feel like a lot of extra work.
            </p>
            <p>
                The good news: the visuals that work best in these spots are short, simple and
                a bit rough. That&apos;s exactly the kind you can make yourself.
            </p>

            <h2>What Spotify Canvas actually is</h2>
            <p>
                Canvas is the short, looping visual that plays behind a song on the Now Playing
                screen in Spotify&apos;s phone app, in place of the still cover. It&apos;s{" "}
                <b>vertical and only a few seconds long</b>, between 3 and 8 seconds, and it
                loops. You add it through Spotify for Artists.
            </p>
            <p>
                Because it loops forever and sits behind the controls, a busy Canvas gets
                annoying fast. The best ones are almost hypnotic: something small that moves,
                and loops cleanly.
            </p>
            <Pull>A good Canvas is a mood, not a story.</Pull>

            <LoopStrip />

            <h2>Ideas you can make with a phone</h2>
            <ul>
                <li><b>Your cover, alive.</b> Take the album art and add a tiny bit of movement: grain that flickers, a slow zoom, colours that drift.</li>
                <li><b>A few seconds of real footage.</b> A car window at night, a record spinning, hands on a guitar. Give it a strong texture so it matches the cover.</li>
                <li><b>One lyric.</b> A single line, big, appearing and fading. Pick the line people will remember.</li>
                <li><b>A place.</b> Somewhere that feels like the song. Five seconds of rain on a street can say more than a whole video.</li>
            </ul>

            <Meme
                caption="An original meme. Budget: one cat, zero dollars."
                panels={[
                    { cat: "peach", face: "indigo", mood: "open", bg: "indigo", top: "the label's", bottom: "music video budget" },
                    { cat: "lilac", face: "indigo", mood: "happy", bg: "moss", top: "me and my", bottom: "phone at 2am" },
                ]}
            />

            <h2>Make it look like it belongs to the record</h2>
            <p>
                The trick that makes cheap visuals feel intentional is consistency. Use the
                same colours, texture and type as your cover. If the cover has a riso look,
                give the clip the same inks. If it&apos;s grainy black and white, keep the
                video grainy black and white. Suddenly a 5-second phone clip looks like part
                of a campaign.
            </p>
            <Aside note="how I do it">
                <Link href="/work/bitgrain">Bitgrain</Link> has a video editor that applies the
                same effects as the image tools to footage. So the cover and the Canvas can
                share exactly the same halftone, dither or grain, and the video exports the
                same way every time.
            </Aside>

            <h2>Small checklist</h2>
            <ol>
                <li>Shoot or export vertical (9:16).</li>
                <li>Keep it short, and make sure the end flows back into the start.</li>
                <li>Keep text and faces away from the bottom, where the player controls sit.</li>
                <li>Match the colours and texture of your cover.</li>
                <li>No logos, links or &quot;out now&quot; text; let the music do the selling.</li>
            </ol>
            <p>
                You don&apos;t need a big budget to give your music a look. You need one idea,
                done consistently. And if you&apos;re still working on the cover itself, start
                with{" "}
                <Link href="/blogs/album-cover-size-and-rules-for-streaming">the rules for album art</Link>.
            </p>
        </>
    );
}
