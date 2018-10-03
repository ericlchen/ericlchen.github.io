/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.opacity = "1";
    document.getElementById("myNav").style.zIndex = "1000";
    var navItems = document.getElementsByClassName('displayaz')
	for (var i=0;i<navItems.length;i+=1) {
  		navItems[i].style.display = 'block';
	}
    
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("myNav").style.zIndex = "-1";
    var navItems = document.getElementsByClassName('displayaz')
	for (var i=0;i<navItems.length;i+=1) {
  		navItems[i].style.display = 'none';
	}
}

// Dropdown
$("#mob-work").on("click", function() {
  $("#mob-work-dropdown").css("display", "block");
  $("#mob-work-dropdown li a").css("display", "block");
});

$(".mob-work-display").on("click", function() {
  $("#mob-work-dropdown").css("display", "none");
  $("#mob-work-dropdown li a").css("display", "none");
});

// if ($("#mob-work-dropdown").is("visible")) {
//   $("#mob-work").click(function () {
//     $("#mob-work-dropdown").hide();
//     $("#mob-work-dropdown li a").hide();
//     console.log("success");
//   });
// } else {
//   $("#mob-work").click(function() {
//     $("#mob-work-dropdown").show();
//     $("#mob-work-dropdown li a").show();
//   });
// }
