import React from "react";
import { Metadata } from "next";
import { CaseShell, ProjectCard } from "@/components/work/CaseStudy";
import { projects } from "@/components/work/projects";
import { Paw } from "@/components/cats/Cats";

export const metadata: Metadata = {
    title: "Work | Diptanshu Mahish",
    description:
        "Things I've designed, built and shipped: Bitgrain, Concepts, Rustybase, Calendify and a few Android apps.",
    openGraph: {
        title: "Work | Diptanshu Mahish",
        description: "Things I've designed, built and shipped.",
        url: "https://diptanshumahish.in/work",
    },
};

export default function WorkIndex() {
    return (
        <CaseShell>
            <section className="max-w-[856px] mx-auto px-4 pt-14 sm:pt-20">
                <div className="flex flex-col items-center text-center pb-12">
                    <Paw color="moss" className="w-8 h-8 mb-5 -rotate-12" />
                    <h1 className="font-serif text-[44px] sm:text-[60px] leading-[1.02] tracking-[-0.02em] max-w-[560px]">
                        Things I&rsquo;ve made
                    </h1>
                    <p className="text-[15px] sm:text-base leading-relaxed max-w-[440px] pt-5">
                        Products, tools and side projects I designed and built
                        myself. Each one has the story of how it came together.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {projects.map((p, i) => (
                        <ProjectCard project={p} index={i} key={p.slug} />
                    ))}
                </div>
                <p className="text-center text-sm text-muted pt-10">
                    And my day job, building Supaboard from the first commit.
                </p>
            </section>
        </CaseShell>
    );
}
