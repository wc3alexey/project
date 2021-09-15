
import '../scss/style.scss';
const sidebar = document.querySelector('.sidebar');
const openSidebar = document.querySelector('.header__button-phone');
const closeSidebar =document.querySelector('.sidebar__button-close');
const modal = document.querySelector('.modal__feedback');
const openModal = document.querySelector('.header__button-message');
const modalClose = document.querySelector('.modal__button-close');
const container = document.querySelector('.container');
const left = document.querySelector('.aside');
const button = document.querySelector('.header__button-burger');
const buttonClose = document.querySelector('.aside__button-close');
button.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container-fade');
    
});

buttonClose.addEventListener('click', function () {
    left.classList.toggle('open-menu');
    container.classList.toggle('container-fade');
});

openModal.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container-fade');
});

modalClose.addEventListener('click',function () {
    modal.classList.toggle('close-modal');
    container.classList.toggle('container-fade');
});

openSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container-fade');
});

closeSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('close-sidebar');
    container.classList.toggle('container-fade');
});