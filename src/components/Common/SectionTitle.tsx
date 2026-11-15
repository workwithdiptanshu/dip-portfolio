import React from "react";
import { MarginNote } from "./Handwriting";

/** Serif heading with a short line under it. Used by every section. */
export default function SectionTitle({
    title,
    sub,
    as: Tag = "h2",
    note,
    className = "",
}: {
    title: React.ReactNode;
    /** A handwritten aside, scribbled next to the heading. */
    note?: string;
    sub?: React.ReactNode;
    as?: "h1" | "h2";
    className?: string;
}) {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <div className="relative w-fit flex flex-col sm:block">
                <Tag className="font-serif text-[34px] sm:text-[44px] leading-[1.1] tracking-[-0.02em]">
                    {title}
                </Tag>
                {note && (
                    <MarginNote
                        arrow="left"
                        arrowFirst
                        rotate={-6}
                        className="w-fit pt-1 sm:pt-0 sm:absolute sm:left-full sm:ml-3 sm:top-1 whitespace-nowrap"
                    >
                        {note}
                    </MarginNote>
                )}
            </div>
            {sub && (
                <p className="text-[15px] sm:text-base leading-relaxed max-w-[440px]">
                    {sub}
                </p>
            )}
        </div>
    );
}
