import $ from 'jquery';
import 'jquery-selectric';
import LazyLoad from 'vanilla-lazyload';

import Slider from './modules/_swiper';
import Accordion from './modules/_accordion';
import Pdp from "./modules/_pdp";

const slider = new Slider();

$(document).ready(() => {

	new LazyLoad();
	new Pdp();

	//home slider
	slider.initHpSlider();
	slider.initTestimonialSlider();
	slider.initMoreRecipeCarousel();

	$('.select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false,
		maxHeight: 200,
	});

	new Accordion({
		ele: '.faq-panel',
		accHead: '.faq-panel__head',
		accBody: '.faq-panel__body',
		activeClass: 'faq-panel-panel--open',
		showOne: true,
	});

	$(document).on('click', '.faq-panel__close', function () {
		$(this).parents('.faq-panel__body').slideUp();
		$(this).parents('.faq-panel').removeClass('faq-panel-panel--open');
	});
});
