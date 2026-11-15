import React from "react";
import Link from "next/link";
import { Artwork, Meme, Pull, Quote } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "art-is-a-lot-of-small-choices",
    title: "Art is a lot of small choices. That's why a prompt isn't enough",
    description:
        "Ted Chiang argued that art comes from making lots of choices, and that a prompt makes very few. Looking at Hokusai's Great Wave, I think he's right, and it changed how I think about my own work.",
    date: "2026-11-03",
    tags: ["AI slop", "Art"],
    keywords: [
        "can ai make art",
        "ted chiang ai art",
        "why ai art is not art",
        "great wave off kanagawa",
        "what makes art art",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/blog/art/wave.webp",
        alt: "The Great Wave off Kanagawa by Katsushika Hokusai",
        ratio: "1920 / 1291",
        bg: "#2E2A7A",
        rotate: -3,
    },
};

export function Body() {
    return (
        <>
            <p>
                The best argument I&apos;ve read about AI and art isn&apos;t angry at all.
                It&apos;s by the writer Ted Chiang, in an essay for <i>The New Yorker</i>{" "}
                called &quot;Why A.I. Isn&apos;t Going to Make Art&quot;. His idea is simple
                enough to fit in one line:
            </p>
            <Quote
                who="Ted Chiang"
                where="The New Yorker, August 2024"
                href="https://www.newyorker.com/culture/the-weekend-essay/why-ai-isnt-going-to-make-art"
            >
                Art is something that results from making a lot of choices.
            </Quote>
            <p>
                A painter decides every brushstroke. A writer picks every word, and decides
                which ones to leave out. When you type a one-line prompt, you&apos;ve made
                maybe a dozen choices. The machine fills in the other million with the most
                average options it can find. That&apos;s why the result feels like nobody
                made it. In a way, nobody did.
            </p>

            <h2>Look at the wave</h2>
            <p>
                Here&apos;s a picture almost everyone knows. Hokusai made <i>The Great Wave
                off Kanagawa</i> around 1831, as a woodblock print, part of a series of views
                of Mount Fuji.
            </p>
            <Artwork
                src="/Assets/blog/art/wave.webp"
                ratio="1920 / 1291"
                artist="Katsushika Hokusai"
                title="The Great Wave off Kanagawa"
                year="c. 1831"
            />
            <p>Now count the choices.</p>
            <ul>
                <li>Mount Fuji, the supposed subject of the whole series, is <b>tiny</b>, tucked under the wave. That&apos;s a choice.</li>
                <li>The wave&apos;s edge breaks into claws, almost like fingers reaching for the boats. A choice.</li>
                <li>The blue is Prussian blue, a pigment that had only recently become available in Japan. Using it, and using so much of it, was a choice.</li>
                <li>The fishermen are bent low in their boats, all in the same direction, so you feel the danger instead of being told about it.</li>
                <li>And it&apos;s a print. Someone carved every line into wood, backwards, so it could be printed again and again.</li>
            </ul>
            <p>
                Nothing in that picture is the average of anything. Every bit of it is
                somebody deciding.
            </p>
            <Pull>Nothing in that picture is the average of anything.</Pull>

            <h2>&quot;But I make choices with prompts too&quot;</h2>
            <p>
                Fair. Some people spend hours refining, editing, painting over, combining.
                The more choices you make, the more it becomes yours. Chiang&apos;s point
                isn&apos;t that a tool can never be involved. It&apos;s that the meaning comes
                from the choosing, and a quick prompt skips almost all of it.
            </p>

            <Meme
                variant="choice"
                caption="The two ways to make a poster."
                panels={[
                    { cat: "lilac", face: "indigo", mood: "sleepy", bg: "lilac", text: "Typing \"cool poster, trending, 8k\" and taking the first one" },
                    { cat: "marigold", face: "indigo", mood: "happy", bg: "moss", text: "Picking the font, the photo, the crop, and moving the title 4 pixels left. Twice." },
                ]}
            />

            <h2>Why the choices matter to you, the viewer</h2>
            <p>
                When you look at something somebody made, part of what you feel is them. Their
                taste, their mistakes, their stubbornness. You can sense that a person stood
                there and decided. Take that away and what&apos;s left can be pretty, but it
                has nothing to say.
            </p>
            <p>
                Kurt Vonnegut said something I think about a lot:
            </p>
            <Quote who="Kurt Vonnegut" where="A Man Without a Country, 2005">
                Practicing an art, no matter how well or badly, is a way to make your soul
                grow, for heaven&apos;s sake.
            </Quote>
            <p>
                Notice he says &quot;no matter how well or badly&quot;. The point was never
                the result. The point is that you did the choosing.
            </p>

            <h2>What it changed for me</h2>
            <p>
                I build tools for making things, like{" "}
                <Link href="/work/bitgrain">Bitgrain</Link>. After reading Chiang, my test for
                any feature became: does this give people more choices, or take them away? A
                halftone effect with sliders gives you choices. A button that
                &quot;makes it look good&quot; takes them away. I&apos;d rather build the first
                kind.
            </p>
        </>
    );
}
