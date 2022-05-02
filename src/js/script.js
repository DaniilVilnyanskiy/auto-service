
window.onload = function () {

//////*  количество звёзд рейтинга) в section reviews  *//////


    $('#rating').on('click', function ratingFunc() {
        let rating = prompt('Введите рейтинг');

        if (rating < 1) {
            alert('Введите значение от 1 до 5')
            ratingFunc()
        } else if (rating > 5) {
            alert('Введите значение от 1 до 5')
            ratingFunc()
        } else if (rating >= 1 || rating <=5) {

            if ($('#rating').children('.rating-for')) {
                $('.rating-for').detach('.rating-for');
                alert('Предыдущий рейтинг был обнулён')
            }
            let ratingParseInt = parseInt(rating);
            let ratingTwo = 5 - (5 - ratingParseInt);
            console.log(ratingParseInt)
            for (; ratingTwo < 5; ratingTwo++) {

                $('.user-rating').prepend('<img src="img/State-stars-unfilled.png" alt="пустая звезда рейтинга" class="rating-for">')
            }

            for (; ratingParseInt > 0; ratingParseInt--) {

                $('.user-rating').prepend('<img src="img/State-stars-fill.png" alt="Звезда рейтинга" class="rating-for">')
            }

        }
        // $('#rating').detach('<img src="img/State-stars-fill.png" alt="Звезда рейтинга">');
        // $('#rating').detach('<img src="img/State-stars-unfilled.png" alt="пустая звезда рейтинга">');




    })

/////*         отзывы                  *//////////////////

    let elements1 = $('#ratingHead1, #reviewsUser1, #reviewsText1'),
        elements2 = $('#ratingHead2, #reviewsUser2, #reviewsText2');

    $('#left, #right').on('click', function reviewsShowFunc() {
        if ($(elements1).hasClass('reviewsShow')) {
            $(elements1).fadeOut(500).removeClass('reviewsShow');
            $(elements2).fadeIn(500).addClass('reviewsShow');
        } else {
            $(elements2).fadeOut(500).removeClass('reviewsShow');
            $(elements1).fadeIn(500).addClass('reviewsShow');
        }
    })

    // $('#stocks-right, #stocks-left').on('click', function myFuncRight (){
    //     if ($('#stocks1').hasClass('active')) {
    //         $('#stocks1').removeClass('active');
    //         $('#stocks2').addClass('active');
    //     } else {
    //         $('#stocks2').removeClass('active');
    //         $('#stocks1').addClass('active');
    //     }
    // });


////*  функция на изменение высоты контейнера под слайд в section main  *//////////
    heightFunc();
    window.addEventListener('resize', heightFunc);
    function heightFunc () {
        if ( $(window).width() < 780 ) {
            let height = $('.main_right_slider').height();
            console.log(height)
            $('.main_right-container').css({
                'height': height
            })
        }
    }


////*  слайдер в начале  *///////////

    let slider = document.querySelector('.main_right_slider');
    let arrow_left = document.querySelector('.main_right_arrow_left');
    let arrow_right = document.querySelector('.main_right_arrow_right');
    let widthSlider = $(slider).width(),
        widthPartSlider = widthSlider / 3;


    function right() {
        let position = parseInt(getComputedStyle(slider)['right'], 10);

        if (position === (-(widthSlider - widthPartSlider))) {
            slider.style.right = position + widthPartSlider + 'px';
        } else if (position === (-(widthSlider - (widthPartSlider * 2) ))) {
            slider.style.right = position + widthPartSlider + 'px'
        } else if (position === 0) {
            slider.style.right = '-' + (widthPartSlider * 2 + 'px');
        }
    }
    function left() {
        let position = parseInt(getComputedStyle(slider)['right'], 10);

        if (position === (-(widthSlider - widthPartSlider))) {
            slider.style.right = position + (widthPartSlider * 2);
        } else if (position === 0) {
            slider.style.right = position - widthPartSlider + 'px'
        } else if (position === (-(widthSlider - (widthPartSlider * 2) ))) {
            slider.style.right = position - widthPartSlider + 'px'
        }
    }

    arrow_right.onclick = function () {
        right()
    }
    arrow_left.onclick = function () {
        left()
    }




///////* hover эффект при наведении на "услуги" в header   */////////////

    let hover_block = $('.header_nav_arrow_container')
    function headerShow() {
        hover_block.fadeIn().css('display','flex');
    }
    function headerHide() {
        hover_block.fadeOut()
    }
    $(document).on('mousemove','.nav_hover-a, header_nav_arrow_container', function(event){         /*событие mousemove в header nav эффект hover*/
        headerShow(event)
        $(document).on('mouseout','.nav_hover-a, .header_nav_arrow_container', function(event){     /*внутри него событие mouseover */
            headerHide(event)
        })
    })


////*  бургер меню  *///////////


    let burger_menu = document.getElementById('burgerMenu');
    let row1 = document.querySelector('.bar1');
    let row2 = document.querySelector('.bar2');
    let row3 = document.querySelector('.bar3');
    let slide = document.querySelector('.burger_slideDown');
    let application_button = document.querySelector('.header_a-application');

    burger_menu.onclick = function () {
        row1.classList.toggle("changeFirst");
        row2.classList.toggle("changeOpacity");
        row3.classList.toggle("changeThree");
        console.log('click');
        $(slide).slideToggle();
        $(application_button).toggleClass('applic');
    }



//////* Форма application справа */////////////////

    let slideBlock = $('.header_a-application_container'),
        closeButton = $('.header_a-application_content-close'),
        button_for_open_slideBlock = $('.header_a-application');

    function openSlideBlock() {                                      /*     функция по клику на "Запись на сервис" появления формы справа        */
        $(document.body).addClass('is-open-modal');
        $('.shadow-modal').fadeIn(500).addClass('is-open');
        $(slideBlock).animate({
            right: "0", // положение right элемента
            opacity: 1, // прозрачность элемента
        }, 500, "linear");
    }
    function closeSlideBlock() {                                     /*     функция скрытия формы справа        */
        $(document.body).removeClass('is-open-modal');
        $('.shadow-modal').fadeOut(500).removeClass('is-open');
        $('.header_a-application_container').animate({
            right: "-60%", // положение элемента
            opacity: 1,    // прозрачность элемента
        }, 500, "linear");
    }

    $(document).on('click', '.header_a-application', function () {   /*     клик по кнопке application      */
        openSlideBlock()
    })
    $(closeButton).on('click', function () {        /*   клик по кнопке close  */
        closeSlideBlock()
    })
    $(document).on('click', function (e) {          /*   клик вне формы   */
        if (!(
               ($(e.target).parents('.header_a-application_container').length)
            || ($(e.target).hasClass('header_a-application_container'))
            || ($(e.target).hasClass('header_a-application')))
        ) {
            closeSlideBlock();
        }
    });



    let labelName = $('.form_group #labelName'),
        labelNum = $('.form_group #labelNum'),
        inputName = $('.form_group #inputName'),
        inputNum = $('.form_group #inputNum'),
        carBrand = $('.form_group #carBrand');


    $(labelName).on('click', function (){    /*  по клику смена контекта в форме */
        labelName.css('top', '0')
        labelName.css('color', '#989898');
        labelName.css('font-size', '12px');
        inputName.css('display', 'block');
        inputName.focus();
    })
    $(labelNum).on('click', function (){     /*  по клику смена контекта в форме */
        labelNum.css('top', '0')
        labelNum.css('color', '#989898');
        labelNum.css('font-size', '12px');
        inputNum.css('display', 'block');
        inputNum.focus();
    })





    $('.select').each(function() {          /*  По клику выпадающее меню, можно также реализовать через slidetoggle. */
                                            /*  Надо смотреть по ситуации. Если пункты с сервера приходят, тогда ниже написанным способом*/
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select_list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select_list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select_item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }



        let carSelect = $('.form_group .select .new-select');
        $(carBrand).on('click', function myFunc(){
            carBrand.css('top', '0')
            carBrand.css('color', '#989898');
            carBrand.css('font-size', '12px');
            carSelect.css('display', 'block');
            selectList.fadeIn(duration);
        })
        const selectItem = selectList.find('.new-select_item');
        selectList.slideUp(0);
        selectItem.on('click', function() {  /* по клику выпадающий список  */
            let chooseItem = $(this).data('value');

            $('select').val(chooseItem).attr('selected', 'selected');
            selectHead.text( $(this).find('span').text() );

            selectList.slideUp(duration);
            selectHead.removeClass('on');
        });
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                // selectList.fadeIn(duration);

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });


//////* Эффект параллакса после section guarantees *////////////////////


     let animation_block = document.querySelectorAll('.animation_container_element'),
         parallax_block = document.querySelector('.animation_container');
     function parallax(event) {
         animation_block.forEach(animation_element => {
             animation_element.style.transform = `translateX(${(event.clientX/10)-95}px)`;
         });
         // var blah = animation_block; цикл, обрабатывающий наведение на определенный элемент. Не работает в связки с функцией parallax
         //
         // for (var x = 0; x < blah.length; x++) {
         //     blah[x].addEventListener("mousemove", function(e) {
         //         let obj = this
         //         console.log('javascript_' + obj);
         //         (this.style.transform = 'scale(1.5)');
         //     });
         // }
     }
     $(document).on('mousemove','.animation_container_element',function(event){
         parallax(event)
     })
     // document.querySelectorAll('.animation_container_element').addEventListener('mousemove', parallax);
    // Этот аналог на js не может выбрать несколько селекторов, только один. На jquery выбирает)



//////*  смена контента section stocks (акции)  */////////////////////////////////////////////

    $('#stocks-right, #stocks-left').on('click', function myFuncRight (){
        if ($('#stocks1').hasClass('active')) {
            $('#stocks1').removeClass('active');
            $('#stocks2').addClass('active');
        } else {
            $('#stocks2').removeClass('active');
            $('#stocks1').addClass('active');
        }
    });
//////*   Последняя форма   *//////
    let fadeContainer = $('.modal-form_feedback'),
        fadeBlock = $('.modal-form_feedback_container'),
        closeButtonFadeBlock = $('.header_a-application_content-close'),
        button_for_open_fadeBlock = $('.footer_elem-button1');

    function openBlock() {                                      /*     функция по клику на "Запись на сервис" появления формы справа        */
        $(document.body).addClass('is-open-modal-feedback');
        $('.shadow-modal-feedback').fadeIn(500).addClass('is-open-feedback');
        $(fadeContainer).fadeIn();
    }
    function closeBlock() {                                     /*     функция скрытия формы справа        */
        $(document.body).removeClass('is-open-modal-feedback');
        $('.shadow-modal-feedback').fadeOut(500).removeClass('is-open-feedback');
        $(fadeContainer).fadeOut(500);
    }
    function chipping() {
        $(fadeBlock).css('display', 'none');
        $('.chipping').css('display', 'flex');
        console.log('chipping')
    }
    $('#submit').on('click', function (){
        chipping()
    })
    $(button_for_open_fadeBlock).on('click', function () {   /*     клик по кнопке application      */
        openBlock()
    })
    $(closeButtonFadeBlock).on('click', function () {        /*   клик по кнопке close  */
        closeBlock()
    })
    $(document).on('click', function (e) {          /*   клик вне формы   */
        if (!(
            ($(e.target).parents('.modal-form_feedback').length)
            || ($(e.target).hasClass('modal-form_feedback'))
            || ($(e.target).hasClass('footer_elem-button1')))
        ) {
            closeBlock();
        }
    });


/*конец*/
}
