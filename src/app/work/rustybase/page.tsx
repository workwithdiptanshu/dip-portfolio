import React from "react";
import { Metadata } from "next";
import {
    CaseHero,
    CaseShell,
    Chapter,
    Code,
    NextProject,
    Stage,
    Wide,
} from "@/components/work/CaseStudy";
import { Mat, Note } from "@/components/work/projects";

export const metadata: Metadata = {
    title: "Rustybase | Diptanshu Mahish",
    description:
        "A MongoDB-style document database I wrote in Rust: one small binary, a log-structured storage engine, crash-safe transactions and indexes it builds for itself.",
    openGraph: {
        title: "Rustybase | Diptanshu Mahish",
        description: "A MongoDB-style database in one small binary, written in Rust.",
        url: "https://diptanshumahish.in/work/rustybase",
    },
};

const RUST = "#E2582A";

/** From the comparison on the Rustybase site. */
const compare = [
    { label: "Binary size", rb: "~15 MB", them: "400 MB+", pct: 4 },
    { label: "Memory at rest", rb: "<50 MB", them: "500 MB+", pct: 10 },
    { label: "Start up", rb: "<50 ms", them: "2 s+", pct: 3 },
];

const writePath = [
    { label: "Write", note: "a document comes in" },
    { label: "Log", note: "appended to the write-ahead log, nothing overwritten" },
    { label: "Memtable", note: "held in a sorted red-black tree in memory" },
    { label: "SSTables", note: "flushed to sorted, immutable files on disk" },
];

export default function RustybaseCaseStudy() {
    return (
        <CaseShell>
            <CaseHero
                name="Rustybase"
                kind="Database · written in Rust"
                line="A MongoDB-style database in one small binary, so building on your laptop doesn't need a cluster."
                cat={{ color: "marigold", face: "moss" }}
                meta={[
                    { label: "Role", value: "Solo: engine, SDKs, site" },
                    { label: "When", value: "2026, in beta" },
                    { label: "Built with", value: "Rust" },
                    { label: "Ships as", value: "CLI, TypeScript and Python SDKs, admin UI" },
                ]}
                links={[
                    { label: "Website", href: "https://rustybase.vercel.app" },
                    { label: "GitHub", href: "https://github.com/diptanshumahish/rustybase-release" },
                ]}
            />

            <Stage bg={RUST} className="h-[340px] sm:h-[560px]">
                <Mat
                    src="/Assets/work/rustybase/site.webp"
                    alt="The Rustybase website"
                    className="left-[6%] sm:left-[12%] top-[10%] w-[88%] sm:w-[62%] aspect-[16/10] h-auto"
                    rotate={-2.5}
                    sizes="(min-width: 640px) 680px, 90vw"
                />
                <Note dark className="hidden sm:flex right-[6%] bottom-[12%] w-[30%] font-mono text-sm gap-1" rotate={5}>
                    <span className="text-white/40 text-xs pb-2">~/my-app</span>
                    <span><span className="text-cat-marigold">$</span> rustybase init</span>
                    <span><span className="text-cat-marigold">$</span> rustybase serve</span>
                </Note>
                <Note className="hidden sm:flex right-[8%] top-[8%] w-[15%] aspect-square" rotate={-7}>
                    <span className="text-3xl font-medium tracking-tight">~15 MB</span>
                    <span className="text-xs text-muted pt-1">the whole thing</span>
                </Note>
            </Stage>

            <Chapter title="Why I built it">
                <p>
                    Every side project I started wanted a database, and every
                    time that meant Docker, a few hundred megabytes of MongoDB
                    and a config file before I&apos;d written a line of the thing
                    I actually cared about.{" "}
                    <b>Your laptop shouldn&apos;t need a cluster.</b>
                </p>
                <p>
                    Rustybase is the database I wanted instead: it speaks the
                    MongoDB query language, it&apos;s one file, and you start it
                    with <code>rustybase serve</code>. It&apos;s also where I learn
                    everything frontend work never teaches you: storage engines,
                    crash safety, concurrency.
                </p>
            </Chapter>

            <Wide caption="Measured against MongoDB, from the comparison on the Rustybase site.">
                <div className="flex flex-col gap-6">
                    {compare.map((c) => (
                        <div key={c.label} className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-center">
                            <span className="text-sm text-muted">{c.label}</span>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-7 rounded-full shrink-0" style={{ width: `${Math.max(c.pct, 3)}%`, backgroundColor: RUST }} />
                                    <span className="text-sm font-medium">{c.rb} <span className="text-muted font-normal">Rustybase</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-7 rounded-full bg-black/15 w-[78%]" />
                                    <span className="text-sm text-muted whitespace-nowrap">{c.them}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Wide>

            <Chapter title="How a write works">
                <p>
                    The storage engine is <b>log-structured</b>. Nothing is ever
                    overwritten in place: a write is appended to the end of a
                    log, which is the fastest thing a disk can do and stays fast
                    however big the data gets.
                </p>
                <p>
                    Recent writes sit in memory in a sorted tree. When that fills
                    up it&apos;s flushed to disk as a sorted, immutable file. Reads
                    check memory first, then the files, newest to oldest.
                </p>
            </Chapter>

            <Wide tone="white">
                <ol className="grid sm:grid-cols-4 gap-3">
                    {writePath.map((s, i) => (
                        <li key={s.label} className="relative bg-paper rounded-[22px] p-5 flex flex-col gap-2">
                            <span
                                className="w-8 h-8 rounded-full text-white text-sm flex items-center justify-center"
                                style={{ backgroundColor: i === 0 ? "#111" : RUST }}
                            >
                                {i + 1}
                            </span>
                            <span className="font-serif text-xl pt-2">{s.label}</span>
                            <span className="text-sm text-muted leading-snug">{s.note}</span>
                        </li>
                    ))}
                </ol>
            </Wide>

            <Chapter title="Safe when it crashes">
                <p>
                    Because every change hits the write-ahead log before anything
                    else, a crash halfway through can&apos;t leave a document half
                    written. On restart the log is replayed and you&apos;re back
                    where you were. Transactions are <b>ACID</b>, with strict
                    serializability, so two writers can&apos;t quietly step on
                    each other.
                </p>
            </Chapter>

            <Chapter title="Indexes it builds for itself">
                <p>
                    Most people never add an index until something is slow.
                    Rustybase watches the queries you actually run and builds
                    B-tree indexes for them in the background. You don&apos;t
                    configure anything; the common queries just get fast.
                </p>
                <p>
                    When one machine isn&apos;t enough, data can be split across
                    several using consistent hashing, so adding a node only moves
                    a slice of the data.
                </p>
            </Chapter>

            <Chapter title="Nice to talk to">
                <p>
                    It speaks HTTP, not a custom wire protocol, so anything that
                    can make a request can use it. Filtering and aggregation
                    pipelines work the way MongoDB users expect. Roles, JWT auth
                    and hashed passwords are on by default, not a plugin.
                </p>
                <p>
                    I wrote the SDKs too. The TypeScript one is fully typed,
                    works in Node, the browser and Deno, refreshes its own
                    tokens, and ships both ESM and CommonJS. There&apos;s a Python
                    one and a web dashboard for looking at your data.
                </p>
            </Chapter>

            <Wide>
                <Code>{`import { RustyBaseClient } from "rustybase-sdk";

const client = new RustyBaseClient({ baseUrl: "http://localhost:3000" });
const orders = client.db("shop").collection("orders");

await orders.insertOne({ category: "prints", amount: 40, status: "active" });

const totals = await orders.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$category", total: { $sum: "$amount" } } },
]);`}</Code>
            </Wide>

            <Chapter title="Where it is now">
                <p>
                    It&apos;s in beta and free while it is. It runs on macOS,
                    Linux and Windows, on Intel and ARM, and installs with one
                    line.
                </p>
            </Chapter>

            <Wide tone="dark">
                <p className="font-mono text-xs text-white/40 pb-3">macOS and Linux</p>
                <pre className="font-mono text-[12px] sm:text-sm overflow-x-auto">
                    <span className="text-cat-marigold">$ </span>
                    curl -fsSL https://raw.githubusercontent.com/diptanshumahish/rustybase-release/master/install.sh | bash
                </pre>
            </Wide>

            <NextProject slug="rustybase" />
        </CaseShell>
    );
}
