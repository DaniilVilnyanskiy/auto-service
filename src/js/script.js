window.onload = function () {

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
     // document.querySelectorAll('.animation_container_element').addEventListener('mousemove', parallax); Это аналог на js, не может выбрать несколько селекторов, только один



////*  бургер меню  *///////////


    let burger_menu = document.getElementById('burgerMenu');
    let row1 = document.querySelector('.bar1');
    let row2 = document.querySelector('.bar2');
    let row3 = document.querySelector('.bar3');
    let slide = document.querySelector('.header_right_slideDown');

    burger_menu.onclick = function () {
        row1.classList.toggle("changeFirst");
        row2.classList.toggle("changeOpacity");
        row3.classList.toggle("changeThree");
        console.log('click');
        $(slide).slideToggle();
    }

    let slider = document.querySelector('.main_right_slider');
    let arrow_left = document.querySelector('.main_right_arrow_left');
    let arrow_right = document.querySelector('.main_right_arrow_right');

////*  слайдер в начале  *///////////

    arrow_right.onclick = function () {
        right()
    }
    arrow_left.onclick = function () {
        left()
    }

    function right(e) {
        let num = parseInt(getComputedStyle(slider)['right'], 10);
        if (num < 0) {
            slider.style.right = num + 780 + 'px'
        } else {
            slider.style.right = ""
        }
    }
    function left(e) {
        let num = parseInt(getComputedStyle(slider)['right'], 10);
        if (num > -1560) {
            slider.style.right = num + 780 + 'px'
        } if (num >= 0) {
            slider.style.right = ""
        }else {
            slider.style.right = num + 780 + 'px'
        }
    }


//////*  смена контента section stocks   */////////////////////////////////////////////

    $('#stocks-right, #stocks-left').on('click', function myFuncRight (){
        if ($('#stocks1').hasClass('active')) {
            $('#stocks1').removeClass('active');
            $('#stocks2').addClass('active');
        } else {
            $('#stocks2').removeClass('active');
            $('#stocks1').addClass('active');
        }
    });





/*конец*/
}
