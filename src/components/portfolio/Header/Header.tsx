import React from "react";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const hf = Herr_Von_Muellerhoff({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <div
            id="header"
            className="lg:pt-[10vh] h-fit  border-b border-black   flex  pointer-events-none  "
        >
            <div>
                <div className="px-[5%] py-[5%] lg:pt-[8%] pt-[18%] flex flex-col">
                    <h2 className="lg:text-2xl text-xl">Hi there, I am</h2>
                    <h1 className="lg:text-8xl text-4xl lg:max-w-[40%] font-medium pb-4 border-b border-black border-dashed">
                        Diptanshu Mahish 👋
                    </h1>

                    <span className="text-sm opacity-80 lg:max-w-[40%] pt-2">
                        A <b>web and app developer</b>, (with a bit of more
                        <b>creativity and speed</b>). Well experienced in
                        minimalistic designs, clean UI and can make cool
                        animations too. Flutter is my go-to tool for apps and
                        for websites I use NextJS. This websites speaks for me,
                        about what I do✨, keep scrolling
                    </span>
                    <Link
                        className="bg-black text-white px-4 py-2 w-fit flex items-center gap-4 rounded-full mt-6"
                        href="/contact"
                    >
                        Get in Touch <ArrowUpRight />
                    </Link>
                </div>
                <Image
                    src="/Assets/Header/homeback.svg"
                    height={900}
                    width={190}
                    alt="Diptanshu Mahish"
                    className="w-full h-auto lg:flex hidden"
                />
                <Image
                    src="/Assets/Header/mobile.svg"
                    height={900}
                    width={190}
                    alt="Diptanshu Mahish"
                    className="w-full h-auto lg:hidden flex"
                />
            </div>
        </div>
    );
}
