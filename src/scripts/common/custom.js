$(document).ready(() => {

    $(document).on('click', '.sectmenu__item a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    })

    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });


   
    
    // popap

    $('.show_popap').click(function() {
        $('.modalDialogcustom').addClass('modalDialogcustom_active');
        $('body').css('overflow', 'hidden')
    });

    $('.contentpopap__cancel').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });

    $('.shadow_popap').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });







    // slider
    var menu1 = ['Customers data storage suitable for <b>AI-driven Marketing</b> ', '<b>AI-suggested best offer</b>, creative, and subject-line for one-on-one communication', '<b>Intelligent auto segments</b> driven by specific offers for highly effective direct marketing ', '<b>Next best offer recommendation</b> delivered by machine learning for your scheduled segments ', '5'];
    var swiper = new Swiper('.swiper-container', {
        loop: false,
        // init: false,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-n',
            prevEl: '.swiper-button-p',
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu1[index]) + '</li>';
            },
        },
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // }
      });


});

                                                                        

                                                                           

                                        

