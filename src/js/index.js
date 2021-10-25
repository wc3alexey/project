
import '../scss/style.scss';
const mainSwiper = document.querySelector(".main__swiper");
const mainSwiper1 = document.querySelector(".device-type__wrapper");
const mainSwiper2 = document.querySelector(".text__main-textAdd-more");
const mainSwiper3 = document.querySelector(".text__main-textTablet");
const buttonSwiper = document.querySelector('.container__button-showMore');
const buttonSwiper1 =document.querySelector('.wrapper__open');
const buttonSwiper2 = document.querySelector('.button__add-more')
const sidebar = document.querySelector('.sidebar');
const openSidebar = document.querySelector('.header__button-phone');
const openSidebar1 = document.querySelector('.social__button-phone')
const closeSidebar =document.querySelector('.sidebar__button-close');
const modal = document.querySelector('.modal__feedback');
const openModal = document.querySelector('.header__button-message');
const openModal1 = document.querySelector('.social__button-message')
const modalClose = document.querySelector('.modal__button-close');
const container = document.querySelector('.container__menu');
const ollContainer = document.querySelector('.body')
const left = document.querySelector('.aside');
const button = document.querySelector('.header__button-burger');
const buttonClose = document.querySelector('.aside__button-close');

button.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container__menu-fade');
    
});

buttonClose.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container__menu-fade');
});

openModal.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container__menu-fade');
});
openModal1.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container__menu-fade');
 
});

modalClose.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container__menu-fade');
});

openSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container__menu-fade');
});

openSidebar1.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container__menu-fade');
    
});

closeSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container__menu-fade');
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
buttonSwiper2.addEventListener('click', function () { 
    mainSwiper2.classList.toggle("text__main-textAdd-more-active");
    buttonSwiper2.classList.toggle("wrapper__open_active");
    if (buttonSwiper2.textContent = buttonSwiper2.classList.contains("wrapper__open_active") ? "скрыть" : "Читать далее");
});



const slider = new Swiper(".swiper-container", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
const slider1 = new Swiper(".content-inner__wrapper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
const slider2 = new Swiper(".content-inner__infoSlider", {
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
    slider.destroy();
    slider1.destroy();
    slider2.destroy();
   
    
}