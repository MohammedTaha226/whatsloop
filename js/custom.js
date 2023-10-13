$(function(){

	
	new WOW().init();
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 100) {
			
			
			$(".header").addClass("headerFixed");

		} else {
			
			$(".header").removeClass("headerFixed");
		}
		
	});

	$(".menuMobile .menuContent .menuRes .openSub").click(function() {
		
		$(this).siblings().slideToggle();
		
	});
	

	
	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	
	
	$(".header .options .iconSub").click(function () {
		$(this).siblings().fadeToggle();
	});
	
	$('body,html').on('click', function(e) {
		var container = $(".header .options .iconSub,.header .options .iconSub *, .header .options .optionsSub"),
		Sub = $(".header .options .optionsSub");
		

	    if( !$(e.target).is(container)  ){
	        Sub.fadeOut();
	    }
	
	});
	

	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active-slide').removeClass('active-slide');
			$('.the-slider-inner > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			$(".fade-In").addClass("animated fadeIn");
			$(".fade-In-Down").addClass("animated fadeInDown");
			$(".fade-In-DownBig").addClass("animated fadeInDownBig");
			$(".fade-In-Left").addClass("animated fadeInLeft");
			$(".fade-In-LeftBig").addClass("animated fadeInLeftBig");
			$(".fade-In-Right").addClass("animated fadeInRight");
			$(".fade-In-RightBig").addClass("animated fadeInRightBig");
			$(".fade-In-Up").addClass("animated fadeInUp");
			$(".fade-In-UpBig").addClass("animated fadeInUpBig");
			$(".zoom-In-Up").addClass("animated zoomInUp");
			$(".zoom-In-Down").addClass("animated zoomInDown");

		},
		onSlideBefore: function () {
			$(".fade-In").removeClass("animated fadeIn");
			$(".fade-In-Down").removeClass("animated fadeInDown");
			$(".fade-In-DownBig").removeClass("animated fadeInDownBig");
			$(".fade-In-Left").removeClass("animated fadeInLeft");
			$(".fade-In-LeftBig").removeClass("animated fadeInLeftBig");
			$(".fade-In-Right").removeClass("animated fadeInRight");
			$(".fade-In-RightBig").removeClass("animated fadeInRightBig");
			$(".fade-In-Up").removeClass("animated fadeInUp");
			$(".fade-In-UpBig").removeClass("animated fadeInUpBig");
			$(".zoom-In-Up").removeClass("animated zoomInUp");
			$(".fade-In-Left").removeAttr("style");
			$(".fade-In-Left").removeClass("animated fadeInLeft");
			$(".fade-In-Right").removeClass("animated fadeInRight");
			$(".fade-In-Right").removeAttr("style");
		},
		onSliderLoad: function () {
			$('.the-slider-inner > li').eq(1).addClass('active-slide');
	
		}
	});
	
	
	  var owlmobile = $('#owlmobile');
	 
	  owlmobile.owlCarousel({
        items:1,
        stagePadding: 0,
        margin:0,
        rtl:false,
	    loop:false,
	    nav:true,
	    autoplay:false,
	    responsive:{
	        0:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        480:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        1000:{
	            items:1,
                stagePadding: 0,
        		margin:1,
	        }
	    }
	  });
	  
	  var owlMessages = $('#owlMessages');
	 
	  owlMessages.owlCarousel({
        items:6,
        stagePadding: 0,
        margin:0,
        rtl:true,
	    loop:true,
	    nav:true,
	    autoplay:false,
	    responsive:{
	        0:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        480:{
	            items:2,
		        stagePadding: 0,
		        margin:0,
	        },
	        1000:{
	            items:6,
                stagePadding: 0,
        		margin:1,
	        }
	    }
	  });
	

	/****** Start accordion ******/
	
	$(".accordion.active .accordion-content").css("display","block");
	
	$(".accordion .accordion-title").click(function () {
		
		var accordId = $(this).parent().parent().attr("id");
				
		$(this).next().slideToggle(500);
		
		$("#"+accordId + " .accordion .accordion-content").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
						
	});
	
	/****** End accordion ******/
	
	  var owlSystem = $('#owlSystem');
	 
	  owlSystem.owlCarousel({
        items:4,
        stagePadding: 0,
        margin:0,
        rtl:true,
	    loop:true,
	    nav:true,
	    autoplay:false,
	    responsive:{
	        0:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        480:{
	            items:1,
                stagePadding: 50,
        		margin:30,
	        },
	        1000:{
	            items:2,
                stagePadding:250,
        		margin:30,
	        }
	    }
	  });
	
	$(".plans .plan .planHead .listHead li").click(function () {
		
		var val = $(this).attr("value"),
		id = $(this).parent().attr("id");
		
		$("."+id+" .planHead .price").text(val);
		
		$(this).addClass("active").siblings().removeClass("active");
		
		
	});
	
	$('.progressSection').one('inview', function (event, visible) {
		
		if (visible === true) {
			/****** Start  countTo******/
			$('.timer').countTo();
			/****** End  countTo******/
		}
	
	});
	

	/****** Start Tabs ******/
	
	$(".tabBtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	
	
	var lFollowX = 0,
	    lFollowY = 0,
	    x = 0,
	    y = 0,
	    friction = 1 / 30;
	
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	
	  $('.bgMove').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	
	  window.requestAnimationFrame(moveBackground);
	}
	
	$(window).on('mousemove click', function(e) {
	
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	
	});
	
	moveBackground();
	
	
	
	  var owlReviews = $('#owlReviews');
	 
	  owlReviews.owlCarousel({
        items:2,
        stagePadding: 0,
        margin:0,
        rtl:false,
	    loop:false,
	    nav:true,
	    autoplay:false,
	    responsive:{
	        0:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        480:{
	            items:1,
		        stagePadding: 0,
		        margin:0,
	        },
	        1000:{
	            items:2,
                stagePadding: 0,
        		margin:1,
	        }
	    }
	  });
	
	
	$('.progress .progress-bar').one('inview', function (event, visible) {
		
		if (visible === true) {
		
			var  data  =  $(this).attr("data-progress-animation");
				
			
			$(this).animate({
				
				width: data
				
			});
		
		}
	});
	
	
	
	
	
});
