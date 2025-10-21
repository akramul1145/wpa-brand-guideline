
jQuery(document).ready(function($){



    $(".wpa_mobile_menu_toggle").on("click", function(){
        $(".wpa_mobile_menu").slideToggle();
    });


    $('.loop_carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slick-next text-white">Next</button>',
    });

    $('.single_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        speed: 800, 
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slick-next text-white">Next</button>',
    });






    //toggle block

    $(".wpa_toggle_block .wpa_toggle_btn").on("click", function(e){

        e.preventDefault();
        $(this).toggleClass("grid_hide");

        $(this).closest(".wpa_toggle_block").find(".wpa_toggle_images").toggleClass("hide_grid");

    });





});