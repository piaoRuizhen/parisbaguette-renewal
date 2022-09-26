$(function(){
    $('#header').each(function(){
        let $window= $(window) 
        let $header =$(this) 
        let $headerClone = $header.contents().clone();
        let $headerCloneBox = $("<div class='header-clone'></div>")

        $headerCloneBox.append($headerClone);

        $headerCloneBox.appendTo('body');


        let sum = $header.offset().top + $header.outerHeight();


        $window.on('scroll',function(){
            if($window.scrollTop() > sum){
                $headerCloneBox.addClass('visible');
                $(".logowhite").attr("src", "./img/paris_baguette_scroll_logo.png");
                $(".header-search").attr("src", "./img/icons8-search-24-clone.png");
            }else{
                $headerCloneBox.removeClass('visible')
                $(".logowhite").attr("src", "./img/h_logo_white.png");
                $(".header-search").attr("src", "./img/icons8-search-24.png");
            }
        })

        $window.trigger('scroll');
    })
})


$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

$('.promotion ul').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 4
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 4
        }
        }
    ]
});

$('.image li').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
        }
        },
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        }
    ]
    });
