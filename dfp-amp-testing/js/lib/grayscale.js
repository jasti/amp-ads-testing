/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

function scrollOnClick(input){
    $(input).on('click', function(e) {
        var $btn = $(this);
        $('html, body').stop().animate({
            scrollTop: $($btn.attr("data-target")).offset().top
        }, 1500, 'easeInOutExpo');
    });
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
scrollOnClick('.page-scroll');

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});