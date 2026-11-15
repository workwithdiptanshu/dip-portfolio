import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Footer from "@/components/Common/Footer";
import { Paw } from "@/components/cats/Cats";
import { MarginNote } from "@/components/Common/Handwriting";
import { PostCard } from "@/components/blog/Blog";
import { posts, SITE } from "@/content/blog";

export const metadata: Metadata = {
    title: "Blog | Diptanshu Mahish",
    description:
        "Writing on AI slop and making things by hand, design for musicians (album covers, gig posters, visuals), and how I built my own projects.",
    alternates: {
        canonical: `${SITE}/blogs`,
        types: { "application/rss+xml": `${SITE}/blogs/rss.xml` },
    },
    openGraph: {
        title: "Blog | Diptanshu Mahish",
        description: "Notes from building things, written plainly.",
        url: `${SITE}/blogs`,
        type: "website",
    },
};

/** The three things I write about, each with its own shelf. */
const SHELVES = [
    { id: "ai-slop", title: "On AI slop", note: "and why it all looks the same", match: (tags: string[]) => tags.includes("AI slop") },
    { id: "music", title: "On music and design", note: "covers, posters, visuals", match: (tags: string[]) => tags.includes("Music") },
    { id: "building", title: "On building things", note: "how my projects work", match: () => true },
];

export default function BlogIndex() {
    const [latest, ...rest] = posts;
    const shelves = SHELVES.map((s) => ({ ...s, posts: [] as typeof posts }));
    for (const p of rest) shelves.find((s) => s.match(p.meta.tags))!.posts.push(p);

    return (
        <main className="relative overflow-x-clip">
            <Navbar />
            <section className="max-w-[1000px] mx-auto px-4 pt-14 sm:pt-20">
                <div className="flex flex-col items-center text-center pb-12">
                    <Paw color="moss" className="w-8 h-8 mb-5 -rotate-12" />
                    <div className="relative">
                        <h1 className="font-serif text-[44px] sm:text-[64px] leading-[1.02] tracking-[-0.02em]">
                            Things I&rsquo;ve written
                        </h1>
                        <MarginNote rotate={-7} className="hidden sm:inline-flex absolute -right-28 -top-4 whitespace-nowrap">
                            mostly at night
                        </MarginNote>
                    </div>
                    <p className="text-[15px] sm:text-base leading-relaxed max-w-[480px] pt-5">
                        On AI slop and making things by hand, on design for music, and on how
                        my own projects work. Written plainly, no fluff.
                    </p>
                    <nav aria-label="Topics" className="flex flex-wrap justify-center gap-2 pt-6">
                        {shelves.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="bg-card hover:bg-ink hover:text-white transition-colors rounded-full px-4 py-2 text-sm"
                            >
                                {s.title}
                            </a>
                        ))}
                    </nav>
                </div>

                <PostCard post={latest.meta} big />

                {shelves.map((s) => (
                    <section key={s.id} id={s.id} className="pt-20 scroll-mt-6">
                        <div className="flex items-baseline gap-4 pb-6">
                            <h2 className="font-serif text-[30px] sm:text-[38px] leading-tight tracking-[-0.02em]">{s.title}</h2>
                            <MarginNote rotate={-5} className="hidden sm:inline-flex whitespace-nowrap">
                                {s.note}
                            </MarginNote>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {s.posts.map((p) => (
                                <PostCard key={p.meta.slug} post={p.meta} />
                            ))}
                        </div>
                    </section>
                ))}

                <div className="flex justify-center pt-14">
                    <Link
                        href="/blogs/rss.xml"
                        className="flex items-center gap-2 bg-card hover:bg-ink hover:text-white transition-colors rounded-full px-5 py-2.5 text-sm"
                    >
                        <Rss size={14} /> Follow along with RSS
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
