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


    
    // auto play
    
    
    const video_el_a_1 = document.getElementById('video_11');
    const video_el_a_2 = document.getElementById('video_12');
    const video_el_a_3 = document.getElementById('video_13');
    const video_el_a_4 = document.getElementById('video_14');

    const video_el_b_1 = document.getElementById('video_21');
    const video_el_b_2 = document.getElementById('video_22');
    const video_el_b_3 = document.getElementById('video_23');
    const video_el_b_4 = document.getElementById('video_24');

    const video_el_c_1 = document.getElementById('video_31');
    const video_el_c_2 = document.getElementById('video_32');
    const video_el_c_3 = document.getElementById('video_33');
    const video_el_c_4 = document.getElementById('video_34');
    const video_el_c_5 = document.getElementById('video_35');

    const video_el_d_1 = document.getElementById('video_41');
    const video_el_d_2 = document.getElementById('video_42');
    const video_el_d_3 = document.getElementById('video_43');

    // console.log($(window).height());

    if ($(window).width() >= 800) {
        $(window).scroll(function() {
            if ($(this).scrollTop()  > 500){
                video_el_a_1.play();
                video_el_a_2.play();
                video_el_a_3.play();
                video_el_a_4.play();
                // this.console.log('play')
                // console.log($(window).scrollTop());
    
                video_el_b_1.pause();
                video_el_b_2.pause();
                video_el_b_3.pause();
                video_el_b_4.pause();
    
                video_el_c_1.pause();
                video_el_c_2.pause();
                video_el_c_3.pause();
                video_el_c_4.pause();
                video_el_c_5.pause();
    
                video_el_d_1.pause();
                video_el_d_2.pause();
                video_el_d_3.pause();
                
            }
            // else if($(this).scrollTop() > ($(this).height()) + ($(this).height()) ) {
            //     video_el.pause();
            //     console.log('pause');
            // }
        });
    
        $(window).scroll(function() {
            if ($(this).scrollTop()  > 1370){
                video_el_b_2.play();
                video_el_b_1.play();
                video_el_b_3.play();
                video_el_b_4.play();
                // this.console.log('play2')
    
                video_el_a_1.pause();
                video_el_a_2.pause();
                video_el_a_3.pause();
                video_el_a_4.pause();
                
                video_el_c_1.pause();
                video_el_c_2.pause();
                video_el_c_3.pause();
                video_el_c_4.pause();
                video_el_c_5.pause();
    
                video_el_d_1.pause();
                video_el_d_2.pause();
                video_el_d_3.pause();
            }
        });
    
        $(window).scroll(function() {
            if ($(this).scrollTop()  > 2200){
                video_el_b_2.pause();
                video_el_b_1.pause();
                video_el_b_3.pause();
                video_el_b_4.pause();
    
                video_el_a_1.pause();
                video_el_a_2.pause();
                video_el_a_3.pause();
                video_el_a_4.pause();
                
                video_el_c_1.play();
                video_el_c_2.play();
                video_el_c_3.play();
                video_el_c_4.play();
                video_el_c_5.play();
    
                video_el_d_1.pause();
                video_el_d_2.pause();
                video_el_d_3.pause();
            }
        });
    
        $(window).scroll(function() {
            if ($(this).scrollTop()  > 3000){
                video_el_b_2.pause();
                video_el_b_1.pause();
                video_el_b_3.pause();
                video_el_b_4.pause();
    
                video_el_a_1.pause();
                video_el_a_2.pause();
                video_el_a_3.pause();
                video_el_a_4.pause();
                
                video_el_c_1.pause();
                video_el_c_2.pause();
                video_el_c_3.pause();
                video_el_c_4.pause();
                video_el_c_5.pause();
    
                video_el_d_1.play();
                video_el_d_2.play();
                video_el_d_3.play();
            }
        });
    }

    



    // console.log($(window).scrollTop());


    // console.log(video_el);
    // console.log($('#video_el'));
    




    // slider
    // var menu1 = ['Хранение информации о клиентах <b>в подходящем для AI формате</b> ', '<b>Выбор предложения</b>, креатива, заголовка для каждого получателя с помощью AI', '<b>Построение на основе AI сегментов</b>  для массовых коммуникаций под конкретные предложения', '<b>Выбор с помощью AI</b> наилучших предложений под созданные сегменты'];
    // var menu2 = ['<b>Неограниченный набор условий</b> для персонализации путешествия клиента', '<b>Автовыбор контента</b> для каждого получателя с помощью AI', '<b>Реакция на действия клиента</b> в других системах (CRM, сайт)', 'Автоматизация кросс-канальных коммуникаций <b>любой сложности</b>'];
    // var menu3 = ['Возможность использовать свои сервера для отправки email или <b>транзакционный API</b>', '<b>Продвинутый</b> планировщик массовых рассылок ', '<b>Inbox-мониторинг</b> и гибкое управление рассылками', '<b>Автоматическая проверка</b> базы по внутренним и внешним black-листам', '<b>Уникальная инфраструктура</b>, позволяющая AI подключиться к управлению маркетингом'];
    // var menu4 = ['<b>Детальный контроль</b> дохода с каждой кампании, предложения, креатива', '<b>Контроль качества</b> доставки по каналам рассылок', '<b>Кастомные параметры</b> для отслеживания внешних событий и условий'];
    

    var menu1 = ['Customers data storage suitable for <b>AI-driven Marketing</b> ', '<b>AI-suggested best offer</b>, creative, and subject-line for one-on-one communication', '<b>Intelligent auto segments</b> driven by specific offers for highly effective direct marketing', '<b>Next best offer recommendation</b> delivered by machine learning for your scheduled segments'];
    var menu2 = ['<b>Unlimited set of conditions</b> for personalizing a customer\'s journey', '<b>Automated personalized content</b> for each customer through intelligent algorithms', '<b>Continuous performance improvement</b> by taking into account customer behavior data from across sources (CRM, website etc.)', 'Cross-channel campaigns of any point of complexity to deliver <b>exceptional one-on-one experiences at scale</b>'];
    var menu3 = ['Ability to send emails through <b>your own SMTP-servers or preferred transactional API </b>', 'Advanced bulk-campaigns <b>scheduling with built-in suggestions driven by AI</b>', 'Inbox-monitoring and <b>agile mailings-management infrastructure</b>', 'Automatic database <b>check against internal and external blacklists</b>', 'First-in-class platform that enables <b>AI-managed marketing automation</b>'];
    var menu4 = ['<b>Detailed breakdown report</b> by campaign, offer, or creative to improve your marketing ROI', '<b>Deliverability insights</b> per each sending channel', 'Custom parameters for <b>tracking external events and bringing together data from across sources</b>'];
    

    var swiper = new Swiper('.swiper-container1', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-n',
            prevEl: '.swiper-button-p',
          },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
                renderBullet: function (index, className) {
                    return '<li class="' + className +  '">' + (menu1[index]) + '</li>';
            },
            // el: '.swiper-pagination'
        },
        // pagination:{
        //     el: '.swiper-pagination'
        // },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });


      var swiper = new Swiper('.swiper-container2', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-n',
            prevEl: '.swiper-button-p',
          },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu2[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });

      var swiper = new Swiper('.swiper-container3', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-n',
            prevEl: '.swiper-button-p',
          },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu3[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });

      var swiper = new Swiper('.swiper-container4', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-n',
            prevEl: '.swiper-button-p',
          },
        pagination: {
            el: '.swiper-pagination4',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu4[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });


});

                                                                        

                                                                           

                                        

