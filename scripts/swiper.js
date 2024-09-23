document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30
    });
});