import type React from "react";

export interface PostMeta {
    slug: string;
    title: string;
    /** One or two sentences. Used for search results, cards and social previews. */
    description: string;
    /** ISO date, YYYY-MM-DD. */
    date: string;
    updated?: string;
    tags: string[];
    /** Extra search phrases this post answers. */
    keywords: string[];
    minutes: number;
    cover: {
        /** A picture, or leave it out and set art to draw one instead. */
        src?: string;
        art?: "calendar" | "cat";
        alt: string;
        /** CSS aspect-ratio of the image, e.g. "3 / 2". */
        ratio: string;
        /** The paper colour behind it on cards. */
        bg: string;
        rotate?: number;
    };
}

export interface Post {
    meta: PostMeta;
    Body: () => React.JSX.Element;
}
