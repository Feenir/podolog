$( document ).ready(function() {
	// ===============
// 			Свайпер
// ================
	
	const reviewsSwiper = new Swiper(".reviewsSwiper", {
		slidesPerView: 2.5,
		spaceBetween: 30,
		pagination: {
			el: ".reviews__pagination",
			type: "fraction",
			renderFraction: function (currentClass, totalClass) {
				return '<span class="'  + currentClass + '"></span>' +
					'/' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		navigation: {
			nextEl: ".reviews__next",
			prevEl: ".reviews__prev",
		},
		
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			
			561: {
				slidesPerView: 1.5,
			},
			991: {
				slidesPerView: 2.5,
			}
		}
	});



// ==============================
// 			Свайпер галерея ноги
// ===============================
	const resultsMin = new Swiper(".swiperJs-legs-min", {
		slidesPerView: 1.5,
		spaceBetween: 35,
	});
	
	
	const resultsBig = new Swiper(".swiperJs-legs-big", {
		slidesPerView: 1,
		allowTouchMove: false,
		autoHeight: true,
		pagination: {
			el: ".results__pagination",
			type: "fraction",
			renderFraction: function (currentClass, totalClass) {
				return '<span class="'  + currentClass + '"></span>' +
					'/' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		navigation: {
			nextEl: ".results__next",
			prevEl: ".results__prev",
		},
		thumbs: {
			resultsBig: resultsMin,
		},
	});

// ==============================
// 			Свайпер обо мне
// ===============================
	
	
	const jsAbout = new Swiper(".js-about", {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: ".about__pagination",
			type: "fraction",
			renderFraction: function (currentClass, totalClass) {
				return '<span class="'  + currentClass + '"></span>' +
					'/' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		navigation: {
			nextEl: ".about__next",
			prevEl: ".about__prev",
		},
	});



// ===============
// 			Табы
// ================

		$('.js-tab-trigger').click(function () {
			var id = $(this).attr('data-tab'),
				content = $('.js-tab-content[data-tab="' + id + '"]');
			
			if ($(window).width() >= 1080){
				$('.js-tab-trigger.service__items--active').removeClass('service__items--active'); // 1
				$(this).addClass('service__items--active'); // 2
				
				$('.js-tab-content.service__box--active').removeClass('service__box--active'); // 3
				content.addClass('service__box--active'); // 4
			}
			
			if ($(window).width() <= 1080) {
				$('.js-tab-trigger').removeClass('service__mob-box--active'); // 1
					$(this).addClass('service__mob-box--active'); // 2


					$('.js-tab-content.service__box-description--active').removeClass('service__box-description--active'); // 3
					content.addClass('service__box-description--active'); // 4
			}
		});
			
// ===============================================
// 			Показать/Скрыть текст на экране услуги
// ===============================================
		
		$('.js-show').click(function (event) {
			event.preventDefault()
			$(this).parent().find('.help__hidden').addClass('help__hidden--show').slideDown(200)
		})
		
		$('.js-hidden').click(function (event) {
			event.preventDefault()
			$(this).parent('.help__hidden').removeClass('help__hidden--show').slideUp(1)
		})

// ===============================================
// 			Получить ширину скролбара
// ===============================================
		
		sbWidth = {
			d: '<div>',
			c: 'b-s-b-m',
			$b: $('body'),
			init: function() {
				window.scroll_bar_width = 0;
				var
					_t = this;
				_t.$d1 = $(_t.d).addClass(_t.c).appendTo(_t.$b);
				_t.$d2 = $(_t.d).addClass(_t.c+'-i').appendTo(_t.$d1);
				setTimeout(function() {
					_t.getW();
				}, 0);
			},
			getW: function() {
				window.scroll_bar_width = this.$d1.width() - this.$d2.width();
				this.$d1.remove();
				console.log(window.scroll_bar_width);
			}
		};
		sbWidth.init();
		// ===============================================
// 			Всплыващка
// ===============================================
	
		$('.js-button').click(function() {
			$('.js-modal').fadeIn();
			$('.modal__title').text('Оставить заявку')
			return false;
		});
		
		$('.js-closeModal').click(function() {
			$(this).parents('.js-modal').fadeOut();
			return false;
		});
		
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.js-modal').fadeOut();
			}
		});
		
		$('.js-modal').click(function(e) {
			if ($(e.target).closest('.js-modal__body').length == 0) {
				$(this).fadeOut();
			}
		});
	
	$('.js-callback').click(function (e) {
		$('.modal__title').text('Заказать обратный звонок')
	})

// ===============================================
// 			Мобильное меню
// ===============================================
		
		$('.js-mobile-menuOpen').click(function() {
			$('.menu').slideDown(200);
			$('body').css('overflow', 'hidden')
			return false;
		});
		
		$('.js-closeBurger').click(function() {
			$(this).parents('.menu').slideUp(200);
			$('body').css('overflow', 'visible')
			return false;
		});
		
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.menu').slideUp(200);
				$('body').css('overflow', 'visible')
			}
		});
	});

// ===============================================
// 			Часто задаваемые вопросы
// ===============================================
	$('.js-problemOpen').click(function (event) {
		event.preventDefault()
		$(this).parent().next('.problem__answer').toggleClass('problem__answer--show')
		$(this).toggleClass('problem__plus--rotate')
	})

// ===============================================
// 			Яндекс карта
// ===============================================
	ymaps.ready(init);
	function init() {
		var myMap = new ymaps.Map("map", {
			center: [54.301721, 48.313768],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		});
		
		var myPlacemark = new ymaps.Placemark([54.302178, 48.321080], null,{
			iconLayout: 'default#image',
			iconImageHref: "/img/map-position.svg",
			iconImageSize: [250, 105],
			iconImageOffset: [-125, -110]
		});
		myMap.geoObjects.add(myPlacemark);
	}
// ===============================================
// 			Шторка ноги
// ===============================================
	$(function(){
		$(".twentytwenty-container").twentytwenty({
			default_offset_pct: 0.5, // How much of the before image is visible when the page loads
			orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
			before_label: 'До', // Set a custom before label
			after_label: 'После', // Set a custom after label
			no_overlay: true, //Do not show the overlay with before and after
			move_slider_on_hover: false, // Move slider on mouse hover?
			move_with_handle_only: false, // Allow a user to swipe anywhere on the image to control slider movement.
			click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
		});
	});
// ===============================================
// 			Сертификаты
// ===============================================
	$('.about__link').fancybox({});

// ===============================================
// 			Убрать блоки из DOM
// ===============================================

const $hideBlock = $('.service__wrapper');
const $hideBlockmob = $('.service__wrapper-mob');
const $mobileWidth = $(window).width();
	function mobileNav() {

		if ($mobileWidth <= 1080) {
			$hideBlock.detach();
		}

		if ($mobileWidth >= 1080) {
			$hideBlockmob.detach();
		}
	}
	mobileNav();

	$(window).resize(function() {
		mobileNav();

});
// ===============================================
// 			Плавный скрол к якорю
// ===============================================


$('.scrollto a').on('click', function() {
	
	let href = $(this).attr('href');
	
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400»
		easing: "linear" // по умолчанию «swing»
	});
	
	return false;
});

// ===============================================
// 			Показать еще секция помощь
// ===============================================

$('.js-moreShow').click(function() {
	$('.help__item--mob-hidden').toggleClass('help__item--mob-show');
	$('.help__more-button-svg').toggleClass('help__more-button-svg--transform');
	if (!$(this).data('status')) {
		$(this).text('Скрыть');
		$(this).data('status', true);
	}
	else {
		$(this).text('Показать больше');
		$(this).data('status', false);
	}
	
});








