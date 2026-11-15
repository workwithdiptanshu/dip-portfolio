import React from "react";
import Link from "next/link";
import { Aside, Code, Figure, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "image-effects-in-the-browser-without-a-gpu",
    title: "How I made image effects feel instant in the browser, without a GPU",
    description:
        "I was sure I'd need WebGL to make photo effects fast in JavaScript. I didn't. Here are the five plain tricks with Web Workers that made the sliders in Bitgrain feel live.",
    date: "2026-11-10",
    tags: ["Performance", "JavaScript", "Bitgrain"],
    keywords: [
        "image processing in javascript",
        "web workers image processing",
        "canvas performance",
        "requestAnimationFrame vs debounce",
        "transferable objects",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/work/bitgrain/app/photo-effects.webp",
        alt: "The Bitgrain photo editor with a dither and riso effect applied",
        ratio: "1440 / 900",
        bg: "#C3B8F0",
    },
};

export function Body() {
    return (
        <>
            <p>
                When I started building <Link href="/work/bitgrain">Bitgrain</Link>, a design
                tool that runs in the browser, I had one big worry. Every effect in it, like
                dithering or halftone, works pixel by pixel. A normal photo has millions of
                pixels. And I wanted the preview to update while you drag a slider, not a
                second later.
            </p>
            <p>
                I assumed I&apos;d have to write everything as GPU shaders. I never did. Every
                effect is a plain JavaScript loop running on the CPU, and the sliders still
                feel instant on an ordinary laptop. The speed didn&apos;t come from clever
                maths. It came from not doing the same work twice.
            </p>
            <p>Here are the five things that made the difference.</p>

            <Figure
                src="/Assets/work/bitgrain/app/photo-effects.webp"
                alt="Bitgrain's photo editor"
                ratio="1440 / 900"
                caption="The editor. Every slider on the right re-runs a pixel loop on the CPU."
            />

            <h2>First, move the work off the main thread</h2>
            <p>
                If you run a heavy loop on the main thread, the whole page freezes until
                it&apos;s done. Buttons stop responding and the slider you&apos;re holding
                stutters. So all of the pixel work happens in a <b>Web Worker</b>, a
                separate thread that can crunch numbers while the page stays smooth.
            </p>
            <p>
                The page sends the worker the settings, the worker sends back pixels. That
                part is simple. The interesting part is everything around it.
            </p>

            <h2>1. Decode the photo once, then never again</h2>
            <p>
                Turning a JPEG into raw pixels is slow. My first version did it on every
                change, which was silly, because the photo hadn&apos;t changed. Only the
                settings had.
            </p>
            <p>
                Now the worker decodes the image once and keeps the pixels around. It also
                keeps one spare buffer the same size. On every change it copies the original
                pixels into that spare buffer and runs the effect on the copy. No decoding,
                and no new memory being created each time.
            </p>
            <Code label="Reuse one buffer instead of creating a new one per render.">{`
// once, when the photo arrives
source = decodedPixels;            // Float32Array
scratch = new Float32Array(source.length);

// on every change
scratch.set(source);               // fast copy, no allocation
runEffect(scratch, settings);
`}</Code>

            <h2>2. Draw at most once per frame</h2>
            <p>
                When you drag a slider, the browser fires dozens of change events a second.
                The usual advice is to <b>debounce</b>: wait until the user stops moving,
                then render. That works, but it feels laggy, because nothing happens while
                you&apos;re dragging.
            </p>
            <p>
                Instead I gather changes up and render once per screen refresh with{" "}
                <code>requestAnimationFrame</code>. However fast you drag, the picture
                updates as often as the screen can show it, and never more.
            </p>
            <Code>{`
let pending = null;

function onSliderChange(settings) {
  const first = pending === null;
  pending = settings;
  if (first) requestAnimationFrame(flush);
}

function flush() {
  render(pending);
  pending = null;
}
`}</Code>
            <Pull>Debouncing makes a slider feel slow. Coalescing makes it feel live.</Pull>

            <h2>3. Let the newest change win</h2>
            <p>
                Sometimes a render takes longer than a frame. If you queue every request,
                the preview falls further and further behind your hand, and when you let go
                it&apos;s still catching up on things you did a second ago.
            </p>
            <p>
                So only one job is ever running. If new settings arrive while it&apos;s
                busy, they replace whatever was waiting instead of joining a queue. When the
                current job finishes, it picks up the latest settings and skips the rest.
                You only ever see the newest state.
            </p>

            <h2>4. Preview small, export big</h2>
            <p>
                Your screen can&apos;t show a 6,000 pixel wide photo at full size anyway. So
                previews are capped: 2,000 pixels for the main image, 1,200 for effects on
                layers, and 720 for video. You can&apos;t see the difference on screen, and
                each render does a fraction of the work.
            </p>
            <p>When you export, it runs again at full resolution. The preview is just a preview.</p>

            <h2>5. Don&apos;t copy things between threads</h2>
            <p>
                Sending data to a worker normally copies it. For a big image that copy alone
                can take longer than the effect. Typed arrays can be <b>transferred</b>{" "}
                instead, which hands over the memory without copying it.
            </p>
            <Code>{`
// the second argument hands the buffer over instead of copying it
worker.postMessage({ pixels }, [pixels.buffer]);
`}</Code>
            <p>
                I also keep the data small. A dither result is only black or white, one bit
                of information per pixel, so it travels as a compact mask rather than as text
                or full colour values.
            </p>
            <Aside note="small but nice">
                If a browser can&apos;t run workers, the same code runs on the main thread
                instead. It&apos;s slower, but it works, rather than breaking.
            </Aside>

            <h2>What I took from it</h2>
            <p>
                I reached for the GPU before I&apos;d earned it. If I&apos;d started with
                shaders, I would have got speed for free and never learned where the time
                was really going. Most of it was going into decoding, copying and rendering
                things nobody would ever see.
            </p>
            <p>
                None of these tricks are new or clever. Together they turned a laggy editor
                into one that feels instant, with nothing but JavaScript and a worker. If
                you&apos;re building something similar, I&apos;d try them before reaching for
                WebGL.
            </p>
            <p>
                If you&apos;re curious how the effects themselves work, I wrote about{" "}
                <Link href="/blogs/floyd-steinberg-dithering-explained">dithering</Link>{" "}
                separately.
            </p>
        </>
    );
}
