// ===============
// 			Табы
// ================
$(document).ready(function () {
	$('.js-tab-trigger').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');
		
		$('.js-tab-trigger.service__items--active').removeClass('service__items--active'); // 1
		$(this).addClass('service__items--active'); // 2
		
		$('.js-tab-content.service__box--active').removeClass('service__box--active'); // 3
		content.addClass('service__box--active'); // 4
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
		$('.modal').fadeIn();
		return false;
	});

	$('.js-closeModal').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
	});

	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__body').length == 0) {
			$(this).fadeOut();
		}
	});
	
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

