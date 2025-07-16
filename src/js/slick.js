$(".about-us-carousel").slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				centerMode: true,
				centerPadding: '100px',
			},
		},
	],
});


$(".game-img-carousel").slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});



