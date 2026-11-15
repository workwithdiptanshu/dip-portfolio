import { MetadataRoute } from "next";
import { posts, SITE } from "@/content/blog";

type Entry = MetadataRoute.Sitemap[number];

const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        page("", 1, "weekly"),
        page("/work", 0.9, "monthly"),
        page("/work/bitgrain", 0.9, "monthly"),
        page("/concepts", 0.8, "monthly"),
        page("/work/rustybase", 0.7, "monthly"),
        page("/work/calendify", 0.6, "yearly"),
        page("/work/android-apps", 0.5, "yearly"),
        page("/blogs", 0.8, "weekly"),
        ...posts.map(({ meta }) => ({
            url: `${SITE}/blogs/${meta.slug}`,
            lastModified: new Date(meta.updated ?? meta.date),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        page("/hire", 0.5, "monthly"),
    ];
}
