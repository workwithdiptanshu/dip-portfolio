import React from "react";
import { Aside, Meme, Pull, Quote } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "miyazaki-insult-to-life-itself-context",
    title: "\"An insult to life itself\": what Miyazaki was actually reacting to",
    description:
        "Hayao Miyazaki's famous line gets shared under every AI art post. The real story is from 2016 and is more specific, and in some ways more interesting, than the meme.",
    date: "2026-10-21",
    tags: ["AI slop", "Art"],
    keywords: [
        "miyazaki ai quote",
        "insult to life itself",
        "miyazaki ai animation",
        "studio ghibli ai",
        "artists against ai",
    ],
    minutes: 4,
    cover: {
        art: "cat",
        alt: "A hand-drawn cat looking unimpressed",
        ratio: "1 / 1",
        bg: "#F2B23A",
    },
};

export function Body() {
    return (
        <>
            <p>
                If you&apos;ve spent any time near an argument about AI art, you&apos;ve seen
                it: a still of Hayao Miyazaki, the man behind Studio Ghibli, looking grim,
                with the caption &quot;I strongly feel that this is an insult to life
                itself.&quot;
            </p>
            <p>
                It&apos;s a real quote. But the story behind it is a bit different from how
                it&apos;s usually shared, and I think the real version is worth knowing.
            </p>

            <h2>What actually happened</h2>
            <p>
                The clip is from a 2016 NHK documentary about Miyazaki. In it, a group of
                young developers show him a demo. They had used machine learning to teach a
                computer-generated figure to move on its own. It drags itself along the
                ground using its head, in a way no human body would.
            </p>
            <p>
                Their pitch was that this could be used for zombie-like creatures in games.
                Miyazaki watched it, went quiet, and then talked about a friend of his with a
                disability, who struggles even to do a high five. Then he said it:
            </p>
            <Quote who="Hayao Miyazaki" where="NHK documentary, 2016">
                I strongly feel that this is an insult to life itself.
            </Quote>
            <p>
                He added that he would never want to use this technology in his own work.
            </p>

            <h2>So it wasn&apos;t about AI art?</h2>
            <p>
                Not directly. This was years before image generators were everywhere. He
                wasn&apos;t reacting to a prompt-generated Ghibli-style picture. He was
                reacting to something that imitated movement and pain without any
                understanding of what it means to have a body, or to struggle with one.
            </p>
            <Pull>He wasn&apos;t angry at the computer. He was angry that nobody in the room seemed to feel anything.</Pull>
            <p>
                And honestly? That&apos;s why the quote travels so well. The thing that upset
                him is the same thing people feel about slop today: it copies the outside of
                something without any of the inside.
            </p>

            <Meme
                caption="Original meme, my cats, no studio stills harmed."
                panels={[
                    { cat: "indigo", face: "marigold", mood: "open", bg: "lilac", top: "the quote", bottom: "everyone shares" },
                    { cat: "moss", face: "white", mood: "wink", bg: "marigold", top: "the context", bottom: "nobody reads" },
                ]}
            />

            <h2>Why context matters here</h2>
            <p>
                It&apos;s tempting to use a famous person&apos;s words as a mic drop. But if we
                care about people being honest about where things come from, which is most of
                the complaint about AI, we should be honest about this too. Miyazaki
                didn&apos;t say anything about Midjourney. He said something about care, and
                empathy, and how we treat life when we make things.
            </p>
            <p>That&apos;s a stronger point anyway.</p>

            <h2>What artists are actually asking for</h2>
            <p>
                Most artists aren&apos;t asking for technology to stop. The clearest version of
                what they want came from writer Joanna Maciejewska, in a post that went around
                the whole internet in 2024:
            </p>
            <Quote who="Joanna Maciejewska" where="on X, March 2024">
                I want AI to do my laundry and dishes so that I can do art and writing, not
                for AI to do my art and writing so that I can do my laundry and dishes.
            </Quote>
            <p>
                That&apos;s it. Automate the boring parts of life, not the parts that make it
                worth living. It&apos;s hard to argue with.
            </p>

            <Aside note="my take">
                I build software for a living, so I&apos;m not anti-technology. I just think
                the best tools help people make more of their own choices, not fewer. The
                ones that remove the human from the making are solving the wrong problem.
            </Aside>
        </>
    );
}
