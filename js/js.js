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
	    if($(this).scrollTop() > 100) {
	        $('.navbar-fixed-top').addClass('filled');
	    } else {
	        $('.navbar-fixed-top').removeClass('filled');
		}
	});
});