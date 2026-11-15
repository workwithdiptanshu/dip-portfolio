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
import { MiniCalendar, Note } from "@/components/work/projects";

export const metadata: Metadata = {
    title: "Calendify | Diptanshu Mahish",
    description:
        "A small npm package that gives you a month of dates as data, so you can build a calendar that looks like your own site.",
    openGraph: {
        title: "Calendify | Diptanshu Mahish",
        description: "A calendar package that hands you the dates and leaves the design to you.",
        url: "https://diptanshumahish.in/work/calendify",
    },
};

type Day = { date: number; type: "previousMonth" | "activeMonth" | "nextMonth" };

/** What getCalendar returns: six full weeks, padded with the months either side. */
function monthGrid(year: number, month: number): Day[] {
    const first = new Date(year, month, 1).getDay();
    const inMonth = new Date(year, month + 1, 0).getDate();
    const inPrev = new Date(year, month, 0).getDate();
    const days: Day[] = [];
    for (let i = first - 1; i >= 0; i--) days.push({ date: inPrev - i, type: "previousMonth" });
    for (let d = 1; d <= inMonth; d++) days.push({ date: d, type: "activeMonth" });
    for (let d = 1; days.length < 42; d++) days.push({ date: d, type: "nextMonth" });
    return days;
}

const grid = monthGrid(2026, 10);

/** One set of data, three very different looks. */
const skins = [
    {
        name: "Paper",
        wrap: "bg-white text-ink",
        head: "font-serif text-xl",
        cell: (d: Day, i: number) =>
            d.type !== "activeMonth"
                ? "text-black/20"
                : i === 19
                  ? "bg-cat-moss text-white rounded-full"
                  : "",
    },
    {
        name: "Terminal",
        wrap: "bg-ink text-[#7CFC9A] font-mono",
        head: "font-mono text-sm uppercase tracking-widest",
        cell: (d: Day, i: number) =>
            d.type !== "activeMonth"
                ? "text-white/15"
                : i === 19
                  ? "bg-[#7CFC9A] text-ink"
                  : "",
    },
    {
        name: "Sticker",
        wrap: "bg-cat-marigold text-ink",
        head: "font-sans font-semibold text-xl tracking-tight",
        cell: (d: Day, i: number) =>
            d.type !== "activeMonth"
                ? "opacity-0"
                : i === 19
                  ? "bg-cat-indigo text-white rounded-xl"
                  : "bg-white/60 rounded-xl",
    },
];

export default function CalendifyCaseStudy() {
    return (
        <CaseShell>
            <CaseHero
                name="Calendify"
                kind="npm package · open source"
                line="A calendar package that hands you the dates and leaves the design to you."
                cat={{ color: "peach", face: "indigo" }}
                meta={[
                    { label: "Role", value: "Solo" },
                    { label: "When", value: "2023" },
                    { label: "Built with", value: "JavaScript, npm" },
                    { label: "Status", value: "Still installed every week" },
                ]}
                links={[
                    { label: "npm", href: "https://www.npmjs.com/package/calendify" },
                    { label: "GitHub", href: "https://github.com/diptanshumahish/calendify" },
                ]}
            />

            <Stage bg="#F5A48C" className="h-[320px] sm:h-[480px]">
                <Note className="left-[6%] sm:left-[22%] top-[10%] w-[60%] sm:w-[34%] !justify-start" rotate={-4}>
                    <MiniCalendar highlight={19} />
                </Note>
                <Note dark className="right-[6%] sm:right-[20%] bottom-[14%] w-[52%] sm:w-[30%] font-mono text-xs sm:text-sm" rotate={6}>
                    <span>
                        <span className="text-cat-marigold">$</span> npm i calendify
                    </span>
                </Note>
            </Stage>

            <Chapter title="The problem">
                <p>
                    Every calendar component I tried came with its own look, and
                    making it match the site was a fight with someone else&apos;s
                    CSS. Most of the time I didn&apos;t want their calendar. I
                    wanted the fiddly part done for me: which dates go in which
                    squares.
                </p>
            </Chapter>

            <Chapter title="Data, not a component">
                <p>
                    So Calendify doesn&apos;t render anything. Call{" "}
                    <code>getCalendar()</code> and you get back the month, the
                    year, today, and <b>42 days: six full weeks</b>, padded with
                    the end of last month and the start of next, each one tagged
                    so you know which is which.
                </p>
                <p>
                    Lay those out in a seven-column grid and you have a calendar
                    that looks exactly like the rest of your site, because you
                    drew it.
                </p>
            </Chapter>

            <Wide caption="The same 42 days from getCalendar, drawn three different ways.">
                <div className="grid sm:grid-cols-3 gap-4">
                    {skins.map((s) => (
                        <div key={s.name} className={`rounded-[24px] p-5 ${s.wrap}`}>
                            <p className={`pb-4 ${s.head}`}>November 2026</p>
                            <div className="grid grid-cols-7 gap-1 text-[12px] text-center">
                                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                                    <span key={i} className="opacity-50 pb-1">{d}</span>
                                ))}
                                {grid.map((d, i) => (
                                    <span key={i} className={`py-1.5 ${s.cell(d, i)}`}>
                                        {d.date}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Wide>

            <Chapter title="Three functions">
                <p>
                    The whole API is <code>getCalendar</code>,{" "}
                    <code>prevMonth</code> and <code>nextMonth</code>. You can ask
                    for any month and year, and start weeks on Monday instead of
                    Sunday. That&apos;s it. Doing less on purpose is the feature.
                </p>
            </Chapter>

            <Wide>
                <Code>{`import { getCalendar, nextMonth } from "calendify";

const { month, year, days } = getCalendar({ startDateMonday: true });

days.map((d) => (
  <span className={d.type === "activeMonth" ? "day" : "day muted"}>
    {d.date}
  </span>
));`}</Code>
            </Wide>

            <Chapter title="Three years on">
                <p>
                    I haven&apos;t promoted it or changed it since 2023, and people
                    still install it every week. It taught me that{" "}
                    <b>the smallest useful thing</b> tends to outlast the clever
                    one.
                </p>
            </Chapter>

            <NextProject slug="calendify" />
        </CaseShell>
    );
}
