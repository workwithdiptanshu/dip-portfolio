import React from "react";
import Link from "next/link";
import { Aside, Figure, Pull, Row } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "why-indie-covers-love-the-printed-look",
    title: "Why indie and lo-fi music loves the printed look",
    description:
        "Photocopied punk flyers, risograph zines, newspaper halftone. Why so much indie and lo-fi artwork borrows from cheap, old printing, and how to get the look without it feeling like a filter.",
    date: "2026-10-18",
    tags: ["Music", "Album art", "Design"],
    keywords: [
        "risograph album cover",
        "lo fi album art",
        "halftone album cover",
        "punk flyer aesthetic",
        "photocopy effect",
        "indie album art style",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/close/newspaper.webp",
        alt: "A close crop of a newspaper-style halftone",
        ratio: "1 / 1",
        bg: "#F5A48C",
        rotate: -4,
    },
};

export function Body() {
    return (
        <>
            <p>
                Look at a playlist of indie, lo-fi or punk music and you&apos;ll notice how
                much of the artwork looks <i>printed</i>. Grainy photos. Big halftone dots.
                Colours that don&apos;t quite line up. It looks like it came off an old
                photocopier, even when it was made on a laptop last week.
            </p>
            <p>
                That&apos;s not an accident. The look has a history, and the history is the
                point.
            </p>

            <h2>It started with whatever was cheap</h2>
            <p>
                In the late 1970s, punk bands made their own flyers and zines with the
                cheapest tool they had: the <b>photocopier</b>. Copy a copy of a copy and the
                image breaks down into harsh black and white, with grime and streaks. Nobody
                planned that look. It was simply what you got when you had no money and a
                gig on Friday.
            </p>
            <p>
                Later, zine makers found the <b>risograph</b>, a Japanese stencil printer made
                for schools and offices to print lots of copies cheaply. It prints one colour
                at a time in bright, slightly see-through inks, and the layers never line up
                perfectly. That wobble became the look of DIY art and music for a whole
                generation.
            </p>
            <Pull>Nobody planned the look. It was simply what you got with no money and a gig on Friday.</Pull>

            <Row
                caption="Riso-style colour separation at three detail settings."
                items={[
                    { src: "/Assets/work/bitgrain/tri/risograph-0.webp", label: "Coarse" },
                    { src: "/Assets/work/bitgrain/tri/risograph-1.webp", label: "Balanced" },
                    { src: "/Assets/work/bitgrain/tri/risograph-2.webp", label: "Fine" },
                ]}
            />

            <h2>Why it still works</h2>
            <h3>It says &quot;we made this ourselves&quot;</h3>
            <p>
                The printed look still carries that DIY meaning. It tells the listener this
                came from people, not a marketing department. For independent artists
                that&apos;s exactly the message.
            </p>
            <h3>It feels like an object</h3>
            <p>
                Most music now lives as a tiny square on a screen. Texture makes that square
                feel like something you could hold: a record sleeve, a cassette insert, a
                flyer stapled to a pole.
            </p>
            <h3>It stands out from glossy</h3>
            <p>
                Next to all the shiny, perfect, often AI-made artwork out there, a bit of
                grain and misprint reads instantly as human. I wrote about that in{" "}
                <Link href="/blogs/made-by-a-person-is-a-feature-now">&quot;made by a person&quot; is a feature now</Link>.
            </p>

            <Figure
                src="/Assets/blog/music/gig-poster-split.webp"
                alt="A photo before and after a halftone effect"
                ratio="1080 / 860"
                caption="Before and after: the same photo, with a printed texture."
            />

            <h2>How to get the look without it feeling like a filter</h2>
            <p>
                The problem with most &quot;vintage&quot; filters is that they just lay a dirty
                texture over the top. Real print doesn&apos;t work like that, and people can
                tell. A few things make the difference:
            </p>
            <ul>
                <li><b>Limit your colours.</b> Riso is usually two or three inks. Pick a pair, like pink and blue, and stick to it.</li>
                <li><b>Use real dots.</b> Proper halftone is dots of different sizes on an angled grid, not a pattern stamped on top.</li>
                <li><b>Let layers miss.</b> Shift one colour slightly so the edges don&apos;t line up. That&apos;s the riso wobble.</li>
                <li><b>Start with contrast.</b> Printing loves bold photos. Push the contrast before you add texture.</li>
                <li><b>Don&apos;t overdo the grime.</b> A little goes a long way.</li>
            </ul>
            <Aside note="shameless plug">
                This is the exact problem I built <Link href="/work/bitgrain">Bitgrain</Link>{" "}
                to solve. Its riso effect works out real ink separations, and the halftone uses
                the same screen angles printers use. There&apos;s an{" "}
                <a href="https://bitgrain.app/album-cover" target="_blank" rel="noopener">album cover tool</a>{" "}
                too, and it runs in your browser.
            </Aside>
            <p>
                Cheap printing gave music some of its best-loved looks, mostly by accident.
                Using them today, on purpose, is a nice way of keeping the spirit: made by
                people, with what they had.
            </p>
        </>
    );
}
