import React from "react";
import Link from "next/link";
import { Artwork, Meme, Pull, Quote } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "made-by-a-person-is-a-feature-now",
    title: "\"Made by a person\" is a feature now",
    description:
        "When anyone can make a polished image in seconds, polish stops being special. What's left is the thing machines can't fake: a person who chose, struggled and meant it. Van Gogh knew.",
    date: "2026-09-23",
    tags: ["AI slop", "Art"],
    keywords: [
        "human made art",
        "handmade vs ai",
        "value of human creativity",
        "starry night history",
        "authentic design",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/blog/art/starry.webp",
        alt: "The Starry Night by Vincent van Gogh",
        ratio: "1920 / 1520",
        bg: "#F2B23A",
        rotate: 3,
    },
};

export function Body() {
    return (
        <>
            <p>
                For a long time, polish was the hard part. A glossy, professional-looking
                image took skill, time and money, so polish told you that someone had put in
                the work.
            </p>
            <p>
                That&apos;s over. Anyone can now make something polished in seconds. And
                when everyone can have something, it stops meaning much. So the question
                becomes: what still tells you that something was made with care?
            </p>
            <p>My answer: the person.</p>

            <h2>A painting from a window</h2>
            <Artwork
                src="/Assets/blog/art/starry.webp"
                ratio="1920 / 1520"
                artist="Vincent van Gogh"
                title="The Starry Night"
                year="1889"
            />
            <p>
                Van Gogh painted <i>The Starry Night</i> in 1889, while staying at an asylum
                in Saint-Rémy, in the south of France. The view is roughly what he could see
                from his window, but not exactly. He painted it during the day, from memory,
                and added the little village himself.
            </p>
            <p>
                So it isn&apos;t a record of a night sky. It&apos;s a record of a person
                looking at one, at a hard time in his life, and deciding how it felt. The
                swirls aren&apos;t accurate. They&apos;re honest.
            </p>
            <Pull>The swirls aren&apos;t accurate. They&apos;re honest.</Pull>
            <p>
                You could ask a machine for &quot;a starry night in the style of Van
                Gogh&quot; and get something that looks a bit like it. What you can&apos;t
                get is the man at the window. That&apos;s the part people actually love.
            </p>

            <h2>What people pay for now</h2>
            <p>
                I think we&apos;re already seeing a shift. Things that show a human hand are
                becoming more valued, not less: zines, film photos, risograph prints,
                handwritten notes, wonky ceramics, live music with mistakes in it. People
                don&apos;t want them despite the imperfection. They want them partly{" "}
                <b>because</b> of it. It&apos;s proof somebody was there.
            </p>

            <Meme
                variant="choice"
                caption="An original meme, drawn by me."
                panels={[
                    { cat: "lilac", face: "indigo", mood: "sleepy", bg: "lilac", text: "A flawless poster that 10,000 other people also have" },
                    { cat: "peach", face: "indigo", mood: "happy", bg: "marigold", text: "A slightly crooked riso print my friend made in her kitchen" },
                ]}
            />

            <h2>What this means if you make things</h2>
            <p>
                If you make things, this is good news. You don&apos;t have to compete with
                machines on speed or polish. You couldn&apos;t win anyway. Compete on the
                things that come from you:
            </p>
            <ul>
                <li><b>Your taste.</b> What you choose, and what you leave out.</li>
                <li><b>Your story.</b> Why you made it and who it&apos;s for.</li>
                <li><b>Your hand.</b> The texture, the mistakes you kept, the way you do things.</li>
                <li><b>Your specifics.</b> Real places, real people, real details.</li>
            </ul>
            <p>
                The radio host Ira Glass has a famous bit of advice for beginners about the
                gap between your taste and your skill. He says it&apos;s normal to hate your
                early work, because:
            </p>
            <Quote who="Ira Glass" where="on creative work, 2009">
                Your taste is why your work disappoints you.
            </Quote>
            <p>
                His advice is to keep making things until your work catches up with your
                taste. A prompt lets you skip that gap. But the gap is where you become
                someone with something to say.
            </p>

            <h2>Why I built my tool this way</h2>
            <p>
                This is a big part of why <Link href="/work/bitgrain">Bitgrain</Link> has no
                AI in it. It&apos;s meant to give people the look of real print, and leave the
                choosing to them. I wrote more about that in{" "}
                <Link href="/blogs/why-i-built-bitgrain-without-ai">why I built it without AI</Link>.
            </p>
            <p>
                Make the thing. Make it yours. Leave your fingerprints on it. That&apos;s the
                part nobody can generate.
            </p>
        </>
    );
}
