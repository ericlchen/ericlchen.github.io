$(document).ready(function() {
    // $("body").css("display", "none");
    // $("body").fadeIn(650);

    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(400, redirectPage);      
    });
         
    function redirectPage() {
    	if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');
        window.location = linkLocation;
    };

    $(window).scroll(function() {
	    if($(this).scrollTop() > 75) {
	        $('.navbar-fixed-top').addClass('filled');
	    } else {
	        $('.navbar-fixed-top').removeClass('filled');
		}
	});

    // var small={width:"100%", height:"auto"};
    // var large={width:"140%", height:"auto"};
    // $(".article-img").css(small).on("click", function() {
    //     $(this).animate(large);
    //     $(".article-img").not($(this)).animate(small);
    // })

    $(".article-img").on("click", function() {
        $(this).toggleClass("bigger");
    });

});