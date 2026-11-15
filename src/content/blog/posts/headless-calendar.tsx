import React from "react";
import Link from "next/link";
import { Aside, Code, Pull } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "the-calendar-package-that-renders-nothing",
    title: "The calendar package that renders nothing",
    description:
        "Most calendar components fight your CSS. Calendify just gives you the dates, 42 of them, and lets you draw the calendar yourself. Here's why headless was the right call, and why it's still installed every week.",
    date: "2026-08-25",
    tags: ["React", "Open source", "Calendify"],
    keywords: [
        "headless calendar react",
        "custom calendar component react",
        "build a calendar in javascript",
        "calendar npm package",
        "headless ui components",
    ],
    minutes: 3,
    cover: {
        art: "calendar",
        alt: "A drawn calendar for November",
        ratio: "4 / 3.4",
        bg: "#C3B8F0",
    },
};

/** A month, the way Calendify hands it over: six full weeks. */
function MonthGrid() {
    const first = new Date(2026, 10, 1).getDay();
    const days: { d: number; on: boolean }[] = [];
    for (let i = first - 1; i >= 0; i--) days.push({ d: 31 - i, on: false });
    for (let d = 1; d <= 30; d++) days.push({ d, on: true });
    for (let d = 1; days.length < 42; d++) days.push({ d, on: false });
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-4 sm:p-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-[20px] p-5">
                    <p className="font-serif text-xl pb-3">November 2026</p>
                    <div className="grid grid-cols-7 gap-1 text-[12px] text-center">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                            <span key={i} className="text-muted pb-1">{d}</span>
                        ))}
                        {days.map((x, i) => (
                            <span key={i} className={`py-1.5 rounded-full ${!x.on ? "text-black/20" : x.d === 20 ? "bg-cat-moss text-white" : ""}`}>
                                {x.d}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="bg-ink text-[#C3B8F0] rounded-[20px] p-5 font-mono">
                    <p className="text-xs uppercase tracking-widest pb-3">November 2026</p>
                    <div className="grid grid-cols-7 gap-1 text-[12px] text-center">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                            <span key={i} className="opacity-50 pb-1">{d}</span>
                        ))}
                        {days.map((x, i) => (
                            <span key={i} className={`py-1.5 ${!x.on ? "opacity-15" : x.d === 20 ? "bg-cat-lilac text-ink" : ""}`}>
                                {x.d}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <figcaption className="text-sm text-muted pt-3 px-2">
                The same 42 days, drawn two completely different ways. That&apos;s the point.
            </figcaption>
        </figure>
    );
}

export function Body() {
    return (
        <>
            <p>
                A few years ago I needed a calendar on a website. Simple enough. I tried a
                few popular calendar components, and every one of them came with its own
                look. Making it match the site meant overriding their CSS, fighting their
                class names, and losing.
            </p>
            <p>
                I realised I didn&apos;t want their calendar at all. I wanted the fiddly part
                done for me: <b>which dates go in which squares</b>. The drawing I could do
                myself. So I made <Link href="/work/calendify">Calendify</Link>, a small npm
                package that does only that.
            </p>

            <h2>Data, not a component</h2>
            <p>
                Calendify doesn&apos;t render anything. You call <code>getCalendar()</code> and
                you get back plain data: the month, the year, today&apos;s date, and a list of
                days.
            </p>
            <Code>{`
import { getCalendar } from "calendify";

const { month, year, days } = getCalendar({});

// days looks like:
// [{ date: 26, type: "previousMonth" }, ..., { date: 1, type: "activeMonth" }, ...]
`}</Code>
            <p>
                Each day says whether it belongs to this month or spills over from the one
                before or after. You lay them out in a seven-column grid, style them however
                you like, and you have a calendar that looks exactly like the rest of your
                site. Because you drew it.
            </p>
            <Pull>The fiddly part is the dates. The drawing is the fun part. So I only did the dates.</Pull>

            <MonthGrid />

            <h2>Why always 42 days?</h2>
            <p>
                A month can stretch across four, five or six rows depending on which day it
                starts on. If your grid changes height every month, the page jumps around
                when you click &quot;next&quot;.
            </p>
            <p>
                So Calendify always returns <b>six full weeks, 42 days</b>, padding the start
                and end with days from the neighbouring months. Every month is the same
                size, and nothing jumps.
            </p>

            <h2>The whole API</h2>
            <p>There are three functions, and that&apos;s it:</p>
            <ul>
                <li><code>getCalendar()</code> gives you a month, this one by default, or any month and year you ask for.</li>
                <li><code>nextMonth()</code> and <code>prevMonth()</code> move forward and back.</li>
                <li>Pass <code>startDateMonday: true</code> to any of them if your weeks start on Monday.</li>
            </ul>
            <Code>{`
import { getCalendar, nextMonth } from "calendify";

const { days } = getCalendar({ startDateMonday: true });

days.map((d) => (
  <span className={d.type === "activeMonth" ? "day" : "day muted"}>
    {d.date}
  </span>
));
`}</Code>
            <Aside note="headless, before it was cool">
                This idea now has a name: <i>headless</i> components. Libraries that handle
                the logic and leave every bit of the look to you. It&apos;s my favourite way
                to build shared UI, because it never fights the design.
            </Aside>

            <h2>Three years later</h2>
            <p>
                I haven&apos;t promoted Calendify or changed it in years, and people still
                install it every week. That taught me something I keep coming back to: the
                smallest useful thing tends to outlast the clever one.
            </p>
            <p>
                It&apos;s open source, and you can find it on{" "}
                <a href="https://www.npmjs.com/package/calendify" target="_blank" rel="noopener">npm</a>.
            </p>
        </>
    );
}
