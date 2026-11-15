import React from "react";
import Link from "next/link";
import { Aside, Code, Figure, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "what-building-a-database-in-rust-taught-me",
    title: "What building a small database in Rust taught me about storage engines",
    description:
        "I wrote Rustybase, a MongoDB-style database that ships as one small binary. Here's how a log-structured storage engine works, explained simply: write-ahead logs, memtables, SSTables and indexes that build themselves.",
    date: "2026-09-12",
    tags: ["Rust", "Databases", "Rustybase"],
    keywords: [
        "log structured storage engine",
        "write ahead log explained",
        "lsm tree explained",
        "build a database in rust",
        "memtable sstable",
        "local mongodb alternative",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/work/rustybase/site.webp",
        alt: "The Rustybase website",
        ratio: "16 / 10",
        bg: "#E2582A",
    },
};

export function Body() {
    return (
        <>
            <p>
                Every side project I started needed a database, and every time that meant
                the same ritual: Docker, a few hundred megabytes of MongoDB, a config file,
                and twenty minutes before I&apos;d written a single line of the thing I
                actually wanted to build.
            </p>
            <p>
                So I wrote my own. <Link href="/work/rustybase">Rustybase</Link> is a small
                database that understands MongoDB-style queries, ships as one file of about
                15 MB, and starts in under 50 milliseconds. You run{" "}
                <code>rustybase serve</code> and it works.
            </p>
            <p>
                It&apos;s also how I learned the parts of software that frontend work never
                teaches you. This is the stuff I wish someone had explained to me plainly.
            </p>

            <Figure
                src="/Assets/work/rustybase/site.webp"
                alt="The Rustybase website"
                ratio="16 / 10"
                caption="Rustybase: one binary, nothing to configure."
            />

            <h2>Don&apos;t overwrite. Append.</h2>
            <p>
                The first big idea is the one everything else hangs off. When you change a
                document, Rustybase doesn&apos;t go and find the old one on disk and edit it.
                It just <b>writes the new version at the end of a file</b>.
            </p>
            <p>
                Writing to the end of a file is the fastest thing a disk can do. There&apos;s
                no searching, no jumping around. And it stays fast however big the data
                gets. This style of database is called <b>log-structured</b>, because the
                data is kept like a log: a list of things that happened, in order.
            </p>
            <Pull>The fastest thing a disk can do is write to the end of a file.</Pull>

            <h2>The path a write takes</h2>
            <p>Here&apos;s what happens when you save something:</p>
            <ol>
                <li><b>The log.</b> The change is appended to the <i>write-ahead log</i> first, before anything else happens.</li>
                <li><b>The memtable.</b> It&apos;s then added to a sorted structure in memory (a red-black tree), so recent data is quick to find.</li>
                <li><b>SSTables.</b> When the memtable fills up, it&apos;s written to disk as a sorted file that never changes again. These are called SSTables, short for sorted string tables.</li>
            </ol>
            <p>
                To read a document, Rustybase checks memory first, then the files on disk
                from newest to oldest. The first match it finds is the current version.
            </p>
            <Code label="The rough shape of a write.">{`
fn write(&mut self, doc: Document) -> Result<()> {
    self.wal.append(&doc)?;        // 1. durable first
    self.memtable.insert(doc);     // 2. sorted, in memory
    if self.memtable.is_full() {
        self.flush_to_sstable()?;  // 3. sorted file on disk
    }
    Ok(())
}
`}</Code>

            <h2>Why the log comes first: crashes</h2>
            <p>
                The write-ahead log is what makes the database safe. Because every change is
                written to the log before anything else, a crash halfway through can&apos;t
                leave a document half written. When Rustybase starts again, it replays the
                log and you&apos;re back exactly where you were.
            </p>
            <p>
                Transactions build on the same idea. Either every change in a transaction
                makes it into the log, or none of them do. Two people writing at the same
                time can&apos;t quietly overwrite each other.
            </p>
            <Aside note="the catch">
                Appending forever means old versions pile up. Every log-structured database
                has to tidy up now and then, merging files and throwing away versions nobody
                can see anymore. It&apos;s the price you pay for fast writes.
            </Aside>

            <h2>Indexes that build themselves</h2>
            <p>
                An index is what makes a query fast instead of slow. Without one, the
                database has to look at every single document to find the ones you asked for.
                The trouble is, most people don&apos;t add indexes until something is already
                slow.
            </p>
            <p>
                So Rustybase watches the queries you actually run, and builds B-tree indexes
                for the common ones in the background. You don&apos;t configure anything. The
                queries you run most just get fast on their own.
            </p>

            <h2>Talking to it over HTTP</h2>
            <p>
                Instead of a custom protocol, Rustybase speaks plain HTTP. Anything that can
                make a request can use it. I wrote a TypeScript SDK that&apos;s fully typed and
                works in Node, the browser and Deno, and a Python one too.
            </p>
            <Code>{`
import { RustyBaseClient } from "rustybase-sdk";

const client = new RustyBaseClient({ baseUrl: "http://localhost:3000" });
const orders = client.db("shop").collection("orders");

await orders.insertOne({ item: "poster", amount: 40, status: "paid" });
const paid = await orders.find({ status: "paid" });
`}</Code>

            <h2>What I learned</h2>
            <p>
                The biggest surprise was how much of a database is about <b>being careful</b>{" "}
                rather than being clever. Most of the hard work is deciding what happens if
                the power goes out at exactly the wrong moment.
            </p>
            <p>
                The second was how good Rust is for this. The compiler is strict about who
                owns what memory and who&apos;s allowed to change it, which is exactly the kind
                of mistake that corrupts data in a database. It catches a whole class of bugs
                before the code ever runs.
            </p>
            <p>
                Rustybase is in beta and free while it is. If you want a local database that
                just runs, give it a try at{" "}
                <a href="https://rustybase.vercel.app" target="_blank" rel="noopener">rustybase.vercel.app</a>.
            </p>
        </>
    );
}
