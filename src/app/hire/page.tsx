import CommonImage from "@/components/Common/CommonImage";
import Footer from "@/components/Common/Footer";
import ContactForm from "@/components/portfolio/Contact/ContactForm";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <div>
            <Navbar />
            <div className="flex lg:flex-row flex-col-reverse bg-[#111]  ">
                <CommonImage
                    alt="Diptanshu Mahish"
                    classList="lg:w-[50%] w-full h-auto grayscale object-cover"
                    height={900}
                    width={900}
                    imageLink="/Assets/Contact/me.webp"
                />
                <div className="lg:w-[50%] w-full h-full p-[5vw] pt-[20vh] ">
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
            <Footer />
        </div>
    );
}
