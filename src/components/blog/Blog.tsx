import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MarginNote } from "@/components/Common/Handwriting";
import type { PostMeta } from "@/content/blog/types";
import { MiniCalendar } from "@/components/work/projects";
import { CatHead, INK, Ink, Mood } from "@/components/cats/Cats";

/**
 * The pieces a blog post is written with. A post is mostly plain prose;
 * these are for the bits that need more than a paragraph.
 */

export function formatDate(iso: string) {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}

/** Reading styles for everything inside a post. */
export const prose = [
    "text-[17px] sm:text-[18px] leading-[1.75] text-black/80",
    "[&>p]:mb-6 [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink",
    "[&>h2]:font-serif [&>h2]:text-ink [&>h2]:text-[28px] sm:[&>h2]:text-[32px] [&>h2]:leading-[1.15] [&>h2]:tracking-[-0.02em] [&>h2]:mt-14 [&>h2]:mb-5",
    "[&>h3]:font-serif [&>h3]:text-ink [&>h3]:text-[22px] [&>h3]:leading-snug [&>h3]:mt-10 [&>h3]:mb-3",
    "[&>ul]:mb-6 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:mb-2 [&>ul>li]:pl-1 marker:[&>ul>li]:text-cat-moss",
    "[&>ol]:mb-6 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol>li]:mb-2 [&>ol>li]:pl-1 marker:[&>ol>li]:text-cat-moss",
    "[&_a]:text-cat-moss [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-cat-moss/30 hover:[&_a]:decoration-cat-moss",
    "[&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.86em] [&_:not(pre)>code]:bg-card [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5",
].join(" ");

/** A code block. Plain, dark, scrolls sideways when it has to. */
export function Code({ children, label }: { children: string; label?: string }) {
    return (
        <figure className="my-8 -mx-1 sm:-mx-6">
            <pre className="bg-ink text-[#f4f0e8] rounded-[20px] p-5 sm:p-6 overflow-x-auto text-[13px] leading-relaxed font-mono">
                {children.trim()}
            </pre>
            {label && <figcaption className="text-sm text-muted pt-2 px-2">{label}</figcaption>}
        </figure>
    );
}

/** A picture, wider than the text column, on a white mat. */
export function Figure({
    src,
    alt,
    ratio,
    caption,
    rotate = 0,
}: {
    src: string;
    alt: string;
    ratio: string;
    caption?: React.ReactNode;
    rotate?: number;
}) {
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-3 sm:p-5">
                <div
                    className="mat relative !border-4 !rounded-[16px]"
                    style={{ aspectRatio: ratio, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
                >
                    <Image src={src} alt={alt} fill sizes="(min-width: 860px) 820px, 92vw" className="object-cover object-top" />
                </div>
            </div>
            {caption && <figcaption className="text-sm text-muted pt-3 px-2">{caption}</figcaption>}
        </figure>
    );
}

/** Three pictures side by side, for before and after. */
export function Row({ items, caption }: { items: { src: string; label: string; ratio?: string }[]; caption?: React.ReactNode }) {
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-4 sm:p-6 grid grid-cols-3 gap-3 sm:gap-5">
                {items.map((t, i) => (
                    <div key={t.src} className="flex flex-col gap-2">
                        <div
                            className="mat relative !border-4 !rounded-[12px]"
                            style={{ aspectRatio: t.ratio ?? "684 / 860", transform: `rotate(${[-1.5, 1, -1][i % 3]}deg)` }}
                        >
                            <Image src={t.src} alt={t.label} fill sizes="260px" className="object-cover" />
                        </div>
                        <span className="text-xs text-center text-muted">{t.label}</span>
                    </div>
                ))}
            </div>
            {caption && <figcaption className="text-sm text-muted pt-3 px-2">{caption}</figcaption>}
        </figure>
    );
}

/** A short aside in a coloured box. */
export function Aside({ children, note }: { children: React.ReactNode; note?: string }) {
    return (
        <aside className="relative my-8 rounded-[22px] bg-cat-lilac/35 px-5 sm:px-6 py-5 text-[16px] leading-relaxed text-ink">
            {note && (
                <MarginNote rotate={-5} color="indigo" className="absolute -top-5 left-4">
                    {note}
                </MarginNote>
            )}
            {children}
        </aside>
    );
}

/** The one line from a post worth pulling out. */
export function Pull({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-serif !text-ink text-[24px] sm:text-[28px] leading-snug tracking-[-0.01em] my-10 pl-5 border-l-[3px] border-cat-moss">
            {children}
        </p>
    );
}

/** The cover picture for a post, used on cards and at the top of the post. */
/** A drawn cover: one big cat, sketched, on the post's colour. */
function CatCover({ alt }: { alt: string }) {
    return (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center">
            <CatHead color="indigo" face="marigold" mood="open" blink className="w-[44%] max-h-[78%] h-auto" />
        </div>
    );
}

export function Cover({
    post,
    sizes,
    priority = false,
    fit = "width",
}: {
    post: PostMeta;
    sizes: string;
    priority?: boolean;
    /** Cards size the picture by width; the wide banner on a post sizes it by height. */
    fit?: "width" | "height";
}) {
    return (
        <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: post.cover.bg }}>
            {post.cover.art === "cat" ? (
                <CatCover alt={post.cover.alt} />
            ) : (
                <div
                    className={`mat absolute left-1/2 top-1/2 !border-[5px] !rounded-[14px] ${
                        fit === "width" ? "w-[78%]" : "h-[80%] max-w-[86%]"
                    }`}
                    style={{
                        aspectRatio: post.cover.ratio,
                        transform: `translate(-50%, -50%) rotate(${post.cover.rotate ?? -3}deg)`,
                    }}
                >
                    {post.cover.src ? (
                        <Image
                            src={post.cover.src}
                            alt={post.cover.alt}
                            fill
                            sizes={sizes}
                            priority={priority}
                            className="object-cover object-top"
                        />
                    ) : (
                        <div role="img" aria-label={post.cover.alt} className="absolute inset-0 bg-white p-[8%] flex flex-col">
                            <MiniCalendar highlight={19} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

/** A post on a card: the cover on its colour, then the words. */
export function PostCard({ post, big = false }: { post: PostMeta; big?: boolean }) {
    return (
        <Link
            href={`/blogs/${post.slug}`}
            className={`group rounded-[32px] bg-card hover:bg-[#DCD3C2] transition-colors overflow-hidden flex ${
                big ? "flex-col sm:flex-row" : "flex-col"
            }`}
        >
            <div
                className={`relative m-3 rounded-[24px] overflow-hidden ${big ? "sm:w-[52%] aspect-[4/3] sm:aspect-auto sm:min-h-[340px]" : "aspect-[4/3]"}`}
            >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                    <Cover post={post} sizes={big ? "560px" : "420px"} />
                </div>
            </div>
            <div className={`flex flex-col gap-3 px-6 pb-6 ${big ? "sm:flex-1 sm:justify-center sm:py-8 sm:pr-10 sm:pl-4" : "pt-2"}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span className="bg-paper rounded-full px-2.5 py-1 text-ink">{post.tags[0]}</span>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.minutes} min read</span>
                </div>
                <h2 className={`font-serif leading-[1.15] tracking-[-0.01em] ${big ? "text-[28px] sm:text-[36px]" : "text-[22px]"}`}>
                    {post.title}
                </h2>
                <p className="text-sm text-black/65 leading-relaxed">{post.description}</p>
                <span className="flex items-center gap-1 text-sm font-medium pt-1">
                    Read it{" "}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </Link>
    );
}

type MemePanel = {
    /** The cat's colours and face. */
    cat: Ink;
    face: Ink;
    mood: Mood;
    /** Panel colour. */
    bg: Ink;
    top?: string;
    bottom?: string;
    /** For the "choice" layout: what this row is about. */
    text?: string;
};

const memeText =
    "font-sans font-black uppercase text-white text-center leading-[1.05] tracking-tight [-webkit-text-stroke:1.5px_#1C1A17] [paint-order:stroke_fill] text-[18px] sm:text-[24px] px-3";

/**
 * Meme formats, drawn with our own cats instead of borrowed photos.
 * "caption" is the classic top-and-bottom text; "choice" is the
 * two-row this-not-that format.
 */
export function Meme({
    panels,
    variant = "caption",
    caption,
}: {
    panels: MemePanel[];
    variant?: "caption" | "choice";
    caption?: React.ReactNode;
}) {
    return (
        <figure className="my-10">
            <div className="rounded-[28px] bg-card p-3 sm:p-4">
                {variant === "choice" ? (
                    <div className="grid grid-rows-[auto_auto] gap-2 rounded-[18px] overflow-hidden">
                        {panels.map((p, i) => (
                            <div key={i} className="grid grid-cols-[42%_1fr] gap-2">
                                <div
                                    className="aspect-square flex items-center justify-center rounded-[14px]"
                                    style={{ backgroundColor: INK[p.bg] }}
                                >
                                    <CatHead color={p.cat} face={p.face} mood={p.mood} className="w-[62%] h-auto" />
                                </div>
                                <div className="bg-white rounded-[14px] flex items-center p-4 sm:p-6">
                                    <p className="font-serif text-[18px] sm:text-[24px] leading-snug text-ink">{p.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`grid gap-2 ${panels.length > 1 ? "grid-cols-2" : ""}`}>
                        {panels.map((p, i) => (
                            <div
                                key={i}
                                className="relative aspect-square rounded-[16px] overflow-hidden flex flex-col items-center justify-between py-4"
                                style={{ backgroundColor: INK[p.bg] }}
                            >
                                <p className={memeText}>{p.top}</p>
                                <CatHead color={p.cat} face={p.face} mood={p.mood} className="w-[52%] h-auto" />
                                <p className={memeText}>{p.bottom}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {caption && <figcaption className="text-sm text-muted pt-3 px-2">{caption}</figcaption>}
        </figure>
    );
}

/** A public-domain artwork, with full credit. */
export function Artwork({
    src,
    ratio,
    artist,
    title,
    year,
    note,
}: {
    src: string;
    ratio: string;
    artist: string;
    title: string;
    year: string;
    note?: React.ReactNode;
}) {
    return (
        <figure className="my-10 sm:-mx-16">
            <div className="rounded-[28px] bg-card p-4 sm:p-8 flex justify-center">
                <div
                    className="relative w-full max-w-[640px] bg-white p-3 sm:p-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)]"
                    style={{ aspectRatio: ratio }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={`${title} by ${artist}`}
                            fill
                            sizes="(min-width: 860px) 640px, 90vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <figcaption className="text-sm text-muted pt-3 px-2 leading-relaxed">
                <b className="font-medium text-ink">{artist}</b>, <i>{title}</i>, {year}. Public domain, via Wikimedia Commons.
                {note && <> {note}</>}
            </figcaption>
        </figure>
    );
}

/** Someone else's words, credited properly. */
export function Quote({ children, who, where, href }: { children: React.ReactNode; who: string; where?: string; href?: string }) {
    return (
        <figure className="my-10 rounded-[24px] bg-white px-6 sm:px-8 py-7 relative">
            <span aria-hidden className="absolute -top-4 left-6 font-serif text-[64px] leading-none text-cat-moss">
                &ldquo;
            </span>
            <blockquote className="font-serif text-[21px] sm:text-[24px] leading-snug text-ink">{children}</blockquote>
            <figcaption className="text-sm text-muted pt-4">
                <span className="text-ink font-medium">{who}</span>
                {where && (
                    <>
                        {", "}
                        {href ? (
                            <a href={href} target="_blank" rel="noopener">
                                {where}
                            </a>
                        ) : (
                            where
                        )}
                    </>
                )}
            </figcaption>
        </figure>
    );
}
