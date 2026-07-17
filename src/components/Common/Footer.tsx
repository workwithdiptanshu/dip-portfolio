import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-8 flex items-center justify-center border-t border-black">
            <div>
                <Image
                    src="/Assets/logo-full.svg"
                    height={40}
                    width={200}
                    alt="dptsnhu logo full"
                />
                <span> &copy; Diptanshu Mahish {new Date().getFullYear()}</span>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <Link href="/" className="underline">
                        Portfolio
                    </Link>
                    <Link href="/blogs" className="underline">
                        Blogs
                    </Link>
                    <Link href="/resume.pdf" target="_blank" className="underline">
                        Résumé
                    </Link>
                    <Link
                        href="https://github.com/diptanshumahish"
                        target="_blank"
                        className="underline"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://linkedin.com/in/diptanshumahish"
                        target="_blank"
                        className="underline"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    );
}
