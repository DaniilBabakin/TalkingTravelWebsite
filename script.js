let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let header__buttons = document.querySelectorAll('.header__link')
console.log(header__buttons)
let btn = document.querySelector('.fa-arrow-circle-up')

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}


for (var i = 0, len = header__buttons.length; i < len; i++) {
  header__buttons [i].addEventListener("click", function() {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__list.classList.remove('active');
    back.classList.remove('lock');
    console.log("haha")
  });
}

function magic() {
  if (window.pageYOffset > 20) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
}

// When scrolling, we run the function
window.onscroll = magic