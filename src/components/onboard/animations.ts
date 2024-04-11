import gsap from "gsap";

export const animatePageIn = () => {
    const bar = document.querySelectorAll(".bar");
    const counterElement = document.querySelector<HTMLDivElement>(".counter");
    const header = document.getElementById("header");
    const overlay = document.getElementById("overlay");
    const name = document.getElementById("name");
    var currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            if (counterElement && bar) {
                const tl = gsap.timeline();

                tl.to(counterElement, 1.2, {
                    yPercent: 100,
                    opacity: 0,
                    delay: 0.5,
                    ease: "power2.inOut",
                });

                tl.to([bar, name], 0.9, {
                    height: 0,
                    stagger: {
                        amount: 0.5,
                    },
                    ease: "power4.inOut",
                });
                tl.to([name, overlay], {
                    display: "hidden",
                    zIndex: "-100",
                    stagger: {
                        amount: 1,
                    },
                    ease: "power4.inOut",
                });
                if (header) {
                    tl.set(header, {
                        y: 400,
                        opacity: 0,
                        stagger: {
                            amount: 0.5,
                        },
                        ease: "power4.inOut",
                    }).to(header, {
                        y: 0,

                        opacity: 1,
                        stagger: {
                            amount: 0.5,
                        },
                    });
                }
            }
            return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
            currentValue = 100;
        }
        if (counterElement) {
            counterElement.textContent = currentValue.toString();
        }
        var delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
};
