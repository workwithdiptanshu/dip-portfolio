import gsap from "gsap";

export const animatePageIn = () => {
    const bars = Array.from(document.querySelectorAll(".bar"));
    const counterElement = document.querySelector<HTMLDivElement>(".counter");
    const overlay = document.getElementById("overlay");
    const name = document.getElementById("name");
    const movingBar = document.getElementById("MBarInner");
    const barBack = document.getElementById("MBar");
    const back = document.getElementById("lBack");

    if (!counterElement || !movingBar) return;

    const furniture = [overlay, name, barBack, back, counterElement];

    // Anyone who has asked the OS for less motion gets the page, not the show.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(furniture, { display: "none" });
        return;
    }

    const count = { value: 0 };
    const tl = gsap.timeline();

    // The count and the bar fill are the same tween, so they cannot drift apart.
    tl.to(count, {
        value: 100,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => {
            const shown = Math.round(count.value);
            counterElement.textContent = String(shown);
            movingBar.style.width = `${shown}%`;
        },
    });

    tl.to([movingBar, back], {
        xPercent: 100,
        duration: 0.45,
        stagger: { amount: 0.12 },
        ease: "power4.inOut",
    });

    // Everything below overlaps the tween before it. Read the negative offsets
    // as "start this much before the previous step lands".
    tl.to(
        counterElement,
        { yPercent: 100, opacity: 0, duration: 0.25, ease: "power3.inOut" },
        "-=0.3",
    );

    tl.to(
        [...bars, name, barBack, back],
        {
            height: 0,
            duration: 0.3,
            stagger: { amount: 0.15 },
            ease: "power4.inOut",
        },
        "-=0.1",
    );

    tl.to(
        [name, overlay, barBack, movingBar, back],
        { autoAlpha: 0, duration: 0.2, ease: "power2.inOut" },
        "-=0.05",
    );

    // Take it out of the layout entirely. The old code set display "hidden",
    // which is not a value, so the overlay stayed in the tree at zero opacity.
    tl.set(furniture, { display: "none" });
};
