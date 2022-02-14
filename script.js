$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY> 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

// silde-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script


    var typed = new Typed(".typing-3",{
        strings:["Information Technology"],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 0,
        startDelay: 500,
        loop: false,
        // cursorChar:'',
    });

    var typed = new Typed(".typing-5",{
        strings:["handsome","pogi","cute","cute ulet"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 0,
        startDelay: 1000,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
         margin: 20,
         loop: true,
         autoplayTimeOut: 2000,
         autoplayHoverPause: true,
         responsive:{
             0:{
                 items: 1,
                 nav: false
             },
             600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
         }
    })
    });
