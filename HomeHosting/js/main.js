$(document).ready(function(){
    "use strict";

    // slide
    $(".js-slide").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='slide-icon fa fa-angle-left'></i>", "<i class='slide-icon fa fa-angle-right'></i>"]
    });

    // review
    $(".js-review").owlCarousel({
        items: 1,
        loop: true,
        dot: true,
        nav: false
    });

    // Show Form search header
    $('.js-search').on('click', function(e){
        $(".h-search-bg").addClass('js-bg-search-active');
        $(".search-box").addClass('js-box-active');
        e.preventDefault();
    })
    $('.js-search-close').on('click', function(e){
        $(".h-search-bg").removeClass('js-bg-search-active');
        $(".search-box").removeClass('js-box-active');
        e.preventDefault();
    })
    $('.h-search-bg').on('click', function(e){
    $(".h-search-bg").removeClass('js-bg-search-active');
    $(".search-box").removeClass('js-box-active');
    e.preventDefault();
    })

    // Set location megamenu
    function setLocationMegamenu(wcontainer, selector){
        if($( window ).width() > 1200){
        var widthb = $( window ).width();
        var widthc = $(wcontainer).width() + 30;
        $(selector).css({
            'left': function(){
            var left_val = (widthb - widthc)/2;
            console.log(widthb);
            console.log(widthc);
            return left_val;
            }
        })
        }
        $(window).resize(function(){
        if ($(window).width() > 1200 ) {
            var widthb = $( window ).width();
            var widthc = $(wcontainer).width() + 30;
            $(selector).css({
            'left': function(){
                var left_val = (widthb - widthc)/2;
                console.log(widthb);
                console.log(widthc);
                return left_val;
            }
            })
        }
        })
    
    }
    setLocationMegamenu('.js-widthc', '.js-megamenu');

    //scroll menu
    function scrollMenu(){
        var menu = document.querySelectorAll('.header');
        var menu = menu[0];
            //Truy xuất div menu
            var status="duoi100";
        window.addEventListener("scroll",function(){
            var x = pageYOffset;
            if(x > 109){
                if(status == "duoi100")
                {
                    status="tren100";
                    menu.classList.add('actived');
                }
            }
            else{
                if(status=="tren100"){
                menu.classList.remove('actived');
                status="duoi100";}
            }
        })
    }
    scrollMenu();

    // Show menu mobie
    $('.js-menu-mobie').on('click', function(e){
        $('.js-menu-overlay').addClass('active');
        $('.menu-header').addClass('active');
        $('.js-close-menumobie').addClass('active');
    })
    $('.js-menu-overlay').on('click', function(e){
        $('.menu-header').removeClass('active');
        $('.js-menu-overlay').removeClass('active');
    })
    $('.js-close-menumobie').on('click', function(e){
        $('.menu-header').removeClass('active');
        $('.js-menu-overlay').removeClass('active');
        $('.js-close-menumobie').removeClass('active');
    })

    // Drop menu mobie
    $('.i-dropmenu-mobie').on('click', function(e){
        $('.megamenu').toggleClass('active');
    })

    // Popup video
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // sepbox carousel
    $(".js-sepbox").owlCarousel({
        items: 1,
        loop: true,
        dot: true,
        nav: false
    });

});