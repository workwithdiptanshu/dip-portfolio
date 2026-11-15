import type { Post } from "./types";
import * as gpu from "./posts/image-effects-without-a-gpu";
import * as dither from "./posts/dithering-explained";
import * as noAi from "./posts/no-ai";
import * as concepts from "./posts/small-business-websites";
import * as rust from "./posts/rust-storage-engine";
import * as calendar from "./posts/headless-calendar";
import * as slop from "./posts/what-is-ai-slop";
import * as choices from "./posts/art-is-choices";
import * as miyazaki from "./posts/miyazaki-quote";
import * as spotSlop from "./posts/spot-ai-slop";
import * as byHand from "./posts/made-by-hand";
import * as coverRules from "./posts/album-cover-rules";
import * as coverSmall from "./posts/album-cover-small";
import * as printed from "./posts/printed-look";
import * as gig from "./posts/gig-poster";
import * as visuals from "./posts/music-visuals";

/** Every post, newest first. To add one, write a file in ./posts and list it here. */
export const posts: Post[] = [
    gpu, dither, noAi, concepts, rust, calendar,
    slop, choices, miyazaki, spotSlop, byHand,
    coverRules, coverSmall, printed, gig, visuals,
]
    .map((m) => ({ meta: m.meta, Body: m.Body }))
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPost(slug: string) {
    return posts.find((p) => p.meta.slug === slug);
}

/** Up to n other posts, preferring ones that share a tag. */
export function relatedPosts(slug: string, n = 2) {
    const post = getPost(slug);
    if (!post) return [];
    return posts
        .filter((p) => p.meta.slug !== slug)
        .map((p) => ({ p, score: p.meta.tags.filter((t) => post.meta.tags.includes(t)).length }))
        .sort((a, b) => b.score - a.score || b.p.meta.date.localeCompare(a.p.meta.date))
        .slice(0, n)
        .map(({ p }) => p);
}

export const SITE = "https://diptanshumahish.in";
