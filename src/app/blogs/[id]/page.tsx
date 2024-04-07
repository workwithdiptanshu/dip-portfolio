import { Metadata } from "next";
import BlogRenderComponent from "../../../components/Pages/Blog/BlogRenderComponent";
import { ServerProps } from "../../../contracts/ServerComponents";
import { getBlog, getBlogData } from "@/components/Pages/Blog/data";

export async function generateMetadata(
    props: ServerProps<"id">
): Promise<Metadata> {
    const [_, blog_id] = decodeURIComponent(props.params.id).split("__");
    const [blog, { title, url, user, desc }] = await Promise.all([
        getBlog(blog_id),
        getBlogData(blog_id),
    ]);

    return {
        title: `Blogs | ${title}`,
        openGraph: {
            images: url,
            title: `Blogs | ${title}`,
            description: desc,
            authors: user.name,
            countryName: "IN",
            siteName: "https://diptanshumahish.in",
        },
        metadataBase: new URL("https://diptanshumahish.in"),
        description: desc,
        keywords: `${title}, Diptanshu Mahish, Diptanshu Mahish blogs`,
        category: "Blogs",
        creator: user.name,
        publisher: "Diptanshu Mahish",
        robots: "index,follow",
        twitter: {
            title: title,
            images: url,
            description: desc,
        },
    };
}

export default async function (props: ServerProps<"id">) {
    const [_, blog_id] = decodeURIComponent(props.params.id).split("__");

    return <BlogRenderComponent searchParams={{}} params={{ id: blog_id }} />;
}
