import React from "react";
import Heading from "../Common/Heading";
import Link from "next/link";
import Image from "next/image";

export default function OnboardHome() {
    return (
        <div>
            <Heading
                heading={["Interested in", "Working with", "me?"]}
                number={3}
                key="work"
            />
            <div className="bg-[#FF7EC4] px-[5%] pt-[2%] flex flex-col items-center justify-center relative">
                <Image
                    src="/Assets/back-dark.svg"
                    height={1900}
                    width={1900}
                    alt="background image"
                    className="absolute inset-0 invert opacity-30"
                />
                <div className="py-8 flex flex-col justify-center items-center gap-6 z-10">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="lg:text-4xl text-2xl font-medium">
                            Let us work together on something amazing!
                        </h2>
                        <span className="opacity-60 text-sm italic">
                            Don&apos;t think twice you are at the correct place!
                        </span>
                    </div>
                    <Link
                        href="/onboard"
                        className="bg-black text-white rounded-md px-4 py-1"
                    >
                        Let&apos;s Go!
                    </Link>
                </div>
                <Image
                    src="/Assets/Contact/workdone.svg"
                    height={900}
                    width={700}
                    alt="Blog image"
                    className="lg:w-[80%] w-[90%] h-auto z-10"
                />
            </div>
        </div>
    );
}
