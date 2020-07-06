$(document).ready(function(){
	/* Owlcarousel start */
	$('.banner').owlCarousel({
		items: 1,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		margin: 30,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items:1
			}
		}
	});


	 $('.logo-slider').owlCarousel({
        items: 5,
        smartSpeed: 2000,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 4000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            },
            1200: {
                items:5
            }
        }
    });


});