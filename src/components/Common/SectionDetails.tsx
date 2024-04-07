"use client";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    sectionNumber: number;
}
gsap.registerPlugin(ScrollTrigger);
export default function SectionDetails({ sectionNumber }: Props) {
    // const secText = useRef(null);
    // useLayoutEffect(() => {
    //     const text = SplitType.create(secText.current!, { types: "chars" });
    //     const charText = text.chars;
    //     gsap.from(charText, {
    //         scrollTrigger: {
    //             trigger: secText.current,
    //             start: "0px bottom",
    //             end: "bottom+=200px bottom",
    //         },

    //         stagger: 0.05,
    //         y: +30,
    //         duration: 1,
    //     });
    // }, []);

    const secText = useCallback((aniTextElement: HTMLDivElement) => {
        if (!aniTextElement) return;

        const text = SplitType.create(aniTextElement, { types: "chars" });
        const charText = text.chars;

        gsap.from(charText, {
            // Object shorthand for better readability
            scrollTrigger: {
                trigger: aniTextElement,
                start: "top bottom",
                end: "bottom+=450px bottom",
                scrub: true,
            },
            stagger: 0.05,
            y: +120,
            duration: 1,
        });
    }, []);
    return (
        <div
            className="w-[40%] flex flex-col lg:items-end items-start overflow-hidden"
            ref={secText}
            key={sectionNumber}
        >
            <span className="overflow-hidden">SECTION</span>
            <span className="w-full h-1 bg-black"></span>
            <span className="text-4xl overflow-hidden">{`0${sectionNumber.toString()}`}</span>
        </div>
    );
}
