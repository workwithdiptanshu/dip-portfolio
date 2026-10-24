"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Concept {
    slug: string;
    country: "us" | "in";
    what: string;
    where: string;
    kind: string;
    found: string;
    reviews: string;
}

const BASE = "https://concepts.diptanshumahish.in";

/** The same flat palette the experience cards use, cycled. */
const palette = ["#DCFF93", "#C8ADFF", "#93C5FF", "#FF9393", "#FDE68A"];

const filters = [
    { key: "all", label: "All" },
    { key: "us", label: "United States" },
    { key: "in", label: "India" },
] as const;

export default function ConceptGrid({ concepts }: { concepts: Concept[] }) {
    const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
    const shown = concepts.filter((c) => filter === "all" || c.country === filter);

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
                <div className="flex flex-wrap gap-2">
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            type="button"
                            onClick={() => setFilter(f.key)}
                            aria-pressed={filter === f.key}
                            className={`px-4 py-1 rounded-full border border-black text-sm transition-colors ${
                                filter === f.key
                                    ? "bg-black text-white"
                                    : "bg-white/60 hover:bg-yellow-300"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
                <span className="text-[11px] uppercase tracking-widest opacity-50">
                    Showing {shown.length} of {concepts.length}
                </span>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                {shown.map((c) => {
                    const i = concepts.indexOf(c);
                    return (
                        <Link
                            key={c.slug}
                            href={`${BASE}/${c.slug}/`}
                            target="_blank"
                            className="offsetstyle group flex flex-col border border-black rounded-lg overflow-hidden text-black"
                            style={{ backgroundColor: palette[i % palette.length] }}
                        >
                            <div className="relative border-b border-black overflow-hidden bg-white aspect-[3/2]">
                                <Image
                                    src={`/Assets/work/concepts/${c.slug}.webp`}
                                    alt={`Concept homepage for ${c.what.toLowerCase()}, ${c.where}`}
                                    fill
                                    sizes="(min-width: 1024px) 45vw, 90vw"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <Image
                                    src={`/Assets/work/concepts/${c.slug}-m.webp`}
                                    alt=""
                                    width={390}
                                    height={844}
                                    className="absolute right-[4%] bottom-[6%] w-[15%] h-auto rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-transform duration-500 group-hover:-translate-y-2"
                                />
                            </div>

                            <div className="flex flex-col gap-4 p-6 lg:p-8 flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-3 items-baseline">
                                        <span className="opacity-30 text-xl">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="lg:text-3xl text-2xl font-medium leading-tight">
                                            {c.what}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className="shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <p className="text-base border-l-4 border-black pl-4 py-1">
                                    <span className="text-[11px] uppercase tracking-widest opacity-50 block pb-1">
                                        What I found
                                    </span>
                                    {c.found}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                    {[c.where, c.kind, c.reviews].map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-[3px] rounded-full border border-black bg-white/40"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
