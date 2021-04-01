
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/IPhone|iPad|IPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());

    }
};



if (isMobile.any()) {
    document.body.classList.add('_touch');


    new Swiper('.program-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'

        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        slidesPerView: 1,
    });

    // let menuArrows = document.querySelectorAll('.menu__arrow');
    // if (menuArrows.length > 0) {
    //     for (let index = 0; index < menuArrows.length; index++) {
    //         const menuArrow = menuArrows[index];
    //         menuArrow.addEventListener('click', function (e) {
    //             menuArrow.parentElement.classList.toggle('_active');
    //         });
    //     }
    // }
}
else {
    document.body.classList.add('_pc');
    new Swiper('.program-slider', {

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        slidesPerView: 4,
    });
}




let iconMenu = document.querySelector('.header__icon');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {

    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}




