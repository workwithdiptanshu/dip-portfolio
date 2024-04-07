import React from "react";
import WorkItem from "./WorkItem";

export default function Work() {
    return (
        <div className=" overflow-hidden">
            <div className="lg:h-[10vh]"></div>

            <div>
                <WorkItem
                    backgroundScroll="0.4"
                    imageScroll="-0.3"
                    key="01"
                    contentNumber="01"
                    backgroundColor="121024"
                    subTextColor="#FFCFFA"
                    backgroundImage="/Assets/back-dark.svg"
                    contentFullDesc=" Warriors Group Work Application, built with Next.js,
                Tailwind CSS, and Firebase FormSubmit, simplifies employee
                work hour tracking and form submissions. The user-friendly
                interface allows easy data submission, enhanced by SendGrid
                API integration for efficient mass emails. The clean UI
                ensures a seamless experience, while the admin dashboard
                provides graphical insights into form data. This powerful
                tool exemplifies streamlined communication and data
                management, showcasing the developer's proficiency in
                cutting-edge web technologies"
                    contentMiniDesc="The official web-app for Warriors' Group LLC"
                    contentName=" Warriors's Group Work Application"
                    contentTags={[
                        "Next JS",
                        "Tailwind CSS",
                        "Typescript",
                        " Firebase",
                        "Formsubmit",
                        "Sendgrid",
                    ]}
                    mainImagery="/Assets/work/wg2.webp"
                    LiveLink=""
                    githubLink=""
                />
                <WorkItem
                    backgroundScroll="-0.1"
                    imageScroll="-0.7"
                    subTextColor="#FAD4C1"
                    key="021"
                    contentNumber="02"
                    backgroundColor="293960"
                    backgroundImage="/Assets/back-dark-2.svg"
                    contentFullDesc="Cursed diary is a creepy pasta website, where you can submit horror and such stuff, readers can read stuff easily and with a minimal and clean UI, it becomes easy for the users to navigate between pages and read their favorite content with ease. Proper SEO practices have been put to use here and every page is well shareable"
                    contentMiniDesc="Creepypasta blogs made using the notion databases"
                    contentName="Cursed diary : Creepypasta content"
                    contentTags={[
                        "Next JS",
                        "Tailwind CSS",
                        "Typescript",
                        "Notion",
                        "Node JS",
                        "Vercel",
                    ]}
                    mainImagery="/Assets/work/cd.webp"
                    LiveLink="https://curseddiary.vercel.app/"
                    githubLink="https://github.com/diptanshumahish/curseddiary"
                />
                <WorkItem
                    backgroundScroll="-0.1"
                    imageScroll="-0.7"
                    subTextColor="#FAD4C1"
                    key="02"
                    contentNumber="03"
                    backgroundColor="111"
                    backgroundImage="/Assets/back-dark-2.svg"
                    contentFullDesc=" Katze Speaks is a full-stack creepy pasta website with a sleek, minimalist UI, crafted entirely using the MERN stack. The platform invites users to share and explore chilling experiences through blogs and narratives in the horror genre. With a focus on user engagement, Katze Speaks provides a seamless experience for both contributors and readers. The website is not only a hub for spooky tales but also prioritizes visibility with SEO optimization. Katze Speaks, an immersive space for horror enthusiasts, demonstrates the developer's expertise in creating a captivating, user-friendly MERN stack application tailored for the eerie and unknown."
                    contentMiniDesc="A fullstack creepypasta website"
                    contentName="Katze Speaks"
                    contentTags={[
                        "Next JS",
                        "Tailwind CSS",
                        "Typescript",
                        "Express JS",
                        "Node JS",
                        "Mongo DB",
                        "Cloudinary",
                        "Playbook",
                        "Vercel",
                    ]}
                    mainImagery="/Assets/work/ks.webp"
                    LiveLink="https://katzespeaks.vercel.app/"
                    githubLink="https://github.com/diptanshumahish/katze-speaks-website"
                />
                <WorkItem
                    backgroundScroll="0.2"
                    imageScroll="-0.5"
                    subTextColor="#FAD4C1"
                    key="03"
                    contentNumber="04"
                    backgroundColor="472C1F"
                    backgroundImage="/Assets/back-dark.svg"
                    contentFullDesc="Introducing 'Wally,' a visually stunning Flutter-based app, now available on the Play Store. Embracing a super aesthetic and clean UI with minimalistic designs, Wally stands out as a go-to destination for beautiful wallpapers. Every wallpaper featured on the app is exclusively crafted by the developer. The backend is seamlessly hosted on cyclic.sh, while images are served from Playbook. Wally provides users with an immersive experience, offering a curated collection of eye-catching wallpapers, making it the perfect companion for those seeking a touch of elegance for their device backgrounds"
                    contentMiniDesc="A flutter Wallpapers app ( ✅Available on Play Store)"
                    contentName="Wally App"
                    contentTags={[
                        "Flutter",
                        "Node",
                        "Express JS",
                        "Mongo DB",
                        "Playbook",
                        "Figma",
                    ]}
                    mainImagery="/Assets/work/wally.webp"
                    LiveLink="https://katzespeaks.vercel.app/"
                    githubLink="https://github.com/diptanshumahish/katze-speaks-website"
                />
                <WorkItem
                    backgroundScroll="0.3"
                    imageScroll="-0.6"
                    subTextColor="#FFADDE"
                    key="04"
                    contentNumber="05"
                    backgroundColor="0C1E25"
                    backgroundImage="/Assets/back-dark-2.svg"
                    contentFullDesc="I noticed  that Zen clock is a pretty cool productivity thing. I myself was using one on my old  Tablet. I noticed there were too many ads. I thus decided to make my own Zen clock along with a Pomodoro timer. This ap allows various scenes and also plays ambient music if you want to play. The scenes are basically the various themes in the app. Which ranges from aesthetic images to amoled black or pure white. This app as of now is available on Play Store."
                    contentMiniDesc="A flutter Zen clock app ( ✅Available on Play Store)"
                    contentName="Zen Clock/ Pomodoro"
                    contentTags={["Flutter", "Figma"]}
                    mainImagery="/Assets/work/zen.webp"
                    LiveLink="https://katzespeaks.vercel.app/"
                    githubLink="https://github.com/diptanshumahish/katze-speaks-website"
                />
            </div>
        </div>
    );
}
