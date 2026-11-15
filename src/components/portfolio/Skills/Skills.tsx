import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const fan = [
    "bitgrain/templates/open-call-zine.webp",
    "concepts/navneet-garden-m.webp",
    "concepts/the-le-bakery-m.webp",
    "concepts/louisiana-smokehouse-m.webp",
    "concepts/hotel-inder-prakash-m.webp",
    "concepts/puppy-love-grooming-m.webp",
    "bitgrain/templates/still-water-retreat.webp",
    "concepts/quantum-kota-m.webp",
    "concepts/aman-sidhu-photography-m.webp",
    "concepts/exotic-asia-travels-m.webp",
    "concepts/shiv-kripa-blue-pottery-m.webp",
];

const skills = [
    "Product engineering",
    "React & TypeScript",
    "Data visualisation",
    "Flutter apps",
    "Design systems",
    "Brand & visual design",
    "Canvas & Web Workers",
    "Rust",
    "0 to 1",
];

export default function Skills() {
    return (
        <section className="max-w-[856px] mx-auto px-4 pt-24 sm:pt-32">
            <SectionTitle
                title="I&rsquo;ve got your back with&hellip;"
                note="+ a lot of chai"
                sub="The whole thing: what to build, how it looks, how it works, and getting it out the door."
            />

            <div className="flex pt-12 pb-4 pl-2 overflow-hidden sm:overflow-visible">
                {fan.map((src, i) => (
                    <div
                        key={src}
                        className="relative shrink-0 -ml-12 first:ml-0 transition-transform duration-300 hover:-translate-y-4"
                        style={{ zIndex: i }}
                    >
                        <div
                            className="mat relative w-[96px] h-[124px] sm:w-[112px] sm:h-[140px]"
                            style={{ transform: `rotate(${-14 + i * 1.5}deg)` }}
                        >
                            <Image
                                src={`/Assets/work/${src}`}
                                alt=""
                                fill
                                sizes="120px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 pt-8">
                {skills.map((s) => (
                    <li key={s} className="dash-rule py-3 text-[15px]">
                        {s}
                    </li>
                ))}
            </ul>
        </section>
    );
}
