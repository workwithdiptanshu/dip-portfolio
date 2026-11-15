import React from "react";
import Link from "next/link";
import { Aside, Meme, Pull, Quote } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "what-is-ai-slop",
    title: "What is AI slop, and why does it all look the same?",
    description:
        "You've seen it: glossy, oddly smooth, slightly wrong. Here's what people mean by AI slop, why so much of it looks identical, and why that sameness is built in.",
    date: "2026-11-14",
    tags: ["AI slop", "Design"],
    keywords: [
        "what is ai slop",
        "ai slop meaning",
        "why does ai art look the same",
        "ai generated images look fake",
        "ai content everywhere",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/blog/art/milkmaid.webp",
        alt: "The Milkmaid by Johannes Vermeer",
        ratio: "1280 / 1435",
        bg: "#C3B8F0",
        rotate: -4,
    },
};

export function Body() {
    return (
        <>
            <p>
                Scroll any feed for a minute and you&apos;ll find it. A fantasy castle with
                too many towers. A product photo where the light comes from everywhere at
                once. A smiling family where somebody has six fingers. A blog post that
                says &quot;in today&apos;s fast-paced world&quot; and then says nothing at
                all.
            </p>
            <p>
                People have started calling this <b>AI slop</b>: stuff made by AI, quickly,
                in huge amounts, with nobody really caring what it says or how it looks.
                The word comes from pig feed. It&apos;s not a compliment.
            </p>

            <Meme
                caption="An original meme, drawn by me. No cats were generated."
                panels={[
                    { cat: "lilac", face: "indigo", mood: "open", bg: "indigo", top: "me opening", bottom: "any app in 2026" },
                    { cat: "moss", face: "white", mood: "sleepy", bg: "peach", top: "the 400th", bottom: "glowing castle" },
                ]}
            />

            <h2>Slop isn&apos;t the same as AI</h2>
            <p>
                I want to be fair here. Not everything made with AI is slop. People use
                these tools carefully, for real work, and some of it is good. Slop is about{" "}
                <b>care</b>, not the tool. It&apos;s what you get when the goal is to fill a
                space as cheaply as possible, and nobody stops to ask whether it&apos;s any
                good.
            </p>
            <p>
                Humans made slop long before AI. Stock photos of people laughing at salad.
                Clip-art business people shaking hands. AI just made it free and endless.
            </p>

            <h2>Why it all looks the same</h2>
            <p>
                Here&apos;s the part I find interesting. These image models learn from
                millions of pictures, and when you ask for something, they give you
                something close to the <b>average</b> of everything they&apos;ve seen that
                matches.
            </p>
            <p>
                Average is the problem. Ask for &quot;a cosy coffee shop&quot; and you get
                the most coffee-shop-looking coffee shop possible: warm light, plants,
                exposed brick, steam rising in a perfect curl. It&apos;s not wrong. It&apos;s
                just the middle of everything, with all the odd, specific, human edges sanded
                off.
            </p>
            <Pull>Slop is what the middle of everything looks like.</Pull>
            <p>
                The writer Ted Chiang put it well in a piece for <i>The New Yorker</i>. He
                described ChatGPT as a <i>blurry JPEG of the web</i>: a compressed copy that
                keeps the general shape of things and loses the detail. The same is true of
                pictures. You get the gist and lose the grain.
            </p>

            <h2>The tells</h2>
            <p>Once you notice them, you can&apos;t stop:</p>
            <ul>
                <li><b>Everything is glossy.</b> Skin like plastic, surfaces too clean, light with no single source.</li>
                <li><b>Too much detail, none of it meaningful.</b> Busy backgrounds where nothing is actually <i>anything</i> if you look closely.</li>
                <li><b>Gibberish text.</b> Signs and labels that are almost letters.</li>
                <li><b>Hands, ears, glasses, jewellery.</b> Small things that connect to other things tend to melt.</li>
                <li><b>No point of view.</b> Nothing in it feels chosen. Nobody seems to have an opinion.</li>
            </ul>

            <Aside note="for writing too">
                Text slop has tells as well: lots of words that sound impressive and mean
                little, everything in groups of three, and a cheerful summary at the end
                that repeats what you just read.
            </Aside>

            <h2>Why it matters</h2>
            <p>
                The obvious problem is that it&apos;s everywhere, so finding real things gets
                harder. The quieter problem is that it trains everyone&apos;s eye. When the
                average version is free and endless, it starts to feel normal, and anything
                with real character starts to look &quot;off&quot;.
            </p>
            <p>
                Musician Nick Cave was sent a song &quot;written in the style of Nick
                Cave&quot; by ChatGPT. His answer, in his newsletter, was short:
            </p>
            <Quote
                who="Nick Cave"
                where="The Red Hand Files, January 2023"
                href="https://www.theredhandfiles.com/"
            >
                This song sucks.
            </Quote>
            <p>
                He went on to call it a grotesque mockery of what it is to be human. That
                might sound harsh, but I think it&apos;s the honest reaction to something that
                copies the shape of a feeling without ever having had it.
            </p>

            <h2>So what do we do?</h2>
            <p>
                Make things with a point of view. Choose. Leave the odd edges in. I built{" "}
                <Link href="/blogs/why-i-built-bitgrain-without-ai">my design tool without AI</Link>{" "}
                for some of these reasons, and I wrote about{" "}
                <Link href="/blogs/how-to-spot-ai-slop-in-design">how to spot slop in design</Link>{" "}
                if you want the practical version.
            </p>
        </>
    );
}
