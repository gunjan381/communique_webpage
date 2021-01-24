$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.flowfromright1').css({
        //width: (50 + scroll / 25) + "%"
        left: (Math.sqrt(scroll / 5)) + "%"
    })
    $('.flowfromleft1').css({
        //width: (50 + scroll / 5) + "%",
        right: (Math.sqrt(scroll / 5)) + "%"
    })

});