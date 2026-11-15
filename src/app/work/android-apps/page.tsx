import React from "react";
import { Metadata } from "next";
import { CaseHero, CaseShell, Chapter, NextProject, Stage, Wide } from "@/components/work/CaseStudy";
import { APPS } from "@/components/work/projects";

export const metadata: Metadata = {
    title: "Android apps | Diptanshu Mahish",
    description:
        "dailyThings, Zen Clock and Simply Expenses: three Android apps I designed, built and published on my own.",
    openGraph: {
        title: "Android apps | Diptanshu Mahish",
        description: "Three Android apps I designed, built and published on my own.",
        url: "https://diptanshumahish.in/work/android-apps",
    },
};

const about = [
    {
        name: "dailyThings",
        what: "A planner for the day ahead. Small lists, nothing to set up, open it and write.",
    },
    {
        name: "Zen Clock",
        what: "Focus timers, and nothing else. It exists because every timer I tried was buried in ads.",
    },
    {
        name: "Simply Expenses",
        what: "A quick way to log what you spent, so the month doesn't surprise you.",
    },
];

export default function AndroidAppsCaseStudy() {
    return (
        <CaseShell>
            <CaseHero
                name="Android apps"
                kind="Mobile · archived"
                line="Three apps I designed, built and put on the Play Store myself, start to finish."
                cat={{ color: "lilac", face: "indigo" }}
                meta={[
                    { label: "Role", value: "Solo: design, code, store listing, support" },
                    { label: "Apps", value: "dailyThings, Zen Clock, Simply Expenses" },
                    { label: "Built with", value: "Flutter, Dart, Firebase" },
                    { label: "Status", value: "Archived, code still public" },
                ]}
                links={[{ label: "Code on GitHub", href: "https://github.com/diptanshumahish?tab=repositories" }]}
            />

            <Stage bg="#2E2A7A" className="px-5 py-10 sm:p-16">
                <div className="grid grid-cols-3 gap-3 sm:gap-8 max-w-[760px] mx-auto">
                    {APPS.map((a, i) => (
                        <div
                            key={a.name}
                            className="mat !p-0 overflow-hidden flex flex-col aspect-[9/16]"
                            style={{ transform: `rotate(${[-6, 2, 7][i]}deg)` }}
                        >
                            <span className={`${a.bg} flex-1 flex items-end p-3 sm:p-6 font-serif text-base sm:text-3xl leading-tight`}>
                                {a.name}
                            </span>
                            <span className="text-[11px] sm:text-sm text-muted p-3 sm:p-5 bg-white">{a.note}</span>
                        </div>
                    ))}
                </div>
            </Stage>

            <Chapter title="Things I wanted for myself">
                <p>
                    None of these started as a product idea. Each one was a small
                    annoyance on my own phone that I could fix in a weekend, and
                    then didn&apos;t stop fixing.
                </p>
            </Chapter>

            <Wide>
                <div className="grid sm:grid-cols-3 gap-3">
                    {about.map((a, i) => (
                        <div key={a.name} className="bg-white rounded-[24px] p-6 flex flex-col gap-3">
                            <span className={`w-10 h-10 rounded-[12px] ${APPS[i].bg}`} />
                            <h3 className="font-serif text-xl pt-1">{a.name}</h3>
                            <p className="text-sm text-black/70 leading-relaxed">{a.what}</p>
                        </div>
                    ))}
                </div>
            </Wide>

            <Chapter title="Doing all of it">
                <p>
                    I did every part: the design, the code, the store listings,
                    the screenshots, the privacy policies, and{" "}
                    <b>answering the people who emailed me</b>. That last part
                    taught me more than the rest. A one-star review with a real
                    reason in it is the most useful thing a stranger can give
                    you.
                </p>
                <p>
                    It&apos;s also where I learned to finish things. An app on a
                    store has to work on phones you&apos;ve never seen, for
                    people who will never read a readme.
                </p>
            </Chapter>

            <Chapter title="Where they are now">
                <p>
                    They&apos;re archived and no longer on the Play Store. The
                    code is still on GitHub. Everything I build now still starts
                    the same way: something I wanted to exist.
                </p>
            </Chapter>

            <NextProject slug="android-apps" />
        </CaseShell>
    );
}
