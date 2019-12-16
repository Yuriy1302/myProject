import '../scss/style.scss';

/* Overlay */
let overlayFone = document.querySelector('.modal-overlay');
overlayFone.addEventListener('click', function() {
    asideBar.classList.remove('aside--active');
    modalFeadBack.classList.remove('modal-feadback-1440--active');
    modalCallBack.classList.remove('modal-call-1440--active');
    overlayFone.classList.add('visually-hidden');
    document.body.style.overflow = '';
});

/* BURGER - назначаем обработчик, открывающий окно ASIDE */
let burgerButton = document.querySelector('.btn-primary--burger');
let asideBar = document.querySelector('.aside');
let closeAside = asideBar.querySelector('.btn-primary--close');

burgerButton.addEventListener('click', function() {
    if ( !(asideBar.classList.contains('aside--active')) ) {
        asideBar.classList.add('aside--active');
    }
    overlayFone.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden';
});

closeAside.addEventListener('click', function() {
    asideBar.classList.remove('aside--active');
    overlayFone.classList.add('visually-hidden');
    document.body.style.overflow = '';
});
/* BURGER - назначаем обработчик, открывающий окно ASIDE - конец */



/* CHART - обработка кнопок обратной связи и закрытие */

let chartButton = document.querySelectorAll('.btn-primary--chart');
let modalFeadBack = document.querySelector('.modal-container-feadback-1440');
let closeButtonFeadBack = modalFeadBack.querySelector('.btn-primary--close');

for (let i = 0; i < chartButton.length; i++) {
    chartButton[i].addEventListener('click', function() {
        if ( asideBar.classList.contains('aside--active') ) {
            asideBar.classList.remove('aside--active');
        }
        modalFeadBack.classList.add('modal-feadback-1440--active');
        overlayFone.classList.remove('visually-hidden');
        document.body.style.overflow = 'hidden';
    });
}

closeButtonFeadBack.addEventListener('click', function() {
    modalFeadBack.classList.remove('modal-feadback-1440--active');
    overlayFone.classList.add('visually-hidden');
    document.body.style.overflow = '';
});

/* CHART - обработка кнопок обратной связи и закрытие */

/* PHON - обработка кнопки обратного звонка */

let phoneButton = document.querySelectorAll('.btn-primary--phone');
let modalCallBack = document.querySelector('.modal-container-call-1440');
let closeButtonCallBack = modalCallBack.querySelector('.btn-primary--close');

for (let i = 0; i < phoneButton.length; i++) {
    phoneButton[i].addEventListener('click', function() {
        if ( asideBar.classList.contains('aside--active') ) {
            asideBar.classList.remove('aside--active');
        }
        modalCallBack.classList.add('modal-call-1440--active');
        overlayFone.classList.remove('visually-hidden');
        document.body.style.overflow = 'hidden';
    });
}

closeButtonCallBack.addEventListener('click', function() {
    modalCallBack.classList.remove('modal-call-1440--active');
    overlayFone.classList.add('visually-hidden');
    document.body.style.overflow = '';
});

/* PHON - обработка кнопки обратного звонка - конец */


/* ПОКАЗАТЬ ВСЕ - управление кнопками */

let descriptionContent = document.querySelector('.description__text');
let buttonShowHide = descriptionContent.querySelector('.button-read-more');
let paragraph = descriptionContent.querySelector('.description__paragraph--hidden');

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

let brandsItems = document.querySelectorAll('.brands-container__item');
let buttonShowBrands = document.querySelector('.btn-toggle-show-brands');

let technicItems = document.querySelectorAll('.technic-container__item');
let buttonShowTechnics = document.querySelector('.btn-toggle-show-technics');

function startHideBrands() {
    for (let i = 0; i < brandsItems.length; i++) {
        brandsItems[i].classList.add('brands-container__item--hidden');
    }
}
function startHideTechnics() {
    for (let i = 0; i < technicItems.length; i++) {
        technicItems[i].classList.add('technic-container__item--hidden');
    }
}

startHideBrands();
startHideTechnics();

function btnToggleUp(btn) {
    btn.classList.remove('btn-icon-down');
    btn.classList.add('btn-icon-up');
    btn.textContent = 'Скрыть';
}
function btnToggleDown(btn) {
    btn.classList.remove('btn-icon-up');
    btn.classList.add('btn-icon-down');
    btn.textContent = 'Показать все';
}

buttonShowBrands.addEventListener('click', function() {
    for (let i = 0; i < brandsItems.length; i++) {
        if ( brandsItems[i].classList.contains('brands-container__item--hidden') ) {
            brandsItems[i].classList.remove('brands-container__item--hidden');
            btnToggleUp(buttonShowBrands);
        } else {
            brandsItems[i].classList.add('brands-container__item--hidden');
            btnToggleDown(buttonShowBrands);
        }
    }
});

buttonShowTechnics.addEventListener('click', function() {
    for (let i = 0; i < technicItems.length; i++) {
        if ( technicItems[i].classList.contains('technic-container__item--hidden') ) {
            technicItems[i].classList.remove('technic-container__item--hidden');
            btnToggleUp(buttonShowTechnics);
        } else {
            technicItems[i].classList.add('technic-container__item--hidden');
            btnToggleDown(buttonShowTechnics);
        }
    }
});


/* ПОКАЗАТЬ ВСЕ - управление кнопками - конец */
