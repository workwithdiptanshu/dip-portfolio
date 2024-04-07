import AnimatedText from "@/components/Common/AnimatedText";
import SectionDetails from "@/components/Common/SectionDetails";
import React from "react";
import ServiceItem from "./ServiceItem";
import Heading from "@/components/Common/Heading";

export default function Services() {
    return (
        <div className="overflow-hidden h-min">
            <Heading
                heading={["And Now ", "What Services", "Do I Offer?"]}
                number={2}
                key="Services"
            />
            <div className=" py-4 overflow-hidden">
                <ServiceItem
                    bgColor="#C8ADFF"
                    imageScrollSpeed="-0.09"
                    highlight="#FF93D4"
                    bgImage="/Assets/back-light-3.svg"
                    details="Empower your brand with a standout online presence. Your
                    website is the face of your brand, and I specialize in
                    crafting unique, clean, and modern websites that captivate
                    your audience. From sleek aesthetics to seamless
                    functionality, I create minimalist designs that resonate
                    with your vision. Elevate your brand's digital identity with
                    a website that leaves a lasting impression. With a keen eye
                    for detail and a commitment to excellence, I bring your
                    unique requirements to life. Let's collaborate to make
                    your website the star of your brand's online journey.
                    Unleash the potential of your digital presence – let's build
                    something extraordinary together."
                    itemNumber="01"
                    mainImage="/Assets/services/frontend.svg"
                    name="Website Development."
                    scrollSpeed="-0.9"
                    key="fd"
                />
                <ServiceItem
                    bgColor="#DCFF93"
                    imageScrollSpeed="-0.08"
                    highlight="#93C5FF"
                    bgImage="/Assets/back-light-3.svg"
                    details="My passion for app development ignited in school, captivated by the incredible potential of creating powerful and efficient applications. Choosing Flutter for its versatility, I've dedicated myself to crafting clean, lightweight apps that seamlessly blend innovative design with optimal performance. In my portfolio, the App Development section showcases my commitment to delivering user-friendly solutions that leave a lasting impact through sleek design and efficient functionality."
                    itemNumber="02"
                    mainImage="/Assets/services/app.svg"
                    name="App Development"
                    scrollSpeed="-0.8"
                    key="ad"
                />
                <ServiceItem
                    bgColor="#FF9393"
                    imageScrollSpeed="-0.05"
                    highlight="#D4FFCD"
                    bgImage="/Assets/back-light-3.svg"
                    details="Crafting visually appealing and innovative designs is my passion, and I am committed to bringing a touch of sophistication to every project. I have a keen eye for clean and modern aesthetics, ensuring that every design I create is not only visually pleasing but also aligned with contemporary trends. Whether it's user interfaces or user experiences, I strive to elevate the overall design by infusing creativity and a fresh perspective. In my portfolio's Design and UI/UX section, you'll find a showcase of my dedication to pushing the boundaries of design, transforming concepts into visually stunning and intuitively crafted experiences. I believe that great design not only captures attention but also enhances usability, and my work reflects this philosophy. Explore my portfolio to witness how I translate my passion for innovative and clean designs into impactful and user-friendly solutions."
                    itemNumber="02"
                    mainImage="/Assets/services/des.svg"
                    name="UI/UX Work + Brand Content "
                    scrollSpeed="-0.8"
                    key="ui"
                />
            </div>
        </div>
    );
}
