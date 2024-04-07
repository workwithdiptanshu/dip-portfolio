import React from "react";
import Image from "next/image";
export default function Bakcground() {
    return (
        <div
            data-scroll
            data-scroll-speed="0.6"
            className="absolute -z-10 top-0 left-0 right-0 opacity-50"
        >
            <Image
                src="/Assets/back.svg"
                width={1440}
                height={3000}
                alt="back"
                className=" w-screen"
            />
            <Image
                src="/Assets/back.svg"
                width={1440}
                height={3000}
                alt="back"
                className=" w-screen"
            />
        </div>
    );
}
