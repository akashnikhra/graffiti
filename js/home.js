
			
$.extend($.easing,
{
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	}
			
});
			
function viewport() {
	var e = window, a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
			
$(window).load(function() {
				
	$(window).scrollTop(0);
				
	setTimeout(function(){
					
		$(window).scrollTop(50000);
		$(window).scrollTop(0);
		$('body').css({'overflow':'visible'});
		$("#panel-home-hero").css("opacity","1");
					
		$('#preloader').fadeOut(0, function(){
			$('#preloader').css("display", "none");
		});
					
		$("html").css({ 'overflow-y': 'scroll' });
					
	}, 0);
	
	$("#arrow").click(function(){
		$("html, body").animate({ scrollTop: $(window).height()}, 600);
		return false;
	});
	
	checkSize();
				
});
			
$(window).resize(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
	}else{
		checkSize();
	}
});
			
			
function checkSize(){
				
				
	$(window).unbind('scroll');
	$("#panel-grid-home").attr('style', '');
	$(window).scrollTop(0);
	
	if (viewport().width > 1280){
		$(".home-row-1 .image").height(($(".home-row-1").height()));
		$(".home-row-2 .image").height(($(".home-row-2").height()));
	}else{
		$(".home-row-1 .image").height(300);
		$(".home-row-2 .image").height(300);
	}

	if (viewport().width > 1024){
					
		$("#panel-home-hero").css("margin-bottom", $("#panel-grid-home").height());
		$(window).bind("scroll", function (e) {
				
			var val = $(this).scrollTop();
			var height = viewport().height;
			var heightBreak = height * 1;
					
			$("#panel-grid-home").css("opacity", (val/height));
				
			if (val >= heightBreak){
					
				if (val/heightBreak < 1.00){
					$("#panel-grid-home").css("position", "fixed");
					$("#panel-grid").css("top", 0);
				}else{
					$("#panel-grid-home").css("position", "absolute");
					$("#panel-grid-home").css("top", heightBreak*1.00);
				}
					
			}else{
				$("#panel-grid-home").css("position", "fixed");
				$("#panel-grid-home").css("top", "0");
			}
				
		});
			
	}else{
					
		$("#panel-home-hero").css("margin-bottom", 0);
					
	}
			
}	