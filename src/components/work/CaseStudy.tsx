import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Footer from "@/components/Common/Footer";
import { CatHead, CatTile, Ink, Paw } from "@/components/cats/Cats";
import { Project, nextProject } from "./projects";

/**
 * The parts every case study is made of. A page is a hero, a coloured
 * stage, then chapters: a narrow column of reading, broken up by wide grey
 * cards that hold the pictures.
 */

export function CaseShell({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative overflow-x-clip">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export function CaseHero({
    name,
    kind,
    line,
    meta,
    links,
    cat = { color: "moss", face: "white" },
}: {
    name: string;
    kind: string;
    line: React.ReactNode;
    meta: { label: string; value: string }[];
    links: { label: string; href: string }[];
    cat?: { color: Ink; face: Ink };
}) {
    return (
        <header className="relative max-w-[1080px] mx-auto px-4 pt-10 sm:pt-14">
            <Link
                href="/work"
                className="inline-flex items-center gap-1.5 bg-card hover:bg-ink hover:text-white transition-colors rounded-full pl-3 pr-4 py-1.5 text-[13px]"
            >
                <ArrowLeft size={14} /> All work
            </Link>

            <div className="flex flex-col items-center text-center pt-10 sm:pt-12">
                <CatHead
                    color={cat.color}
                    face={cat.face}
                    mood="open"
                    blink
                    className="cat-pop w-12 h-auto mb-6"
                />
                <p className="text-sm text-muted pb-3">{kind}</p>
                <h1 className="font-serif text-[52px] sm:text-[88px] leading-[0.95] tracking-[-0.03em]">
                    {name}
                </h1>
                <p className="font-serif text-xl sm:text-[26px] leading-snug max-w-[640px] pt-6">
                    {line}
                </p>
                {links.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 pt-8">
                        {links.map((l, i) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                target={l.href.startsWith("http") ? "_blank" : undefined}
                                className={`rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                                    i === 0
                                        ? "bg-ink text-white hover:bg-cat-moss"
                                        : "bg-card hover:bg-ink hover:text-white"
                                }`}
                            >
                                {l.label} <ArrowUpRight size={15} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-12">
                {meta.map((m) => (
                    <div key={m.label} className="bg-card rounded-[24px] px-5 py-4">
                        <dt className="text-xs text-muted">{m.label}</dt>
                        <dd className="text-sm pt-1 leading-snug">{m.value}</dd>
                    </div>
                ))}
            </dl>
        </header>
    );
}

/** The big coloured panel under the hero, where the work sits on show. */
export function Stage({
    bg,
    children,
    className = "",
}: {
    bg: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="max-w-[1080px] mx-auto px-4 pt-3">
            <div
                className={`relative rounded-[36px] overflow-hidden ${className}`}
                style={{ backgroundColor: bg }}
            >
                {children}
            </div>
        </div>
    );
}

/** The numbers, in grey cards. */
export function Glance({ items }: { items: { value: string; label: string }[] }) {
    return (
        <div className="max-w-[1080px] mx-auto px-4 pt-3">
            <dl
                className={`grid grid-cols-2 gap-3 ${
                    items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
                }`}
            >
                {items.map((s) => (
                    <div key={s.label} className="bg-card rounded-[24px] p-5">
                        <dt className="sr-only">{s.label}</dt>
                        <dd className="text-3xl sm:text-4xl font-medium tracking-tight leading-none">
                            {s.value}
                        </dd>
                        <dd className="text-xs text-muted pt-2 leading-tight">{s.label}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

const prose =
    "flex flex-col gap-5 text-[16px] sm:text-[17px] leading-[1.7] text-black/80 [&_b]:font-semibold [&_b]:text-ink [&_code]:font-mono [&_code]:text-[0.88em] [&_code]:bg-card [&_code]:rounded-md [&_code]:px-1.5 [&_code]:py-0.5 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-black/30 hover:[&_a]:decoration-black";

/** A chapter: the title on the left, the reading on the right. */
export function Chapter({
    title,
    eyebrow,
    children,
}: {
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="max-w-[1080px] mx-auto px-4 pt-20 sm:pt-28">
            <div className="grid sm:grid-cols-[300px_1fr] gap-6 sm:gap-12">
                <div className="sm:sticky sm:top-8 self-start flex flex-col gap-3">
                    <Paw color="moss" className="w-6 h-6 -rotate-12" />
                    {eyebrow && <p className="text-sm text-muted">{eyebrow}</p>}
                    <h2 className="font-serif text-[30px] sm:text-[36px] leading-[1.1] tracking-[-0.02em]">
                        {title}
                    </h2>
                </div>
                <div className={`${prose} max-w-[620px]`}>{children}</div>
            </div>
        </section>
    );
}

/** A full width grey card for pictures and diagrams, with an optional caption. */
export function Wide({
    children,
    caption,
    className = "",
    tone = "card",
}: {
    children: React.ReactNode;
    caption?: React.ReactNode;
    className?: string;
    tone?: "card" | "white" | "dark";
}) {
    const bg =
        tone === "white" ? "bg-white" : tone === "dark" ? "bg-ink text-white" : "bg-card";
    return (
        <figure className="max-w-[1080px] mx-auto px-4 pt-10">
            <div className={`rounded-[32px] p-5 sm:p-10 ${bg} ${className}`}>{children}</div>
            {caption && (
                <figcaption className="text-sm text-muted pt-3 px-2 max-w-[640px]">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

/** A picture on a white mat, sitting in the flow. */
export function Shot({
    src,
    alt,
    ratio,
    rotate = 0,
    className = "",
    sizes = "(min-width: 1080px) 1000px, 92vw",
    priority = false,
}: {
    src: string;
    alt: string;
    ratio: string;
    rotate?: number;
    className?: string;
    sizes?: string;
    priority?: boolean;
}) {
    return (
        <div
            className={`mat relative ${className}`}
            style={{ aspectRatio: ratio, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
        >
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        </div>
    );
}

/** Dark code block. */
export function Code({ children }: { children: string }) {
    return (
        <pre className="bg-ink text-[#f4f2ee] rounded-[20px] p-5 sm:p-6 overflow-x-auto text-[12px] sm:text-[13px] leading-relaxed font-mono">
            {children}
        </pre>
    );
}

/** Lessons, as cards. */
export function Takeaways({
    title = "What I took from it",
    items,
}: {
    title?: string;
    items: { title: string; body: string }[];
}) {
    return (
        <section className="max-w-[1080px] mx-auto px-4 pt-20 sm:pt-28">
            <h2 className="font-serif text-[30px] sm:text-[36px] leading-[1.1] tracking-[-0.02em] text-center pb-8">
                {title}
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
                {items.map((t, i) => (
                    <div key={t.title} className="bg-card rounded-[28px] p-6 flex flex-col gap-3">
                        <CatTile index={i} className="w-12 h-12 !rounded-[14px]" />
                        <h3 className="font-serif text-xl leading-snug pt-2">{t.title}</h3>
                        <p className="text-sm text-black/70 leading-relaxed">{t.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/** A project as a bento card: the work on grey, plus a cat tile and a name tile. */
export function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const flip = index % 2 === 1;
    const external = project.href.startsWith("http");
    return (
        <div className={`flex flex-col gap-4 ${flip ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
            <Link
                href={project.href}
                target={external ? "_blank" : undefined}
                className="group flex-1 min-w-0 rounded-[32px] bg-card hover:bg-[#DCD3C2] transition-colors overflow-hidden flex flex-col"
            >
                <div className="relative h-[240px] sm:h-[300px] mx-6 mt-6 sm:mx-8 sm:mt-8 transition-transform duration-500 group-hover:-translate-y-1.5">
                    {project.cover}
                </div>
                <div className="flex items-end justify-between gap-4 px-6 sm:px-8 pt-6 pb-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-[15px]">
                            {project.name} <span className="text-muted">{project.kind}</span>
                        </p>
                        <p className="text-sm text-black/60 leading-snug max-w-[420px]">
                            {project.line}
                        </p>
                    </div>
                    <span className="shrink-0 w-10 h-10 rounded-full bg-paper flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-white">
                        <ArrowUpRight size={17} />
                    </span>
                </div>
            </Link>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:w-[192px] shrink-0">
                <CatTile index={index} className="aspect-square" />
                <div className="aspect-square rounded-[28px] bg-card flex items-center justify-center p-6 text-center">
                    {project.mark}
                </div>
            </div>
        </div>
    );
}

export function NextProject({ slug }: { slug: string }) {
    const next = nextProject(slug);
    return (
        <section className="max-w-[856px] mx-auto px-4 pt-24 sm:pt-32">
            <p className="text-center text-sm text-muted pb-2">Up next</p>
            <h2 className="font-serif text-[30px] sm:text-[36px] text-center pb-8 tracking-[-0.02em]">
                {next.name}
            </h2>
            <ProjectCard project={next} index={0} />
        </section>
    );
}
