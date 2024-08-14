import Bakcground from "@/components/Common/Bakcground";
import Heading from "@/components/Common/Heading";
import PostComponent from "@/components/Post/PostComponent";
import NotionClient from "@/components/services/notion-client";
import { ServerProps } from "@/contracts/ServerComponents";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";
import Image from "next/image";

export default async function page(
    props: ServerProps<
        "",
        { tag?: string; pageno?: string; strt?: string; prev?: string }
    >
) {
    const nc = new NotionClient();
    const strt_crsr =
        typeof props.searchParams.strt === "undefined"
            ? null
            : props.searchParams.strt;
    const tags = await nc.getTags();
    const activeTag =
        typeof props.searchParams.tag === "undefined"
            ? 0
            : tags.map((x) => x.name).indexOf(props.searchParams.tag) + 1;

    const postsData = await nc.getPosts(
        0,
        strt_crsr,
        activeTag === 0 ? "" : tags[activeTag - 1].name
    );
    const posts = postsData?.posts ?? [];
    return (
        <div className=" pb-[5%] lg:pt-[2%] pt-[10%] relative overflow-hidden ">
            <div className="">
                <Heading heading={"Blogs That I write"} number={4} />
            </div>
            <Image
                src="/Assets/back-dark-3.svg"
                height={1900}
                width={1900}
                alt="background image"
                className="absolute inset-0 invert opacity-30 -z-0"
            />

            <Suspense
                fallback={
                    <div className="w-screen h-[50vh] flex items-center justify-center flex-col gap-2">
                        <div>Loading</div>
                        <Loader2 className="animate-spin" />
                    </div>
                }
            >
                <div className=" px-[5%] py-[2%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  lg:gap-6 gap-8 justify-evenly ">
                    {posts &&
                        posts.map((x) => (
                            <PostComponent
                                post={x}
                                key={x.id}
                                postType="real"
                            />
                        ))}
                </div>
            </Suspense>
        </div>
    );
}
