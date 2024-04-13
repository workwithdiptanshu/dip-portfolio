import React from "react";
import WorkItem, { WorkItemProps } from "./WorkItem";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, GithubIcon, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const workItemsArray: WorkItemProps[] = [
    {
        headingName: "Warriors Group App",
        itemNumber: "01",
        itemDetails: `This application serves as the
        backbone for
     
            warriorsgrp.com
    
        . This application
        <b>
            tracks employees working hours
        </b>
        , employees can update the forms,
        send mass mails, update concerns and
        such similar things. It also
        includes a detailed admin panel that
        allows the admins to look after the
        employees information, add new
        employees and remove them as well.
        <br /> <br />
        <p>
            
            Complete with proper charts and
            data for reading previous data
            recorded from employees,
            sendgrid api has been used to
            send the mass mails, along with
            attachments.
        </p>
    </p>`,
        itemImage: "/Assets/work/wgnew.svg",
        linksAvailable: false,
        techUsed: `NextJS, Tailwind, SendGrid,
    FormSubmit, FireBase`,
        appType: ["Progressive Web Application"],
        sideHeading: `The official work application for Warriors's Group LLC built using `,
        itemMobileImage: "/Assets/work/wgmob.svg",
    },
    {
        headingName: "Cursed Diary Website",
        itemNumber: "02",
        itemDetails: `This fun website was made for the creepypasta readers
        <b>
           with creeepy content
        </b>
        ,users can read creepy content, horror experiences, 
        share their views, in a clean UI format.
        <br /> <br />
        <p>
           The super clean UI, with a super readable and user friendly font makes content reading much more easier. I've used the power of Notion Databases to manage the content with robustness. Data is rendered natively
        </p>
    </p>`,
        itemImage: "/Assets/work/cdnew.svg",
        linksAvailable: true,
        techUsed: `NextJS, Tailwind & Notion Databases`,
        appType: ["website"],
        sideHeading: `A fun website made for the creepypasta readers built using `,
        githubLink: "https://github.com/diptanshumahish/curseddiary",
        livelink: "https://curseddiary.vercel.app",
        itemMobileImage: "/Assets/work/cdmob.svg",
    },
    {
        headingName: "Katze Speaks Website",
        itemNumber: "03",
        itemDetails: `A fun little blogging website for the horror bloggers
        <b>
            with a twist!
        </b>
        , readers can read experiences written by their fellow friends, and strangers as well. Can ready catagorized content, comment their views as well. All with a clean and dark UI.
        <br /> <br />
        <p>
            complete with a well made text editor and content upload page, with a rich text editor and image upload features
        </p>
    </p>`,
        itemImage: "/Assets/work/ksweb.svg",
        linksAvailable: true,
        techUsed: `NextJS, Tailwind, MongoDB, ExpressJS, Playbook, Cloudinary`,
        appType: ["Fullstack Website"],
        sideHeading: `A fun website made for the horror bloggers built using `,
        githubLink: "https://github.com/diptanshumahish/katzespeaks",
        livelink: "https://katzespeaks.vercel.app",
        itemMobileImage: "/Assets/work/ksmob.svg",
    },
    {
        headingName: "Windows Utilities",
        itemNumber: "04",
        itemDetails: `A small project to ease the issues faced by Windows users , with these few simple python and batch scripts, users can easily do tasks such as image compression, organize files, flatten folders and many more such stuff with ease
        <br /> <br />
        <p>
            with the basic requirements , i.e python and a few python ,modules being installed on your device this is a super lightweight program set!
        </p>
    </p>`,
        itemImage: "/Assets/work/wuweb.svg",
        linksAvailable: true,
        techUsed: `Python, BATCH`,
        appType: ["Python scripts"],
        sideHeading: `A set of tools to ease your experience `,
        githubLink: "https://github.com/diptanshumahish/windows_utliities",
        livelink: "https://github.com/diptanshumahish/windows_utliities",
        itemMobileImage: "/Assets/work/wumob.svg",
    },
    {
        headingName: "Wally",
        itemNumber: "05",
        itemDetails: `An Android wallpapers applications (wallpapers made by me). with a super clean and fresh UI. Wally is a must have for all aesthetic people.
        <br /> <br />
        <p>
           recently crossed the 300+ downloads mark on Playstore. this app uses an Express Server hosted at Cyclic.sh and the images are stores using Playbook
        </p>
    </p>`,
        itemImage: "/Assets/work/waweb.svg",
        linksAvailable: true,
        techUsed: `Flutter, ExpressJS, Github, PlayBook`,
        appType: ["Flutter Application"],
        sideHeading: `An aesthetic wallpapers app, wallpapers made by yours ❤️ `,
        githubLink: "https://github.com/diptanshumahish/windows_utliities",
        livelink:
            "https://play.google.com/store/apps/details?id=com.diptanshumahish.wally&hl=en&gl=US",
        itemMobileImage: "/Assets/work/wamob.svg",
    },
    {
        headingName: "Zen Clock/ Pomodoro",
        itemNumber: "06",
        itemDetails: `An Android zen clock application with 500+ downloads on Play Store!
        <br /> <br />
        <p>
        I noticed  that Zen clock is a pretty cool productivity thing. I myself was using one on my old  Tablet. I noticed there were too many ads. I thus decided to make my own Zen clock along with a Pomodoro timer. This ap allows various scenes and also plays ambient music if you want to play. The scenes are basically the various themes in the app. Which ranges from aesthetic images to amoled 
        </p>
    </p>`,
        itemImage: "/Assets/work/zweb.svg",
        linksAvailable: true,
        techUsed: `Flutter,  Github`,
        appType: ["Flutter Application"],
        sideHeading: `A zen clock app with a built in pomodoro `,
        githubLink: "https://github.com/diptanshumahish/windows_utliities",
        livelink:
            "https://play.google.com/store/apps/details?id=com.diptanshumahish.zen_clock&hl=en&gl=US",
        itemMobileImage: "/Assets/work/zmob.svg",
    },
];

export default function Work() {
    return (
        <div className=" overflow-hidden">
            <div className="lg:h-[10vh]"></div>
            <div className="bg-[#1a1a1a] px-[5%] text-white py-[5%]">
                <h2 className="lg:text-7xl text-4xl lg:py-8 py-4">
                    <span className="flex">
                        Here are some of my selected works ^^
                    </span>
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {workItemsArray.map((ele, idx) => (
                        <WorkItem workItem={ele} key={idx} />
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
