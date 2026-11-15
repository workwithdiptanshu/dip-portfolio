import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Footer from "@/components/Common/Footer";
import { Cover, PostCard, formatDate, prose } from "@/components/blog/Blog";
import { MarginNote } from "@/components/Common/Handwriting";
import { getPost, posts, relatedPosts, SITE } from "@/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.meta.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = getPost(params.slug);
    if (!post) return {};
    const { meta } = post;
    const url = `${SITE}/blogs/${meta.slug}`;
    const image = meta.cover.src ? `${SITE}${meta.cover.src}` : `${SITE}/og.png`;
    return {
        title: `${meta.title} | Diptanshu Mahish`,
        description: meta.description,
        keywords: [...meta.tags, ...meta.keywords],
        authors: [{ name: "Diptanshu Mahish", url: SITE }],
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            title: meta.title,
            description: meta.description,
            publishedTime: meta.date,
            modifiedTime: meta.updated ?? meta.date,
            authors: ["Diptanshu Mahish"],
            tags: meta.tags,
            images: [{ url: image, alt: meta.cover.alt }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            creator: "@diptanshuSays",
            images: [image],
        },
    };
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug);
    if (!post) notFound();
    const { meta, Body } = post;
    const url = `${SITE}/blogs/${meta.slug}`;

    // Structured data, so search engines know this is an article and who wrote it.
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: meta.title,
                description: meta.description,
                datePublished: meta.date,
                dateModified: meta.updated ?? meta.date,
                url,
                mainEntityOfPage: url,
                image: meta.cover.src ? `${SITE}${meta.cover.src}` : `${SITE}/og.png`,
                keywords: [...meta.tags, ...meta.keywords].join(", "),
                author: { "@type": "Person", name: "Diptanshu Mahish", url: SITE },
                publisher: { "@type": "Person", name: "Diptanshu Mahish", url: SITE },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blogs` },
                    { "@type": "ListItem", position: 3, name: meta.title, item: url },
                ],
            },
        ],
    };

    return (
        <main className="relative overflow-x-clip">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <article>
                <header className="max-w-[860px] mx-auto px-4 pt-10 sm:pt-14">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-1.5 bg-card hover:bg-ink hover:text-white transition-colors rounded-full pl-3 pr-4 py-1.5 text-[13px]"
                    >
                        <ArrowLeft size={14} /> All posts
                    </Link>
                    <div className="flex flex-col items-center text-center pt-10">
                        <div className="flex flex-wrap justify-center gap-2 pb-5">
                            {meta.tags.map((t) => (
                                <span key={t} className="bg-card rounded-full px-3 py-1 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h1 className="font-serif text-[36px] sm:text-[56px] leading-[1.06] tracking-[-0.02em] max-w-[780px]">
                            {meta.title}
                        </h1>
                        <p className="text-[16px] sm:text-[18px] leading-relaxed text-black/70 max-w-[620px] pt-5">
                            {meta.description}
                        </p>
                        <div className="flex items-center gap-3 pt-7 text-sm">
                            <span className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white">
                                <Image src="/Assets/Contact/me.webp" alt="" fill sizes="36px" className="object-cover" />
                            </span>
                            <span className="flex flex-col items-start leading-tight">
                                <span className="font-medium">Diptanshu Mahish</span>
                                <span className="text-muted text-xs">
                                    <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.minutes} min read
                                </span>
                            </span>
                        </div>
                    </div>
                </header>

                <div className="max-w-[1000px] mx-auto px-4 pt-10">
                    <div className="relative rounded-[36px] overflow-hidden h-[260px] sm:h-[460px]">
                        <Cover post={meta} sizes="(min-width: 1000px) 780px, 90vw" priority fit="height" />
                    </div>
                </div>

                <div className={`max-w-[680px] mx-auto px-4 pt-14 ${prose}`}>
                    <Body />
                </div>
            </article>

            <section className="max-w-[680px] mx-auto px-4 pt-10">
                <div className="relative rounded-[28px] bg-card p-6 flex flex-col sm:flex-row sm:items-center gap-5">
                    <MarginNote rotate={-6} className="absolute -top-5 left-6">
                        thanks for reading!
                    </MarginNote>
                    <div className="mat relative w-[72px] aspect-[4/5] shrink-0 !border-4" style={{ transform: "rotate(-5deg)" }}>
                        <Image src="/Assets/Contact/me.webp" alt="Diptanshu Mahish" fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <p className="text-[15px] leading-relaxed">
                            I&apos;m Diptanshu, a product engineer in Bengaluru. I build things like{" "}
                            <Link href="/work/bitgrain" className="underline underline-offset-4 decoration-black/30 hover:decoration-black">Bitgrain</Link>{" "}
                            and write about how they work.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            <Link href="/hire" className="bg-ink text-white rounded-full px-4 py-2 text-xs font-medium flex items-center gap-1 hover:bg-cat-moss transition-colors">
                                Work with me <ArrowUpRight size={13} />
                            </Link>
                            <Link href="/work" className="bg-white rounded-full px-4 py-2 text-xs flex items-center gap-1 hover:bg-ink hover:text-white transition-colors">
                                See my work <ArrowUpRight size={13} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1000px] mx-auto px-4 pt-20">
                <h2 className="font-serif text-[30px] sm:text-[36px] text-center pb-8 tracking-[-0.02em]">Read next</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {relatedPosts(meta.slug).map((p) => (
                        <PostCard key={p.meta.slug} post={p.meta} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
