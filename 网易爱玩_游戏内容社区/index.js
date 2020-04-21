$(function() {
    $('.m-cover>ul>li').on('mouseover', function() {
        $(this).stop().animate({
            width: 445,

        }, 500).siblings('.m-cover>ul>li').stop().animate({
            width: 230,
        }, 500);
        $(this).children().addClass('active').siblings().children().removeClass('active');


    })

})