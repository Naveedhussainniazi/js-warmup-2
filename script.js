window.addEventListener("mousemove", (details) => {
    gsap.to('#rect', {
        left: details.clientX + "px",
        ease: Power3
    });
    });