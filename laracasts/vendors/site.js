wow = new WOW({ offset: 100 });
wow.init();
$(function () {
    /** Banner **/
    $(".banner-box").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: false
    });

   /** Activity **/
   $(".product-carousel").each(function(index, item){
        var product_carousel = $(this).owlCarousel({
            items: 4,
            loop: true,
            autoWidth: true,
            nav: false,
            dots: false,
            margin: 20
        });
        product_carousel.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                product_carousel.trigger('prev.owl');
            } else {
                product_carousel.trigger('next.owl');
            }
            e.preventDefault();
        });
   })



    /** Global Scroll to */
    $('.scroll-to').click(function (e) {
        e.preventDefault();
        var offset = 61;
        $('html').animate({scrollTop: $($.attr(this, 'href')).offset().top - 61}, 500);
		$('body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 61}, 500);
        return false;
    });

    /** Tooltip */
    $('[data-toggle="tooltip"]').tooltip();

    $("#our-crew a").click(function(e) {
        e.preventDefault();
    })

    $("#current-year").text(getCurrentYear());

});

function getCurrentYear() {
    return new Date().getFullYear();
}

// Video
