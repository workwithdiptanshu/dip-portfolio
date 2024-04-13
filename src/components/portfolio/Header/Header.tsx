import React from "react";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const hf = Herr_Von_Muellerhoff({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <div className="lg:pt-[10vh] h-fit overflow-hidden  border-b border-black   flex    ">
            <div>
                <div className="px-[5%]  py-[5%] lg:pt-[8%] pt-[18%] flex flex-col">
                    <h2 className="lg:text-2xl text-xl">Hi there, I am</h2>
                    <h1 className="lg:text-8xl text-4xl lg:max-w-[40%] font-medium pb-4 border-b border-black border-dashed">
                        Diptanshu Mahish 👋
                    </h1>

                    <span className="text-sm opacity-80 lg:max-w-[40%] pt-2">
                        <b className="text-lg underline bg-yellow-300">
                            {" "}
                            I craft beautiful, lightning-fast apps and websites.
                        </b>{" "}
                        <br />
                        <b>Think minimalism meets magic</b>. Clean UIs, smooth
                        animations, and a sprinkle of creativity - that&apos;s
                        my recipe for bringing your digital dreams to life. 🪄
                        Flutter for apps, Next.js for websites, and Figma for
                        weaving the design magic. Let&apos;s build something
                        awesome together! P.S. Scroll down to see my work speak
                        for itself.
                    </span>
                    <Link
                        className="bg-black text-white px-4 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors hover:shadow-md gap-4 rounded-full mt-6"
                        href="/hire"
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
