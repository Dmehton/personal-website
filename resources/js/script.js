$(document).ready(function() {
    
    /* The navbar color change on scroll*/
    $(window).scroll(function(){
        if($(window).scrollTop() < $(window).height()){
            $("#custom-css").css({"background-color":"transparent"});   
        }
    });
    
      $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $("#custom-css").css({"background-color": "#7f7e7e"});   
        }
    });
    
     /***** navigation scroll *****/
     $(document).ready(function(){
    	$('a[href^="#"]').on('click',function (e) {
    	    e.preventDefault();
    
    	    var target = this.hash;
    	    var $target = $(target);
    
    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 900, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});
    });
    
    
});



