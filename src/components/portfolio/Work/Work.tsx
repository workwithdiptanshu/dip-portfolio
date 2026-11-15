import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import { ProjectCard } from "@/components/work/CaseStudy";
import { projects } from "@/components/work/projects";

/** Everything except Bitgrain, which has its own section above. */
const rest = projects.filter((p) => p.slug !== "bitgrain");

export default function Work() {
    return (
        <section id="work" className="max-w-[856px] mx-auto px-4 pt-20 sm:pt-28 scroll-mt-6">
            <SectionTitle
                title="And a few more things"
                note="all shipped!"
                sub="Other things I made because I wanted them to exist. Every one of them shipped."
            />
            <div className="flex flex-col gap-4 pt-10">
                {rest.map((p, i) => (
                    <ProjectCard project={p} index={i + 1} key={p.slug} />
                ))}
            </div>
            <div className="flex justify-center pt-8">
                <Link
                    href="/work"
                    className="bg-card hover:bg-ink hover:text-white transition-colors rounded-full px-5 py-2.5 text-sm"
                >
                    All work, with the stories behind it
                </Link>
            </div>
        </section>
    );
}
