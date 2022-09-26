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