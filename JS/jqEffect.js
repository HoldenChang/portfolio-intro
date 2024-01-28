$(document).ready(()=>{

    $("#headerToggle").click(()=>{

        $(".menu").toggleClass("show");

        var currentExpandedState = $('#headerToggle').attr("aria-expanded");

        $('#headerToggle').attr("aria-expanded", currentExpandedState === "false" ? "true" : "false");
    });
    $('main').fadeOut();
    $('.firstLine').fadeIn(2000, function(){
        $('.firstLine').fadeOut(1000, function(){
            $('.secondLine').fadeIn(2000, function(){
                $('.secondLine').fadeOut(1000, function(){
                    $('.thirdLine').fadeIn(2000, function(){
                        $('.thirdLine').fadeOut(1000, function(){
                            $('.start').fadeOut(1000);
                            $('main').fadeIn();
                        })
                    });
                })
            });
        })
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

});
