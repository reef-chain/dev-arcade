$(document).ready(function() {
	


	$(document).ready(function () {
		$(".Marquee-content").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			dots:true,
			autoplay: false,
			responsive: [
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});
		$(".prev-btn").click(function () {
			$(".Marquee-content").slick("slickPrev");
		});
	
		$(".next-btn").click(function () {
			$(".Marquee-content").slick("slickNext");
		});
		$(".prev-btn").addClass("slick-disabled");
		$(".Marquee-content").on("afterChange", function () {
			if ($(".slick-prev").hasClass("slick-disabled")) {
				$(".prev-btn").addClass("slick-disabled");
			} else {
				$(".prev-btn").removeClass("slick-disabled");
			}
			if ($(".slick-next").hasClass("slick-disabled")) {
				$(".next-btn").addClass("slick-disabled");
			} else {
				$(".next-btn").removeClass("slick-disabled");
			}
		});


		$(".events-slider").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			dots:true,
			autoplay: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		$(".prev-btn").click(function () {
			$(".events-slider").slick("slickPrev");
		});
	
		$(".next-btn").click(function () {
			$(".events-slider").slick("slickNext");
		});
		$(".prev-btn").addClass("slick-disabled");
		$(".events-slider").on("afterChange", function () {
			if ($(".slick-prev").hasClass("slick-disabled")) {
				$(".prev-btn").addClass("slick-disabled");
			} else {
				$(".prev-btn").removeClass("slick-disabled");
			}
			if ($(".slick-next").hasClass("slick-disabled")) {
				$(".next-btn").addClass("slick-disabled");
			} else {
				$(".next-btn").removeClass("slick-disabled");
			}
		});


		$(".highlights-slider").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			dots:false,
			variableWidth: false,
			autoplay: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		$(".prev-btn").click(function () {
			$(".highlights-slider").slick("slickPrev");
		});
	
		$(".next-btn").click(function () {
			$(".highlights-slider").slick("slickNext");
		});
		$(".prev-btn").addClass("slick-disabled");
		$(".highlights-slider").on("afterChange", function () {
			if ($(".slick-prev").hasClass("slick-disabled")) {
				$(".prev-btn").addClass("slick-disabled");
			} else {
				$(".prev-btn").removeClass("slick-disabled");
			}
			if ($(".slick-next").hasClass("slick-disabled")) {
				$(".next-btn").addClass("slick-disabled");
			} else {
				$(".next-btn").removeClass("slick-disabled");
			}
		});


	});
	

	

      $('.menu-btn').click(function(){
		$(this).toggleClass('open');
		$('.nav-top').toggleClass('show-srchbar');
		$('body').toggleClass('hide-body');
		$('.menu-overly-srch').toggle();
	}); 

	// Show the first tab and hide the rest
// $('#tabs-nav li:first-child').addClass('active');
// $('.tab-content').hide();
// $('.tab-content:first').show();


// $('#tabs-nav li').click(function(){
//   $('#tabs-nav li').removeClass('active');
//   $(this).addClass('active');
//   $('.tab-content').hide();
  
//   var activeTab = $(this).find('a').attr('href');
//   $(activeTab).fadeIn();
//   return false;
// });


	
});

