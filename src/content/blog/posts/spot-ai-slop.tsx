import React from "react";
import Link from "next/link";
import { Aside, Figure, Meme, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "how-to-spot-ai-slop-in-design",
    title: "How to spot AI slop in design (and how to avoid making it)",
    description:
        "A practical checklist for telling generic AI-made design from the real thing, and eight simple habits that keep your own posters, sites and covers from looking like everyone else's.",
    date: "2026-10-07",
    tags: ["AI slop", "Design"],
    keywords: [
        "how to spot ai generated images",
        "how to tell if a design is ai",
        "avoid generic design",
        "ai generated design tells",
        "make design look less generic",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/work/bitgrain/library/cranes-crossing.webp",
        alt: "A poetry cover with cranes crossing a red sun",
        ratio: "400 / 600",
        bg: "#F5A48C",
        rotate: 4,
    },
};

export function Body() {
    return (
        <>
            <p>
                I spend a lot of my time looking at design: building a design tool,
                reviewing templates, making{" "}
                <Link href="/concepts">websites for small businesses</Link>. Over the last
                couple of years one thing has got much easier to spot: the generic look of
                design that nobody really made.
            </p>
            <p>
                Here&apos;s my checklist for spotting it, and then the more useful part: how
                to keep your own work from looking like it.
            </p>

            <h2>Part one: the tells</h2>
            <h3>1. The light comes from nowhere</h3>
            <p>
                Real photos have a light source. Shadows go one way. In slop, everything
                glows evenly, faces are lit from every side, and there&apos;s often a soft
                golden haze over the whole thing.
            </p>
            <h3>2. The text is almost text</h3>
            <p>
                Look at the small words: signs, labels, book spines, the fine print on a
                poster. If the letters melt into shapes that look like a language you
                can&apos;t read, that&apos;s a strong tell.
            </p>
            <h3>3. Every surface is perfect</h3>
            <p>
                No scratches, no dust, no wrinkles, no wear. Real things are used. Paper
                creases. Ink spreads. Skin has texture.
            </p>
            <h3>4. The palette is the default palette</h3>
            <p>
                Teal and orange. Purple and pink neon. Warm cream and sage. These aren&apos;t
                bad colours, but when a design uses the exact same ones as a thousand others,
                it usually means nobody chose them.
            </p>
            <h3>5. Detail without a reason</h3>
            <p>
                Busy backgrounds full of objects that turn out to be nothing when you look
                closely. Real detail is there because someone wanted you to notice it.
            </p>
            <h3>6. It could be for anything</h3>
            <p>
                The biggest tell of all. Swap the name on it, and it works just as well for a
                bank, a bakery or a crypto app. It doesn&apos;t belong to anyone.
            </p>

            <Meme
                caption="An original meme. The cats were drawn by hand, the panic is real."
                panels={[
                    { cat: "peach", face: "indigo", mood: "open", bg: "moss", top: "client: make it", bottom: "pop" },
                    { cat: "indigo", face: "marigold", mood: "sleepy", bg: "lilac", top: "the AI:", bottom: "purple neon again" },
                ]}
            />

            <h2>Part two: how to avoid making it</h2>
            <p>
                You don&apos;t need to swear off any tool. You just need to make enough real
                choices that the work becomes yours. These are the habits that help me.
            </p>
            <ol>
                <li><b>Start with a reference, not a prompt.</b> Find a real poster, book cover or label you love and work out why it works.</li>
                <li><b>Pick a constraint.</b> Two colours. One typeface. Only black and white. Limits force decisions, and decisions are what make work feel made.</li>
                <li><b>Use real photos.</b> Your own if you can. A slightly bad real photo beats a perfect fake one.</li>
                <li><b>Choose type on purpose.</b> Type carries more personality than almost anything else on a page. Don&apos;t settle for the default.</li>
                <li><b>Leave in some texture.</b> Grain, halftone, a misregistered print. Physical-looking imperfection is very hard to fake convincingly at scale.</li>
                <li><b>Make it specific.</b> Use the real name, the real date, the real place. Specific details are the opposite of slop.</li>
                <li><b>Have an opinion.</b> Make something a little bit wrong on purpose: tilt it, crop it tight, make the title enormous.</li>
                <li><b>Do one more pass.</b> Slop is what happens when people stop at the first result.</li>
            </ol>
            <Pull>A slightly bad real photo beats a perfect fake one.</Pull>

            <Figure
                src="/Assets/work/bitgrain/close/halftone.webp"
                alt="A close crop of a halftone portrait"
                ratio="1 / 1"
                caption="Real texture, like this halftone, is one of the easiest ways to make work feel made."
            />

            <Aside note="a simple test">
                Before you publish something, ask: could this exact design belong to anyone
                else? If the answer is yes, keep going.
            </Aside>

            <h2>Why I care</h2>
            <p>
                Partly because I build <Link href="/work/bitgrain">a tool for making printed-looking design</Link>,
                and I&apos;d love people to use it to make work that feels like theirs. But
                mostly because good design is a way of showing you cared. When everything
                looks the same, caring becomes the thing that stands out.
            </p>
        </>
    );
}
