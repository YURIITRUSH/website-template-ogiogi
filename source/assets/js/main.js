import $ from 'jquery'
require('./slick.min.js')
var log = console.log
log('Im working')

$(".menu a").click(function () {
	const el = $($(this).attr('href'))
	if (el.length) {
			$([document.documentElement, document.body]).animate({
					scrollTop: $($(this).attr('href')).offset().top
			}, 800);
	}
});

const timePoint = $('.timeline--point')
const timeText = $('.timeline-info')
timeText.hide()
timeText.first().show()
timePoint.on('click', function (){
	const index = $(this).data('trigger')
	timeText.hide()
	$('.timeline-info[data-tab="'+index+'"]').slideDown(500)
	timePoint.removeClass('is-active')
	$(this).addClass('is-active')
})

$('.burger').on('click', function(){
	$('.menu').toggleClass('is-opened')
})

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});