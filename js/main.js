document.addEventListener('DOMContentLoaded', function () {

/*****************************************************MENU*************************************************************/

var mainMenu = document.getElementsByClassName('main-menu')[0];

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 2) {
        mainMenu.classList.remove('main-menu');
        mainMenu.classList.add('white-menu');
        mainMenu.classList.add('black-letter');
    }
    if (scrolled === 0) {
        mainMenu.classList.add('main-menu');
        mainMenu.classList.remove('white-menu');
        mainMenu.classList.remove('black-letter');
    }
};

/********************************************************SCROLL********************************************************/

var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});

/********************************************************SLIDER********************************************************/

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

/************************************************MOBILE MENU WRAPPER***************************************************/

$('#button-menu').on('click', function () {
    $('.nav-collapse').slideToggle(500);
    $('body', 'html').css('overflow', 'hidden');
});

$('.close, .navbar-nav li a').on('click', function () {
    $('.nav-collapse').slideToggle(500);
    $('body', 'html').css('overflow', '');
});

/******************************************************SCROLL PAGE*****************************************************/

    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 60;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    var goUp = true;
    var end = null;
    var interval = null;

    function handle(delta) {
        var animationInterval = 15; //lower is faster
        var scrollSpeed = 15; //lower is faster

        if (end == null) {
            end = $(window).scrollTop();
        }
        end -= 15 * delta;
        goUp = delta > 0;

        if (interval == null) {
            interval = setInterval(function () {
                var scrollTop = $(window).scrollTop();
                var step = Math.round((end - scrollTop) / scrollSpeed);
                if (scrollTop <= 0 ||
                    scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
                    goUp && step > -1 ||
                    !goUp && step < 1 ) {
                    clearInterval(interval);
                    interval = null;
                    end = null;
                }
                $(window).scrollTop(scrollTop + step );
            }, animationInterval);
        }
    }


});