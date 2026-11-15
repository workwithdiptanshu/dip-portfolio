import React from "react";
import Link from "next/link";
import { Aside, Code, Figure, Pull, Row } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "floyd-steinberg-dithering-explained",
    title: "Dithering, explained simply: Floyd-Steinberg, Atkinson and the streak problem",
    description:
        "How dithering turns a photo into black and white dots, why Floyd-Steinberg and Atkinson look so different, and the one-line fix for the streaks it leaves behind.",
    date: "2026-10-28",
    tags: ["Graphics", "Algorithms", "Bitgrain"],
    keywords: [
        "floyd steinberg dithering",
        "atkinson dithering",
        "error diffusion dithering",
        "dithering algorithm javascript",
        "serpentine scan dithering",
        "bayer dithering",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/work/bitgrain/close/dither.webp",
        alt: "A close crop of a dithered portrait, made of black and white dots",
        ratio: "1 / 1",
        bg: "#F2B23A",
        rotate: 4,
    },
};

export function Body() {
    return (
        <>
            <p>
                Dithering is how you show a photo using only a few colours, sometimes just
                black and white, and still have it look like a photo. It&apos;s the look of old
                Mac screens, newspapers and a lot of posters right now. I built a dithering
                engine for <Link href="/work/bitgrain">Bitgrain</Link>, and it turned out to
                be one of the most satisfying things I&apos;ve ever written.
            </p>
            <p>Here&apos;s how it works, without the maths getting in the way.</p>

            <Figure
                src="/Assets/work/bitgrain/close/dither.webp"
                alt="A close crop of a dithered portrait"
                ratio="1 / 1"
                caption="Zoomed right in. Every dot is either fully black or fully white."
            />

            <h2>The naive way, and why it looks bad</h2>
            <p>
                The obvious way to turn a photo black and white is to look at each pixel and
                ask: is it lighter or darker than middle grey? Lighter becomes white, darker
                becomes black.
            </p>
            <p>
                It works, but it looks terrible. Soft gradients turn into hard blobs, and all
                the detail in the shadows disappears. The problem is that every pixel throws
                away the difference between what it was and what it became. A pixel that was
                40% grey gets turned into black, and that 40% is simply lost.
            </p>

            <h2>Error diffusion: pass the mistake on</h2>
            <p>
                The clever idea behind most dithering is: <b>don&apos;t throw the mistake
                away, hand it to the neighbours</b>.
            </p>
            <p>
                Go through the image pixel by pixel. Round each one to black or white. Work
                out how wrong you were (that&apos;s the <i>error</i>). Then add a share of that
                error to the pixels you haven&apos;t visited yet. If you rounded a grey pixel
                down to black, its neighbours get nudged a bit lighter, so one of them is more
                likely to come out white.
            </p>
            <p>
                Across the whole image the mistakes balance out. Your eye blends the dots back
                into the right shades of grey.
            </p>
            <Pull>The whole personality of a dither is where the error goes.</Pull>

            <h2>Floyd-Steinberg</h2>
            <p>
                Floyd-Steinberg is the classic. It splits the error four ways: most of it to
                the pixel on the right, and the rest to the three pixels below.
            </p>
            <Code label="Floyd-Steinberg passes on all of the error, in sixteenths.">{`
//            [ current ]   7/16
//    3/16       5/16       1/16

const floydSteinberg = [
  [1, 0, 7 / 16],
  [-1, 1, 3 / 16],
  [0, 1, 5 / 16],
  [1, 1, 1 / 16],
];
`}</Code>
            <p>
                Because all the error gets passed on, it keeps a lot of detail and gives you
                smooth, soft gradients. It&apos;s the one to use when you want the photo to stay
                recognisable.
            </p>

            <h2>Atkinson, the old Mac look</h2>
            <p>
                Atkinson dithering was made for the early Macintosh. It spreads the error
                further, over six pixels, but each one only gets an eighth. Add that up and
                only six eighths of the error is passed on. <b>A quarter of it is thrown away
                on purpose.</b>
            </p>
            <Code>{`
//            [ current ]   1/8   1/8
//     1/8       1/8       1/8
//               1/8

const atkinson = [
  [1, 0, 1 / 8], [2, 0, 1 / 8],
  [-1, 1, 1 / 8], [0, 1, 1 / 8], [1, 1, 1 / 8],
  [0, 2, 1 / 8],
];
`}</Code>
            <p>
                Losing that quarter is exactly why Atkinson looks so punchy. Light areas blow
                out to clean white, dark areas go solid, and you get that crisp, high-contrast
                look people recognise from old Macs.
            </p>

            <h2>The streak problem</h2>
            <p>
                Here&apos;s something nobody warned me about. If you always go through the image
                left to right, the error always drifts to the right. On smooth areas like sky
                or skin, you start to see faint diagonal streaks. People call them worms.
            </p>
            <p>
                The fix is lovely. Go left to right on one row, then right to left on the
                next, back and forth, like ploughing a field. This is called a{" "}
                <b>serpentine scan</b>. On the backwards rows you flip the kernel too, so the
                error still goes to pixels you haven&apos;t visited yet.
            </p>
            <Code label="One check per row, one sign flip. The streaks disappear.">{`
const leftToRight = (y & 1) === 0;
const dirX = leftToRight ? 1 : -1;

for (const [dx, dy, factor] of kernel) {
  distributeError(pixels, x + dx * dirX, y + dy, error * factor);
}
`}</Code>

            <h2>Ordered dithering: a different idea entirely</h2>
            <p>
                Not every dither passes errors around. <b>Ordered dithering</b>, like Bayer,
                compares each pixel against a small repeating grid of thresholds instead. It
                doesn&apos;t care about its neighbours at all, which makes it very fast and
                gives that regular, crosshatched pattern you see in old video games.
            </p>
            <p>
                Blue noise is a cousin of this. It uses a threshold pattern that looks random
                but is carefully spread out, so you get an even, natural grain with no visible
                pattern.
            </p>

            <Row
                caption="Same photo, same method, just the detail setting changed."
                items={[
                    { src: "/Assets/work/bitgrain/tri/dither-0.webp", label: "Coarse" },
                    { src: "/Assets/work/bitgrain/tri/dither-1.webp", label: "Balanced" },
                    { src: "/Assets/work/bitgrain/tri/dither-2.webp", label: "Fine" },
                ]}
            />

            <h2>All the ones I ended up building</h2>
            <p>Once the engine worked, adding more methods was mostly a matter of new kernel tables. Bitgrain now has:</p>
            <ul>
                <li><b>Error diffusion:</b> Floyd-Steinberg, Atkinson, Burkes, Stucki, Jarvis-Judice-Ninke, and three kinds of Sierra.</li>
                <li><b>Ordered:</b> Bayer at 2×2, 4×4 and 8×8, plus a 16×16 blue noise pattern.</li>
                <li><b>Simple:</b> plain threshold and random, mostly for comparison.</li>
            </ul>
            <Aside note="try it">
                You can flip between all of them live on a photo of your own in{" "}
                <a href="https://bitgrain.app/dither" target="_blank" rel="noopener">Bitgrain&apos;s dither tool</a>.
                Nothing gets uploaded; it all runs in your browser.
            </Aside>

            <h2>What I liked about it</h2>
            <p>
                The best ideas in my engine aren&apos;t mine. Error diffusion, serpentine
                scanning and these exact kernels were worked out decades ago by people
                working with printers and early screens. My job was mostly to read what they
                did and write it down carefully.
            </p>
            <p>
                If you want to know how I made all of this run fast in a browser, I wrote
                about that in{" "}
                <Link href="/blogs/image-effects-in-the-browser-without-a-gpu">
                    making image effects instant without a GPU
                </Link>
                .
            </p>
        </>
    );
}
