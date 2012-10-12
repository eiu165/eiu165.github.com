if (!window.console) console = { log: function () { } };


$(document).ready(function () { 
    /* Scroll event handler */
    $(window).bind('scroll', function (e) { 
        parallaxScroll();
    });
     
    navClick(); 
});


function navClick() {
//    var hotSpots = [0, 2000, 4000, 6000, 8000];
    $('#nav li').click(function () {
        $('#nav li').removeClass('active');
        $(this).addClass('active');
        var index = $(this).parent().find('> *').index(this);  
        $('html, body').animate({
            scrollLeft: hotSpots[index]
        }, 1200);
        return false;
    });
}

/* Scroll the background layers */
function parallaxScroll(){
    var scrolled = $(window).scrollLeft();
    $('.parallax').css('left', function () {
        var n = 0 - scrolled * $(this).attr('data-speed-x');
        return n + 'px';
    });
    $('.parallax').css('top', function () {
        var n = 0 - scrolled * $(this).attr('data-speed-y');
        return n + 'px';
    });
    
    
//    $('.center').css({ 'position': 'fixed', 'width': contentWidth + 'px'
//        , 'left': function () { return ($(window).width() / 2) - (contentWidth / 2); }
//    }); 
//    $('.rotate').each(function () {
//        var scroll = parseFloat(hotSpots[$(this).attr('data-frame')]); 
//        $(this).rotate((scrolled - scroll) / 3);
//    });
//    $('.fade').css({ 'opacity': function () {
//        var scroll = parseFloat(hotSpots[$(this).attr('data-frame')]);
//        var r = (Math.cos(((scrolled - scroll)/700) )+ 1) / 2 ;  
//        console.log(r);
//        return r;
//    }
//    }); 

}
 