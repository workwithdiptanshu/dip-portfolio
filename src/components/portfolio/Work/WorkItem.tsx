import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, PlayCircle } from "lucide-react";

export interface WorkItemProps {
    headingName: string;
    itemNumber: string;
    itemDetails: string;
    itemImage: string;
    itemMobileImage: string;
    githubLink?: string;
    livelink?: string;
    linksAvailable: boolean;
    techUsed: string;
    appType: string[];
    sideHeading: string;
}
interface Props {
    workItem: WorkItemProps;
}

export default function WorkItem({ workItem }: Props) {
    return (
        <AccordionItem value={workItem.itemNumber}>
            <AccordionTrigger className="lg:text-4xl text-2xl  flex gap-1">
                <div className="flex gap-4">
                    <span className="  ">{workItem.itemNumber}.</span>

                    <span>{workItem.headingName}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="flex lg:flex-row flex-col gap-6">
                    <Image
                        src={workItem.itemImage}
                        height={900}
                        width={1000}
                        alt="wg"
                        className="lg:w-[60%] lg:flex hidden h-auto"
                    />
                    <Image
                        src={workItem.itemMobileImage}
                        height={900}
                        width={1000}
                        alt="wg"
                        className="lg:hidden flex w-full h-auto"
                    />
                    <div className="lg:max-w-[40%] w-full flex flex-col justify-between bg-white bg-opacity-5 py-4 px-4 rounded-lg">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2">
                                {workItem.appType.map((ele, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white uppercase text-xs px-4 py-1 rounded-full text-black"
                                    >
                                        {ele}
                                    </span>
                                ))}
                            </div>
                            <h2 className="lg:text-3xl text-2xl font-light pl-4 border-l-4 border-yellow-100 rounded-sm py-1 pb-2 my-4 ">
                                {workItem.sideHeading}
                                <span className="bg-yellow-200 text-black   underline">
                                    {workItem.techUsed}
                                </span>
                            </h2>
                            <p
                                className="text-gray-300 tracking-wide"
                                dangerouslySetInnerHTML={{
                                    __html: workItem.itemDetails,
                                }}
                            ></p>
                        </div>
                        <div className="flex flex-col lg:mt-0 mt-4 ">
                            <span className="text-xl underline text-blue-300">
                                LINKS
                            </span>
                            <div>
                                {!workItem.linksAvailable ? (
                                    <p className="opacity-70">
                                        {" "}
                                        No links available as this is an
                                        organization application
                                    </p>
                                ) : (
                                    <div className="flex gap-4 items-center pt-2 ">
                                        <Link
                                            className="flex items-center px-4 py-1 gap-2 rounded-md text-black bg-white hover:shadow-sm hover:shadow-green-100"
                                            href={workItem.livelink ?? ""}
                                        >
                                            Live <PlayCircle size={15} />{" "}
                                        </Link>
                                        <Link
                                            className="flex items-center px-4 py-1 gap-2 rounded-md border border-white"
                                            href={workItem.githubLink ?? ""}
                                        >
                                            Github <GithubIcon />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
