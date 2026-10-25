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
    reviews: string;
}

const BASE = "https://concepts.diptanshumahish.in";

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
            <div className="flex items-center justify-between gap-4 pb-8">
                <div className="flex gap-6 text-sm">
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            type="button"
                            onClick={() => setFilter(f.key)}
                            aria-pressed={filter === f.key}
                            className={`pb-1 border-b transition-opacity ${
                                filter === f.key
                                    ? "border-black"
                                    : "border-transparent opacity-50 hover:opacity-100"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
                <span className="text-sm opacity-50">{shown.length}</span>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
                {shown.map((c) => (
                    <Link
                        key={c.slug}
                        href={`${BASE}/${c.slug}/`}
                        target="_blank"
                        className="group flex flex-col gap-4 text-black"
                    >
                        <div className="relative overflow-hidden rounded-md border border-black/10 bg-white aspect-[3/2]">
                            <Image
                                src={`/Assets/work/concepts/${c.slug}.webp`}
                                alt={`Concept homepage for ${c.what.toLowerCase()}, ${c.where}`}
                                fill
                                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-medium leading-snug">
                                    {c.what}
                                </h3>
                                <p className="text-sm opacity-50">
                                    {c.where} · {c.reviews}
                                </p>
                            </div>
                            <ArrowUpRight
                                size={18}
                                className="shrink-0 mt-1 opacity-40 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
