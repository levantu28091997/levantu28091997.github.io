$(document).ready(function(){
"use strict";

var wH;
// SETTING
function heightSlide(){
    wH = $(window).height();
    $('.fix_h').css({'height':wH+'px'});
}
heightSlide();

// Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

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

// Slide Homepage
$('.js-slide').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300
});

// Latest works carousel

$('.js-lw-carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300
});

// Slide button click
$('.js-prev-slide').on('click', function(e){
  $(".slick-prev").click();
  e.preventDefault();
})
$('.js-next-slide').on('click', function(e){
  $(".slick-next").click();
  e.preventDefault();
})

// Change icon social header
function changIconSocailHeader(jsClass, jsId, jsImg){
  $(jsClass).on({
    mouseenter: function(e){
      $(jsId).attr("src","images/icon/icon-" + jsImg + "-w.png");
      e.preventDefault();
    },
    mouseleave: function(e){
      $(jsId).attr("src","images/icon/icon-" + jsImg + ".png");
      e.preventDefault();
    }
  });
}
changIconSocailHeader('.i-facebook','#js-social-fb','facebook');
changIconSocailHeader('.i-gplus','#js-social-gplus','gplus');
changIconSocailHeader('.i-twitter','#js-social-twitter','twitter');
changIconSocailHeader('.i-pinterest','#js-social-pinterest','pinterest');
changIconSocailHeader('.i-behance','#js-social-behance','behance');
changIconSocailHeader('.i-dribbble','#js-social-dribbble','dribbble');
changIconSocailHeader('.i-email','#js-icon-email','email');
changIconSocailHeader('.i-phone','#js-icon-phone','phone');

// Chang icon before hover button slide
    // prev
$(".js-prev-slide").on({
  mouseenter: function(e){
    $("#js-prev-slide").attr("src","images/icon/icon-prev-hv.png");
    e.preventDefault();
  },
  mouseleave: function(e){
    $("#js-prev-slide").attr("src","images/icon/icon-prev.png");
    e.preventDefault();
  }
});
    // next
$(".js-next-slide").on({
  mouseenter: function(e){
    $("#js-next-slide").attr("src","images/icon/icon-next-hv.png");
    e.preventDefault();
  },
  mouseleave: function(e){
    $("#js-next-slide").attr("src","images/icon/icon-next.png");
    e.preventDefault();
  }
});

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
    if ($(window).width() >= 1200 ) {
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

});