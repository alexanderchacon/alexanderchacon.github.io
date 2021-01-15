$(function(){

    /**** PRELOAD IMAGE ****/

    var preloadImgs = [];
    $(document).ready(function() {
        $('.work_link').each(function() {
            var img = new Image();
            img.src = $(this).data('url');
            preloadImgs.push(img);
        });
    });

    /**** ROTATION IMAGE ****/

    var rotate = 13;

    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;

    $(document).mousemove(function( event ) {
    mouseX = event.pageY;
    mouseY = event.pageX;
    rotateY = -(pageY/2-mouseY)/pageY*rotate;
    rotateX = (pageX/2-mouseX)/pageX*rotate;
    $('#img_welcome').css({ 'transform' : 'translate(-50%, -50%) scale(1) perspective( 1960px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
    });

    /**** VAR LOAD IMAGES ****/

    var background_image = document.querySelectorAll("[data-url]")  
    var $container_work = $('#wrapper_work-img');

    $('.work_link').hover(function(e) {

        var image = new Image();
        image.crossororigin = 'Anonymous';

        image.onload = function() {
            $container_work.css({
                "opacity": '1',
                "background-image": 'url(' + e.target.dataset.url + ')'
        
            });
        };

        image.src = e.target.dataset.url;

    }, function() {

        $container_work.css({
            "opacity": '0',
        });

    });

  
});

/*

jQuery(function($) {

    var preloadImgs = [];
    $(document).ready(function() {
        $('#wrapper_work-ul li h5 a').each(function() {
            var img = new Image();
            img.src = $(this).data('url');
            preloadImgs.push(img);
        });
    });

    var wrapper_work_ul = document.getElementById("wrapper_work-ul");
    var work_link = wrapper_work_ul.getElementsByClassName("work_link");
    var current = document.getElementsByClassName("work_link-active");

    var background_image = document.querySelectorAll("[data-url]")

    for (var i = 0; i < work_link.length; i++) {

        work_link[0].classList.add("work_link-active");

        work_link[i].addEventListener("mouseover", addClass);

        function addClass() {
            current[0].className = current[0].className.replace(" work_link-active", "");
            this.className += " work_link-active";
        }

    }

if($(window).innerWidth() <= 768) {

} else {
$('#wrapper_work-loaded').css('background-image', 'url("' + background_image[0].dataset['url'] + '")');
}

    var $container_work = $('#wrapper_work-loaded');

    $('.work_link').hover(function(e) {

        var image = new Image();
        image.crossororigin = 'Anonymous';

        image.onload = function() {
            $container_work.css('background-image', 'url(' + e.target.dataset.url + ')');
            $container_work.addClass('img_grayscale-0');
        };

        image.src = e.target.dataset.url;

    }, function() {

        $container_work.removeClass('img_grayscale-0');

    });



});

*/