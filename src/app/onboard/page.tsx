import Image from "next/image";
import Link from "next/link";
import React from "react";

const onBoardCards: {
    name: string;
    subheading: string;
    to: string;
}[] = [
    {
        name: " Website development 🌐",
        subheading:
            "Creative designs, SEO checked websites, just for you at amazing prices",
        to: "web",
    },
    {
        name: "App development 📱",
        subheading:
            "Minimalist clean apps, for you. These apps will serve all your purposes",
        to: "app",
    },
    {
        name: "UI/UX designing 🎨",
        subheading:
            "Clean UI for your content, best quality designs, with smooth user experience",
        to: "des",
    },
    {
        name: "Others 👋",
        subheading:
            "Have a complex/big requirement, let's connect and talk separately. ",
        to: "others",
    },
];

export default function page() {
    return (
        <div className="min-h-screen min-w-screen bg-blue-950 lg:py-[8%] py-[20%] px-[5%]">
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-0 gap-8 ">
                <div className="text-white flex flex-col gap-4 lg:max-w-[60%]">
                    <h2 className="lg:text-6xl text-4xl pb-2 border-b">
                        Interested in working with me? 👋
                    </h2>
                    <span className="opacity-60 lg:text-md text-sm">
                        This can be the start of something really amazing! It
                        can be the one, the billion dollar project, or it can
                        also be some novel cause website or app. Let us see
                        where the stars take it to, It&apos;s always my promise
                        that I will give my best and try everything to make your
                        project a huge success ✨. Let&apos;s discuss your
                        project now ✅{" "}
                    </span>
                    <div className="py-8">
                        <h3 className="lg:text-4xl text-2xl">
                            What are you interested in ?
                        </h3>
                        <div className="grid grid-cols-2 lg:gap-6 gap-2 py-4 ">
                            {onBoardCards.map((ele, idx) => (
                                <Link
                                    href={`/onboard/${ele.to}`}
                                    key={idx}
                                    className="bg-white lg:px-4 px-2 py-2 flex flex-col gap-2 rounded-md text-black offsetstyle"
                                >
                                    <h2 className="lg:text-3xl text-2xl font-medium">
                                        {ele.name}
                                    </h2>
                                    <hr />
                                    <span className="text-sm opacity-60">
                                        {ele.subheading}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    src="/Assets/Contact/onboard.svg"
                    height={200}
                    width={700}
                    alt="Onboard"
                    className="lg:w-[30%] h-auto"
                />
            </div>
        </div>
    );
}
