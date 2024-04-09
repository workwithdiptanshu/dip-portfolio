import React from "react";
import Heading from "../Common/Heading";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";
import Link from "next/link";

export default async function BlogHome() {
    const nc = new NotionClient();
    const post = await nc.getPosts(4, null);
    const posts = post?.posts ?? [];
    return (
        <div className="bg-white">
            <Heading
                heading={["And Btw", "Sometimes I ", "Write too"]}
                number={3}
                key="write"
            />
            <div className="px-[5%] py-[2%] grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
                {posts.map((ele, idx) => (
                    <PostComponent post={ele} postType="" key={idx} />
                ))}
            </div>
            <div className="px-[5%] py-[2%] flex items-center w-full justify-center">
                <Link
                    href="/blogs"
                    className="bg-black text-white px-4 py-1 rounded-md"
                >
                    See more
                </Link>
            </div>
        </div>
    );
}
