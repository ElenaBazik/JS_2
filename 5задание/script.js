var x = parseInt(prompt("Введите первое число X:",""));
var y = parseInt(prompt("Введите второе число Y:",""));
var z = parseInt(prompt("Введите третье число Z:",""));
if(x==""){
	alert("Вы не ввели первое число X!");
}
else if(y==""){
	alert("Вы не ввели второе число Y!");
}
else if(z==""){
	alert("Вы не ввели третье число Z!");
}
else if(x>=y){
	if(x>=z){
		alert("Большее число Х = " + x);
	}
	else {
		alert("Большее число Z = "+ z);
	}
}
else {
	if(y>=z){
		alert("Большее число Y = "+ y);
	}
	else {
		alert("Большее число Z = "+ z);
	}
}