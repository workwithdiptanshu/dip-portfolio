import React from "react";

/**
 * The site's illustration set. Every cat is a blob in one ink with a face in
 * a second, then roughed up so it looks drawn by hand: the edges wobble, the
 * fill has a crayon grain, and a thin pen line sits slightly out of register
 * around it. No images: they scale to any size and recolour from props.
 */

export const INK = {
    moss: "#2F6B4F",
    lilac: "#C3B8F0",
    indigo: "#2E2A7A",
    marigold: "#F2B23A",
    peach: "#F5A48C",
    white: "#FFFFFF",
    ink: "#1C1A17",
} as const;

export type Ink = keyof typeof INK;
export type Mood = "open" | "happy" | "sleepy" | "wink";

interface CatProps {
    color?: Ink;
    face?: Ink;
    mood?: Mood;
    className?: string;
    style?: React.CSSProperties;
    /** Eyes blink every few seconds. */
    blink?: boolean;
    title?: string;
}

function Eyes({
    cx,
    cy,
    gap,
    size,
    mood,
    fill,
}: {
    cx: number;
    cy: number;
    gap: number;
    size: number;
    mood: Mood;
    fill: string;
}) {
    const l = cx - gap;
    const r = cx + gap;
    const w = size * 1.1;
    const arc = (x: number, up: boolean) =>
        `M${x - w} ${cy} Q${x} ${up ? cy - size * 1.4 : cy + size * 1.4} ${x + w} ${cy}`;
    const stroke = {
        stroke: fill,
        strokeWidth: size * 0.75,
        strokeLinecap: "round" as const,
        fill: "none",
    };
    const open = (x: number) => (
        <ellipse
            className="cat-eye"
            cx={x}
            cy={cy}
            rx={size * 0.78}
            ry={size}
            fill={fill}
        />
    );

    if (mood === "happy")
        return (
            <>
                <path d={arc(l, true)} {...stroke} />
                <path d={arc(r, true)} {...stroke} />
            </>
        );
    if (mood === "sleepy")
        return (
            <>
                <path d={arc(l, false)} {...stroke} />
                <path d={arc(r, false)} {...stroke} />
            </>
        );
    if (mood === "wink")
        return (
            <>
                {open(l)}
                <path d={arc(r, true)} {...stroke} />
            </>
        );
    return (
        <>
            {open(l)}
            {open(r)}
        </>
    );
}

/**
 * The filters that make every cat look hand drawn. Rendered once, in the
 * root layout; each cat points at them by id.
 */
export function CatFilters() {
    return (
        <svg aria-hidden width="0" height="0" className="absolute">
            <defs>
                {/* Wobbly edges, then a soft paper grain and uneven ink, like marker on paper. */}
                <filter id="cat-rough" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="wobble" />
                    <feDisplacementMap in="SourceGraphic" in2="wobble" scale="7" xChannelSelector="R" yChannelSelector="G" result="shape" />
                    {/* Fine grain: a light, even speckle that only shifts the tone. */}
                    <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="2" seed="2" result="grain" />
                    <feColorMatrix in="grain" type="saturate" values="0" result="greyGrain" />
                    <feComponentTransfer in="greyGrain" result="softGrain">
                        <feFuncA type="linear" slope="0" intercept="0.22" />
                    </feComponentTransfer>
                    <feComposite in="softGrain" in2="shape" operator="in" result="grainOnShape" />
                    <feBlend in="grainOnShape" in2="shape" mode="multiply" result="grained" />
                    {/* Ink that went down a little heavier in some places than others. */}
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="7" result="mottle" />
                    <feColorMatrix in="mottle" type="saturate" values="0" result="greyMottle" />
                    <feComponentTransfer in="greyMottle" result="softMottle">
                        <feFuncA type="linear" slope="0" intercept="0.14" />
                    </feComponentTransfer>
                    <feComposite in="softMottle" in2="shape" operator="in" result="mottleOnShape" />
                    <feBlend in="mottleOnShape" in2="grained" mode="screen" />
                </filter>
                {/* A shakier pass, for the pen line round the outside. */}
                <filter id="cat-pen" x="-15%" y="-15%" width="130%" height="130%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="11" result="wobble" />
                    <feDisplacementMap in="SourceGraphic" in2="wobble" scale="9" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
        </svg>
    );
}

/**
 * Draws a silhouette twice: once as a dark pen line, nudged off register,
 * and once as the coloured fill on top. Both go through their own wobble.
 */
function Drawn({
    color,
    width,
    children,
}: {
    color: string;
    /** The fat stroke that rounds the blob's corners. */
    width: number;
    children: (style: React.SVGProps<SVGElement>) => React.ReactNode;
}) {
    return (
        <>
            <g filter="url(#cat-pen)" transform="translate(2 -1)">
                {children({ fill: INK.ink, stroke: INK.ink, strokeWidth: width + 5, strokeLinejoin: "round" })}
            </g>
            <g filter="url(#cat-rough)">
                {children({ fill: color, stroke: color, strokeWidth: width, strokeLinejoin: "round" })}
            </g>
        </>
    );
}

/** Two quick pencil marks on each cheek. */
function Blush({ x1, x2, y, size }: { x1: number; x2: number; y: number; size: number }) {
    const mark = (x: number) =>
        `M${x - size} ${y + size * 0.4} l${size * 0.5} ${-size * 0.8} M${x - size * 0.25} ${y + size * 0.4} l${size * 0.5} ${-size * 0.8} M${x + size * 0.5} ${y + size * 0.4} l${size * 0.5} ${-size * 0.8}`;
    return (
        <path
            d={`${mark(x1)} ${mark(x2)}`}
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth={size * 0.32}
            strokeLinecap="round"
            fill="none"
        />
    );
}

/** A cat's head: two ears and a wide face. The site's main mark. */
export function CatHead({
    color = "moss",
    face = "white",
    mood = "open",
    className,
    style,
    blink = false,
    title,
}: CatProps) {
    const c = INK[color];
    const f = INK[face];
    return (
        <svg
            viewBox="-8 -8 216 206"
            className={`${blink ? "cat-blink " : ""}${className ?? ""}`}
            style={style}
            role={title ? "img" : undefined}
            aria-hidden={title ? undefined : true}
        >
            {title && <title>{title}</title>}
            <Drawn color={c} width={18}>
                {(st) => (
                    <>
                        <polygon points="30,104 44,22 96,64" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <polygon points="170,104 156,22 104,64" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <ellipse cx="100" cy="118" rx="80" ry="60" {...(st as React.SVGProps<SVGEllipseElement>)} />
                    </>
                )}
            </Drawn>
            <g filter="url(#cat-rough)">
                <Blush x1={52} x2={148} y={138} size={9} />
                <Eyes cx={100} cy={114} gap={32} size={13} mood={mood} fill={f} />
                <path
                    d="M92 136 L108 136 L100 145 Z"
                    fill={f}
                    stroke={f}
                    strokeWidth="5"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

/** A whole cat, sitting, tail curled round. Used where a head alone is too small. */
export function CatSitting({
    color = "indigo",
    face = "marigold",
    mood = "happy",
    className,
    style,
    blink = false,
    title,
}: CatProps) {
    const c = INK[color];
    const f = INK[face];
    return (
        <svg
            viewBox="-8 -8 236 256"
            className={`${blink ? "cat-blink " : ""}${className ?? ""}`}
            style={style}
            role={title ? "img" : undefined}
            aria-hidden={title ? undefined : true}
        >
            {title && <title>{title}</title>}
            <Drawn color={c} width={16}>
                {(st) => (
                    <>
                        <path
                            d="M150 222 C 205 226 214 168 184 150"
                            fill="none"
                            stroke={st.stroke}
                            strokeWidth={(st.strokeWidth as number) + 8}
                            strokeLinecap="round"
                        />
                        <path d="M48 224 C 36 170 58 118 100 110 C 142 118 164 170 152 224 Z" {...(st as React.SVGProps<SVGPathElement>)} />
                        <polygon points="50,96 58,26 94,56" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <polygon points="150,96 142,26 106,56" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <ellipse cx="100" cy="86" rx="56" ry="44" {...(st as React.SVGProps<SVGEllipseElement>)} />
                    </>
                )}
            </Drawn>
            <g filter="url(#cat-rough)">
                <Blush x1={68} x2={132} y={100} size={6} />
                <Eyes cx={100} cy={84} gap={22} size={9} mood={mood} fill={f} />
                <path
                    d="M95 101 L105 101 L100 107 Z"
                    fill={f}
                    stroke={f}
                    strokeWidth="4"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

/** A cat lying flat, as seen from above the fence. For long thin spaces. */
export function CatLoaf({
    color = "marigold",
    face = "moss",
    mood = "sleepy",
    className,
    style,
    title,
}: CatProps) {
    const c = INK[color];
    const f = INK[face];
    return (
        <svg
            viewBox="-8 -8 276 166"
            className={className}
            style={style}
            role={title ? "img" : undefined}
            aria-hidden={title ? undefined : true}
        >
            {title && <title>{title}</title>}
            <Drawn color={c} width={16}>
                {(st) => (
                    <>
                        <path
                            d="M44 128 C 8 132 2 96 24 80"
                            fill="none"
                            stroke={st.stroke}
                            strokeWidth={(st.strokeWidth as number) + 4}
                            strokeLinecap="round"
                        />
                        <rect x="30" y="70" width="200" height="66" rx="33" {...(st as React.SVGProps<SVGRectElement>)} />
                        <polygon points="150,70 158,14 188,40" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <polygon points="234,70 226,14 196,40" {...(st as React.SVGProps<SVGPolygonElement>)} />
                        <ellipse cx="192" cy="72" rx="48" ry="38" {...(st as React.SVGProps<SVGEllipseElement>)} />
                    </>
                )}
            </Drawn>
            <g filter="url(#cat-rough)">
                <Eyes cx={192} cy={72} gap={18} size={7} mood={mood} fill={f} />
                <path
                    d="M188 86 L196 86 L192 91 Z"
                    fill={f}
                    stroke={f}
                    strokeWidth="3"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

/** A paw print. The small mark that sits above headings. */
export function Paw({
    color = "moss",
    className,
    style,
}: {
    color?: Ink;
    className?: string;
    style?: React.CSSProperties;
}) {
    const c = INK[color];
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            style={style}
            aria-hidden
            filter="url(#cat-rough)"
        >
            <path
                d="M50 50 C 30 50 22 70 26 80 C 30 90 42 86 50 86 C 58 86 70 90 74 80 C 78 70 70 50 50 50 Z"
                fill={c}
            />
            <ellipse cx="22" cy="44" rx="9" ry="12" transform="rotate(-20 22 44)" fill={c} />
            <ellipse cx="40" cy="24" rx="9" ry="13" transform="rotate(-6 40 24)" fill={c} />
            <ellipse cx="60" cy="24" rx="9" ry="13" transform="rotate(6 60 24)" fill={c} />
            <ellipse cx="78" cy="44" rx="9" ry="12" transform="rotate(20 78 44)" fill={c} />
        </svg>
    );
}

/** The pairs used on coloured tiles, chosen to read like the hero. */
export const TILE_PAIRS: { bg: Ink; color: Ink; face: Ink; mood: Mood }[] = [
    { bg: "indigo", color: "marigold", face: "moss", mood: "open" },
    { bg: "peach", color: "indigo", face: "white", mood: "happy" },
    { bg: "marigold", color: "moss", face: "white", mood: "wink" },
    { bg: "lilac", color: "indigo", face: "marigold", mood: "open" },
    { bg: "moss", color: "white", face: "moss", mood: "sleepy" },
];

/** A coloured square with one small cat in the middle. */
export function CatTile({
    index = 0,
    className = "",
}: {
    index?: number;
    className?: string;
}) {
    const p = TILE_PAIRS[index % TILE_PAIRS.length];
    return (
        <div
            className={`rounded-[28px] flex items-center justify-center ${className}`}
            style={{ backgroundColor: INK[p.bg] }}
        >
            <CatHead
                color={p.color}
                face={p.face}
                mood={p.mood}
                blink
                className="cat-pop w-[42%] max-w-[96px] h-auto"
            />
        </div>
    );
}
