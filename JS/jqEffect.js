$(document).ready(()=>{

    $("#headerToggle").click(()=>{

        $(".menu").toggleClass("show");

        var currentExpandedState = $('#headerToggle').attr("aria-expanded");
        $('#headerToggle').attr("aria-expanded", currentExpandedState === "false" ? "true" : "false");
    });

    $('.project1').on('mouseenter', (event)=>{
        $('.project1').css({
            'transform': 'scale(0.8)',
            'border': '1px solid red',
            'transition': '.5s'
        });
        $('.project1 img').css({
            'opacity': '0.7'
        });
        $('.project1 p').css({
            'opacity': '1'
        });
    }).on('mouseleave', (event)=>{
        $('.project1').css({
            'transform': 'scale(1)',
            'border': 'none',
            'transition': '.5s'
        });
        $('.project1 img').css({
            'opacity': '1'
        });
        $('.project1 p').css({
            'opacity': '0'
        });
    });
    $('.project2').on('mouseenter', (event)=>{
        $('.project2').css({
            'transform': 'scale(0.8)',
            'border': '1px solid blue',
            'transition': '.5s'
        });
        $('.project2 img').css({
            'opacity': '0.7'
        });
        $('.project2 p').css({
            'opacity': '1'
        });
    }).on('mouseleave', (event)=>{
        $('.project2').css({
            'transform': 'scale(1)',
            'border': 'none',
            'opacity': '1',
            'transition': '.5s'
        });
        $('.project2 img').css({
            'opacity': '1'
        });
        $('.project2 p').css({
            'opacity': '0'
        });
    });
});