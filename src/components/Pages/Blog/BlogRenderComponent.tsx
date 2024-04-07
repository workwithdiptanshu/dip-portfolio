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
                unoptimized
                src={url}
                alt={title}
                height={1080}
                width={1920}
                placeholder="blur"
                blurDataURL={assets.blur_img}
                className="mb-4 w-[90%] lg:h-[60vh] h-auto object-cover rounded-md offsetstyle"
            />
            <div className=" flex flex-col gap-2 w-[90%] text-black py-8 border-b border-black border-dashed">
                <h1 className="lg:text-5xl  text-4xl">{title}</h1>

                <p className="opacity-60 lg:max-w-[60%]">{desc}</p>
                <div className="flex items-center gap-4">
                    <Calendar size={18} />
                    <span>
                        <span className="opacity-40">written on </span>
                        <b className="opacity-100">
                            {moment(date).format("dddd DD MMMM, YYYY")}
                        </b>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Clock size={18} /> <ReadTimeClient />{" "}
                    <span className="opacity-50">to read this</span>
                </div>
            </div>
            <div className={styles.articleContainer}>
                <article id="main_blog">
                    {blog && <RenderBlock blockMap={blog.results} />}
                </article>
            </div>
            <div className="px-[5%] lg:px-[10%] pb-[5%] flex flex-col text-white lg:w-[40%]"></div>
        </div>
    );
}
