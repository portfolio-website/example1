$(window).scroll(function () {
  if($(window).scrollTop() > 400) {
    $("#progress1").addClass("progress-bar");
    $("#progress2").addClass("progress-bar");
    $("#progress3").addClass("progress-bar");
    $("#progress4").addClass("progress-bar");
  }
});

!(function (e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var a = e(this.hash);
      if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
        return (
          e("html, body").animate(
            { scrollTop: a.offset().top - 54 },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    e(".js-scroll-trigger").click(function () {
      e(".navbar-collapse").collapse("hide");
    }),
    e("body").scrollspy({ target: "#mainNav", offset: 56 });
  function a() {
    if(100 < e("#mainNav").offset().top){
      e("#mainNav").addClass("navbar-shrink");
      e(".navbar-brand").addClass("active");
      e(".nav-link").removeClass("text-white");
    }else{
      e(".nav-link").addClass("text-white");
      e(".navbar-brand").removeClass("active");
      e("#mainNav").removeClass("navbar-shrink");
    }
  }
  a(), e(window).scroll(a);
})(jQuery);
(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $(window).on('load', function(){
		// ISOTOPE PORTFOLIO WITH FILTER
		if(isExists('.portfolioContainer')){
			var $container = $('.portfolioContainer');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		 
			$('.portfolioFilter span').click(function(){
				$('.portfolioFilter .current').removeClass('current');
				$(this).addClass('current');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			}); 
		}
	
	});
	
	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}
	
	
})(jQuery);


function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}
