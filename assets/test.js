const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        320:{
            slidesPerPage: 1,
            slidesPerView: 1,
            spaceBetween: 12,
            loop: false,
        },
        375:{
            slidesPerPage: 1,
            slidesPerView: 1,
            spaceBetween: 12,
            loop: false,
        },
        480:{
            slidesPerPage: 1,
            slidesPerView: 1,
            spaceBetween: 12,
            loop: false,
        },
        520:{
            slidesPerPage: 1,
            slidesPerView: 1,
            spaceBetween: 12,
            loop: false,
        },
        600: {
            slidesPerPage: 2,
            slidesPerView: 2,
            spaceBetween: 12,
            loop: false,
        },
        900:{
            slidesPerPage: 1,
            slidesPerView: 3,
            spaceBetween: 20
        },
        1230: {
            slidesPerPage: 1,
            slidesPerView: 4,
            spaceBetween: 24
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
