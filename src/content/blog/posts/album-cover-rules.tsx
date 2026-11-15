import React from "react";
import Link from "next/link";
import { Aside, Figure, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "album-cover-size-and-rules-for-streaming",
    title: "Album cover size and rules: what Spotify and other stores actually want",
    description:
        "The size, format and content rules that get album art accepted on streaming services, explained plainly, plus the common mistakes that get releases rejected.",
    date: "2026-11-12",
    tags: ["Music", "Album art"],
    keywords: [
        "album cover size",
        "spotify album cover size",
        "album artwork requirements",
        "3000x3000 album cover",
        "album art rejected distributor",
        "single cover art size",
    ],
    minutes: 4,
    cover: {
        src: "/Assets/work/bitgrain/library/lowlight-album.webp",
        alt: "The Lowlight indie album cover template",
        ratio: "1 / 1",
        bg: "#2F6B4F",
        rotate: -4,
    },
};

export function Body() {
    return (
        <>
            <p>
                You&apos;ve finished the song. It&apos;s mixed, it&apos;s mastered, you&apos;re
                ready to put it out. Then your distributor rejects it, because of the
                artwork. It happens a lot, and it&apos;s almost always for the same handful of
                reasons.
            </p>
            <p>
                I built an album cover tool into{" "}
                <Link href="/work/bitgrain">Bitgrain</Link>, so I&apos;ve read more of these
                rules than I ever expected to. Here&apos;s what you need to know, in plain
                words.
            </p>

            <Aside note="quick check">
                Every distributor has its own exact rules and they change from time to time.
                Use this as a guide, and check the artwork page of whoever you release
                through before you upload.
            </Aside>

            <h2>The size: 3000 × 3000 pixels</h2>
            <p>
                Make your cover a <b>perfect square, 3000 by 3000 pixels</b>. Most
                distributors ask for at least that, and it&apos;s big enough to look sharp
                everywhere, from a phone thumbnail to a big TV screen.
            </p>
            <ul>
                <li><b>Square.</b> Not almost square. Exactly the same width and height.</li>
                <li><b>JPG or PNG.</b> These are what nearly everyone accepts.</li>
                <li><b>RGB colour.</b> Not CMYK. CMYK is for printing; screens use RGB.</li>
                <li><b>Actually sharp.</b> Don&apos;t take a small image and stretch it up to 3000. Stores check for blurry or pixelated art.</li>
            </ul>
            <Pull>Start big. You can always shrink a cover. You can&apos;t grow one.</Pull>

            <h2>What you&apos;re not allowed to put on it</h2>
            <p>This is where most rejections come from. Leave these off:</p>
            <ul>
                <li><b>Website addresses, social handles or emails.</b> No &quot;@yourname&quot;, no links.</li>
                <li><b>Store or streaming logos.</b> No Spotify or Apple Music logos, no &quot;out now on&quot; badges.</li>
                <li><b>Prices or ads.</b> No &quot;only $0.99&quot;, no &quot;new release&quot; stickers.</li>
                <li><b>Text that doesn&apos;t match the release.</b> If the artist name or title is on the cover, it has to match what you typed in exactly.</li>
                <li><b>Things you don&apos;t have the rights to.</b> Someone else&apos;s photo, artwork or logo without permission.</li>
            </ul>

            <Figure
                src="/Assets/blog/music/album-cover-page.webp"
                alt="Bitgrain's album cover maker"
                ratio="1440 / 900"
                caption="Bitgrain's album cover tool exports square artwork ready for streaming."
            />

            <h2>The mistakes I see most</h2>
            <h3>The title is too small to read</h3>
            <p>
                On a phone, your cover is often shown smaller than your thumbnail. A thin,
                tiny title disappears completely. If you include text, make it big, or leave
                it off and let the image do the work.
            </p>
            <h3>Important stuff near the edges</h3>
            <p>
                Some apps round the corners or crop a little. Keep faces and text away from
                the very edge.
            </p>
            <h3>Making it for print first</h3>
            <p>
                If you&apos;re also pressing vinyl or CDs, make the print version separately.
                Print files are usually CMYK with extra space around the edges, which is the
                opposite of what streaming wants.
            </p>

            <h2>A checklist before you upload</h2>
            <ol>
                <li>Exactly square, 3000 × 3000 pixels.</li>
                <li>JPG or PNG, in RGB.</li>
                <li>Sharp when you zoom in, not stretched.</li>
                <li>No links, handles, logos or prices.</li>
                <li>Any text on it matches the artist name and title exactly.</li>
                <li>Readable when you shrink it to the size of your thumbnail.</li>
            </ol>
            <p>
                That last one matters more than any rule, and I wrote a whole post about it:{" "}
                <Link href="/blogs/design-an-album-cover-that-works-small">
                    designing an album cover that works at thumbnail size
                </Link>
                .
            </p>
        </>
    );
}
