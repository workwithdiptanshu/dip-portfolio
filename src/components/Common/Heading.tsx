"use client";
import React from "react";

interface Props {
    heading: string;
    number: number;
}

export default function Heading({ heading, number }: Props) {
    return (
        <div className=" px-[5%] lg:py-[15vh]  py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
            <h2 className="lg:text-7xl md:text-6xl text-4xl overflow-hidden  uppercase">{heading}</h2>
            <div
                className="w-[40%] flex flex-col lg:items-end items-start overflow-hidden"

                key={number}
            >
                <span className="overflow-hidden">SECTION</span>
                <span className="w-full h-1 bg-black"></span>
                <span className="text-4xl overflow-hidden">{`0${number.toString()}`}</span>
            </div>
        </div>
    );
}
