import Swiper, { Pagination, Controller, Navigation } from 'swiper';

export default class Slider {
    initMoreRecipeCarousel() {
        new Swiper('.more-recipe-carousel', {
            modules: [Navigation],
            loop: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.more-recipe__nav-next',
                prevEl: '.more-recipe__nav-prev',
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }
}