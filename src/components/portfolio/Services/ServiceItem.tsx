import React from "react";
import Image from "next/image";
import CommonImage from "@/components/Common/CommonImage";

interface Props {
    name: string;
    itemNumber: string;
    details: string;
    mainImage: string;
    bgColor: string;
    bgImage: string;
    scrollSpeed: string;
    highlight: string;
    imageScrollSpeed: string;
}
export default function ServiceItem({
    bgColor,
    bgImage,
    details,
    itemNumber,
    mainImage,
    name,
    scrollSpeed,
    highlight,
    imageScrollSpeed,
}: Props) {
    return (
        <div
            style={{ backgroundColor: `${bgColor}` }}
            className="px-[5vw] py-[8%] relative     w-full overflow-hidden"
        >
            <Image
                src={bgImage}
                height={450}
                width={450}
                data-scroll
                data-scroll-speed={scrollSpeed}
                alt="wg"
                className="absolute left-0  w-screen opacity-20 -z-0 object-center"
            />
            <div className="flex flex-col gap-3  overflow-hidden">
                <span className="text-2xl">{itemNumber}</span>
                <h3
                    style={{ backgroundColor: `${highlight}` }}
                    className="lg:text-6xl md:text-5xl text-4xl underline w-fit"
                >
                    {name}
                </h3>
                <span className="lg:text-[18px] text-[14px]">{details}</span>
            </div>
            <div className="lg:p-0 py-[4vh]">
                {/* <CommonImage
                    dataScroll={imageScrollSpeed}
                    imageLink={mainImage}
                    alt={name}
                    classList="w-full"
                    height={1200}
                    width={1400}
                /> */}
                <img src={mainImage} alt={name} className="w-full " />
            </div>
        </div>
    );
}
