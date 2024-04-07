"use client";
import React from "react";
import AnimatedText from "./AnimatedText";
import SectionDetails from "./SectionDetails";

interface Props {
    heading: string[];
    number: number;
}

export default function Heading({ heading, number }: Props) {
    return (
        <div className=" px-[5%] lg:py-[15vh]  py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
            <AnimatedText content={heading} key={heading[0]} />
            <SectionDetails sectionNumber={number} key={number} />
        </div>
    );
}
