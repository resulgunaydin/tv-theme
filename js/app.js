$(function(){
    $(".toggle-turkey").on("click", function(){
        $(".turkey").stop().show(1000);
        $(".europe").stop().hide(1000);
        $(".toggle-turkey").css({
            "background-color":"#2395f3",
            "color":"#fff"
        });
        $(".toggle-europe").css({
            "background-color":"#fff",
            "color":"#2395f3"
        });
    });

    $(".toggle-europe").on("click", function(){
        $(".turkey").stop().hide(1000);
        $(".europe").stop().show(1000);
        $(".toggle-turkey").css({
            "background-color":"#fff",
            "color":"#2395f3"
        });
        $(".toggle-europe").css({
            "background-color":"#2395f3",
            "color":"#fff"
        });
    });

    $(".nav-right-bar").on("click", function(){
        $(".menu").stop().slideToggle(700);
    });

    $(".wpSmall").on("click", function(){
        $(".wpBig").slideToggle(300)
    });
});

ScrollReveal().reveal('.service-section-left', { delay: 300 });
ScrollReveal().reveal('.service-section-right', { delay: 750 });

ScrollReveal().reveal('.thousand-card-list-top', { delay: 300 });
ScrollReveal().reveal('.thousand-card-list-bottom', { delay: 500 });

ScrollReveal().reveal('.top-channels-top', { delay: 300 });
ScrollReveal().reveal('.top-channels-bottom', { delay: 750 });


ScrollReveal().reveal('.packages', { delay: 300 });
ScrollReveal().reveal('.packages-title', { delay: 500 });
ScrollReveal().reveal('.packages-toggle', { delay: 700 });


ScrollReveal().reveal('.worldwide-cards', { delay: 400 });
ScrollReveal().reveal('.footer', { delay: 400 });