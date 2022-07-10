import $ from 'jquery';
import LazyLoad from 'vanilla-lazyload';

import Slider from './modules/_swiper';
import Accordion from './components/_accordion';

const slider = new Slider();

$(document).ready(() => {
	new LazyLoad();

	//home slider
	slider.initMoreRecipeCarousel();

	new Accordion({
		ele: '.faq-panel',
		accHead: '.faq-panel__head',
		accBody: '.faq-panel__body',
		activeClass: 'faq-panel-panel--open',
		showOne: true,
	});
});