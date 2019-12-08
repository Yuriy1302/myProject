import '../scss/style.scss';

let showPopup = function(popupOpen) {
    popupOpen.classList.add('popup--open');
}

let closePopup = function(popupClose) {
    popupClose.classList.remove('popup--open');
}

let popup = document.querySelectorAll('.popup');
let closeButton = document.querySelectorAll('.button-close');

let burgerButton = document.querySelectorAll('.button-burger'); /* Создаем коллекцию кнопок BURGER, т.к. эта кнопка есть в двух местах */
let popupAside = document.querySelector('.modal-aside-bar-container'); /* Получаем всплывающее окно ASIDE */

let phoneButton = document.querySelectorAll('.button-phone');
let popupCall = document.querySelector('.modal-container-call-1440');

let chartButton = document.querySelectorAll('.button-chart');
let popupChart = document.querySelector('.modal-container-feadback-1440');

/* На каждую кнопку BURGER назначаем обработчик, открывающий окно ASIDE */
for (let i = 0; i < burgerButton.length; i++) { 
    burgerButton[i].addEventListener('click', function() {
        showPopup(popupAside);
    });
}

/* Обработка кнопки ЗВОНКА */
for (let i = 0; i < phoneButton.length; i++) {
    phoneButton[i].addEventListener('click', function() {
        closePopup(popupAside);
        showPopup(popupCall);
    });
}

/* Обработка кнопки ОБРАТНОЙ СВЯЗИ */
for (let i = 0; i < chartButton.length; i++) {
    chartButton[i].addEventListener('click', function() {
        closePopup(popupAside);
        showPopup(popupChart);
    });
}

/* обработка кнопки ЗАКРЫТЬ */
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function() {
        closePopup(popup[i]);
    });
}

let descriptionContent = document.querySelector('.main__desc_text');
let buttonShowHide = descriptionContent.querySelector('.button-read-more');
let paragraph = descriptionContent.querySelector('.hidden--paragraph');


buttonShowHide.addEventListener('click', function() {
    if (paragraph.style.display != "block") {
        paragraph.style.display = "block";
        buttonShowHide.textContent = "Скрыть";
        buttonShowHide.classList.remove('arrowdown-icon');
        buttonShowHide.classList.add('arrowup-icon');
    } else {
        paragraph.style.display = "none";
        buttonShowHide.textContent = "Читать далее";
        buttonShowHide.classList.remove('arrowup-icon');
        buttonShowHide.classList.add('arrowdown-icon');
    }
});




