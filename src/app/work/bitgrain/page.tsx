import Footer from "@/components/Common/Footer";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Bitgrain Case Study | Diptanshu Mahish",
    description:
        "How I built Bitgrain: 27 hand-written image processing effects running in the browser on Canvas and Web Workers, with no GPU and no AI. #5 Product of the Day on Product Hunt.",
    openGraph: {
        title: "Bitgrain Case Study | Diptanshu Mahish",
        description:
            "27 hand-written image effects, in the browser, no GPU and no AI. #5 Product of the Day on Product Hunt.",
        url: "https://diptanshumahish.in/work/bitgrain",
    },
};

const stats = [
    { value: "#5", label: "Product of the Day" },
    { value: "10k+", label: "Visitors a month" },
    { value: "27", label: "Effects, written by hand" },
    { value: "1", label: "Person on the team" },
];

const facts = [
    { key: "Role", value: "Founder, designer and engineer. All of it." },
    { key: "Timeline", value: "2025 to now" },
    { key: "Built with", value: "TypeScript, Canvas 2D, Web Workers" },
    { key: "Launched", value: "Product Hunt, May 2026" },
];

/** The real ink book from the engine, with the RGB values it actually prints. */
const risoInks = [
    { name: "Black", hex: "#252525" },
    { name: "Fluoro Pink", hex: "#FF48B0" },
    { name: "Blue", hex: "#0078BF" },
    { name: "Yellow", hex: "#FFE800" },
    { name: "Red", hex: "#FF665E" },
    { name: "Green", hex: "#00A95C" },
    { name: "Purple", hex: "#764BA0" },
    { name: "Teal", hex: "#00838A" },
    { name: "Orange", hex: "#FF6C2F" },
];

/** The four screens, at the angles the engine uses. */
const cmykScreens = [
    { ink: "#00FFFF", angle: 15, label: "Cyan 15°" },
    { ink: "#FF00FF", angle: 75, label: "Magenta 75°" },
    { ink: "#FFFF00", angle: 0, label: "Yellow 0°" },
    { ink: "#000000", angle: 45, label: "Black 45°" },
];

const effects = [
    { name: "Dither", note: "14 methods, from Floyd-Steinberg to blue noise." },
    { name: "Halftone", note: "Rotated screens, mono, colour or true CMYK." },
    { name: "ASCII", note: "Four ramps, with a Sobel pass for edges." },
    { name: "Pixelate", note: "Hard blocks, no smoothing, ever." },
    { name: "Scanlines", note: "Spacing and intensity, like a bad monitor." },
    { name: "Crosshatch", note: "Ink lines, by spacing and thickness." },
    { name: "Pop art", note: "Rotated dots with hashed grit and dropout." },
    { name: "Posterize", note: "2 to 16 levels of tone." },
    { name: "Misprint", note: "Channels pulled apart. Registration error." },
    { name: "Grain", note: "Film grain, stochastic on purpose." },
    { name: "Photocopy", note: "Luma crushed through a threshold." },
    { name: "Fold", note: "A real crease curve, t(1 - t²)." },
    { name: "Dust", note: "Seeded specks and scratches. Reproducible." },
];

/** Floyd-Steinberg and Atkinson, drawn as the grids they are. */
const kernels = [
    {
        name: "Floyd-Steinberg",
        minX: -1,
        cols: 3,
        rows: 2,
        total: "16/16 of the error moves on.",
        cells: [
            { x: 0, y: 0, label: "×", current: true },
            { x: 1, y: 0, label: "7/16" },
            { x: -1, y: 1, label: "3/16" },
            { x: 0, y: 1, label: "5/16" },
            { x: 1, y: 1, label: "1/16" },
        ],
    },
    {
        name: "Atkinson",
        minX: -1,
        cols: 4,
        rows: 3,
        total: "Only 6/8 moves on. The rest is thrown away.",
        cells: [
            { x: 0, y: 0, label: "×", current: true },
            { x: 1, y: 0, label: "1/8" },
            { x: 2, y: 0, label: "1/8" },
            { x: -1, y: 1, label: "1/8" },
            { x: 0, y: 1, label: "1/8" },
            { x: 1, y: 1, label: "1/8" },
            { x: 0, y: 2, label: "1/8" },
        ],
    },
];

function SectionTitle({
    number,
    children,
}: {
    number: string;
    children: React.ReactNode;
}) {
    return (
        <div className="pt-20 pb-8">
            <span className="halftone-screen inline-block w-16 h-3 text-black opacity-60 mb-5" />
            <h2 className="lg:text-5xl text-3xl font-medium flex gap-4 items-baseline">
                <span className="opacity-25 text-2xl lg:text-3xl">{number}</span>
                <span>{children}</span>
            </h2>
        </div>
    );
}

function Kernel({ k }: { k: (typeof kernels)[number] }) {
    const grid = [];
    for (let y = 0; y < k.rows; y++) {
        for (let x = k.minX; x < k.minX + k.cols; x++) {
            const cell = k.cells.find((c) => c.x === x && c.y === y);
            grid.push(
                <div
                    key={`${x}-${y}`}
                    className={`aspect-square flex items-center justify-center text-[11px] font-mono border ${
                        cell?.current
                            ? "bg-black text-white border-black"
                            : cell
                              ? "bg-yellow-300 border-black"
                              : "border-black/15"
                    }`}
                >
                    {cell?.label ?? ""}
                </div>,
            );
        }
    }
    return (
        <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-widest opacity-50">
                {k.name}
            </span>
            <div
                className="grid gap-1 max-w-[220px]"
                style={{ gridTemplateColumns: `repeat(${k.cols}, 1fr)` }}
            >
                {grid}
            </div>
            <span className="text-xs opacity-60">{k.total}</span>
        </div>
    );
}

export default function BitgrainCaseStudy() {
    return (
        <main className="relative paper">
            <Navbar />

            {/* Hero */}
            <section className="relative px-[5%] pt-[18vh] pb-[6%] border-b border-black">
                <Link
                    href="/#work"
                    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity w-fit mb-10"
                >
                    <ArrowLeft size={16} /> Back to work
                </Link>

                <div className="flex items-center gap-4 mb-8">
                    <Image
                        src="/Assets/work/bitgrain/logo.svg"
                        alt="Bitgrain"
                        width={44}
                        height={36}
                        className="h-[28px] w-auto"
                    />
                    <span className="h-5 w-px bg-black/20" />
                    <span className="text-[11px] uppercase tracking-[0.25em] opacity-50">
                        Case study
                    </span>
                </div>

                <h1 className="lg:text-[8rem] text-6xl font-medium leading-[0.9] tracking-tight pb-8">
                    Bitgrain
                </h1>

                <p className="lg:text-4xl text-xl font-light lg:max-w-[65%] leading-snug">
                    Make posters, covers and zines that feel{" "}
                    <span className="bg-yellow-300">printed, not prompted.</span>
                </p>

                <p className="text-base opacity-70 lg:max-w-[52%] pt-8 leading-relaxed">
                    A design studio that runs in your browser, which I designed,
                    built and launched on my own. Twenty-seven image processing
                    effects, written by hand, running on the CPU. No GPU. No
                    models. Nothing leaves your machine.
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-10">
                    <Link
                        href="https://bitgrain.app"
                        target="_blank"
                        className="offsetstyle bg-black text-white px-5 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors gap-3 rounded-full"
                    >
                        Try it live <ArrowUpRight size={18} />
                    </Link>
                    <Link
                        href="https://www.producthunt.com/products/bitgrain"
                        target="_blank"
                        className="px-5 py-2 w-fit flex items-center hover:bg-black hover:text-white border border-black transition-colors gap-3 rounded-full"
                    >
                        Product Hunt <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Showcase */}
            <section className="px-[5%] py-[4%] border-b border-black">
                <Image
                    src="/Assets/work/bitgrain/showcase.webp"
                    alt="The Bitgrain studio, template gallery and video timeline"
                    width={1200}
                    height={630}
                    className="w-full h-auto border border-black rounded-lg"
                    priority
                />
                <p className="text-xs opacity-50 pt-3">
                    The studio, the template gallery and the video timeline.
                    Everything you see runs in a browser tab.
                </p>
            </section>

            {/* Stats */}
            <section className="grain relative bg-[#111] text-[#f4f2ee] px-[5%] py-[5%] overflow-hidden">
                <span
                    aria-hidden
                    className="halftone-screen absolute inset-x-0 bottom-0 h-24 text-[#f4f2ee] opacity-20 pointer-events-none"
                />
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 relative">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col gap-1">
                            <span className="lg:text-7xl text-4xl font-medium leading-none">
                                {s.value}
                            </span>
                            <span className="text-xs opacity-50 pt-2 uppercase tracking-widest">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Facts */}
            <section className="px-[5%] py-[3%] border-b border-black">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {facts.map((f) => (
                        <div
                            key={f.key}
                            className="flex flex-col gap-1 border-l-4 border-yellow-300 pl-4"
                        >
                            <span className="text-[11px] uppercase tracking-widest opacity-50">
                                {f.key}
                            </span>
                            <span className="text-sm">{f.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            <article className="px-[5%] pb-[8%]">
                <div className="lg:max-w-[80%]">
                    <SectionTitle number="01">The problem</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            I kept watching musicians and illustrators fight
                            their tools. If you want a record sleeve with that
                            rough, printed look, your options are bad. Photoshop
                            can do it, but you are paying every month and
                            learning a thirty-year-old program to get at one
                            effect. Canva is easy to pick up but will not go
                            anywhere near this. The small one-off tools online
                            do a single trick and hand you a flat image, with no
                            way to build a real design around it.
                        </p>
                        <p>
                            So people were exporting from one tool into another,
                            losing their settings on the way, and could never
                            recreate the thing they made three months ago.
                        </p>
                    </div>

                    <SectionTitle number="02">The bet</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p className="lg:text-2xl text-lg font-light border-l-4 border-black pl-6 py-2 opacity-100">
                            No models. No prompts. No training. No telemetry.
                        </p>
                        <p>
                            Every other decision came from this one. The reason
                            is practical, not principled.{" "}
                            <b>
                                A model gives you something different every time
                            </b>
                            : run the same prompt twice and you get two
                            different images. That is useful when you are
                            hunting for an idea and useless when you are
                            finishing one. Someone with a sleeve due on Friday
                            needs to change one number and have only that thing
                            change.
                        </p>
                    </div>
                </div>

                {/* The argument, made rather than asserted. */}
                <div className="grid lg:grid-cols-2 gap-6 my-12 lg:max-w-[80%]">
                    <div className="offsetstyle border border-black rounded-lg p-6 bg-white">
                        <span className="text-[11px] uppercase tracking-widest opacity-50">
                            An effect chain, run twice
                        </span>
                        <div className="flex gap-3 py-5">
                            <div className="fx fx-dither h-28 w-full rounded" />
                            <div className="fx fx-dither h-28 w-full rounded" />
                        </div>
                        <p className="text-sm">
                            <b>The same. Every time.</b> The kernel is a fixed
                            table of numbers. It cannot surprise you.
                        </p>
                    </div>
                    <div className="border border-black border-dashed rounded-lg p-6">
                        <span className="text-[11px] uppercase tracking-widest opacity-50">
                            A model, run twice
                        </span>
                        <div className="flex gap-3 py-5">
                            <div className="fx fx-riso h-28 w-full rounded" />
                            <div
                                className="fx fx-riso h-28 w-full rounded"
                                style={{
                                    filter: "hue-rotate(115deg)",
                                    transform: "scaleX(-1)",
                                }}
                            />
                        </div>
                        <p className="text-sm opacity-70">
                            Close, and never the same. Fine for finding an idea.
                            No use for finishing one.
                        </p>
                    </div>
                </div>

                <div className="lg:max-w-[80%]">
                    <SectionTitle number="03">
                        How the effects actually work
                    </SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            There are <b>27 effects</b>, and each one is a
                            plugin with a single job: take a buffer of pixels,
                            return a buffer of pixels. They register into one
                            table and run as an ordered chain, each feeding the
                            next.
                        </p>
                        <p>
                            <b>
                                None of it touches the GPU. There are no shaders
                                and no WebAssembly in the effect path.
                            </b>{" "}
                            Every kernel, screen and separation is a hand
                            written loop over a Float32Array, running on the CPU
                            in a worker. I expected to need the GPU and never
                            did. The speed came from architecture instead, which
                            is section 04.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-10">
                    {effects.map((e) => (
                        <div
                            key={e.name}
                            className="border border-black/20 rounded-md p-4 bg-white/40"
                        >
                            <h3 className="font-medium text-sm">{e.name}</h3>
                            <p className="text-xs opacity-60 pt-1 leading-relaxed">
                                {e.note}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dithering */}
                <div className="lg:max-w-[80%]">
                    <h3 className="text-2xl font-medium pt-10 pb-4">
                        Dithering, and why the kernel is the whole trick
                    </h3>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            Dithering is how you fake grey using only black and
                            white. You walk the image pixel by pixel, round each
                            one to the nearest available colour, then take the
                            error you just introduced and push it onto the
                            neighbours you have not visited yet. Those pixels
                            get nudged, so the error averages out across the
                            picture instead of piling up.
                        </p>
                        <p>
                            The only thing separating one dither from another is{" "}
                            <b>where that error goes, and in what fractions</b>.
                            That is the kernel. It is a small table of numbers,
                            and it is the entire personality of the effect.
                        </p>
                    </div>
                </div>

                <div className="offsetstyle border border-black rounded-lg bg-white p-6 lg:p-8 my-8 lg:max-w-[80%]">
                    <div className="grid sm:grid-cols-2 gap-10">
                        {kernels.map((k) => (
                            <Kernel k={k} key={k.name} />
                        ))}
                    </div>
                    <p className="text-sm opacity-70 pt-8 border-t border-black/10 mt-8">
                        Black is the pixel being decided. Yellow is where its
                        error lands. Floyd-Steinberg passes on all of it and
                        gives you smooth gradients. Atkinson deliberately drops
                        a quarter of the error on the floor, which is exactly
                        why it looks punchy and blown out, and why it is the one
                        people recognise from old Macs.
                    </p>
                </div>

                <div className="lg:max-w-[80%]">
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            There are <b>14 of these</b> in the engine:
                            Floyd-Steinberg, Atkinson, Burkes, Stucki, JJN,
                            three flavours of Sierra, ordered Bayer at 2×2, 4×4
                            and 8×8, a 16×16 blue noise table, plain threshold,
                            and random.
                        </p>
                        <p>
                            The part I am most pleased with is the scan order.
                            If you always sweep left to right, the error
                            consistently drifts the same way and the picture
                            grows visible worms, little directional streaks.
                            So the engine walks in <b>serpentine</b> order,
                            alternating direction every row like an ox ploughing
                            a field, and mirrors the kernel to match.
                        </p>
                    </div>
                </div>

                {/* Serpentine */}
                <div className="offsetstyle border border-black rounded-lg bg-white p-6 lg:p-8 my-8 lg:max-w-[80%]">
                    <span className="text-[11px] uppercase tracking-widest opacity-50">
                        Serpentine scan
                    </span>
                    <div className="flex flex-col gap-2 py-6 max-w-[420px]">
                        {[0, 1, 2, 3, 4, 5].map((row) => {
                            const ltr = row % 2 === 0;
                            return (
                                <div
                                    key={row}
                                    className={`flex items-center gap-2 ${
                                        ltr ? "" : "flex-row-reverse"
                                    }`}
                                >
                                    <div className="h-[3px] flex-1 bg-black/15" />
                                    {ltr ? (
                                        <ArrowRight size={16} />
                                    ) : (
                                        <ArrowLeft size={16} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <pre className="bg-[#111] text-[#f4f2ee] rounded-md p-4 overflow-x-auto text-[11px] lg:text-xs leading-relaxed">
                        {`const leftToRight = (y & 1) === 0;
const dirX = leftToRight ? 1 : -1;

for (const [dx, dy, factor] of kernel) {
  distributeError(data, x + dx * dirX, y + dy, ...);
}`}
                    </pre>
                    <p className="text-sm opacity-70 pt-4">
                        One bitwise check per row, and one sign flip on the
                        kernel. Six characters of code, and the worms are gone.
                    </p>
                </div>

                {/* Halftone */}
                <div className="lg:max-w-[80%]">
                    <h3 className="text-2xl font-medium pt-10 pb-4">
                        Halftone, and the angles that stop a moiré
                    </h3>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            A halftone turns tone into dots of different sizes.
                            Darker area, fatter dot. The engine rotates the
                            image into screen space, snaps to a cell, samples
                            the tone there with bilinear filtering, sizes the
                            dot from the density, and works out how much of the
                            pixel that dot covers so the edge is not jagged.
                        </p>
                        <p>
                            In CMYK mode it does this <b>four separate times</b>
                            , once per ink, and this is where a real printing
                            problem shows up. Four dot grids stacked at the same
                            angle interfere and produce an ugly moiré. Presses
                            solved this a century ago by rotating each screen to
                            a different angle. The engine uses the same numbers
                            they do.
                        </p>
                    </div>
                </div>

                <div className="offsetstyle border border-black rounded-lg bg-white p-6 lg:p-8 my-8 lg:max-w-[80%]">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-[11px] uppercase tracking-widest opacity-50">
                                Four screens, four angles
                            </span>
                            <div className="grid grid-cols-4 gap-3 pt-5">
                                {cmykScreens.map((s) => (
                                    <div key={s.label}>
                                        <div
                                            className="aspect-square rounded overflow-hidden border border-black/20 bg-white"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at center, ${s.ink} 2.4px, transparent 2.5px)`,
                                                backgroundSize: "8px 8px",
                                                transform: `rotate(${s.angle}deg)`,
                                            }}
                                        />
                                        <span className="text-[10px] opacity-60 block pt-2">
                                            {s.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-[11px] uppercase tracking-widest opacity-50">
                                Stacked, they make a rosette
                            </span>
                            <div className="relative aspect-square max-w-[180px] mt-5 bg-white border border-black/20 rounded overflow-hidden">
                                {cmykScreens.map((s) => (
                                    <div
                                        key={s.label}
                                        className="absolute inset-[-30%] mix-blend-multiply"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at center, ${s.ink} 2.4px, transparent 2.5px)`,
                                            backgroundSize: "8px 8px",
                                            transform: `rotate(${s.angle}deg)`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm opacity-70 pt-8 border-t border-black/10 mt-8">
                        Cyan at 15°, magenta at 75°, yellow at 0°, black at 45°.
                        Yellow is the weakest ink, so it gets the angle the eye
                        catches most easily. That flower pattern on the right is
                        a rosette, and it is the thing you are actually looking
                        at when you put your nose against a printed magazine.
                    </p>
                </div>

                {/* Riso */}
                <div className="lg:max-w-[80%]">
                    <h3 className="text-2xl font-medium pt-10 pb-4">
                        Risograph, which is the one I like most
                    </h3>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            A Riso is not a printer so much as a photocopier
                            with personality. It prints one spot colour at a
                            time, on separate passes, and the paper never lines
                            up quite right. To fake it you have to answer a real
                            question: given this photo and these two inks,{" "}
                            <b>how much of each ink goes at each pixel?</b>
                        </p>
                        <p>
                            The answer turned out to be geometry. Paper starts
                            white. Every ink is a thing that subtracts light
                            from white. So each ink becomes a vector pointing
                            away from white, each pixel is a request to darken
                            white by a certain amount, and the ink density is
                            just the <b>projection</b> of that request onto the
                            ink vector. How much does this ink point in the
                            direction this pixel needs to go.
                        </p>
                    </div>
                </div>

                <div className="offsetstyle border border-black rounded-lg bg-white p-6 lg:p-8 my-8 lg:max-w-[80%]">
                    <pre className="bg-[#111] text-[#f4f2ee] rounded-md p-4 overflow-x-auto text-[11px] lg:text-xs leading-relaxed">
                        {`const inkVectors = inks.map((c) => [255 - c[0], 255 - c[1], 255 - c[2]]);

const density = clamp01(
  (demandR * vector[0] + demandG * vector[1] + demandB * vector[2]) / inkNorms[ink],
);
const tone = clampByte(255 * (1 - density)); // white paper = no ink`}
                    </pre>
                    <span className="text-[11px] uppercase tracking-widest opacity-50 block pt-8">
                        The nine inks, at the values they print
                    </span>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {risoInks.map((ink) => (
                            <div key={ink.name} className="flex flex-col gap-2">
                                <div
                                    className="h-14 w-14 rounded border border-black/20"
                                    style={{ backgroundColor: ink.hex }}
                                />
                                <span className="text-[10px] opacity-60 leading-tight">
                                    {ink.name}
                                    <br />
                                    <span className="font-mono opacity-70">
                                        {ink.hex}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm opacity-70 pt-8 border-t border-black/10 mt-8">
                        Eighty-two lines of worker code. It outputs a real
                        greyscale separation per ink, one file each, which you
                        could hand to an actual Riso and print. Pink and blue by
                        default, because that is the combination the whole zine
                        world runs on.
                    </p>
                </div>

                {/* Output */}
                <div className="my-12 lg:max-w-[80%]">
                    <Image
                        src="/Assets/work/bitgrain/output.webp"
                        alt="A photo run through the Bitgrain engine: halftoned and posterized into a violet and amber duotone"
                        width={1200}
                        height={792}
                        className="w-full h-auto border border-black rounded-lg"
                    />
                    <p className="text-xs opacity-50 pt-3">
                        Engine output. Halftone plus posterize, in a two ink
                        duotone. Every dot in that image was placed by a for
                        loop.
                    </p>
                </div>

                <div className="lg:max-w-[80%]">
                    <SectionTitle number="04">
                        No GPU, and it still feels instant
                    </SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            This is the part I am proudest of, because none of
                            it is clever mathematics. It is just refusing to do
                            work twice.
                        </p>
                        <p>
                            <b>Decode once, never again.</b> The worker caches
                            the decoded bitmap and its downsampled pixels, then
                            copies into a reused scratch buffer for every
                            render. Dragging a slider re-runs the effect and
                            nothing else. No decode, no allocation.
                        </p>
                        <p>
                            <b>One render per frame, maximum.</b> Parameter
                            changes are coalesced with requestAnimationFrame
                            rather than debounced on a timer. Debouncing makes a
                            slider feel laggy. Coalescing makes it feel
                            immediate, and you still never render twice for one
                            frame.
                        </p>
                        <p>
                            <b>Newest wins.</b> Only one job is ever in flight.
                            If results are still coming back, the newest
                            parameters replace whatever was queued instead of
                            stacking up behind it. A queue would mean the
                            preview lags further behind the harder you drag.
                        </p>
                        <p>
                            <b>Preview small, export big.</b> Previews cap at
                            2000px, layer effects at 1200px, video effects at
                            720px. You cannot see the difference on screen, and
                            the export path still gets full resolution.
                        </p>
                        <p>
                            <b>Do not send strings between threads.</b> A dither
                            result is one bit per pixel, so it ships as a
                            Uint8Array mask rather than an array of block
                            characters, and every buffer is transferred instead
                            of copied. And if workers are unavailable the whole
                            thing falls back to the main thread rather than
                            breaking.
                        </p>
                    </div>

                    <SectionTitle number="05">The .btg file</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            When you export a normal image, every decision that
                            made it is thrown away. So projects save as a{" "}
                            <b>.btg</b> file, which keeps the decisions instead
                            of the result.
                        </p>
                        <p>
                            It is JSON. Deliberately. It could have been a
                            packed binary format and been a fraction of the
                            size, but a design file that outlives its editor has
                            to be readable by a person with a text editor in ten
                            years. The image is embedded as a data URL and so
                            are any custom fonts, so a .btg is one
                            self-contained file that opens anywhere, with
                            nothing to go missing.
                        </p>
                    </div>
                </div>

                <div className="grain relative overflow-hidden bg-[#111] text-[#f4f2ee] rounded-lg p-6 lg:p-8 my-10 font-mono text-[11px] lg:text-sm leading-relaxed lg:max-w-[80%]">
                    <div className="relative overflow-x-auto">
                        <pre>{`{
  "type": "studio",        // or "image-editor"
  "version": 1,
  "timestamp": 1745884800000,
  "canvasWidth": 1080,
  "canvasHeight": 1080,
  "layers": [ ... ],       // the composition, in order
  "designKit": { ... },    // the colour and type kit
  "customFonts": [         // embedded, not linked
    { "label": "Akasha", "dataUrl": "data:font/ttf;base64,..." }
  ],
  "image": "data:image/png;base64,..."
}`}</pre>
                        <div className="pt-4 text-yellow-300">
                            {"// open it in a year, get the same pixels back"}
                        </div>
                    </div>
                </div>

                <div className="lg:max-w-[80%]">
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            This only works <i>because</i> there is no model in
                            the pipeline. A file can only promise you the same
                            result if the thing reading it behaves the same way
                            every time. You cannot serialise your way out of
                            something that invents a new answer on each run. The
                            constraint and the feature are one decision seen
                            from two sides.
                        </p>
                        <p className="text-sm opacity-70">
                            To be exact about it: the effect chain is
                            deterministic. The grain and paper texture layered
                            on top are stochastic per render, on purpose,
                            because grain that lands in the same place twice
                            stops reading as grain. The effects where the
                            randomness is structural, like dust and scratches,
                            take a seed, and the seed travels in the file.
                        </p>
                    </div>

                    <SectionTitle number="06">Video, without a clock</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            The video editor applies the same effects to footage
                            and animates them over time. It reuses the image
                            engine literally: the frame worker imports the exact
                            same transform function the still editor calls.
                        </p>
                        <p>
                            The thing I would defend hardest is that{" "}
                            <b>export never reads the clock</b>. Timestamps come
                            from the frame index rather than elapsed time,
                            effect seeds are derived from the frame time rather
                            than the wall clock, and the audio is rendered
                            offline instead of recorded. The result is that the
                            same project exports to the same file whether your
                            laptop is fast, slow, or busy. The fallback path
                            does the opposite, capturing the canvas in real time
                            through MediaRecorder, and you can feel the
                            difference immediately.
                        </p>
                        <p>
                            The encoder is not hardcoded either. It works out
                            the H.264 level from the macroblock load and picks
                            the lowest one that fits, then derives the bitrate
                            from bits per pixel rather than a fixed number.
                            Frames fan out across a worker pool sized to the
                            machine, capped at eight, with a sliding window that
                            keeps order.
                        </p>
                    </div>

                    <SectionTitle number="07">
                        The rules I gave myself
                    </SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            Working alone, the danger is that nothing stops you.
                            So I wrote the constraints down and made them
                            non-negotiable. No file over 300 lines. No folder
                            over 10 files. No comments, on the theory that if it
                            needs one the code is wrong. The line I keep coming
                            back to is{" "}
                            <b>
                                if code is hard to read, it is considered
                                incorrect even if it works
                            </b>
                            . The engine still obeys it. The largest file in it
                            is 266 lines.
                        </p>
                        <p>
                            State is a <b>45 line signals library</b> I wrote
                            instead of reaching for Redux or Zustand. It is a
                            value, a set of listeners, and useSyncExternalStore.
                            An editor is thousands of tiny updates a second, and
                            most state libraries are built for a different
                            problem.
                        </p>
                        <p>
                            The brand runs on the same principle. Three
                            typefaces, each with one job. Two colour variables
                            that everything else derives from. No shadows
                            anywhere, because depth comes from a border and a
                            surface shift. A banned words list. The word AI
                            appears in the product only when it is being
                            negated.
                        </p>
                    </div>

                    <SectionTitle number="08">
                        Making money without a wall
                    </SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            The studio and the video editor are free, with no
                            signup, because local processing costs me nothing
                            per person. If I had put this on servers I would
                            have had to charge before anyone had made anything.
                        </p>
                        <p>
                            Paying removes the watermark and lifts the export
                            ceiling: full resolution instead of 1500px, vector
                            export, 1080p video, batch. And it is{" "}
                            <b>
                                one payment for a ten year licence, not a
                                subscription
                            </b>
                            . Selling a tool that promises your files will still
                            open in a decade, and then renting it to you by the
                            month, would be an odd thing to do.
                        </p>
                    </div>

                    <SectionTitle number="09">Results</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            I launched it on Product Hunt in May 2026 and it
                            finished <b>#5 Product of the Day</b> with 200
                            upvotes. It now gets{" "}
                            <b>10,000+ visitors a month</b> and has{" "}
                            <b>500+ people signed up</b>.
                        </p>
                        <p>
                            It began as a small tool that only did dithering.
                            Enough people asked for the parts around it, the
                            layers, the type, the exporting, that it grew into a
                            full editor, then a video editor. I have kept
                            building it alongside a full-time job ever since.
                        </p>
                    </div>

                    <SectionTitle number="10">What I took from it</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            <b>
                                Saying no to one thing gave me everything else.
                            </b>{" "}
                            No AI sounds like a limitation. It turned out to be
                            the position, the architecture and the best feature
                            at once. Because the chain is deterministic I got
                            the .btg file, the privacy, a free tier that costs
                            me nothing, and a reason for anyone to care.
                        </p>
                        <p>
                            <b>
                                I reached for the GPU before I had earned it.
                            </b>{" "}
                            My assumption was that per-pixel work in JavaScript
                            could not possibly be fast enough. It was, once I
                            stopped doing it more often than necessary. The
                            performance came from caching, coalescing and not
                            copying, and I would not have found any of that if I
                            had reached for shaders on day one.
                        </p>
                        <p>
                            <b>Old ideas are load bearing.</b> The best things
                            in the engine are not mine. Serpentine scanning,
                            press screen angles, ink separation and error
                            diffusion were all worked out by people with
                            machinery, decades before the browser existed. My
                            job was mostly to go and read what they did.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-16 pt-8 border-t border-black border-dashed">
                        <Link
                            href="https://bitgrain.app"
                            target="_blank"
                            className="offsetstyle bg-black text-white px-5 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors gap-3 rounded-full"
                        >
                            Try Bitgrain <ArrowUpRight size={18} />
                        </Link>
                        <Link
                            href="/hire"
                            className="bg-yellow-300 text-black px-5 py-2 w-fit flex items-center hover:bg-transparent border border-black transition-colors gap-3 rounded-full"
                        >
                            Work with me <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
