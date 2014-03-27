// execute on dom loaded event
$(function() {

	var viewport = {};

	$(window).on('load resize scroll', function() {
		viewport.height = $(window).height();
		viewport.width = $(window).width();
		
		viewport.aspectRatio = viewport.height / viewport.width;

		viewport.pageHeight = $(document).height();
		
		viewport.scrollY = $(window).scrollTop();
		viewport.scrollPercentage = viewport.scrollY / (viewport.pageHeight - viewport.height);
		
		updateBackground(viewport);

		console.log(viewport.aspectRatio);
	});

	function updateBackground(v) {
		var bg = $('.parallax-bg svg'),
		    clouds = bg.find('#clouds'),
		    mountain = bg.find('#mountain'),
		    grass = bg.find('#grass'),
		    cloudPercentage = lerp(viewport.scrollPercentage, (25 / viewport.aspectRatio), -(12.5 / viewport.aspectRatio)),
		    mountainPercentage = lerp(viewport.scrollPercentage, (20 / viewport.aspectRatio), -(10 / viewport.aspectRatio)),
		    grassPercentage = lerp(viewport.scrollPercentage, (15 / viewport.aspectRatio), -(7.5 / viewport.aspectRatio));
		
		clouds.attr({ y: cloudPercentage + "%" });
		mountain.attr({ y: mountainPercentage + "%" });
		grass.attr({ y: grassPercentage + "%" });
	}

	function easeInOutSine(t, b, c) {
		return -c/2 * (Math.cos(Math.PI*t) - 1) + b;
	}

	function lerp(t,b,c) {
		return c*t + b;
	}
});