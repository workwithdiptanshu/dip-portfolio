import React from "react";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
const hf = Herr_Von_Muellerhoff({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <div className="lg:pt-[10vh]  lg:h-fit h-screen flex items-center justify-center pointer-events-none ">
            <div>
                <div className=" text-center">
                    <span className={`${hf.className}`}>diptanshu Mahish</span>
                </div>
                <div className="lg:px-[5vw]  lg:py-[5vh] p-2 flex flex-col gap-4">
                    <div>
                        <img
                            src="/Assets/Header/r1.svg"
                            alt="Imagery 1"
                            className="h-auto w-full "
                        />
                    </div>
                    <div>
                        <img
                            src="/Assets/Header/r2.svg"
                            alt="Imagery 3"
                            className="w-full h-auto"
                        />
                    </div>
                    <div>
                        <img
                            src="/Assets/Header/r3.svg"
                            alt="Imagery 2"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
