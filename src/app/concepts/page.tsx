import ConceptGrid, { Concept } from "@/components/concepts/ConceptGrid";
import { OG_IMAGE } from "@/lib/og";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CaseHero, CaseShell, Chapter, Glance, NextProject, Stage, Wide } from "@/components/work/CaseStudy";
import { Mat } from "@/components/work/projects";

export const metadata: Metadata = {
    title: "Concepts | Diptanshu Mahish",
    description:
        "Fifty-eight small businesses with great Google reviews and a missing or broken website, and the site I'd build each of them.",
    openGraph: {
        images: [OG_IMAGE],
        title: "Concepts | Diptanshu Mahish",
        description:
            "Fifty-eight small businesses with great reviews and weak websites, and the sites I'd build them.",
        url: "https://diptanshumahish.in/concepts",
    },
};

const concepts: Concept[] = [
    { slug: "bowie-bakery", what: "A panadería on the same corner since 1951", where: "El Paso, TX", kind: "Bakery", reviews: "2,063 reviews" },
    { slug: "navneet-garden", what: "Wedding garden and halls", where: "Indore", kind: "Venue", reviews: "1,398 reviews" },
    { slug: "nuestro-mexico", what: "Mexico City-style taquería", where: "Bakersfield, CA", kind: "Restaurant", reviews: "1,310 reviews" },
    { slug: "shree-balaji-netralaya", what: "Eye hospital, since 2016", where: "Patna", kind: "Healthcare", reviews: "2,099 reviews" },
    { slug: "justin-empire-fences", what: "Fence contractor", where: "Wichita, KS", kind: "Trade", reviews: "74 reviews" },
    { slug: "jodhpur-furniture-company", what: "Furniture workshop and exporter", where: "Jodhpur", kind: "Manufacturer", reviews: "70 reviews" },
    { slug: "preservation-pros", what: "Pool service", where: "Tucson, AZ", kind: "Trade", reviews: "319 reviews" },
    { slug: "hotel-inder-prakash", what: "Lakeside hotel", where: "Udaipur", kind: "Hotel", reviews: "533 reviews" },
    { slug: "the-le-bakery", what: "Vietnamese-French bakery", where: "Albuquerque, NM", kind: "Bakery", reviews: "260 reviews" },
    { slug: "sodhani-sweets", what: "Mithai house, since 2004", where: "Jaipur", kind: "Sweets", reviews: "11,987 reviews" },
    { slug: "climate-king-hvac", what: "Heating and air", where: "Ridgeland, MS", kind: "Trade", reviews: "652 reviews" },
    { slug: "oscenox-swiss-cottage", what: "Hillside stay above the Ganga", where: "Rishikesh", kind: "Hotel", reviews: "1,657 reviews" },
    { slug: "bucket-of-love", what: "Southern fried-chicken kitchen", where: "Lubbock, TX", kind: "Restaurant", reviews: "740 reviews" },
    { slug: "anugrah-dental-clinic", what: "Neighbourhood dental clinic", where: "Lucknow", kind: "Healthcare", reviews: "717 reviews" },
    { slug: "louisiana-smokehouse", what: "Pecan-wood BBQ truck", where: "Shreveport, LA", kind: "Food truck", reviews: "100 reviews" },
    { slug: "dr-tejaswini-physio", what: "Physiotherapy clinic", where: "Nagpur", kind: "Healthcare", reviews: "780 reviews" },
    { slug: "fresno-auto-service", what: "Independent repair shop", where: "Fresno, CA", kind: "Auto", reviews: "118 reviews" },
    { slug: "jmr-brass", what: "Brass components exporter", where: "Jamnagar", kind: "Manufacturer", reviews: "55 reviews" },
    { slug: "bobs-fence-co", what: "Family fence company, 40+ years", where: "Andover, KS", kind: "Trade", reviews: "89 reviews" },
    { slug: "quantum-kota", what: "Physics coaching for NEET and JEE", where: "Kota", kind: "Education", reviews: "1,703 reviews" },
    { slug: "puppy-love-grooming", what: "Dog grooming, two shops", where: "El Paso, TX", kind: "Pets", reviews: "889 reviews" },
    { slug: "agave-florist", what: "Neighbourhood florist in Nob Hill", where: "Albuquerque, NM", kind: "Florist", reviews: "107 reviews" },
    { slug: "revolution-studios-tattoo", what: "Tattoo studio", where: "Omaha, NE", kind: "Studio", reviews: "181 reviews" },
    { slug: "boise-family-plumbing", what: "Family plumbing company", where: "Garden City, ID", kind: "Trade", reviews: "196 reviews" },
    { slug: "goodson-plumbing", what: "Husband-and-wife plumbing service", where: "Boise, ID", kind: "Trade", reviews: "637 reviews" },
    { slug: "shiv-kripa-blue-pottery", what: "Blue pottery workshop, since 1969", where: "Jaipur", kind: "Crafts", reviews: "568 reviews" },
    { slug: "zuma-weaves", what: "Handloom weavers", where: "Varanasi", kind: "Crafts", reviews: "128 reviews" },
    { slug: "ayur-medicity", what: "Ayurveda hospital", where: "Kochi", kind: "Wellness", reviews: "914 reviews" },
    { slug: "ayurgiri-ayurveda", what: "Ayurveda clinic", where: "Kochi", kind: "Wellness", reviews: "574 reviews" },
    { slug: "exotic-asia-travels", what: "Ladakh tour operator", where: "Leh", kind: "Travel", reviews: "181 reviews" },
    { slug: "custom-upholstery-sacramento", what: "Custom upholstery shop", where: "Sacramento, CA", kind: "Trade", reviews: "69 reviews" },
    { slug: "premier-upholstery-sacramento", what: "Upholstery shop, since 1990", where: "Sacramento, CA", kind: "Trade", reviews: "59 reviews" },
    { slug: "3-tigers-martial-arts", what: "Martial arts school, since 1996", where: "Spokane Valley, WA", kind: "Education", reviews: "62 reviews" },
    { slug: "madrid-european-bakery", what: "European bakery, two shops", where: "Providence, RI", kind: "Bakery", reviews: "561 reviews" },
    { slug: "linda-dobbins-dance", what: "Dance school", where: "Birmingham, AL", kind: "Education", reviews: "58 reviews" },
    { slug: "flash-movementz", what: "Dance and fitness studio", where: "Birmingham, AL", kind: "Studio", reviews: "27 reviews" },
    { slug: "krishna-creations-kanpur", what: "Leather goods maker", where: "Kanpur", kind: "Manufacturer", reviews: "126 reviews" },
    { slug: "fk-international-kanpur", what: "Leather goods exporter", where: "Kanpur", kind: "Manufacturer", reviews: "64 reviews" },
    { slug: "bharath-toy-factory", what: "Wooden toy workshop", where: "Channapatna", kind: "Crafts", reviews: "72 reviews" },
    { slug: "tea-emporium-darjeeling", what: "Tea house, since 1940", where: "Darjeeling", kind: "Retail", reviews: "69 reviews" },
    { slug: "aman-sidhu-photography", what: "Wedding photographer", where: "Chandigarh", kind: "Studio", reviews: "359 reviews" },
    { slug: "shinning-studio-weddings", what: "Wedding photo and film studio", where: "Chandigarh", kind: "Studio", reviews: "204 reviews" },
    { slug: "coffee-tree-stays-coorg", what: "Homestay on a coffee estate", where: "Coorg", kind: "Hotel", reviews: "266 reviews" },
    { slug: "colaos-ristorante-erie", what: "Family Italian restaurant, since 1999", where: "Erie, PA", kind: "Restaurant", reviews: "824 reviews" },
    { slug: "dr-auto-repair-billings", what: "Repair and performance shop", where: "Billings, MT", kind: "Auto", reviews: "62 reviews" },
    { slug: "1-stop-automotive-billings", what: "Family auto repair, since 2005", where: "Billings, MT", kind: "Auto", reviews: "338 reviews" },
    { slug: "ink-link-tattoo-omaha", what: "Tattoo shop", where: "Omaha, NE", kind: "Studio", reviews: "320 reviews" },
    { slug: "collective-hive-tattoo", what: "Appointment-only tattoo collective", where: "Omaha, NE", kind: "Studio", reviews: "112 reviews" },
    { slug: "winking-jack-piano", what: "Piano tuning and repair", where: "Columbus, OH", kind: "Trade", reviews: "122 reviews" },
    { slug: "wood-creations-terre-hill", what: "Woodworking shop, since 1984", where: "Terre Hill, PA", kind: "Crafts", reviews: "25 reviews" },
    { slug: "first-choice-home-design-indore", what: "Interior design studio", where: "Indore", kind: "Studio", reviews: "99 reviews" },
    { slug: "viga-knit-creation", what: "Knitwear manufacturer", where: "Tiruppur", kind: "Manufacturer", reviews: "17 reviews" },
    { slug: "bismi-cashew-company", what: "Cashew processor and exporter", where: "Kollam", kind: "Manufacturer", reviews: "33 reviews" },
    { slug: "buttons-and-beyond-tailoring", what: "Bespoke menswear, measured at home", where: "Dubai", kind: "Studio", reviews: "207 reviews" },
    { slug: "zikra-saeeda-tailoring", what: "Ladies' tailoring, 20 years", where: "Dubai", kind: "Studio", reviews: "66 reviews" },
    { slug: "petsponz-mobile-grooming", what: "Mobile pet grooming van", where: "Abu Dhabi", kind: "Pets", reviews: "263 reviews" },
    { slug: "sea-and-sky-upholstery", what: "Family upholstery workshop", where: "Abu Dhabi", kind: "Trade", reviews: "119 reviews" },
    { slug: "bright-smile-al-ain", what: "24-hour dental and medical centre", where: "Al Ain", kind: "Healthcare", reviews: "655 reviews" },
];

const C = "/Assets/work/concepts";

/** A spread of phones, picked for how different they look from each other. */
const phones = [
    "bowie-bakery",
    "hotel-inder-prakash",
    "louisiana-smokehouse",
    "shiv-kripa-blue-pottery",
    "quantum-kota",
    "puppy-love-grooming",
    "aman-sidhu-photography",
];

export default function ConceptsPage() {
    return (
        <CaseShell>
            <CaseHero
                name="Concepts"
                kind="Websites · self-initiated"
                line="The websites well-loved small businesses should have, designed and built without being asked."
                cat={{ color: "marigold", face: "moss" }}
                meta={[
                    { label: "Role", value: "Research, design and build" },
                    { label: "When", value: "2026" },
                    { label: "Built with", value: "Next.js, static export" },
                    { label: "Where", value: "The US, India and the UAE" },
                ]}
                links={[
                    { label: "See them all", href: "#all" },
                    { label: "Get a site like this", href: "/hire?for=website" },
                ]}
            />

            <Stage bg="#F2B23A" className="h-[300px] sm:h-[560px]">
                <Mat src={`${C}/bowie-bakery.webp`} alt="Concept site for Bowie Bakery in El Paso" className="left-[4%] top-[12%] w-[56%] sm:w-[46%] aspect-[3/2] h-auto" rotate={-4} sizes="520px" />
                <Mat src={`${C}/hotel-inder-prakash.webp`} alt="Concept site for Hotel Inder Prakash in Udaipur" className="right-[4%] sm:right-[16%] bottom-[10%] w-[50%] sm:w-[40%] aspect-[3/2] h-auto" rotate={3} sizes="460px" />
                <Mat src={`${C}/louisiana-smokehouse-m.webp`} alt="Concept site for Louisiana Smokehouse on a phone" className="hidden sm:block right-[4%] top-[8%] w-[15%] aspect-[390/844] h-auto" rotate={8} sizes="200px" />
            </Stage>

            <Glance
                items={[
                    { value: "58", label: "Businesses" },
                    { value: "35k+", label: "Google reviews between them" },
                    { value: "49", label: "Different typefaces" },
                ]}
            />

            <Chapter title="The idea">
                <p>
                    Some of the best-loved places in a city have the worst
                    websites. A panadería that has been on the same corner since
                    1951, with two thousand five-star reviews, and a site that
                    hasn&apos;t loaded properly in years. <b>The reviews prove the
                    business is good. The website says the opposite.</b>
                </p>
                <p>
                    So I went looking for them on Google Maps: places with
                    hundreds or thousands of reviews and a website that was
                    missing, broken or stuck in 2012. Then I built each one the
                    site I&apos;d give them.
                </p>
            </Chapter>

            <Chapter title="Every one gets its own look">
                <p>
                    The easy version of this is one template with the logo
                    swapped. I didn&apos;t want that. A brass works in Jamnagar
                    and a tattoo studio in Omaha shouldn&apos;t look related, so
                    each site has its own layout, palette and typeface, taken
                    from what the place actually feels like.
                </p>
                <p>
                    They&apos;re built phone first, because that&apos;s how people
                    find a bakery on the way somewhere.
                </p>
            </Chapter>

            <Wide className="overflow-hidden">
                <div className="flex justify-center py-4">
                    {phones.map((slug, i) => (
                        <span
                            key={slug}
                            className={`relative shrink-0 -ml-6 first:ml-0 transition-transform duration-300 hover:-translate-y-4 ${i > 4 ? "hidden sm:block" : ""}`}
                            style={{ zIndex: i }}
                        >
                            <span
                                className="mat !border-4 !rounded-[16px] relative block w-[110px] sm:w-[150px] aspect-[390/844] overflow-hidden"
                                style={{ transform: `rotate(${-9 + i * 3}deg)` }}
                            >
                                <Image src={`${C}/${slug}-m.webp`} alt="" fill sizes="160px" className="object-cover object-top" />
                            </span>
                        </span>
                    ))}
                </div>
            </Wide>

            <Chapter title="Honest by default">
                <p>
                    Hours, menus and history come from public sources.{" "}
                    <b>Nothing is invented</b>: no fake reviews, prices or awards.
                    Every site carries a banner saying it isn&apos;t official,
                    stays out of search engines, and uses sample photos.
                </p>
                <p>
                    If one of these is your business and you&apos;d like it taken
                    down, or handed over to you, <Link href="/hire?for=website">get in touch</Link>.
                </p>
            </Chapter>

            <section id="all" className="max-w-[1080px] mx-auto px-4 pt-24 sm:pt-32 scroll-mt-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
                    <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.05] tracking-[-0.02em]">
                        All of them
                    </h2>
                    <Link
                        href="/hire?for=website"
                        className="w-fit bg-ink text-white px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 rounded-full hover:bg-cat-moss transition-colors"
                    >
                        Get a site like this <ArrowUpRight size={15} />
                    </Link>
                </div>
                <ConceptGrid concepts={concepts} />
                <p className="text-xs text-muted pt-8 max-w-[640px]">
                    Business names and trademarks belong to their owners.
                </p>
            </section>

            <NextProject slug="concepts" />
        </CaseShell>
    );
}
