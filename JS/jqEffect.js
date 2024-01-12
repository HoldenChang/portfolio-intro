$(document).ready(()=>{

    $("#headerToggle").click(()=>{

        $(".menu").toggleClass("show");

        var currentExpandedState = $('#headerToggle').attr("aria-expanded");

        $('#headerToggle').attr("aria-expanded", currentExpandedState === "false" ? "true" : "false");
    });

    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray(".project_Item");

    gsap.to(horSection, {
        xPercent: -250 * (horSection.length - 1),
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

    const backgroundColors = ['#000', '#fff', '#e8d5ca'];
    const fontColors = ['#b81191', '#db0404', '#6763c7'];
    function changeColors() {

    const randomBgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    const randomFontColor = fontColors[Math.floor(Math.random() * fontColors.length)];

    $('.contactDesc').css('background-color', randomBgColor);
    $('.contactDesc i').css('color', randomFontColor);
    }

    setInterval(changeColors, 5000);

});
