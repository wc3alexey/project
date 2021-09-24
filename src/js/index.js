
import '../scss/style.scss';
const mainSwiper = document.querySelector(".main__swiper");
const mainSwiper1 = document.querySelector(".device-type__wrapper");
const buttonSwiper = document.querySelector('.container__button-showMore');
const buttonSwiper1 =document.querySelector('.wrapper__open');
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
    mainSwiper.classList.toggle("main__swiper-showMore_active");
    buttonSwiper.classList.toggle("container__button-showMore_active");
    if (buttonSwiper.textContent = buttonSwiper.classList.contains("container__button-showMore_active") ? "Скрыть" : "Показать всё");
});
buttonSwiper1.addEventListener('click', function () { 
    mainSwiper1.classList.toggle("device-type__wrapper_active");
    buttonSwiper1.classList.toggle("wrapper__open_active");
    if (buttonSwiper1.textContent = buttonSwiper1.classList.contains("wrapper__open_active") ? "Скрыть" : "Показать всё");
});



const slider1 = new Swiper(".swiper-container", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

const slider2 = new Swiper(".content-inner__wrapper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

if (window.innerWidth >= 768) {
    slider1.destroy();
    slider2.destroy();
}