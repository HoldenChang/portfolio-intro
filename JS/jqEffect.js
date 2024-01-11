$(document).ready(()=>{

    $("#headerToggle").click(()=>{

        $(".menu").toggleClass("show");

        var currentExpandedState = $('#headerToggle').attr("aria-expanded");

        $('#headerToggle').attr("aria-expanded", currentExpandedState === "false" ? "true" : "false");
    });

    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray(".project_Item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 0px",
            end: "+=1000",
            pin: true,
            scrub: 0.2,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });

});
