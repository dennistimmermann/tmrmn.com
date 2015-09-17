var entry = $('.entry').first();
var entry_bottom = entry.offset().top + entry.height();
var g = $('.gallery').first();

var reposition = function() {

	var scroll = $(window).scrollTop();

	if(scroll + 100 >= entry_bottom) {
		g.addClass('gallery-fullwidth')
	}
	else {
		g.removeClass('gallery-fullwidth')
	}
}

$(window).on('scroll', reposition)
