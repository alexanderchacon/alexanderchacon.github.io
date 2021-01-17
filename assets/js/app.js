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
    
    /**** BUTTONS ****/

    var data_wel = 0;

    $('.ic_menu').click(function() {

        $(this).css({
            'opacity': '0'
        });

        if ( data_wel == 0 ) {

            $('.wrapper_content-welcome').css({
                'top': '-10%',
                'opacity': '0'
            });

        }

        $('.mega_menu').css({
            'top': '0',
            'opacity': '1'
        });

        $('.mega_menu-close').delay(650).queue(function (next) { 
            $(this).css({
                'opacity': '1'
            });
            next();
        });

        $('.wrapper_content-work').css({
            'opacity': '0'
        });

    });

    $('.mega_menu-close, .about').click(function() {

        if ( data_wel == 1 ) {

            $('.wrapper_content-welcome').css({
                'top': '-115%',
                'opacity': '0'
            });

            $('.wrapper_content-work').css({
                'opacity': '1'
            });

        } else {

            $('.wrapper_content-welcome').css({
                'left': '0',
                'top': '0',
                'opacity': '1'
            });

        }

        $('.ic_menu').css({
            'opacity': '1'
        });

        $('.mega_menu-close').css({
            'opacity': '0'
        });

        $('.mega_menu').css({
            'top': '-125%',
            'opacity': '0'
        });

        $('.about_wrapper').css({
            'left': '-125%',
            'opacity': '0'
        });

    });

    $('.about_me, .about').click(function() {

        if ( $('.wrapper_content-welcome').css('top') != '0px' ){

            $('.wrapper_content-welcome').css({
                'left': '0px',
                'opacity': '0'
            });

        } else {

            $('.wrapper_content-welcome').css({
                'left': '-10%',
                'opacity': '0'
            });

        }

        $('.ic_menu').css({
            'opacity': '0'
        });

        $('.about_wrapper').css({
            'left': '0',
            'opacity': '1'
        });

        $('.mega_menu-close').delay(650).queue(function (next) { 
            $(this).css({
                'opacity': '1'
            });
            next();
        });

    });

    $('.work_me, .work').click(function(){

        data_wel = 1;

        $('.mega_menu').css({
            'top': '-125%',
            'opacity': '0'
        });

        $('.ic_menu').css({
            'opacity': '1'
        });

        $('.wrapper_content-welcome').css({
            'top': '-115%',
            'opacity': '0'
        });

        $('.wrapper_content-work').delay(350).queue(function (next) { 
            $(this).css({
                'opacity': '1'
            });
            next();
        });

    });

    /**** SCOLL ****/

    $(window).bind('mousewheel', function(e){

        if ( e.originalEvent.wheelDelta /120 > 0 ) {

            if ( $('.ic_menu').css('opacity') == '1' ) {

                data_wel = 0;
    
                $('.wrapper_content-welcome').css({
                    'top': '0',
                    'opacity': '1',
                    'left': '0'
                });
    
                $('.wrapper_content-work').css({
                    'opacity': '0'
                });
    
                $('.about_wrapper').css({
                    'left': '-115%',
                    'opacity': '0'
                });

            }

        } else {

            if ( $('.ic_menu').css('opacity') == '1' ) {

                data_wel = 1;

                $('.wrapper_content-welcome').css({
                    'top': '-115%',
                    'opacity': '0',
                    'left': '0'
                });
    
                $('.wrapper_content-work').css({
                    'opacity': '1'
                });
    
                $('.about_wrapper').css({
                    'left': '-115%',
                    'opacity': '0'
                });
                
            }

        };

    });

});