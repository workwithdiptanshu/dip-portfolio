import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import { CatLoaf, CatSitting } from "@/components/cats/Cats";

/** A red pin, the kind that holds a photo to a corkboard. */
function Pin({ className }: { className: string }) {
    return (
        <span
            aria-hidden
            className={`absolute z-10 w-3 h-3 rounded-full bg-cat-moss shadow-[0_2px_3px_rgba(0,0,0,0.3)] ${className}`}
        />
    );
}

export default function About() {
    return (
        <section className="max-w-[856px] mx-auto px-4 pt-24 sm:pt-32">
            <SectionTitle
                title="Behind the code"
                note="hi, it&rsquo;s me"
                sub="Finally, the person behind all of this, and a quick look at how I work."
            />

            <div className="grid sm:grid-cols-2 gap-12 sm:gap-16 items-center pt-14">
                <div className="relative h-[300px] max-w-[380px] w-full mx-auto">
                    <div
                        className="mat absolute left-[8%] top-4 w-[52%] aspect-[4/5]"
                        style={{ transform: "rotate(-7deg)" }}
                    >
                        <Image
                            src="/Assets/Contact/me.webp"
                            alt="Diptanshu Mahish"
                            fill
                            sizes="220px"
                            className="object-cover"
                        />
                    </div>
                    <Pin className="left-[32%] top-2" />
                    <div
                        className="mat absolute right-[4%] top-16 w-[44%] aspect-square !bg-cat-lilac flex items-center justify-center"
                        style={{ transform: "rotate(8deg)" }}
                    >
                        <CatSitting color="indigo" face="marigold" mood="happy" blink className="w-[60%] h-auto" />
                    </div>
                    <Pin className="right-[22%] top-14" />
                    <CatLoaf color="marigold" face="moss" className="absolute left-0 bottom-0 w-[38%] h-auto" />
                </div>

                <div className="flex flex-col gap-4 text-[15px] leading-relaxed">
                    <p>
                        I&apos;m a product engineer in Bengaluru. I&apos;m a founding
                        engineer at <b className="font-medium">Supaboard</b>, an AI
                        analytics platform I helped take from an early idea to paying
                        customers. Before that I built a streaming platform that
                        reached <b className="font-medium">1,000+ users in its first month</b>.
                    </p>
                    <p>
                        In my own time I make <b className="font-medium">Bitgrain</b>, a
                        design studio that runs in your browser and came #5 on Product
                        Hunt, and <b className="font-medium">Rustybase</b>, a small
                        database written in Rust.
                    </p>
                    <p>
                        What I like is owning the whole thing. I&apos;ve kept doing
                        design alongside engineering on purpose: it&apos;s why the
                        things I build look like someone meant them.
                    </p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-12 sm:gap-16 items-center pt-20">
                <div className="flex flex-col gap-4 text-[15px] leading-relaxed sm:order-1 order-2">
                    <p>
                        And sometimes I write. Notes on building products, on design,
                        and on whatever I&apos;ve been stuck on lately.
                    </p>
                    <Link
                        href="/blogs"
                        className="w-fit bg-ink text-white rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 hover:bg-cat-moss transition-colors"
                    >
                        Read the blog <ArrowUpRight size={15} />
                    </Link>
                </div>
                <Link
                    href="/blogs"
                    aria-label="Read the blog"
                    className="group relative h-[220px] max-w-[380px] w-full mx-auto sm:order-2 order-1"
                >
                    {[
                        { bg: "bg-cat-peach", r: -9, pos: "left-[4%] top-6", t: "Notes" },
                        { bg: "bg-cat-marigold", r: 3, pos: "left-[34%] top-0", t: "Essays" },
                        { bg: "bg-white", r: 10, pos: "right-[4%] top-8", t: "How-tos" },
                    ].map((c) => (
                        <span
                            key={c.t}
                            className={`absolute w-[34%] aspect-[3/4] ${c.pos} transition-transform duration-300 group-hover:-translate-y-2`}
                        >
                            <span
                                className={`mat absolute inset-0 ${c.bg} flex items-end p-3 font-serif text-lg`}
                                style={{ transform: `rotate(${c.r}deg)` }}
                            >
                                {c.t}
                            </span>
                        </span>
                    ))}
                </Link>
            </div>
        </section>
    );
}
