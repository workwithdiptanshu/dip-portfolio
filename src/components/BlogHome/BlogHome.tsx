import React from "react";
import Heading from "../Common/Heading";
import Link from "next/link";
import Image from "next/image";

export default function BlogHome() {
    return (
        <div className="bg-white  overflow-hidden">
            <Heading
                heading={"And Btw Sometimes I Write too"}
                number={4}
                key="write"
            />
            <div className="bg-[#FFE486] px-[5%] pt-[2%] flex flex-col items-center justify-center relative">
                <Image
                    src="/Assets/back-dark-3.svg"
                    height={1900}
                    width={1900}
                    alt="background image"
                    className="absolute inset-0 invert opacity-30"
                />
                <div className="py-8 flex flex-col justify-center items-center gap-6 z-10">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="lg:text-4xl text-2xl font-medium">
                            Check out my blogs today! 🥺
                        </h2>
                        <span className="opacity-60 text-sm italic">
                            I sometimes write stuff, why? maybe for no reason!
                        </span>
                    </div>
                    <Link
                        href="/blogs"
                        className="bg-black text-white rounded-md px-4 py-1"
                    >
                        Go to Blogs
                    </Link>
                </div>
                <Image
                    src="/Assets/blogpage/blogs.svg"
                    height={900}
                    width={700}
                    alt="Blog image"
                    className="lg:w-[80%] w-[90%] h-auto z-10"
                />
            </div>
        </div>
    );
}
