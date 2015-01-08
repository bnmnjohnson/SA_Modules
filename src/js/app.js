//Main js file for site overview

var interactiveDemo = function(){
	$("#interactiveBlock").click(function(){
		$("#interactiveBlock").animate({left: "+=50"});
	});
};

$(document).ready(function(){
	//execute funtions here
	interactiveDemo();
});