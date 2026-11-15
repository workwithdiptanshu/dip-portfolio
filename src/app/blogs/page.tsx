import SectionTitle from "@/components/Common/SectionTitle";
import PostComponent from "@/components/Post/PostComponent";
import NotionClient from "@/components/services/notion-client";
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
        <div className="max-w-[1080px] mx-auto px-4 pt-16 sm:pt-24 pb-8">
            <SectionTitle
                as="h1"
                title="Things I&rsquo;ve written"
                sub="Notes on building products, on design, and on whatever I've been stuck on lately."
            />

            <Suspense
                fallback={
                    <div className="h-[40vh] flex items-center justify-center gap-2 text-muted">
                        <Loader2 className="animate-spin" size={18} /> Loading
                    </div>
                }
            >
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 pt-12">
                    {posts.map((x, i) => (
                        <PostComponent post={x} key={x.id} postType="real" index={i} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
}
