import React from "react";
import WorkItem, { WorkItemProps } from "./WorkItem";
import { Accordion } from "@/components/ui/accordion";

const workItemsArray: WorkItemProps[] = [
    {
        headingName: "Bitgrain",
        itemNumber: "01",
        itemDetails: `<p>A design studio that runs in your browser, for people who make album covers, posters and zines. <b>There's no AI in it, on purpose.</b></p>
        <p>
            <b>27 image processing effects, all written by hand</b>: dithering, halftone, Risograph separation, ASCII, glitch. No GPU and no shaders, just per-pixel loops on the CPU in workers, made fast by caching and never doing the work twice. Your artwork never leaves your machine.
        </p>
        <p>
            Projects save to a <b>.btg</b> file that keeps every setting, so you can open it a year later and get the same image back.
        </p>
        <p>
            I made all of it myself: the idea, the design, the code, the launch.
        </p>`,
        itemImage: "/Assets/work/bitgrain/showcase.webp",
        techUsed: ["TypeScript", "Canvas 2D", "Web Workers"],
        appType: ["Product", "Solo Founder", "Live"],
        stats: [
            { value: "#5", label: "Product of the Day" },
            { value: "10k+", label: "Visitors a month" },
            { value: "500+", label: "Signed up" },
        ],
        sideHeading: `A design studio lighter than Figma and more flexible than Canva.`,
        livelink: "https://bitgrain.app",
        caseStudyLink: "/work/bitgrain",
    },
    {
        headingName: "Concepts",
        itemNumber: "02",
        itemDetails: `<p>Twenty small businesses in the US and India with <b>hundreds or thousands of Google reviews and a website that lets them down</b>: missing, broken, or stuck in 2012. I built the one I'd give each of them.</p>
        <p>
            A panadería in El Paso, an eye hospital in Patna, a BBQ truck in Shreveport, a brass works in Jamnagar. Each one has its own look and its own typeface, and <b>nothing is invented</b>: no fake reviews, no made-up prices.
        </p>`,
        itemImage: "/Assets/work/concepts/bowie-bakery.webp",
        techUsed: ["Next.js", "React", "Static Export"],
        appType: ["Side Project", "Design", "Live"],
        stats: [
            { value: "20", label: "Concepts" },
            { value: "26k+", label: "Google reviews between them" },
            { value: "20", label: "Different typefaces" },
        ],
        sideHeading: `The websites twenty well-loved businesses should have.`,
        livelink: "https://concepts.diptanshumahish.in/bowie-bakery/",
        liveLabel: "See one",
        caseStudyLink: "/concepts",
    },
    {
        headingName: "Rustybase",
        itemNumber: "03",
        itemDetails: `<p>A small database written in Rust that works like MongoDB, but is one file you can just run. Currently in beta.</p>
        <p>
            The idea is simple: <b>you shouldn't need a whole cluster just to build something on your laptop.</b> Rustybase is about 15 MB where MongoDB is over 400 MB, starts in under a tenth of a second instead of two, and uses a fraction of the memory. You type <code>rustybase serve</code> and it works, with nothing to configure.
        </p>
        <p>
            Inside, it only ever adds to the end of a file, which keeps writing fast no matter how big it gets. It watches how you query and builds the indexes for you. It has proper transactions, so a crash can't leave your data half written, and it can split across machines as it grows. There are TypeScript and Python libraries for it.
        </p>
        <p>
            This is the project I use to learn the things frontend work never teaches you.
        </p>`,
        techUsed: ["Rust", "Storage Engines", "Indexing"],
        appType: ["Database", "Beta"],
        stats: [
            { value: "~15 MB", label: "Against MongoDB's 400+" },
            { value: "<50ms", label: "To start up" },
            { value: "0", label: "Things to configure" },
        ],
        liveLabel: "Website",
        sideHeading: `A tiny, fast database that just runs.`,
        livelink: "https://rustybase.vercel.app",
        githubLink: "https://github.com/diptanshumahish/rustybase-release",
    },
    {
        headingName: "Calendify",
        itemNumber: "04",
        itemDetails: `<p>A small calendar package you can install from npm.</p>
        <p>
            I made it because most calendar components try to do everything, and end up being a fight to restyle. This one does less on purpose, so it's easy to make it look like your own. It's open source and installs in one line.
        </p>`,
        techUsed: ["TypeScript", "React", "npm"],
        appType: ["Open Source", "npm Package"],
        liveLabel: "npm",
        sideHeading: `A calendar package that does less on purpose.`,
        livelink: "https://www.npmjs.com/package/calendify",
        githubLink: "https://github.com/diptanshumahish/calendify",
    },
    {
        headingName: "Independent Android Apps",
        itemNumber: "05",
        itemDetails: `<p>Three Android apps I designed, built and published on my own: <b>dailyThings</b> for planning your day, <b>Zen Clock</b> for focus timers, and <b>Simply Expenses</b> for tracking spending.</p>
        <p>
            Each one started as something I wanted for myself. Zen Clock exists because every other one I tried was buried in ads. Doing all of it, the design, the code, the store listing, and answering the people who emailed me, taught me more about real users than anything else I've made.
        </p>
        <p>
            These are archived now and no longer on the Play Store. The code is still up.
        </p>`,
        techUsed: ["Flutter", "Dart", "Firebase"],
        appType: ["Mobile", "Archived"],
        sideHeading: `Three apps I shipped on my own, start to finish.`,
        githubLink: "https://github.com/diptanshumahish?tab=repositories",
        noLinksReason: "Archived. No longer listed on the Play Store.",
    },
];

export default function Work() {
    return (
        <div id="work" className=" overflow-hidden">
            <div className="lg:h-[10vh]"></div>
            <div className="bg-[#1a1a1a] px-[5%] text-white py-[5%]">
                <h2 className="lg:text-7xl text-4xl lg:py-8 py-4">
                    <span className="flex">
                        Here are some of my selected works ^^
                    </span>
                </h2>
                <p className="opacity-60 lg:max-w-[50%] pb-6 text-sm">
                    Things I made in my own time, because I wanted them to
                    exist. All of them shipped.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {workItemsArray.map((ele, idx) => (
                        <WorkItem workItem={ele} key={idx} />
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
