$(document).ready(()=>{

    $("#headerToggle").click(()=>{

        $(".menu").toggleClass("show");

        var currentExpandedState = $('#headerToggle').attr("aria-expanded");

        $('#headerToggle').attr("aria-expanded", currentExpandedState === "false" ? "true" : "false");
    });

    animateLines($('.firstLine'), $('.secondLine'));
    
    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray(".project_Item");

    gsap.to(horSection, {
        xPercent: -250 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 0px",
            end: "+=800",
            pin: true,
            scrub: 0.2,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
});
function animateLines($currentLine, $nextLine) {
    $currentLine.fadeIn(1500, function() {
        $currentLine.fadeOut(1000, function() {
            if ($nextLine.length) {
                animateLines($nextLine, $nextLine.next('.lastLine'));
            } else {
                $('.lastLine').fadeIn(1000);
            }
        });
    });
}
