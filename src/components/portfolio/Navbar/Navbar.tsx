import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book, ShoppingBagIcon } from "lucide-react";
export default function Navbar() {
    return (
        <div className="fixed  left-[5vw]  right-[5vw] top-2 z-20 ">
            <div className="relative  lg:py-2 py-1 flex  bg-[#28282a] border border-black text-white rounded-full justify-center items-center">
                {" "}
                <Link href="/" className="absolute lg:left-6 left-3">
                    <Image
                        src="/Assets/mini-logo.svg"
                        height={30}
                        width={30}
                        alt="dptsnhu logo  "
                        className="invert lg:h-[30px] h-[25px]"
                    />
                </Link>
                <Image
                    src="/Assets/logo-full.svg"
                    height={40}
                    width={200}
                    alt="dptsnhu logo full"
                    className="invert lg:h-[40px] h-[38px]"
                />
                <div className="flex gap-3 absolute lg:right-6 right-3 items-center ">
                    <Link
                        href="/shop"
                        className="opacity-60 hover:opacity-100 transition-opacity lg:flex hidden"
                    >
                        <ShoppingBagIcon />
                    </Link>
                    <Link
                        href="/blogs"
                        className="opacity-60 hover:opacity-100 transition-opacity lg:flex hidden"
                    >
                        <Book />
                    </Link>
                    <Link
                        href="/hire"
                        className="hover:bg-yellow-100 bg-yellow-500 transition-colors text-black px-2 lg:px-4 border border-black lg:py-1 py-[2px] rounded-full "
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
