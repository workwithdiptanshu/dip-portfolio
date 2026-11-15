import Link from "next/link";
import React from "react";
import moment from "moment";
import Image from "next/image";
import assets from "../services/assets";
import { Post } from "../services/post";
import { ArrowUpRight } from "lucide-react";

interface Props {
    post: Post;
    postType: string;
    index?: number;
}

export default async function PostComponent({ post, index = 0 }: Props) {
    const story_id =
        post.title?.split(" ").join("-").toLowerCase() + "__" + post.id;
    const genres = post.tags?.map((ele) => ele.name) ?? [];
    const tilt = [-3, 2, -1.5, 3][index % 4];

    return (
        <Link
            href={"/blogs/" + encodeURIComponent(story_id)}
            data-type="post"
            data-genre={genres}
            className="group rounded-[28px] bg-card p-5 flex flex-col gap-5 hover:bg-[#DCD3C2] transition-colors"
        >
            <div
                className="mat relative aspect-[16/10]"
                style={{ transform: `rotate(${tilt}deg)` }}
            >
                <Image
                    src={post.cover ?? assets.blur_img}
                    alt={post.title ?? "Blog cover"}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    placeholder="blur"
                    blurDataURL={assets.blur_img}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 px-1 flex-1">
                <span className="text-xs text-muted">
                    {moment(post.created_time).format("D MMM YYYY")}
                </span>
                <h2 className="font-serif text-xl leading-snug line-clamp-2">
                    {post.title}
                </h2>
                <p className="text-sm text-black/60 line-clamp-3 leading-relaxed">
                    {post.desc}
                </p>
            </div>
            <div className="flex items-center justify-between px-1">
                <span className="flex flex-wrap gap-1.5">
                    {post.tags?.slice(0, 2).map((ele) => (
                        <span key={ele.name} className="text-xs bg-white/70 rounded-full px-3 py-1">
                            {ele.name}
                        </span>
                    ))}
                </span>
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                </span>
            </div>
        </Link>
    );
}
