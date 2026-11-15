import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import { CatLoaf, CatSitting } from "@/components/cats/Cats";

/** Three tones per pin colour: the lit side, the colour itself, and the shaded rim. */
const PIN_TONES = {
    moss: ["#6FAE8C", "#2F6B4F", "#1B4231"],
    marigold: ["#FFD98A", "#F2B23A", "#A87612"],
    peach: ["#FFD1C2", "#F5A48C", "#B8634A"],
};

/**
 * A push pin, seen from slightly above: a glossy domed head with a light
 * catching it, a short steel needle going into the paper at an angle, and a
 * small soft shadow where it meets the photo.
 */
function Pin({ className, color = "moss", tilt = 0 }: { className: string; color?: keyof typeof PIN_TONES; tilt?: number }) {
    const [light, base, dark] = PIN_TONES[color];
    const id = `pin-${color}`;
    return (
        <svg
            aria-hidden
            viewBox="0 0 40 46"
            className={`absolute z-10 w-9 h-auto pointer-events-none ${className}`}
            style={{ transform: `translate(-50%, -50%) rotate(${tilt}deg)` }}
        >
            <defs>
                <radialGradient id={`${id}-head`} cx="35%" cy="30%" r="75%">
                    <stop offset="0" stopColor={light} />
                    <stop offset="0.55" stopColor={base} />
                    <stop offset="1" stopColor={dark} />
                </radialGradient>
                <linearGradient id={`${id}-body`} x1="0" x2="1">
                    <stop offset="0" stopColor={dark} />
                    <stop offset="0.35" stopColor={base} />
                    <stop offset="1" stopColor={dark} />
                </linearGradient>
                <linearGradient id={`${id}-steel`} x1="0" x2="1">
                    <stop offset="0" stopColor="#8E8B85" />
                    <stop offset="0.5" stopColor="#E9E6E0" />
                    <stop offset="1" stopColor="#77746E" />
                </linearGradient>
                <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.6" />
                </filter>
            </defs>
            {/* Shadow on the paper, falling down and to the right. */}
            <ellipse cx="25" cy="38" rx="8" ry="3.2" fill="#1C1A17" opacity="0.22" filter={`url(#${id}-soft)`} />
            <path d="M22 26 L27 38" stroke="#1C1A17" strokeOpacity="0.18" strokeWidth="1.6" strokeLinecap="round" filter={`url(#${id}-soft)`} />
            {/* The needle, going into the paper. */}
            <path d="M19.4 25 L21.4 36.5 L22.4 36.2 L20.8 25 Z" fill={`url(#${id}-steel)`} />
            {/* The collar and body of the pin. */}
            <ellipse cx="20" cy="24.5" rx="7.5" ry="3" fill={dark} />
            <path d="M14 15 L14 23.5 A6 2.6 0 0 0 26 23.5 L26 15 Z" fill={`url(#${id}-body)`} />
            {/* The domed head, lit from the top left. */}
            <ellipse cx="20" cy="14.5" rx="11.5" ry="6" fill={dark} />
            <ellipse cx="20" cy="13.2" rx="11.5" ry="6" fill={`url(#${id}-head)`} />
            <ellipse cx="15.6" cy="11.2" rx="3.8" ry="1.7" fill="#FFFFFF" opacity="0.55" transform="rotate(-12 15.6 11.2)" />
            <ellipse cx="13.8" cy="11.4" rx="1.1" ry="0.7" fill="#FFFFFF" opacity="0.9" />
        </svg>
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
                    <Pin className="left-[34%] top-5" color="moss" tilt={-8} />
                    <div
                        className="mat absolute right-[4%] top-16 w-[44%] aspect-square !bg-cat-lilac flex items-center justify-center"
                        style={{ transform: "rotate(8deg)" }}
                    >
                        <CatSitting color="indigo" face="marigold" mood="happy" blink className="w-[60%] h-auto" />
                    </div>
                    <Pin className="left-[74%] top-[68px]" color="marigold" tilt={10} />
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
