import Footer from "@/components/Common/Footer";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import ConceptGrid, { Concept } from "@/components/concepts/ConceptGrid";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Concepts | Diptanshu Mahish",
    description:
        "Fifty-three small businesses with great Google reviews and a missing or broken website, and the site I'd build each of them.",
    openGraph: {
        title: "Concepts | Diptanshu Mahish",
        description:
            "Fifty-three small businesses with great reviews and weak websites, and the sites I'd build them.",
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

const stats = [
    { value: "58", label: "sites" },
    { value: "35k+", label: "reviews" },
    { value: "49", label: "typefaces" },
];

export default function ConceptsPage() {
    return (
        <main className="relative paper">
            <Navbar />

            <section className="px-[5%] lg:pt-[16vh] pt-28 pb-10">
                <Link
                    href="/#work"
                    className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity w-fit mb-8"
                >
                    <ArrowLeft size={16} /> Back to work
                </Link>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/15 pb-8">
                    <div className="flex flex-col gap-4 lg:max-w-[55%]">
                        <h1 className="lg:text-7xl text-5xl font-medium tracking-tight leading-none">
                            Concepts
                        </h1>
                        <p className="text-base lg:text-lg opacity-70 leading-relaxed">
                            Small businesses with great Google reviews and a weak
                            or missing website, and the site I&apos;d build each of
                            them. Unsolicited, and nothing invented.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 lg:flex lg:gap-10">
                        {stats.map((s) => (
                            <p key={s.label} className="flex flex-col">
                                <span className="text-2xl lg:text-4xl font-medium leading-none">
                                    {s.value}
                                </span>
                                <span className="text-xs lg:text-sm opacity-50 pt-1 leading-tight">
                                    {s.label}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section id="concepts" className="px-[5%] pb-[8%] scroll-mt-24">
                <ConceptGrid concepts={concepts} />

                <div className="grid lg:grid-cols-3 gap-8 text-sm opacity-60 leading-relaxed mt-24 pt-8 border-t border-black/15">
                    <p>
                        Found on Google Maps: places with
                        hundreds or thousands of reviews and a site that was
                        missing, broken or stuck in 2012.
                    </p>
                    <p>
                        Hours, menus and history come from public sources. No
                        fake reviews, prices or awards. Each site has a banner
                        saying it isn&apos;t official, stays out of search
                        engines, and uses sample photos.
                    </p>
                    <p>
                        Business names and trademarks belong to their owners. If
                        one of these is your business and you&apos;d like it taken
                        down, or handed over to you, get in touch.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-10 text-sm">
                    <Link
                        href="/hire"
                        className="bg-black text-white px-5 py-2 flex items-center gap-2 rounded-full hover:opacity-80 transition-opacity"
                    >
                        Get a site like this <ArrowUpRight size={16} />
                    </Link>
                    <Link
                        href="/#work"
                        className="flex items-center gap-2 underline underline-offset-4 opacity-70 hover:opacity-100"
                    >
                        More of my work
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
