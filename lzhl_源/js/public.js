jQuery(window).load(function () {
    // will first fade out the loading animation
    jQuery(".status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery(".preloader").delay(500).fadeOut("slow");
});

$(function(){
	
	
	(function($) {
	    var App = {
	    /**
	    * Init Function
	    */
	    init: function() {
	        App.Animations();
	    },

	    Animations: function() {
			$('.section-pc').waypoint(function() {
				// num();
				// $('.downArrow').addClass('active');
				$('.s1_text').eq(0).addClass('s1_active');
			}, { offset: '0' });

			$('.AboutUs').waypoint(function() {
				$('.sectionTit1').addClass('secAdd');
				$('.pic_bg1').addClass('leftActive');
				$('.pic_bg2').addClass('rightActive');
			}, { offset: '70%' });

			$('.Artificial').waypoint(function() {
				$('.sectionTit2').addClass('secAdd');
				$('.Artificial_left').addClass('leftActive');
				$('.Artificial_right').addClass('rightActive');
			}, { offset: '60%' });

            $('.TheFull').waypoint(function() {
                $('.sectionTit3').addClass('secAdd');
                $('.TheFull_con').addClass('bottomActive');
            }, { offset: '60%' });

            $('.Payment').waypoint(function() {
                $('.sectionTit4').addClass('secAdd');
                $('.Payment_left').addClass('leftActive');
                $('.Payment_right').addClass('rightActive');
            }, { offset: '60%' });

            $('.companion').waypoint(function() {
                $('.sectionTit5').addClass('secAdd');
                $('.companion_con').addClass('bottomActive');
            }, { offset: '60%' });

            $('.connection').waypoint(function() {
                $('.sectionTit6').addClass('secAdd');
                $('.con_text').addClass('rightActive');
            }, { offset: '60%' });


	    }
	}
	$(function() {
	  App.init();
	  });
	})(jQuery);
		
	
})


















