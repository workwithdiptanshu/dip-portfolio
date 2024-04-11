import gsap from "gsap";

export const animatePageIn = () => {
    const bar = document.querySelectorAll(".bar");
    const counterElement = document.querySelector<HTMLDivElement>(".counter");
    const header = document.getElementById("header");
    const overlay = document.getElementById("overlay");
    const name = document.getElementById("name");
    const movingBar = document.getElementById("MBarInner");
    const barBack = document.getElementById("MBar");
    var currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            if (counterElement && bar) {
                const tl = gsap.timeline();
                tl.to(movingBar, 0.9, {
                    xPercent: 100,

                    stagger: {
                        amount: 0.6,
                    },
                    ease: "power4.inOut",
                });
                tl.to(counterElement, 0.4, {
                    yPercent: 100,
                    opacity: 0,

                    ease: "power4.inOut",
                    stagger: {
                        amount: 0.8,
                    },
                });

                tl.to([bar, name, barBack], 0.4, {
                    height: 0,
                    stagger: {
                        amount: 0.5,
                    },
                    ease: "power4.inOut",
                });
                tl.to([name, overlay, barBack], 0.3, {
                    display: "hidden",
                    opacity: 0,
                    zIndex: "-100",
                    stagger: {
                        amount: 1,
                    },
                    ease: "power4.inOut",
                });
            }
            return;
        }
        currentValue += 1;
        if (currentValue > 100) {
            currentValue = 100;
        }
        if (counterElement && movingBar) {
            counterElement.textContent = currentValue.toString();
            movingBar.style.width = `${currentValue}%`;
        }
        var delay = 0.1;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
};
