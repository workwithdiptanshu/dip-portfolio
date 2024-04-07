import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book, ShoppingBagIcon } from "lucide-react";
export default function Navbar() {
    return (
        <div className="fixed left-[5vw] right-[5vw] top-2 z-20 ">
            <div className="relative backdrop-blur-md lg:py-2 py-1 flex border bg-bg-back bg-opacity-20 border-black rounded-full justify-center items-center">
                {" "}
                <Link href="/" className="absolute left-6">
                    <Image
                        src="/Assets/mini-logo.svg"
                        height={30}
                        width={30}
                        alt="dptsnhu logo "
                    />
                </Link>
                <Image
                    src="/Assets/logo-full.svg"
                    height={40}
                    width={200}
                    alt="dptsnhu logo full"
                />
                <div className="flex gap-3 absolute right-6 items-center ">
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
                        className="hover:bg-yellow-100 bg-yellow-500 transition-colors text-black px-2 border border-black py-1 rounded-full "
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
