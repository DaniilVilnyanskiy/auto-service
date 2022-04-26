window.onload = function () {

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


   /* classList.toggle("slideRight");*/

}