import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, GithubIcon, PlayCircle } from "lucide-react";
import ImageLoader from "@/components/Common/ImageLoader";

export interface WorkItemProps {
    headingName: string;
    itemNumber: string;
    itemDetails: string;
    itemImage?: string;
    itemMobileImage?: string;
    githubLink?: string;
    livelink?: string;
    /** Label for the live link, when "Live" isn't the right word. */
    liveLabel?: string;
    /** Internal route to a full write-up, if one exists. */
    caseStudyLink?: string;
    /** Shown when there is nothing to link to, e.g. private or delisted work. */
    noLinksReason?: string;
    /** The numbers worth leading with. */
    stats?: { value: string; label: string }[];
    techUsed: string[];
    appType: string[];
    sideHeading: string;
}
interface Props {
    workItem: WorkItemProps;
}

export default function WorkItem({ workItem }: Props) {
    /** Mobile art is optional. Without it the desktop image is used at both sizes. */
    const hasImage = Boolean(workItem.itemImage);
    const mobileImage = workItem.itemMobileImage ?? workItem.itemImage;
    const hasLinks = Boolean(workItem.livelink || workItem.githubLink);

    const sidebar = (
        <div className="flex flex-col gap-6">
            {workItem.stats && (
                <div className="grid grid-cols-3 gap-4">
                    {workItem.stats.map((s) => (
                        <div key={s.label} className="flex flex-col">
                            <span className="lg:text-3xl text-2xl font-medium leading-none">
                                {s.value}
                            </span>
                            <span className="text-[11px] opacity-50 pt-1 leading-tight">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-col gap-3">
                <span className="text-[11px] uppercase tracking-widest opacity-40">
                    Built with
                </span>
                <div className="flex flex-wrap gap-2">
                    {workItem.techUsed.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-[3px] rounded-full border border-white/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {workItem.caseStudyLink && (
                    <Link
                        href={workItem.caseStudyLink}
                        className="group flex items-center justify-between gap-2 bg-yellow-300 text-black px-4 py-3 rounded-md border border-yellow-300 hover:bg-transparent hover:text-yellow-300 transition-colors"
                    >
                        <span className="font-medium">
                            Read the full case study
                        </span>
                        <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                )}
                {hasLinks ? (
                    <div className="flex flex-wrap gap-3 items-center">
                        {workItem.livelink && (
                            <Link
                                className="flex items-center px-4 py-[6px] gap-2 rounded-md text-black bg-white hover:bg-white/80 transition-colors text-sm"
                                href={workItem.livelink}
                                target="_blank"
                            >
                                {workItem.liveLabel ?? "Live"}{" "}
                                <PlayCircle size={15} />
                            </Link>
                        )}
                        {workItem.githubLink && (
                            <Link
                                className="flex items-center px-4 py-[6px] gap-2 rounded-md border border-white/40 hover:bg-white hover:text-black transition-colors text-sm"
                                href={workItem.githubLink}
                                target="_blank"
                            >
                                Github <GithubIcon size={15} />
                            </Link>
                        )}
                    </div>
                ) : (
                    <p className="text-sm opacity-50">
                        {workItem.noLinksReason}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <AccordionItem value={workItem.itemNumber}>
            <AccordionTrigger className="lg:text-4xl text-2xl  flex gap-1">
                <div className="flex gap-4">
                    <span className="  ">{workItem.itemNumber}.</span>

                    <span>{workItem.headingName}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="flex lg:flex-row flex-col gap-6 pb-4">
                    {hasImage && (
                        <>
                            <ImageLoader
                                src={workItem.itemImage!}
                                height={900}
                                width={1000}
                                alt={workItem.headingName}
                                className="lg:w-[55%] lg:flex hidden h-auto"
                            />
                            <ImageLoader
                                src={mobileImage!}
                                height={1400}
                                width={1000}
                                alt={workItem.headingName}
                                className="lg:hidden flex w-full h-auto min-h-[200px]"
                            />
                        </>
                    )}

                    <div className="w-full bg-white bg-opacity-5 rounded-lg lg:p-8 p-5">
                        <div className="flex flex-wrap gap-2 pb-6">
                            {workItem.appType.map((ele) => (
                                <span
                                    key={ele}
                                    className="bg-white uppercase text-[11px] tracking-wide px-3 py-1 rounded-full text-black"
                                >
                                    {ele}
                                </span>
                            ))}
                        </div>

                        <h3 className="lg:text-3xl text-xl font-light pl-5 border-l-4 border-yellow-300 py-1 mb-8 lg:max-w-[85%]">
                            {workItem.sideHeading}
                        </h3>

                        <div
                            className={
                                hasImage
                                    ? "flex flex-col gap-8"
                                    : "grid lg:grid-cols-12 gap-10"
                            }
                        >
                            <div
                                className={`${
                                    hasImage ? "" : "lg:col-span-7"
                                } text-gray-300 tracking-wide leading-relaxed flex flex-col gap-4 [&_b]:text-white`}
                                dangerouslySetInnerHTML={{
                                    __html: workItem.itemDetails,
                                }}
                            />
                            <div className={hasImage ? "" : "lg:col-span-5"}>
                                {sidebar}
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
