import React from "react";
import { INK, Ink, Paw } from "@/components/cats/Cats";

/**
 * The bits that make the site feel scribbled on: notes in the margin,
 * wobbly arrows, and a trail of paw prints where a cat walked across the page.
 */

type ArrowShape = "down-left" | "down-right" | "left" | "right" | "up-left" | "up-right";

/** Hand-drawn curved arrows. Each path ends in a small open arrowhead. */
const ARROWS: Record<ArrowShape, { d: string; head: string; vb: string }> = {
    "down-left": {
        vb: "0 0 80 70",
        d: "M72 6 C 60 10 44 18 36 32 C 30 42 26 52 14 60",
        head: "M24 60 L13 61 L17 50",
    },
    "down-right": {
        vb: "0 0 80 70",
        d: "M8 6 C 20 10 36 18 44 32 C 50 42 54 52 66 60",
        head: "M56 60 L67 61 L63 50",
    },
    left: {
        vb: "0 0 90 40",
        d: "M86 22 C 66 30 46 10 28 18 C 20 22 14 22 6 20",
        head: "M14 12 L5 20 L15 27",
    },
    right: {
        vb: "0 0 90 40",
        d: "M4 22 C 24 30 44 10 62 18 C 70 22 76 22 84 20",
        head: "M76 12 L85 20 L75 27",
    },
    "up-left": {
        vb: "0 0 80 70",
        d: "M72 64 C 60 60 44 52 36 38 C 30 28 26 18 14 10",
        head: "M24 9 L13 9 L16 20",
    },
    "up-right": {
        vb: "0 0 80 70",
        d: "M8 64 C 20 60 36 52 44 38 C 50 28 54 18 66 10",
        head: "M56 9 L67 9 L64 20",
    },
};

export function Arrow({
    shape,
    color = "moss",
    className = "",
}: {
    shape: ArrowShape;
    color?: Ink;
    className?: string;
}) {
    const a = ARROWS[shape];
    return (
        <svg viewBox={a.vb} className={className} aria-hidden fill="none">
            <path d={a.d} stroke={INK[color]} strokeWidth="2.6" strokeLinecap="round" />
            <path
                d={a.head}
                stroke={INK[color]}
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/** A handwritten note with an arrow. Position it with className. */
export function MarginNote({
    children,
    arrow,
    arrowFirst = false,
    color = "moss",
    rotate = -4,
    className = "",
    arrowClassName = "w-12 h-auto",
}: {
    children: React.ReactNode;
    arrow?: ArrowShape;
    /** Put the arrow before the words instead of after. */
    arrowFirst?: boolean;
    color?: Ink;
    rotate?: number;
    className?: string;
    arrowClassName?: string;
}) {
    const arrowEl = arrow && (
        <Arrow shape={arrow} color={color} className={`shrink-0 ${arrowClassName}`} />
    );
    return (
        <span
            className={`font-hand text-[13px] sm:text-[15px] leading-[1.6] inline-flex items-center gap-1 select-none ${className}`}
            style={{ color: INK[color], transform: `rotate(${rotate}deg)` }}
        >
            {arrowFirst && arrowEl}
            <span>{children}</span>
            {!arrowFirst && arrowEl}
        </span>
    );
}

/** A cat walked across the page here. */
export function PawTrail({
    color = "moss",
    className = "",
    steps = 7,
}: {
    color?: Ink;
    className?: string;
    steps?: number;
}) {
    return (
        <div aria-hidden className={`relative h-16 max-w-[640px] mx-auto ${className}`}>
            {Array.from({ length: steps }, (_, i) => (
                <Paw
                    key={i}
                    color={color}
                    className="absolute w-5 h-5 opacity-80"
                    style={{
                        left: `${(i / (steps - 1)) * 94}%`,
                        top: i % 2 ? "8px" : "30px",
                        transform: `rotate(${80 + (i % 2 ? -12 : 12)}deg)`,
                        opacity: 0.25 + (i / steps) * 0.65,
                    }}
                />
            ))}
        </div>
    );
}
