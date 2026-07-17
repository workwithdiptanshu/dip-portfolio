import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    /** Flat palette colour behind the card. Ignored when `current` is set. */
    bgColor: string;
    /** The role I'm in now. Renders dark instead of coloured, so it reads first. */
    current?: boolean;
}

export default function ExperienceItem({ item }: { item: ExperienceItemProps }) {
    const dark = Boolean(item.current);

    return (
        <div
            className={`offsetstyle relative overflow-hidden border border-black rounded-lg p-6 lg:p-10 ${
                dark ? "bg-[#1a1a1a] text-white" : "text-black"
            }`}
            style={dark ? undefined : { backgroundColor: item.bgColor }}
        >
            <div className="lg:grid lg:grid-cols-12 lg:gap-10 flex flex-col gap-5 relative">
                <div className="lg:col-span-4 flex flex-col gap-2">
                    <h3 className="lg:text-4xl text-2xl font-medium leading-tight">
                        {item.role}
                    </h3>
                    {item.companyLink ? (
                        <Link
                            href={item.companyLink}
                            target="_blank"
                            className={`w-fit flex items-center gap-1 text-lg underline decoration-dashed underline-offset-4 transition-colors ${
                                dark
                                    ? "hover:bg-yellow-300 hover:text-black"
                                    : "hover:bg-black hover:text-white"
                            }`}
                        >
                            {item.company} <ArrowUpRight size={16} />
                        </Link>
                    ) : (
                        <span className="text-lg">{item.company}</span>
                    )}
                    <span className="text-sm opacity-70 pt-2">
                        {item.duration}
                    </span>
                    <span className="text-sm opacity-70">
                        {item.engagement} · {item.location}
                    </span>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-5">
                    <p
                        className={`lg:text-2xl text-lg font-light border-l-4 pl-5 py-1 ${
                            dark ? "border-yellow-300" : "border-black"
                        }`}
                    >
                        {item.summary}
                    </p>
                    <ul className="flex flex-col gap-2 text-sm opacity-80">
                        {item.points.map((point, idx) => (
                            <li key={idx} className="flex gap-3">
                                <span className="opacity-40">·</span>
                                <span
                                    dangerouslySetInnerHTML={{ __html: point }}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {item.stack.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`text-xs px-3 py-[3px] rounded-full border ${
                                    dark
                                        ? "border-white/40"
                                        : "border-black bg-white/40"
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
