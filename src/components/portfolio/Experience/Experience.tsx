import React from "react";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

const experienceArray: ExperienceItemProps[] = [
    {
        role: "SDE II · Founding Engineer",
        company: "Supaboard.ai",
        companyLink: "https://supaboard.ai",
        duration: "Jul 2025 to Present",
        location: "Bengaluru, India",
        engagement: "Full-time",
        current: true,
        bgColor: "#1a1a1a",
        summary: "Supaboard lets a company ask questions about its own business in plain English and get a real answer back. I work on the dashboards and the agent that answers.",
        points: [
            "Joined as a <b>founding engineer</b> when the team was tiny. It's 12 people now, and I own core product and engineering decisions on the dashboard and the agent product.",
            "The dashboards are a drag-and-drop canvas of live widgets: 25+ kinds of chart, KPIs, tables and filters. People build them, drill into the numbers, and embed them inside their own apps.",
            "The agent side is the harder half. Someone types a question the way they'd say it out loud, and it has to come back with the right chart, the right table and an explanation of how it got there, without anyone writing SQL.",
            "It connects to 700+ apps, databases and warehouses, so the data arriving is never shaped the way you'd like it to be.",
            "I take features the whole way: designing them, building them, testing them, shipping them, then fixing what I got wrong. <b>Paying customers</b> use this every day.",
            "Most of the job is ambiguity. A request turns up as a vague business problem, and the work is turning it into something someone opens every morning without thinking about it.",
        ],
        stack: ["React", "TypeScript", "Tailwind CSS", "Data Visualisation"],
    },
    {
        role: "Graphic Designer",
        company: "Tahska India",
        duration: "Apr 2025 to Feb 2026",
        location: "Remote",
        engagement: "Part-time",
        bgColor: "#DCFF93",
        summary: "Brand campaigns and visual work, plus a website redesign that moved the numbers.",
        points: [
            "Redesigned the company website and <b>grew organic traffic by 30%</b>.",
            "Designed the brand campaigns and visuals across their digital channels, for a brand where the way it looks is most of what it's selling.",
            "Ran the social channels and planned the content that brought new customers in.",
            "I've kept doing design work alongside engineering on purpose. It's the reason I can build something and have it look like someone meant it.",
        ],
        stack: ["Figma", "Brand Identity", "Design Systems"],
    },
    {
        role: "Founding Engineer",
        company: "Catchmflix Pvt Ltd",
        companyLink: "https://www.catchmflixx.com/en",
        duration: "May 2024 to Jun 2025",
        location: "Remote",
        engagement: "Full-time",
        bgColor: "#C8ADFF",
        summary: "A streaming service for movies, shows, web series and originals. I built it for web and mobile, starting from an empty folder.",
        points: [
            "Owned how the whole thing was put together: the architecture, the way it looked, and the way the video actually played.",
            "Built <b>custom HLS video playback</b> for web and mobile, then wired it up to sign-in and content delivery.",
            "Video is unforgiving. Buffering, a weak connection and a licensing problem all reach the viewer as the same sentence, which is <i>it doesn't work</i>. Nearly all of the work is invisible when it goes right.",
            "Took the product to <b>1,000+ monthly users in its first month</b>.",
            "Sat with the founders on what to build next, and what to leave out.",
        ],
        stack: ["Flutter", "Next.js", "HLS", "Firebase"],
    },
    {
        role: "Frontend Engineer",
        company: "Fyipen Pvt Ltd",
        duration: "Apr 2023 to Sep 2024",
        location: "Remote",
        engagement: "Internship",
        bgColor: "#93C5FF",
        summary: "My first real experience writing code that other people depended on.",
        points: [
            "Worked hands-on in live codebases for several client companies, on software that was already in front of users.",
            "Built web apps with TypeScript and Next.js, and helped shape how the frontend was put together.",
            "This is where I learned that most of the job is reading code you didn't write and being careful with it.",
        ],
        stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
        role: "Graphic Designer",
        company: "Reset",
        duration: "Dec 2023 to Mar 2024",
        location: "Remote",
        engagement: "Internship",
        bgColor: "#FF9393",
        summary: "A lot of creative work, for a lot of brands, quickly.",
        points: [
            "Made <b>500+ digital assets</b> and social creatives, and gave the marketing a consistent look across every channel.",
            "Planned and made the social posts and reels that got those brands in front of more people.",
            "Working at that volume teaches you to make decisions fast and stop polishing.",
        ],
        stack: ["Figma", "Adobe Lightroom"],
    },
];

export default function Experience() {
    return (
        <div
            id="experience"
            className="relative z-10 bg-white overflow-hidden px-[5%] py-[5%]"
        >
            <h2 className="lg:text-7xl text-4xl lg:py-8 py-4">
                <span className="flex">Where I&apos;ve worked so far</span>
            </h2>
            <p className="opacity-60 lg:max-w-[50%] pb-6 text-sm">
                Two and a bit years of building things, mostly at small teams
                where you can decide something in the morning and have it live
                by the evening.
            </p>
            <div className="flex flex-col gap-8 pt-4">
                {experienceArray.map((ele) => (
                    <ExperienceItem item={ele} key={ele.company} />
                ))}
            </div>
        </div>
    );
}
