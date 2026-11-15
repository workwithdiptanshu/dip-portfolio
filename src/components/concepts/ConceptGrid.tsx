import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Concept {
    slug: string;
    what: string;
    where: string;
    kind: string;
    reviews: string;
}

const BASE = "https://concepts.diptanshumahish.in";

export default function ConceptGrid({ concepts }: { concepts: Concept[] }) {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {concepts.map((c) => (
                <Link
                    key={c.slug}
                    href={`${BASE}/${c.slug}/`}
                    target="_blank"
                    className="group rounded-[28px] bg-card hover:bg-[#DCD3C2] transition-colors p-4 flex flex-col gap-4 text-ink"
                >
                    <div className="mat relative aspect-[3/2] !border-4 !rounded-[18px]">
                        <Image
                            src={`/Assets/work/concepts/${c.slug}.webp`}
                            alt={`Concept homepage for ${c.what.toLowerCase()}, ${c.where}`}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                    <div className="flex items-start justify-between gap-4 px-1 pb-1">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[17px] leading-snug">
                                {c.what}
                            </h3>
                            <p className="text-sm text-muted">
                                {c.where} · {c.reviews}
                            </p>
                        </div>
                        <ArrowUpRight
                            size={18}
                            className="shrink-0 mt-1 opacity-40 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}
