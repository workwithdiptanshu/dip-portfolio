import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    CaseHero,
    CaseShell,
    Chapter,
    Glance,
    NextProject,
    Shot,
    Takeaways,
    Wide,
} from "@/components/work/CaseStudy";
import BitgrainStage from "@/components/work/BitgrainStage";

export const metadata: Metadata = {
    title: "Bitgrain | Diptanshu Mahish",
    description:
        "How I designed, built and launched Bitgrain on my own: a design studio in the browser that makes posters, covers and zines look printed. #5 Product of the Day on Product Hunt.",
    openGraph: {
        title: "Bitgrain | Diptanshu Mahish",
        description:
            "A design studio in the browser that makes posters, covers and zines look printed, not prompted.",
        url: "https://diptanshumahish.in/work/bitgrain",
    },
};

const BASE = "/Assets/work/bitgrain";

const looks = [
    { name: "original", label: "The photo" },
    { name: "halftone", label: "Halftone" },
    { name: "dither", label: "Dither" },
    { name: "riso", label: "Riso" },
    { name: "grain", label: "Grain" },
];

/** Close crops of the engine's output, so you can see each mark. */
const closeups = [
    { name: "dither", label: "Dither" },
    { name: "halftone", label: "Halftone" },
    { name: "ascii", label: "ASCII" },
    { name: "newspaper", label: "Newsprint" },
    { name: "pop-art", label: "Pop art" },
    { name: "manga-screentone", label: "Screentone" },
    { name: "glitch", label: "Glitch" },
    { name: "crosshatch", label: "Crosshatch" },
    { name: "crt", label: "CRT" },
];

const tri = (name: string, labels = ["Coarse", "Balanced", "Fine"]) =>
    labels.map((label, k) => ({ src: `${BASE}/tri/${name}-${k}.webp`, label }));

/** Real templates from the library, at their real proportions. */
const library = [
    { name: "meenakshi-arjun-wedding", alt: "Tamil wedding invitation", h: 711 },
    { name: "midnight-noodles", alt: "Midnight Noodles cookbook cover", h: 566 },
    { name: "second-spawn", alt: "Indie game review thumbnail", h: 225 },
    { name: "cranes-crossing", alt: "Cranes Crossing poetry cover", h: 600 },
    { name: "lagos-plate", alt: "Nigerian kitchen opening poster", h: 500 },
    { name: "mughal-garden-wedding", alt: "Mughal garden wedding invitation", h: 566 },
    { name: "lowlight-album", alt: "Lowlight album cover", h: 400 },
    { name: "cranberry-coupe", alt: "Holiday cocktail recipe card", h: 600 },
    { name: "ironhouse-gym", alt: "Gym membership card", h: 253 },
    { name: "mehndi-night", alt: "Mehndi night welcome sign", h: 600 },
    { name: "vale-rovers-card", alt: "Football trading card", h: 560 },
    { name: "glow-theory", alt: "Skincare sale story", h: 711 },
    { name: "wren-and-wilder", alt: "Florist business card", h: 229 },
    { name: "izakaya-hotaru", alt: "Izakaya year-end invitation", h: 564 },
    { name: "kolabagan", alt: "Banana grove cut-paper print", h: 400 },
    { name: "mulberry-christmas", alt: "Christmas card", h: 560 },
    { name: "cafe-menu", alt: "Cafe menu", h: 500 },
    { name: "taash-night", alt: "Playing cards", h: 500 },
    { name: "feedback-that-lands", alt: "Workshop slides", h: 225 },
    { name: "stoic-shorts", alt: "Short video covers", h: 711 },
];

function Triptych({ items }: { items: { src: string; label: string }[] }) {
    return (
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {items.map((t, i) => (
                <figure key={t.src} className="flex flex-col gap-2.5">
                    <Shot
                        src={t.src}
                        alt={t.label}
                        ratio="684 / 860"
                        rotate={[-1.5, 1, -1][i]}
                        sizes="(min-width: 1080px) 320px, 30vw"
                        className="!border-4 !rounded-[14px]"
                    />
                    <figcaption className="text-xs text-center text-muted">{t.label}</figcaption>
                </figure>
            ))}
        </div>
    );
}

const speed = [
    {
        title: "Load the photo once",
        body: "The photo is opened once and kept ready. Moving a slider only redoes the effect, nothing else.",
    },
    {
        title: "Draw once per frame",
        body: "However fast you drag, the picture is redrawn at most once per screen refresh. No lag, no wasted work.",
    },
    {
        title: "Latest change wins",
        body: "If you change something while it's still working, it skips the old job and does the new one. It never falls behind.",
    },
    {
        title: "Preview small, export big",
        body: "The preview is just big enough to look sharp on screen. The export still uses the full size.",
    },
    {
        title: "Don't copy things around",
        body: "Results are handed over in the leanest form possible, never copied, so nothing waits on memory.",
    },
];

export default function BitgrainCaseStudy() {
    return (
        <CaseShell>
            <CaseHero
                name="Bitgrain"
                kind="Design studio · my own product"
                line={
                    <>
                        Posters, covers and zines that look{" "}
                        <span className="bg-cat-marigold px-1.5 rounded-md">printed, not prompted</span>.
                    </>
                }
                cat={{ color: "indigo", face: "marigold" }}
                meta={[
                    { label: "Role", value: "All of it: design, code, launch" },
                    { label: "When", value: "2025 to now" },
                    { label: "Built with", value: "TypeScript, Canvas, Web Workers" },
                    { label: "Status", value: "Live, people use it every day" },
                ]}
                links={[
                    { label: "Try it", href: "https://bitgrain.app" },
                    { label: "Product Hunt", href: "https://www.producthunt.com/products/bitgrain" },
                ]}
            />

            <div className="max-w-[1080px] mx-auto px-4">
                <BitgrainStage className="mt-3" />
            </div>

            <Glance
                items={[
                    { value: "#5", label: "Product of the Day on Product Hunt" },
                    { value: "10k+", label: "Visitors a month" },
                    { value: "500+", label: "People signed up" },
                    { value: "Just me", label: "No team, no funding" },
                ]}
            />

            <Chapter title="Why I made it">
                <p>
                    I have a lot of friends who make music and draw. Every time one of them wanted a cover with that rough, printed look, it turned into a whole thing. Photoshop can do it, but it&apos;s expensive and hard to learn just for one effect. Canva is easy, but it can&apos;t do this at all. The small free sites only give you a flat image back.
                </p>
                <p>
                    So they&apos;d jump between three apps and still not get what they wanted. <b>I wanted one place where you could add the effect and design the poster around it.</b>
                </p>
            </Chapter>

            <Wide
                className="!p-3 sm:!p-5"
                caption="The photo editor. You stack effects on the left and pick a style on the right."
            >
                <div className="relative aspect-[1440/900] rounded-[20px] overflow-hidden">
                    <Image
                        src={`${BASE}/app/photo-effects.webp`}
                        alt="Bitgrain's photo editor, with a riso and dither recipe applied to an illustration of a child stroking a cat"
                        fill
                        sizes="(min-width: 1080px) 1040px, 94vw"
                        className="object-cover"
                    />
                </div>
            </Wide>

            <Wide caption="One photo, a few different looks. Nothing touched up by hand.">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {looks.map((l, i) => (
                        <figure key={l.name} className={`flex flex-col gap-2.5 ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                            <Shot
                                src={`${BASE}/effects/${l.name}.webp`}
                                alt={`A portrait, ${l.label.toLowerCase()}`}
                                ratio="4 / 3"
                                rotate={[0, -2, 1.5, -1.5, 2][i]}
                                sizes="220px"
                                className="!border-4 !rounded-[14px]"
                            />
                            <figcaption className="text-xs text-center text-muted">{l.label}</figcaption>
                        </figure>
                    ))}
                </div>
            </Wide>

            <Chapter title="No AI, on purpose">
                <p className="font-serif text-2xl leading-snug text-ink">
                    No AI. No prompts. Nothing tracking you.
                </p>
                <p>
                    This wasn&apos;t about being against AI. It was practical. <b>AI gives you something different every time you ask.</b> That&apos;s fine when you&apos;re looking for ideas, but not when you&apos;re finishing a cover that&apos;s due on Friday. You want to move one slider and have only that one thing change.
                </p>
                <p>
                    So I wrote every effect myself, as normal code. Same settings in, same picture out, every single time. That one choice ended up making a lot of other things possible later.
                </p>
            </Chapter>

            <Wide caption="Same photo, one slider moved. Do it again next year and you get the exact same result.">
                <Triptych items={tri("dither")} />
            </Wide>

            <Chapter title="Making it look like real print">
                <p>
                    Most photo filters look fake because they skip what real printing actually does. So I read up on how printing works, and copied it as closely as I could.
                </p>
                <p>
                    Take <b>dithering</b>. It&apos;s how you make a photo out of only black and white dots. There are lots of ways to do it, and each one has its own feel. I built the well-known ones, like Floyd-Steinberg and Atkinson, and you can switch between them instantly.
                </p>
                <p>
                    One small thing I&apos;m happy about: if you process the picture left to right on every row, you get faint streaks. So mine goes left to right, then right to left, back and forth. The streaks just disappear.
                </p>
            </Chapter>

            <Wide caption="Zoomed right in. Every dot, line and letter here comes from the code, nobody drew them.">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {closeups.map((c, i) => (
                        <figure
                            key={c.name}
                            className={`relative rounded-[20px] overflow-hidden bg-white aspect-square ${
                                i === 0 ? "col-span-2 row-span-2" : ""
                            }`}
                        >
                            <Image
                                src={`${BASE}/close/${c.name}.webp`}
                                alt={`A close crop of Bitgrain's ${c.label.toLowerCase()} effect`}
                                fill
                                sizes={i === 0 ? "(min-width: 1080px) 520px, 92vw" : "(min-width: 1080px) 260px, 45vw"}
                                className="object-cover"
                            />
                            <figcaption className="absolute left-3 bottom-3 bg-white/95 rounded-full px-3 py-1 text-xs">
                                {c.label}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Wide>

            <Chapter title="Halftone, the way printers do it">
                <p>
                    Halftone is the dot pattern you see in newspapers: bigger dots for darker areas. When you print in colour, the dots for each ink can clash and make a weird wavy pattern. Printers figured out ages ago that turning each colour&apos;s dots to a different angle fixes it. <b>I used the same angles they do.</b>
                </p>
            </Chapter>

            <Wide>
                <Triptych items={tri("halftone")} />
            </Wide>

            <Chapter title="Riso, the hardest one to get right">
                <p>
                    A Riso is a printer that prints one colour at a time, and the layers never line up perfectly. That&apos;s why people love it. To fake it, I had to work out <b>how much of each ink should go on every single pixel</b>.
                </p>
                <p>
                    It took some maths, but now it works properly. It even gives you a separate file for each ink colour, so you could take them to a real Riso shop and print them.
                </p>
            </Chapter>

            <Wide>
                <Triptych items={tri("risograph")} />
            </Wide>

            <Chapter title="Making it fast">
                <p>
                    I thought I&apos;d need the graphics card to make this fast. I didn&apos;t. <b>The trick was just never doing the same work twice.</b> These five simple rules are why the sliders feel instant, even on an older laptop.
                </p>
            </Chapter>

            <Wide>
                <div className="grid sm:grid-cols-5 gap-3">
                    {speed.map((s, i) => (
                        <div key={s.title} className="bg-white rounded-[22px] p-5 flex flex-col gap-2">
                            <span className="text-xs text-muted">0{i + 1}</span>
                            <h3 className="font-serif text-lg leading-snug">{s.title}</h3>
                            <p className="text-[13px] text-black/65 leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </Wide>

            <Chapter title="A file you can come back to">
                <p>
                    When you save a normal image, all your settings are gone. Bitgrain saves a <code>.btg</code> file instead, which remembers every setting, every layer and every font.
                </p>
                <p>
                    It&apos;s a simple text file, so it&apos;ll still open years from now. Fonts and images are packed inside, so nothing goes missing when you send it to someone. <b>Open it a year later and it looks exactly the same.</b>
                </p>
            </Chapter>

            <Wide tone="dark">
                <pre className="font-mono text-[12px] sm:text-sm leading-relaxed overflow-x-auto">{`{
  "type": "studio",
  "version": 1,
  "canvasWidth": 1080,
  "canvasHeight": 1080,
  "layers": [ ... ],       // the composition, in order
  "designKit": { ... },    // the colour and type kit
  "customFonts": [         // embedded, not linked
    { "label": "Akasha", "dataUrl": "data:font/ttf;base64,..." }
  ],
  "image": "data:image/png;base64,..."
}`}</pre>
                <p className="font-mono text-sm text-cat-marigold pt-4">{"// open it in a year, get the same pixels back"}</p>
            </Wide>

            <Chapter title="Video too">
                <p>
                    There&apos;s a video editor that uses the exact same effects. The part I&apos;m proud of: <b>a video exports the same on a fast laptop and a slow one.</b> It doesn&apos;t rush or skip frames when your computer is busy. It just takes a bit longer.
                </p>
            </Chapter>

            <Chapter title="Templates worth using">
                <p>
                    A lot of template sites are full of stuff nobody would actually use. I wanted every template here to be good enough to print as it is. I check each one myself before it goes live, and you can change anything in it, down to a single letter.
                </p>
            </Chapter>

            <Wide className="!p-3 sm:!p-5">
                <div className="relative aspect-[1440/900] rounded-[20px] overflow-hidden">
                    <Image
                        src={`${BASE}/app/template-gallery.webp`}
                        alt="Bitgrain's template gallery"
                        fill
                        sizes="(min-width: 1080px) 1040px, 94vw"
                        className="object-cover object-top"
                    />
                </div>
            </Wide>

            <Wide caption="A few from the library: wedding invites, cookbook covers, menus, cards, slides and thumbnails.">
                <Link
                    href="https://bitgrain.app/template-gallery"
                    target="_blank"
                    aria-label="Browse Bitgrain's templates"
                    className="block columns-2 sm:columns-4 gap-3 sm:gap-4"
                >
                    {library.map((t, i) => (
                        <span
                            key={t.name}
                            className="mat !border-4 !rounded-[12px] relative block mb-3 sm:mb-4 break-inside-avoid transition-transform duration-300 hover:-translate-y-1"
                            style={{ transform: `rotate(${[-1.2, 0.8, -0.6, 1.1][i % 4]}deg)` }}
                        >
                            <Image
                                src={`${BASE}/library/${t.name}.webp`}
                                alt={t.alt}
                                width={400}
                                height={t.h}
                                sizes="(min-width: 640px) 240px, 45vw"
                                className="w-full h-auto rounded-[8px]"
                            />
                        </span>
                    ))}
                </Link>
            </Wide>

            <Chapter title="Keeping it tidy, alone">
                <p>
                    When you work alone, nobody stops you from writing messy code. So I made myself some rules: no file over 300 lines, no folder with more than ten files, and <b>if the code is hard to read, it counts as broken.</b>
                </p>
                <p>
                    I also wrote my own tiny tool for keeping track of the app&apos;s data, about 45 lines long, instead of using a big library. An editor changes thousands of small things every second, and the big libraries weren&apos;t made for that.
                </p>
            </Chapter>

            <Chapter title="How it makes money">
                <p>
                    You can use the editor for free, without even signing up. Everything runs on your own computer, so free users don&apos;t cost me anything. If you pay, the watermark goes away and you can export bigger. <b>It&apos;s one payment that lasts ten years, not a monthly subscription.</b> It felt weird to promise your files will last for years and then charge you every month.
                </p>
            </Chapter>

            <Chapter title="What happened">
                <p>
                    It started as a tiny tool that only did dithering. People kept asking for more: layers, text, better exports. So it slowly grew into a full design editor, and then a video editor.
                </p>
                <p>
                    I launched it on Product Hunt in May 2026 and it came <b>#5 Product of the Day</b>. Now around <b>10,000 people visit every month</b> and <b>more than 500 have signed up</b>. I still work on it every week, next to my full-time job.
                </p>
            </Chapter>

            <Wide caption="I made the website too, including a page for each effect where you can try it right there.">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 sm:p-4">
                    <Shot src={`${BASE}/app/home.webp`} alt="The Bitgrain homepage" ratio="1440 / 900" rotate={-2} sizes="(min-width: 1080px) 500px, 92vw" />
                    <Shot src={`${BASE}/app/dither-page.webp`} alt="Bitgrain's dither page" ratio="1440 / 900" rotate={2} sizes="(min-width: 1080px) 500px, 92vw" />
                </div>
            </Wide>

            <Takeaways
                items={[
                    {
                        title: "Saying no made it better",
                        body: "Skipping AI sounded like a weakness. It turned out to be the reason people liked it.",
                    },
                    {
                        title: "Try the simple way first",
                        body: "I was sure I needed the graphics card. Doing less work was enough. I'd never have learned that if I'd gone fancy first.",
                    },
                    {
                        title: "Old ideas still work",
                        body: "Most of the clever bits were worked out by printers long ago. I mostly had to go and read about them.",
                    },
                ]}
            />

            <NextProject slug="bitgrain" />
        </CaseShell>
    );
}
