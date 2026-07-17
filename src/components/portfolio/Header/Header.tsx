import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
                            I&apos;m a product engineer in Bengaluru who builds
                            things people actually use.
                        </b>{" "}
                        <br />
                        I&apos;m a founding engineer at <b>Supaboard</b>, an AI
                        analytics platform I helped take from an early idea to
                        paying customers. Before that I built a streaming
                        platform that reached{" "}
                        <b>1,000+ users in its first month</b>. In my own time I
                        make <b>Bitgrain</b>, a design studio that runs in your
                        browser and came #5 on Product Hunt, and{" "}
                        <b>Rustybase</b>, a small database written in Rust.
                        <br />
                        <br />
                        What I like is owning the whole thing: what to build,
                        how it looks, how it works, and getting it out the door.
                        Scroll down and it should speak for itself.
                    </span>
                    <div className="flex flex-wrap items-center gap-3 mt-6">
                        <Link
                            className="bg-black text-white px-4 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors hover:shadow-md gap-4 rounded-full"
                            href="/hire"
                        >
                            Get in Touch <ArrowUpRight />
                        </Link>
                        <Link
                            className="bg-white text-black px-4 py-2 w-fit flex items-center hover:bg-black hover:text-white border border-black transition-colors hover:shadow-md gap-4 rounded-full"
                            href="/resume.pdf"
                            target="_blank"
                        >
                            Résumé <ArrowUpRight />
                        </Link>
                    </div>
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
