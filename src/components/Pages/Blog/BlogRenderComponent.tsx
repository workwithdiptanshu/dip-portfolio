import Image from "next/image";
import { ServerProps } from "../../../contracts/ServerComponents";
import { getBlog, getBlogData } from "./data";
import styles from "../../../styles/blog.module.css";
import assets from "@/components/services/assets";
import RenderBlock from "@/components/NotionRender/RenderBlock";
import moment from "moment";
import { ArrowLeft, Calendar, Clock, Loader2, Mail } from "lucide-react";
import ReadTimeClient from "./ReadTimeClient";
import { Suspense } from "react";
import Link from "next/link";
export default async function BlogRenderComponent(props: ServerProps<"id">) {
    const [blog, { title, url, desc, date, user, aboutAuthor }] =
        await Promise.all([
            getBlog(props.params.id),
            getBlogData(props.params.id),
        ]);

    return (
        <div className={styles.blogContainer}>
            {/* <div className="w-full lg:h-[80vh] h-[70vh] relative">
                <Link
                    href="/blogs"
                    className="absolute lg:top-[15%] top-[20%] left-[5%] lg:left-[10%] text-yellow-100 border-b pointer-events-auto cursor-pointer z-10 flex items-center gap-2"
                >
                    <ArrowLeft size={16} /> Back
                </Link>
            </div> */}
            <Image
                src={url}
                alt={title}
                height={1080}
                width={1920}
                placeholder="blur"
                blurDataURL={assets.blur_img}
                className="mat !rounded-[28px] w-[calc(100%-32px)] max-w-[960px] lg:h-[60vh] h-auto object-cover"
            />
            <div className="dash-rule flex flex-col gap-4 w-[calc(100%-32px)] max-w-[720px] py-10">
                <h1 className="font-serif text-[34px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">{title}</h1>

                <p className="text-base leading-relaxed text-black/70">{desc}</p>
                <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-cat-moss" />
                    <span>
                        <span className="text-muted">written on </span>
                        <b className="font-medium">
                            {moment(date).format("dddd DD MMMM, YYYY")}
                        </b>
                    </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <Clock size={16} className="text-cat-moss" /> <ReadTimeClient />{" "}
                    <span className="text-muted">to read this</span>
                </div>
            </div>
            <div className={styles.articleContainer}>
                <article id="main_blog">
                    {blog && <RenderBlock blockMap={blog.results} />}
                </article>
            </div>
        </div>
    );
}
