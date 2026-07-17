import AnimatedText from "@/components/Common/AnimatedText";
import SectionDetails from "@/components/Common/SectionDetails";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import CommonImage from "@/components/Common/CommonImage";
import Heading from "@/components/Common/Heading";
export default function Contact() {
    return (
        <div className="">
            <Heading
                heading={"Now how do we connect?"}
                number={4}
                key="Contact"
            />

            <div className="flex lg:flex-row flex-col-reverse bg-[#111]   ">
                <CommonImage
                    alt="Diptanshu Mahish"
                    classList="lg:w-[50%] w-full h-auto grayscale object-cover"
                    height={900}
                    width={900}
                    imageLink="/Assets/Contact/me.webp"
                />
                <div className="lg:w-[50%] w-full h-full p-[5vw] ">
                    <div className="flex  items-center gap-4">
                        <Image
                            src="/Assets/Contact/circle.svg"
                            height={900}
                            width={900}
                            alt="Diptanshu Mahish"
                            className="w-[15%] h-auto invert "
                        />
                        <h3 className="text-white text-2xl lg:w-[40%]">
                            Just fill up this form and I will get back to you
                            ASAP.
                        </h3>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
