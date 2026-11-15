import React from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { CatHead, TILE_PAIRS, INK } from "@/components/cats/Cats";

export interface ExperienceItemProps {
    role: string;
    company: string;
    companyLink?: string;
    duration: string;
    location: string;
    /** e.g. "Full-time", "Internship" */
    engagement: string;
    summary: string;
    points: string[];
    stack: string[];
    /** The role I'm in now. Its details start open. */
    current?: boolean;
}

export default function ExperienceItem({
    item,
    index,
}: {
    item: ExperienceItemProps;
    index: number;
}) {
    const pair = TILE_PAIRS[(index + 2) % TILE_PAIRS.length];

    return (
        <article className="group rounded-[32px] bg-card p-6 sm:p-8 grid sm:grid-cols-[200px_1fr] gap-x-10 gap-y-5">
            <div className="flex sm:flex-col items-start justify-between sm:justify-start gap-4">
                <div className="flex flex-col gap-1">
                    {item.current && (
                        <span className="w-fit bg-cat-moss text-white text-[11px] rounded-full px-2.5 py-0.5 mb-2">
                            Now
                        </span>
                    )}
                    {item.companyLink ? (
                        <Link
                            href={item.companyLink}
                            target="_blank"
                            className="w-fit flex items-center gap-1 text-lg sm:text-[22px] leading-tight hover:text-cat-moss transition-colors"
                        >
                            {item.company} <ArrowUpRight size={16} />
                        </Link>
                    ) : (
                        <span className="text-lg sm:text-[22px] leading-tight">
                            {item.company}
                        </span>
                    )}
                    <span className="text-muted text-[15px]">{item.role}</span>
                    <span className="text-xs text-muted pt-3">{item.duration}</span>
                    <span className="text-xs text-muted">
                        {item.engagement} · {item.location}
                    </span>
                </div>
                <span
                    className="sm:mt-auto w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: INK[pair.bg] }}
                >
                    <CatHead
                        color={pair.color}
                        face={pair.face}
                        mood={pair.mood}
                        className="cat-pop w-8 h-auto"
                    />
                </span>
            </div>

            <div className="flex flex-col gap-4 min-w-0">
                <p className="font-serif text-xl sm:text-2xl leading-snug">
                    {item.summary}
                </p>
                <details open={item.current} className="group/d">
                    <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-fit flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors py-1">
                        <Plus size={14} className="transition-transform group-open/d:rotate-45" />
                        <span className="group-open/d:hidden">What I did there</span>
                        <span className="hidden group-open/d:inline">Less</span>
                    </summary>
                    <ul className="flex flex-col pt-3">
                        {item.points.map((point, idx) => (
                            <li
                                key={idx}
                                className="dash-rule py-3 last:bg-none text-[15px] leading-relaxed text-black/75 [&_b]:text-ink [&_b]:font-medium"
                                dangerouslySetInnerHTML={{ __html: point }}
                            />
                        ))}
                    </ul>
                </details>
                <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                        <span key={tech} className="text-xs bg-white/70 rounded-full px-3 py-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
