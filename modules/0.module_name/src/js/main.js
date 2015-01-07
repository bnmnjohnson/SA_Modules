//Main js file for module. 
//variables

//set the name here
var moduleName = "This is the name";


// HELPER FUNCTIONS
var setWidthValue = function(){
	var windowWidth = $(window).width();
	$("#screen-width").text(windowWidth+" px");
};

var setModuleName = function(){
	$("#module-name").text(moduleName);
};


// EXECUTIONS
$(document).ready(function(){
	// call functions here
	setWidthValue();
	setModuleName();
});

$(window).resize(function(){
	setWidthValue();
});