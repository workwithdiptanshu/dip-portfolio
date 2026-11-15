import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import HireForm from "@/components/portfolio/Contact/HireForm";
import { KIND_IDS, Kind } from "@/components/portfolio/Contact/kinds";
import { CopyEmail, LocalTime } from "@/components/portfolio/Contact/ContactBits";
import { CatHead, CatLoaf } from "@/components/cats/Cats";
import { MarginNote } from "@/components/Common/Handwriting";

export const metadata: Metadata = {
    title: "Work with me | Diptanshu Mahish",
    description:
        "Hiring, a project, a website, or just saying hi. Tell me what you're after and it comes straight to my inbox.",
};

const EMAIL = "diptanshumahish2016@gmail.com";

const steps = [
    { title: "I read it myself", body: "No assistant, no auto-reply. It lands in my inbox." },
    { title: "I reply within a day", body: "Even if it's a no, you'll hear back." },
    { title: "We talk, if it fits", body: "A short call to see if we'd work well together." },
];

const elsewhere = [
    { label: "LinkedIn", href: "https://linkedin.com/in/diptanshumahish" },
    { label: "GitHub", href: "https://github.com/diptanshumahish" },
    { label: "X", href: "https://x.com/diptanshuSays" },
    { label: "Résumé", href: "/resume.pdf" },
];

export default function HirePage({ searchParams }: { searchParams: { for?: string } }) {
    const initialKind: Kind = KIND_IDS.includes(searchParams.for as Kind) ? (searchParams.for as Kind) : "project";
    return (
        <main className="relative overflow-x-clip">
            <Navbar />
            <CatHead
                color="peach"
                face="indigo"
                mood="happy"
                blink
                className="cat-sway pointer-events-none absolute -right-[22vw] sm:-right-[7vw] top-16 w-[46vw] sm:w-[24vw] max-w-[360px] h-auto"
                style={{ "--r": "14deg" } as React.CSSProperties}
            />

            <section className="relative max-w-[1000px] mx-auto px-4 pt-14 sm:pt-20">
                <div className="flex flex-col gap-4 max-w-[600px]">
                    <h1 className="font-serif text-[44px] sm:text-[64px] leading-[1.02] tracking-[-0.02em]">
                        Let&rsquo;s make something
                    </h1>
                    <p className="text-[15px] sm:text-base leading-relaxed max-w-[460px]">
                        Hiring, a project, a website for your business, or just a
                        hello. Tell me what you&apos;re after and it comes straight to
                        my inbox.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-10 pt-10 items-start">
                    <div className="rounded-[32px] bg-card p-5 sm:p-8">
                        <HireForm fallbackEmail={EMAIL} initialKind={initialKind} />
                    </div>

                    <aside className="flex flex-col gap-3 lg:sticky lg:top-8">
                        <div className="relative rounded-[28px] bg-card p-5 flex items-center gap-4">
                            <div className="mat relative w-[76px] aspect-[4/5] shrink-0 !border-4" style={{ transform: "rotate(-5deg)" }}>
                                <Image src="/Assets/Contact/me.webp" alt="Diptanshu Mahish" fill sizes="80px" className="object-cover" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[15px] font-medium leading-tight">Diptanshu Mahish</p>
                                <p className="text-xs text-muted leading-snug">Product engineer, Bengaluru</p>
                                <span className="text-xs pt-1">Usually replies within a day</span>
                            </div>
                            <MarginNote rotate={-8} className="absolute -top-5 right-4">
                                that&rsquo;s me!
                            </MarginNote>
                        </div>

                        <div className="rounded-[28px] bg-card p-5 flex flex-col gap-4">
                            <p className="font-serif text-lg">What happens next</p>
                            <ol className="flex flex-col gap-3.5">
                                {steps.map((s, i) => (
                                    <li key={s.title} className="flex gap-3">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-white text-xs flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <span className="flex flex-col gap-0.5">
                                            <span className="text-sm font-medium">{s.title}</span>
                                            <span className="text-xs text-muted leading-snug">{s.body}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="rounded-[28px] bg-card p-5 flex flex-col gap-3">
                            <LocalTime />
                            <p className="text-sm text-muted pt-1">Rather just email?</p>
                            <CopyEmail email={EMAIL} />
                            <div className="flex flex-wrap gap-2 pt-1">
                                {elsewhere.map((l) => (
                                    <Link
                                        key={l.label}
                                        href={l.href}
                                        target="_blank"
                                        className="flex items-center gap-1 rounded-full bg-white hover:bg-ink hover:text-white transition-colors px-3 py-1.5 text-xs"
                                    >
                                        {l.label} <ArrowUpRight size={12} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <CatLoaf color="indigo" face="marigold" mood="sleepy" className="hidden lg:block w-[60%] h-auto self-end -mt-1" />
                    </aside>
                </div>
            </section>

            <Footer cta={false} />
        </main>
    );
}
