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

    var background_image = document.querySelectorAll('[data-url]')  
    var $container_work = $('#wrapper_work-img');

    $('.work_link').hover(function(e) {

        var image = new Image();
        image.crossororigin = 'Anonymous';

        image.onload = function() {
            $container_work.css({
                'opacity': '1',
                'background-image': 'url(' + e.target.dataset.url + ')'
        
            });
        };

        image.src = e.target.dataset.url;

    }, function() {

        $container_work.css({
            "opacity": '0',
        })

    });

    /**** HOVER LINKS ****/

    $('.work_link').hover(function() {

        $(this).addClass('work_link-change').css({
            'color': '#2C2C2C'
        });

		$('.work_link, .work_link-title').not(this).css({
            'opacity': '0.3'
        })

	}, function (){

		$('.work_link, .work_link-title').removeClass('work_link-change').css({
            'opacity': '1',
            'color': '#cabca7'
        })

	});

});