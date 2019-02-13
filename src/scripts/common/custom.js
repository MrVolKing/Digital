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
    var menu1 = ['Хранение информации о клиентах <b>в подходящем для AI формате</b> ', '<b>Выбор предложения</b>, креатива, заголовка для каждого получателя с помощью AI', '<b>Построение на основе AI сегментов</b>  для массовых коммуникаций под конкретные предложения', '<b>Выбор с помощью AI</b> наилучших предложений под созданные сегменты'];
    var menu2 = ['<b>Неограниченный набор условий</b> для персонализации путешествия клиента', '<b>Автовыбор контента</b> для каждого получателя с помощью AI', '<b>Реакция на действия клиента</b> в других системах (CRM, сайт)', 'Автоматизация кросс-канальных коммуникаций <b>любой сложности</b>'];
    var menu3 = ['Возможность использовать свои сервера для отправки email или <b>транзакционный API</b>', '<b>Продвинутый</b> планировщик массовых рассылок ', '<b>Inbox-мониторинг</b> и гибкое управление рассылками', '<b>Автоматическая проверка</b> базы по внутренним и внешним black-листам', '<b>Уникальная инфраструктура</b>, позволяющая AI подключиться к управлению маркетингом'];
    var menu4 = ['<b>Детальный контроль</b> дохода с каждой кампании, предложения, креатива', '<b>Контроль качества</b> доставки по каналам рассылок', '<b>Кастомные параметры</b> для отслеживания внешних событий и условий'];
    

    // var menu1 = ['dn'];
    // var menu2 = [];
    // var menu3 = [];
    // var menu4 = [];

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
        },
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

                                                                        

                                                                           

                                        

