import React from "react";
import Link from "next/link";
import { Aside, Figure, Pull, Row } from "@/components/blog/Blog";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
    slug: "i-designed-58-websites-for-small-businesses",
    title: "I designed 58 websites for small businesses that never asked me to",
    description:
        "Some of the best-loved shops and clinics have thousands of five-star reviews and a broken website. I built the site I'd give each of them. Here's how I picked them, the rules I followed, and what every small business website should get right.",
    date: "2026-09-30",
    tags: ["Web design", "Concepts"],
    keywords: [
        "small business website design",
        "small business website tips",
        "website redesign examples",
        "restaurant website design",
        "local business website",
    ],
    minutes: 5,
    cover: {
        src: "/Assets/work/concepts/tea-emporium-darjeeling.webp",
        alt: "Concept website for a tea house in Darjeeling",
        ratio: "3 / 2",
        bg: "#F5A48C",
        rotate: 3,
    },
};

export function Body() {
    return (
        <>
            <p>
                There&apos;s a panadería in El Paso that has been on the same corner since
                1951. It has over two thousand reviews on Google, nearly all of them glowing.
                Its website hadn&apos;t loaded properly in years.
            </p>
            <p>
                Once I noticed that, I started seeing it everywhere. An eye hospital in Patna
                with two thousand reviews. A mithai shop in Jaipur with nearly twelve
                thousand. Places people clearly love, with a website that says the opposite.
                So I started a side project called <Link href="/concepts">Concepts</Link>: I
                built the website I&apos;d give each of them. There are 58 now.
            </p>

            <Figure
                src="/Assets/work/concepts/krishna-creations-kanpur.webp"
                alt="Concept website for a leather goods maker in Kanpur"
                ratio="3 / 2"
                caption="A leather goods workshop in Kanpur, one of the 58."
            />

            <h2>How I found them</h2>
            <p>
                Google Maps, mostly. I looked for businesses with hundreds or thousands of
                reviews and then clicked through to their website. I was looking for one of
                three things: no website at all, a site that was broken, or one that looked
                like it was last touched in 2012.
            </p>
            <p>
                The reviews matter because they prove the business is good. That was the
                whole point. I wasn&apos;t trying to make a bad business look good. I wanted
                good businesses to look as good online as they are in person.
            </p>

            <h2>The rules I gave myself</h2>
            <p>Building a website for a real business that didn&apos;t ask for it comes with some responsibility. So I kept a few rules:</p>
            <ul>
                <li><b>Nothing invented.</b> Hours, menus and history come from public sources. No fake reviews, no made-up prices, no awards they didn&apos;t win.</li>
                <li><b>Clearly unofficial.</b> Every site has a banner saying it&apos;s a concept and not the business&apos;s real website.</li>
                <li><b>Out of search.</b> They&apos;re hidden from search engines, so nobody finds them by mistake instead of the real thing.</li>
                <li><b>Sample photos.</b> I use stand-in photography rather than taking theirs.</li>
            </ul>
            <p>
                And if an owner wants one taken down, or wants it handed over to them,
                that&apos;s an easy yes.
            </p>

            <h2>Every one gets its own look</h2>
            <p>
                The lazy version of this project is one template with the logo swapped. I
                didn&apos;t want that. A brass works in Jamnagar and a tattoo studio in Omaha
                shouldn&apos;t look like cousins. Each site has its own layout, its own colours
                and its own typeface, taken from what the place actually feels like. Across
                the 58 sites I used 49 different typefaces.
            </p>
            <Pull>A brass works and a tattoo studio shouldn&apos;t look like cousins.</Pull>

            <Row
                caption="Built phone first, because that's how people find a bakery on the way somewhere."
                items={[
                    { src: "/Assets/work/concepts/shinning-studio-weddings-m.webp", label: "Wedding films", ratio: "390 / 844" },
                    { src: "/Assets/work/concepts/bucket-of-love-m.webp", label: "Fried chicken", ratio: "390 / 844" },
                    { src: "/Assets/work/concepts/collective-hive-tattoo-m.webp", label: "Tattoo collective", ratio: "390 / 844" },
                ]}
            />

            <h2>What every small business website should get right</h2>
            <p>
                After building this many, the same things kept coming up. If you run a
                small business and you&apos;re thinking about your website, this is what
                I&apos;d check first.
            </p>
            <h3>Answer the three questions people actually have</h3>
            <p>
                Almost everyone landing on a local business site wants to know: are you open,
                where are you, and how do I reach you? Put your hours, your address and a
                phone number near the top. Make the phone number tappable on a phone.
            </p>
            <h3>Put your menu or prices in plain text</h3>
            <p>
                A PDF menu or a photo of a price list is hard to read on a phone and invisible
                to Google. Plain text loads fast, reads well, and helps people find you when
                they search for the dish or service you offer.
            </p>
            <h3>Use your reviews</h3>
            <p>
                If people love you, say so. A couple of real quotes and your star rating do
                more than any slogan. You&apos;ve already earned them.
            </p>
            <h3>Design for the phone first</h3>
            <p>
                Most people find a local business on their phone, often while standing
                outside it. If the site only works on a laptop, it doesn&apos;t work.
            </p>
            <h3>Look like yourself</h3>
            <p>
                A sweet shop that&apos;s been around for decades has a history and a feel.
                Your site should look like your shop, not like every other template.
            </p>

            <Aside note="if this is you">
                If your business is one of the 58 and you&apos;d like the site, or want it
                taken down, just <Link href="/hire?for=website">get in touch</Link>. And if
                you&apos;d like a site like this for your own business, same link.
            </Aside>

            <h2>Why I keep doing it</h2>
            <p>
                Partly because it&apos;s fun. Every one is a small design problem with real
                constraints, a real audience and real information. And partly because
                there&apos;s something nice about making a well-loved place look as good
                online as it already does in person.
            </p>
            <p>
                You can see <Link href="/concepts">all 58 here</Link>.
            </p>
        </>
    );
}
