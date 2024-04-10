import gsap from "gsap";

export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
            opacity: 1,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            stagger: 0.2,
            delay: 0.3,
            ease: "ease-in",
            opacity: 0.3,
        });
    }
};
