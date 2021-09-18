
import '../scss/style.scss';
let mainSwiper = document.querySelector(".main__swiper");
let buttonSwiper = document.querySelector('.container__button-showMore');
const sidebar = document.querySelector('.sidebar');
const openSidebar = document.querySelector('.header__button-phone');
const closeSidebar =document.querySelector('.sidebar__button-close');
const modal = document.querySelector('.modal__feedback');
const openModal = document.querySelector('.header__button-message');
const modalClose = document.querySelector('.modal__button-close');
const container = document.querySelector('.container__wrapper');
const left = document.querySelector('.aside');
const button = document.querySelector('.header__button-burger');
const buttonClose = document.querySelector('.aside__button-close');

button.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container__wrapper-fade');
    
});

buttonClose.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container__wrapper-fade');
});

openModal.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container__wrapper-fade');
});

modalClose.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container__wrapper-fade');
});

openSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container__wrapper-fade');
});

closeSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container__wrapper-fade');
});

buttonSwiper.addEventListener('click', function () { 
    mainSwiper.classList.toggle("main__swiper__showMore_active");
    buttonSwiper.classList.toggle("container__button-showMore_active");
    if (buttonSwiper.textContent = buttonSwiper.classList.contains("container__button-showMore_active") ? "Скрыть" : "Показать всё");
});

let slider = document.querySelector(".swiper-container")
let swiper;
function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == "false") {
        swiper = new Swiper(slider, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = "true";
    }
    if (window.innerWidth > 767) {
        slider.dataset.mobile = "false";

        if (slider.classList.contains("swiper-container-initialized")) {
            swiper.destroy();
        }
    }
}
mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});

