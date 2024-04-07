import Heading from "@/components/Common/Heading";
import PostComponent from "@/components/Post/PostComponent";
import NotionClient from "@/components/services/notion-client";
import { capitaliseFirst } from "@/components/services/strings";
import { ServerProps } from "@/contracts/ServerComponents";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

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
        <div className=" pb-[5%] lg:pt-[2%] pt-[10%]">
            <div className="">
                <Heading heading={["Blogs", "That I write"]} number={4} />
            </div>
            {/* <Suspense fallback={<Loader2 />}>
                {tags.map((tag, index) => {
                    if (activeTag !== index + 1) {
                        return (
                            <a
                                href={"/blogs?tag=" + tag.name + "#blogs"}
                                key={tag.id}
                            >
                                <span
                                    className={
                                        "text-md border flex items-center w-max border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  "
                                    }
                                >
                                    {capitaliseFirst(tag.name)}
                                </span>
                            </a>
                        );
                    }
                })}
            </Suspense> */}
            <Suspense>
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
