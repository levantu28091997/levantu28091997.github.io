// close notice
function Closenotive(){
    var element = document.getElementById("notice");
    element.classList.add("display-none");
}

// Form search
function Showform(){
    var e = document.getElementById("showform");
    if ( e.style.display === 'none' ){
        e.style.display = 'block';
        event.preventDefault()
    }else{
        e.style.display = 'none';
        event.preventDefault()
    }
}

// Showfilter
function Showfilter(){
    var e = document.getElementById("showfilter");
    if ( e.style.display === 'none' ){
        e.style.display = 'block';
        event.preventDefault()
    }else{
        e.style.display = 'none';
        event.preventDefault()
    }
}

//Scroll Menu
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.header-stick');
    var menu = menu[0];
        //Truy xuất div menu
        var status="duoi150";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 150){
            if(status == "duoi150")
            {
                status="tren150";
                menu.classList.add('menutora');
            }
        }
        else{
            if(status=="tren150"){
            menu.classList.remove('menutora');
            status="duoi150";}
        }
    
    })
})

// redirect page

$(function() {
    $('.create-acount').click(function() {
        $(this).toggleClass('active');
        $('.back-login-form').addClass("active");
        $('.back-login').addClass("active");
        $('.create-acount-form').removeClass('active');
        event.preventDefault()
    });
});
$(function() {
    $('.back-login').click(function() {
        $(this).toggleClass('active');
        $('.create-acount-form').addClass("active");
        $('.create-acount').addClass("active");
        $('.back-login-form').removeClass('active');
        event.preventDefault()
    });
});

// custom layout
function RemoveLayout(){
    $('.layout').removeClass("col-lg-4 col-md-4 col-sm-4 col-6 col-custom-15 col-md-3 col-sm-4 col-4 col-lg-3").delay(10).queue(function(next){
        $('.an').addClass("ani").delay(500).queue(function(next){
            $(this).removeClass("ani");
            next();
        });
        // $(document).ready(function() {
        //     $('body').find('.an').removeClass('ani');
        //  });
        
        $(this).addClass("col-lg-4 col-md-3 col-sm-6 col-6");
        next();
    });
    event.preventDefault()
}
function RemoveLayout1(){
    $('.layout').removeClass("col-lg-6 col-md-6 col-sm-6 col-6 col-custom-15 col-md-3 col-sm-4 col-4 col-lg-3 col-lg-4").delay(10).queue(function(next){
        $('.an').addClass("ani").delay(500).queue(function(next){
            $(this).removeClass("ani");
            next();
        });
        $(this).addClass("col-lg-3 col-md-4 col-sm-4 col-6");
        next();
    });
    event.preventDefault()
}
function RemoveLayout2(){
    $('.layout').removeClass("col-lg-4 col-md-4 col-sm-4 col-6 col-lg-6 col-md-6 col-sm-6 col-lg-3").delay(10).queue(function(next){
        $('.an').addClass("ani").delay(500).queue(function(next){
            $(this).removeClass("ani");
            next();
        });      
        $(this).addClass("col-custom-15 col-md-3 col-sm-4 col-4");
        next();
    });
    event.preventDefault()
}
// function RemoveLayout(){
//     var x = document.getElementsByClassName("layout");
//     $(x).removeClass("col-lg-4 col-md-4 col-sm-4 col-6 col-custom-15 col-md-3 col-sm-4 col-4 col-lg-3").delay(5000);
//     $(x).addClass("col-lg-4 col-md-3 col-sm-6 col-6").delay(5000);
//     event.preventDefault()
// }
// function RemoveLayout1(){
//     var x = document.getElementsByClassName("layout");
//     $(x).removeClass("col-lg-6 col-md-6 col-sm-6 col-6 col-custom-15 col-md-3 col-sm-4 col-4 col-lg-3 col-lg-4");
//     $(x).addClass("col-lg-3 col-md-4 col-sm-4 col-6");
//     event.preventDefault()
// }
// function RemoveLayout2(){
//     var x = document.getElementsByClassName("layout");
//     $(x).removeClass("col-lg-4 col-md-4 col-sm-4 col-6 col-lg-6 col-md-6 col-sm-6 col-lg-3");
//     $(x).addClass("col-custom-15 col-md-3 col-sm-4 col-4");
//     event.preventDefault()
// }


// Mobile Menu
$('.moblie-navigation').on('click', function(event) {
    $(".box-mobile-menu").addClass('open')
    $(".menu-overlay").fadeIn();
    event.preventDefault()
});
$(".menu-overlay").click(function(event) {
    $(".box-mobile-menu").removeClass('open')
    $(".menu-overlay").fadeOut();
});
$(".close-menu").click(function(event) {
    $(".box-mobile-menu").removeClass('open')
    $(".menu-overlay").fadeOut();
});

// Minicart
$('.mini-cart').on('click', function(event) {
    $(".m-minicart").addClass('open')
    $(".mini-cart-overlay").fadeIn('slow');
    event.preventDefault()
});
$(".minicart-close").click(function(event) {
    $(".m-minicart").removeClass('open')
    $(".mini-cart-overlay").fadeOut('slow');
});
$(".mini-cart-overlay").click(function(event) {
    $(".m-minicart").removeClass('open')
    $(".mini-cart-overlay").fadeOut('slow');
});

  $('#userModal').on('show.bs.modal', function() {
    $(this).find('.modal-body').css({
      'max-height': '100%'
    });
  });

  // Add active class to the multi layout
var header = document.getElementById("multiLayout");
var btns = header.getElementsByClassName("product-size");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actived");
  console.log(current);
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" actived", "");
  }
  this.className += " actived";
  });
}

// Toggle submenu mobile / responsive
$(document).on('click', '.menu-item .toggle-submenu', function (e) {
    var $this = $(this);
    var $thisParent = $this.closest('.menu-item-has-children');
    if ($thisParent.length) {
        $thisParent.toggleClass('show-submenu').find('> .submenu').stop().slideToggle();
    }
    e.preventDefault();
    return false;
});

// Animation modal user
function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};
$('#userModal').on('show.bs.modal', function (e) {
  var anim = "zoomIn";
      testAnim(anim);
})
$('#userModal').on('hide.bs.modal', function (e) {
  var anim = "zoomOut";
      testAnim(anim);
})


// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

