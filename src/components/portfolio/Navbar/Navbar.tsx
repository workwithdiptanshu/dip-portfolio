import React from "react";
import Link from "next/link";
import { CatHead } from "@/components/cats/Cats";

const link =
    "text-[13px] text-cat-moss hover:text-ink transition-colors px-2 py-1";

export default function Navbar() {
    return (
        <nav className="relative z-20 flex items-center justify-center gap-6 sm:gap-10 pt-6 pb-2">
            <Link href="/work" className={link}>
                works
            </Link>
            <Link
                href="/"
                aria-label="Diptanshu Mahish, home"
                className="group flex items-center gap-2 text-cat-moss"
            >
                <CatHead
                    color="moss"
                    face="white"
                    mood="happy"
                    className="cat-pop w-7 h-auto"
                />
                <span className="font-hand text-[15px] leading-none pt-1">
                    diptanshu
                </span>
            </Link>
            <Link href="/blogs" className={link}>
                blogs
            </Link>
        </nav>
    );
}
