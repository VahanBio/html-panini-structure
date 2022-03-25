import Swiper, { Pagination, Controller, Navigation } from 'swiper';

export default class Slider {
	initHpSlider() {
		const whoWeAre = new Swiper('#carousel', {
			modules: [Pagination, Navigation],
			pagination: {
				el: '.carousel__pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.carousel .swiper-button__prev',
				prevEl: '.carousel .swiper-button__next',
			},
		});
	}

	initTestimonialSlider() {
		const testimonialQuote = new Swiper('#quote', {
			modules: [Controller, Navigation],
			slidesPerView: 1,
			loop: true,
			loopedSlides: 4,
			navigation: {
				nextEl: '.testimonial__review .swiper-button__next',
				prevEl: '.testimonial__review .swiper-button__prev',
			},
		});

		const testimonialImgCarousel = new Swiper('#testimonial-picture', {
			modules: [Controller, Navigation],
			loop: true,
			slidesPerView: 1,
			loopedSlides: 4,
			navigation: {
				nextEl: '.testimonial__picture .swiper-button__next',
				prevEl: '.testimonial__picture .swiper-button__prev',
			},
		});

		testimonialImgCarousel.controller.control = testimonialQuote;
		testimonialQuote.controller.control = testimonialImgCarousel;
	}

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
