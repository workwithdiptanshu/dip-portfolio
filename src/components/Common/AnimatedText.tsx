import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface Props {
    content: string[];
}
gsap.registerPlugin(ScrollTrigger);
export default function AnimatedText({ content }: Props) {
    const aniText = useRef(null);

    useLayoutEffect(() => {
        const aniTextElement = aniText.current;
        if (!aniTextElement) return;

        const text = SplitType.create(aniTextElement, { types: "chars" });
        const charText = text.chars;

        gsap.from(charText, {
            scrollTrigger: {
                trigger: aniTextElement,
                start: "top bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
            stagger: 0.05,
            y: +120,
            duration: 1,
        });
        gsap.updateRoot(1000);
    }, [aniText]);

    // const aniText = useCallback((aniTextElement: HTMLDivElement) => {
    //     if (!aniTextElement) return;

    //     const text = SplitType.create(aniTextElement, { types: "chars" });
    //     const charText = text.chars;

    //     gsap.from(charText, {
    //         // Object shorthand for better readability
    //         scrollTrigger: {
    //             trigger: aniTextElement,
    //             start: "top bottom",
    //             end: "bottom+=300 bottom",
    //             scrub: true,
    //         },
    //         stagger: 0.05,
    //         y: +120,
    //         duration: 1,
    //     });
    // }, []);

    return (
        <div
            className="relative flex flex-col overflow-hidden"
            ref={aniText}
            key={content[0]}
        >
            {content.map((ele, idx) => {
                return (
                    <p
                        className="lg:text-7xl md:text-6xl text-4xl overflow-hidden  uppercase"
                        key={idx}
                    >
                        {ele}
                    </p>
                );
            })}
        </div>
    );
}
