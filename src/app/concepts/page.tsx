import Footer from "@/components/Common/Footer";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import ConceptGrid, { Concept } from "@/components/concepts/ConceptGrid";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Concepts | Diptanshu Mahish",
    description:
        "Twenty small businesses with great Google reviews and a missing or broken website, and the site I'd build each of them.",
    openGraph: {
        title: "Concepts | Diptanshu Mahish",
        description:
            "Twenty small businesses with great reviews and weak websites, and the sites I'd build them.",
        url: "https://diptanshumahish.in/concepts",
    },
};

const concepts: Concept[] = [
    { slug: "bowie-bakery", country: "us", what: "A panadería on the same corner since 1951", where: "El Paso, TX", kind: "Bakery", reviews: "2,063 reviews", found: "A site from around 2010 that doesn't work on phones and shows the wrong hours." },
    { slug: "navneet-garden", country: "in", what: "Wedding garden and halls", where: "Indore", kind: "Venue", reviews: "1,398 reviews", found: "The live website still shows “Lorem ipsum” placeholder text." },
    { slug: "nuestro-mexico", country: "us", what: "Mexico City-style taquería", where: "Bakersfield, CA", kind: "Restaurant", reviews: "1,310 reviews", found: "Their old domain now shows a gambling spam page, and local news still links to it." },
    { slug: "shree-balaji-netralaya", country: "in", what: "Eye hospital, since 2016", where: "Patna", kind: "Healthcare", reviews: "2,099 reviews", found: "The site's title is “Untitled design (3)”, with no phone number and no way to book." },
    { slug: "justin-empire-fences", country: "us", what: "Fence contractor", where: "Wichita, KS", kind: "Trade", reviews: "74 reviews", found: "A one-page builder site where the gallery and the reviews section are both empty." },
    { slug: "jodhpur-furniture-company", country: "in", what: "Furniture workshop and exporter", where: "Jodhpur", kind: "Manufacturer", reviews: "70 reviews", found: "A bought theme with its demo categories, “Refrigerator” and “Bath Tub”, still in the menu." },
    { slug: "preservation-pros", country: "us", what: "Pool service", where: "Tucson, AZ", kind: "Trade", reviews: "319 reviews", found: "Template filler copy, untouched since 2021." },
    { slug: "hotel-inder-prakash", country: "in", what: "Lakeside hotel", where: "Udaipur", kind: "Hotel", reviews: "533 reviews", found: "No website at all, so every booking goes through commission apps." },
    { slug: "the-le-bakery", country: "us", what: "Vietnamese-French bakery", where: "Albuquerque, NM", kind: "Bakery", reviews: "260 reviews", found: "A basic Wix page with no pre-orders, and the Instagram link goes to Wix's own account." },
    { slug: "sodhani-sweets", country: "in", what: "Mithai house, since 2004", where: "Jaipur", kind: "Sweets", reviews: "11,987 reviews", found: "Almost twelve thousand reviews, and a site that still shows template text." },
    { slug: "climate-king-hvac", country: "us", what: "Heating and air", where: "Ridgeland, MS", kind: "Trade", reviews: "652 reviews", found: "No working site, and the domain listed for them now belongs to a different company." },
    { slug: "oscenox-swiss-cottage", country: "in", what: "Hillside stay above the Ganga", where: "Rishikesh", kind: "Hotel", reviews: "1,657 reviews", found: "Advertises a discount for booking direct, but “Book now” goes nowhere." },
    { slug: "bucket-of-love", country: "us", what: "Southern fried-chicken kitchen", where: "Lubbock, TX", kind: "Restaurant", reviews: "740 reviews", found: "740 Google reviews and no website at all." },
    { slug: "anugrah-dental-clinic", country: "in", what: "Neighbourhood dental clinic", where: "Lucknow", kind: "Healthcare", reviews: "717 reviews", found: "A perfect 5.0 from 717 reviews, and no website." },
    { slug: "louisiana-smokehouse", country: "us", what: "Pecan-wood BBQ truck", where: "Shreveport, LA", kind: "Food truck", reviews: "100 reviews", found: "Facebook only, and every listing shows different hours." },
    { slug: "dr-tejaswini-physio", country: "in", what: "Physiotherapy clinic", where: "Nagpur", kind: "Healthcare", reviews: "780 reviews", found: "A perfect 5.0 from 780 reviews, and no website." },
    { slug: "fresno-auto-service", country: "us", what: "Independent repair shop", where: "Fresno, CA", kind: "Auto", reviews: "118 reviews", found: "A template site with leftover restaurant copy about “the most talented chefs in town”." },
    { slug: "jmr-brass", country: "in", what: "Brass components exporter", where: "Jamnagar", kind: "Manufacturer", reviews: "55 reviews", found: "A catalogue meant for overseas buyers, with its news last updated in 2021." },
    { slug: "bobs-fence-co", country: "us", what: "Family fence company, 40+ years", where: "Andover, KS", kind: "Trade", reviews: "89 reviews", found: "Last updated in 2020, with a counter that reads “0 years in business”." },
    { slug: "quantum-kota", country: "in", what: "Physics coaching for NEET and JEE", where: "Kota", kind: "Education", reviews: "1,703 reviews", found: "More than 1,700 reviews, and no website." },
];

const stats = [
    { value: "20", label: "Concepts" },
    { value: "26k+", label: "Google reviews between them" },
    { value: "20", label: "Different typefaces" },
    { value: "0", label: "Of them asked me to" },
];

const facts = [
    { key: "Role", value: "Research, design, copy and code. All of it." },
    { key: "Found on", value: "Google Maps, in the US and India" },
    { key: "Built with", value: "Next.js, exported as static pages" },
    { key: "Status", value: "Concepts. Not the businesses' official sites." },
];

function SectionTitle({
    number,
    children,
}: {
    number: string;
    children: React.ReactNode;
}) {
    return (
        <div className="pt-20 pb-8">
            <span className="halftone-screen inline-block w-16 h-3 text-black opacity-60 mb-5" />
            <h2 className="lg:text-5xl text-3xl font-medium flex gap-4 items-baseline">
                <span className="opacity-25 text-2xl lg:text-3xl">{number}</span>
                <span>{children}</span>
            </h2>
        </div>
    );
}

export default function ConceptsPage() {
    return (
        <main className="relative paper">
            <Navbar />

            {/* Hero */}
            <section className="relative px-[5%] pt-[18vh] pb-[6%] border-b border-black">
                <Link
                    href="/#work"
                    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity w-fit mb-10"
                >
                    <ArrowLeft size={16} /> Back to work
                </Link>

                <div className="flex items-center gap-4 mb-8">
                    <span className="halftone-screen inline-block w-10 h-6 text-black opacity-70" />
                    <span className="h-5 w-px bg-black/20" />
                    <span className="text-[11px] uppercase tracking-[0.25em] opacity-50">
                        Side project · 2026
                    </span>
                </div>

                <h1 className="lg:text-[8rem] text-6xl font-medium leading-[0.9] tracking-tight pb-8">
                    Concepts
                </h1>

                <p className="lg:text-4xl text-xl font-light lg:max-w-[70%] leading-snug">
                    Small businesses people clearly love, with{" "}
                    <span className="bg-yellow-300">
                        great reviews and a website that lets them down.
                    </span>
                </p>

                <p className="text-base opacity-70 lg:max-w-[52%] pt-8 leading-relaxed">
                    I went through Google Maps looking for places with hundreds
                    or thousands of reviews and a site that was missing, broken
                    or stuck in 2012. Then I built the one I&apos;d give each of
                    them. A bakery in El Paso, an eye hospital in Patna, a BBQ
                    truck in Shreveport, a brass works in Jamnagar. Twenty so
                    far.
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-10">
                    <Link
                        href="#concepts"
                        className="offsetstyle bg-black text-white px-5 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors gap-3 rounded-full"
                    >
                        See the concepts <ArrowUpRight size={18} />
                    </Link>
                    <Link
                        href="/hire"
                        className="px-5 py-2 w-fit flex items-center hover:bg-black hover:text-white border border-black transition-colors gap-3 rounded-full"
                    >
                        Want one? <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section className="grain relative bg-[#111] text-[#f4f2ee] px-[5%] py-[5%] overflow-hidden">
                <span
                    aria-hidden
                    className="halftone-screen absolute inset-x-0 bottom-0 h-24 text-[#f4f2ee] opacity-20 pointer-events-none"
                />
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 relative">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col gap-1">
                            <span className="lg:text-7xl text-4xl font-medium leading-none">
                                {s.value}
                            </span>
                            <span className="text-xs opacity-50 pt-2 uppercase tracking-widest">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Facts */}
            <section className="px-[5%] py-[3%] border-b border-black">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {facts.map((f) => (
                        <div
                            key={f.key}
                            className="flex flex-col gap-1 border-l-4 border-yellow-300 pl-4"
                        >
                            <span className="text-[11px] uppercase tracking-widest opacity-50">
                                {f.key}
                            </span>
                            <span className="text-sm">{f.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            <article className="px-[5%] pb-[8%]">
                <div className="lg:max-w-[80%]">
                    <SectionTitle number="01">How I picked them</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p>
                            The reviews were the filter. A place with two
                            thousand reviews has already done the hard part:
                            people like it enough to say so. If the website then
                            sends them to a parked domain or a page full of
                            placeholder text, that&apos;s a problem the owner
                            probably hasn&apos;t noticed, and one I can actually
                            fix.
                        </p>
                        <p>
                            I checked every candidate by hand and dropped
                            anything that already had a decent site, which was
                            most of them. What was left fell into three groups:
                            no site at all, a site that&apos;s broken (lorem
                            ipsum, demo content, a hijacked domain), and a site
                            that simply stopped in 2012.
                        </p>
                    </div>

                    <SectionTitle number="02">The rules I kept</SectionTitle>
                    <div className="flex flex-col gap-4 text-base opacity-80 leading-relaxed lg:max-w-[85%]">
                        <p className="lg:text-2xl text-lg font-light border-l-4 border-black pl-6 py-2 opacity-100">
                            Nothing invented. No fake reviews, no made-up
                            prices, no awards nobody gave them.
                        </p>
                        <p>
                            Hours, menus, services and history all come from
                            public sources: their own pages, listings, local
                            news. Where sources disagreed, the site says
                            &ldquo;call to check&rdquo; instead of guessing.
                            Every concept carries a small banner saying it
                            isn&apos;t the official site, stays out of search
                            engines, and uses sample photos until the owner
                            sends their own.
                        </p>
                        <p>
                            Each one also gets its own look and its own
                            typeface. A panadería in El Paso and a brass
                            exporter in Jamnagar shouldn&apos;t feel like the
                            same template with the colours swapped.
                        </p>
                    </div>
                </div>

                <div id="concepts" className="scroll-mt-24">
                    <SectionTitle number="03">The concepts</SectionTitle>
                    <ConceptGrid concepts={concepts} />
                </div>

                <div className="lg:max-w-[80%]">
                    <div className="flex flex-col gap-4 text-sm opacity-60 leading-relaxed lg:max-w-[85%] pt-16">
                        <p>
                            Business names and trademarks belong to their owners.
                            If one of these is your business and you&apos;d like
                            the concept taken down, or handed over to you, just
                            get in touch.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-10 pt-8 border-t border-black border-dashed">
                        <Link
                            href="/hire"
                            className="offsetstyle bg-black text-white px-5 py-2 w-fit flex items-center hover:bg-white hover:text-black border border-black transition-colors gap-3 rounded-full"
                        >
                            Get a site like this <ArrowUpRight size={18} />
                        </Link>
                        <Link
                            href="/#work"
                            className="bg-yellow-300 text-black px-5 py-2 w-fit flex items-center hover:bg-transparent border border-black transition-colors gap-3 rounded-full"
                        >
                            More of my work <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
