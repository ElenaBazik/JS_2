var x = parseInt (prompt('Введите первое число X:',''));
var y = parseInt (prompt('Введите второе число Y:',''));
if (x==""){
	alert ("Вы не ввели первое число X!");
}
else if (y==""){
	alert ("Вы не ввели второе число Y!");
}
if (x == y){
	alert("Числа равны!");
}
else if (x > y){
	alert("Большее число Х = " + x);
}
else {
	alert("Большее число Y = " + y);
}