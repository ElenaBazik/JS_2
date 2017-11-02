"use strict"
var button =document.querySelector('button');
function getAge () {
	var input =document.querySelector('input');
	var readyValue = input.value;
	var resalt = 0;
	if (input.value < 18) {
		resalt = 17 - input.value;
	} else if (input.value > 18 && input.value < 2018){
		resalt = 2017 - input.value;
	} else {
		resalt = ('R Q joking')
	}
	alert(resalt);
}
button.addEventListener ('click', getAge);

