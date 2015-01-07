//Main js file for module. 

$(document).ready(function(){
	// call functions here
	setWidthValue();
});

$(window).resize(function(){
	setWidthValue();
})

var setWidthValue = function(){
	var windowWidth = $(window).width();
	$("#screen-width").text(windowWidth+" px");
};