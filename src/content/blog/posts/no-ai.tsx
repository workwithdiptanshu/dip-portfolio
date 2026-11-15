import React from "react";
import Link from "next/link";
import { Aside, Code, Figure, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "why-i-built-bitgrain-without-ai",
    title: "Why I built my design tool without AI",
    description:
        "Bitgrain has no AI in it, on purpose. Not because I'm against it, but because people finishing a design need the same result every time. Here's what that one decision ended up giving me.",
    date: "2026-10-14",
    tags: ["Product", "Bitgrain"],
    keywords: [
        "design tool without ai",
        "deterministic image editor",
        "no ai design app",
        "building a product solo",
        "one time payment vs subscription",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/editor.webp",
        alt: "The Bitgrain editor with a zine open",
        ratio: "1600 / 962",
        bg: "#2F6B4F",
    },
};

export function Body() {
    return (
        <>
            <p>
                When I launched <Link href="/work/bitgrain">Bitgrain</Link>, the most common
                question was some version of &quot;where&apos;s the AI?&quot; Every design tool
                seems to have a prompt box now. Bitgrain doesn&apos;t. No models, no prompts,
                nothing generated, nothing tracking you.
            </p>
            <p>
                That wasn&apos;t a statement about AI being bad. It was a practical decision,
                and it ended up shaping almost everything else about the product.
            </p>

            <h2>Finishing is different from exploring</h2>
            <p>
                AI image tools give you something different every time you ask. That&apos;s
                great when you&apos;re looking for ideas. You type, you get surprised, you try
                again.
            </p>
            <p>
                But most people using Bitgrain aren&apos;t exploring. They&apos;re finishing.
                Someone has a record cover due on Friday. They want the grain a little
                heavier, or the dots a little bigger. They need to move one slider and have{" "}
                <b>only that one thing change</b>. If the whole image shifts every time they
                touch something, the tool is working against them.
            </p>
            <Pull>A surprise is useful when you&apos;re starting. It&apos;s a problem when you&apos;re almost done.</Pull>
            <p>
                So every effect in Bitgrain is plain code I wrote. Same settings in, same
                picture out, every single time.
            </p>

            <Figure
                src="/Assets/work/bitgrain/editor.webp"
                alt="The Bitgrain editor"
                ratio="1600 / 962"
                caption="Every effect is ordinary code, so the same settings always give the same result."
            />

            <h2>What that one decision gave me</h2>
            <p>I didn&apos;t plan this, but once the results were predictable, a lot of other things became possible.</p>

            <h3>A file you can come back to</h3>
            <p>
                Bitgrain saves your work as a <code>.btg</code> file. It doesn&apos;t store the
                finished picture. It stores the decisions: every layer, every setting, every
                font. Open it a year later and you get exactly the same pixels back.
            </p>
            <p>
                That only works because nothing in the pipeline makes things up. You
                can&apos;t save your way out of something that gives a new answer every time.
            </p>
            <Code label="It's plain JSON, on purpose, so it'll still be readable in ten years.">{`
{
  "type": "studio",
  "version": 1,
  "layers": [ ... ],
  "customFonts": [ { "label": "Akasha", "dataUrl": "data:font/ttf;base64,..." } ],
  "image": "data:image/png;base64,..."
}
`}</Code>

            <h3>Privacy, for free</h3>
            <p>
                Everything runs in your browser. Your photos never get uploaded anywhere,
                because there&apos;s no server that needs to see them. I didn&apos;t have to
                promise to be careful with your data. I just never receive it.
            </p>

            <h3>A free tier that costs me nothing</h3>
            <p>
                Running AI models costs money every time someone clicks a button. That&apos;s
                why so many tools make you pay before you&apos;ve made anything. Bitgrain runs
                on your own computer, so a free user costs me nothing. The editor is free,
                with no signup at all.
            </p>

            <h3>A licence instead of a subscription</h3>
            <p>
                If you pay, it&apos;s once, for ten years. It felt strange to promise your files
                will open for years and then charge you every month for the privilege. And
                without server costs, I don&apos;t need a monthly fee to stay afloat.
            </p>

            <Aside note="to be exact">
                Some things in Bitgrain are random on purpose. Film grain that lands in the
                same place twice stops looking like grain. Where the randomness matters,
                like dust and scratches, it uses a seed, and the seed is saved in the file,
                so it still comes back the same.
            </Aside>

            <h2>Did it work?</h2>
            <p>
                I launched on Product Hunt in May 2026 and Bitgrain came #5 Product of the
                Day. It now gets over 10,000 visitors a month, and more than 500 people have
                signed up.
            </p>
            <p>
                Saying no to one thing turned out to be the reason people liked it. I&apos;m
                not against AI. I just think a tool should be clear about the job it&apos;s
                doing, and this one&apos;s job is helping you finish.
            </p>
        </>
    );
}
