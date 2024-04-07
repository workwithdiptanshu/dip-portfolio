import React from "react";
import Image from "next/image";
import Tags from "@/components/Common/Tags";
import Link from "next/link";
import { PlayCircle, GithubIcon } from "lucide-react";
import CommonImage from "@/components/Common/CommonImage";

interface Props {
    backgroundColor: string;
    backgroundImage: string;
    mainImagery: string;
    contentName: string;
    contentMiniDesc: string;
    contentFullDesc: string;
    contentTags: string[];
    LiveLink?: string;
    githubLink?: string;
    contentNumber: string;
    imageScroll: string;
    backgroundScroll: string;
    subTextColor: string;
}

export default function WorkItem({
    backgroundColor,
    subTextColor,
    backgroundImage,
    contentFullDesc,
    contentMiniDesc,
    contentName,
    contentTags,
    mainImagery,
    LiveLink,
    githubLink,
    contentNumber,
    backgroundScroll,
    imageScroll,
}: Props) {
    return (
        <div
            style={{ backgroundColor: `#${backgroundColor}` }}
            className={`min-h-screen relative w-screen lg:px-[5vw] lg:py-0 py-[5vh] px-[5%] overflow-hidden  flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 gap-[5vh] `}
        >
            <Image
                data-scroll
                data-scroll-speed={backgroundScroll}
                src={backgroundImage}
                height={450}
                width={450}
                alt="wg"
                className="absolute left-0  w-full opacity-20 -z-0 object-center"
            />
            <div className="lg:z-10 ">
                <Image
                    data-scroll
                    data-scroll-speed={imageScroll}
                    src={mainImagery}
                    height={450}
                    width={450}
                    alt="wg"
                    className="lg:flex hidden justify-center items-center"
                />
                {/* <CommonImage
                    height={450}
                    width={450}
                    imageLink={mainImagery}
                    classList="lg:flex hidden justify-center items-center"
                    alt="wg"
                    dataScroll={imageScroll}
                /> */}
                {/* <CommonImage
                    imageLink={mainImagery}
                    height={450}
                    width={450}
                    alt="wg"
                    classList="lg:hidden flex w-full h-auto aspect-square object-cover"
                /> */}

                <Image
                    src={mainImagery}
                    height={450}
                    width={450}
                    alt="wg"
                    className="lg:hidden flex w-full h-auto aspect-square object-cover"
                    blurDataURL=""
                />
            </div>
            <div className="lg:w-[55%] w-full flex flex-col text-white gap-4 ">
                <div className="flex lg:flex-row flex-col-reverse justify-between lg:items-center items-start">
                    <span className="lg:text-5xl md:text-5xl text-4xl  ">
                        {contentName}
                    </span>
                    <span className="lg:text-6xl md:text-5xl text-4xl font-bold   ">
                        {contentNumber}
                    </span>
                </div>
                <span style={{ color: `${subTextColor}` }}>
                    {contentMiniDesc}
                </span>
                <span className="opacity-80 tracking-wide">
                    {contentFullDesc}
                </span>
                <Tags stack={contentTags} />
                {!LiveLink && !githubLink && (
                    <span className="opacity-40">
                        Live link unavailable as this is an organization
                        application
                    </span>
                )}
                {LiveLink && githubLink && (
                    <div className="flex gap-4 items-center z-10 ">
                        <Link
                            className="flex items-center px-4 py-1 gap-2 rounded-full text-black bg-green-100 hover:shadow-sm hover:shadow-green-100"
                            href={LiveLink}
                        >
                            Live <PlayCircle size={15} />{" "}
                        </Link>
                        <Link
                            className="flex items-center px-4 py-1 gap-2 rounded-full border border-white"
                            href={githubLink}
                        >
                            Github <GithubIcon />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
