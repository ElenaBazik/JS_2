var a = prompt('Введите номер квартиры', );
if (a <= 0){
	alert ("Такой квартиры нет!");
}
else if (a <= 20){
	alert ("У Вас 1 подъезд!");
}
else if (a >= 21 && a <= 64){
	alert ("У Вас 2 подъезд!");
}
else if (a >= 65 && a <= 80){
	alert ("У Вас 3 подъезд!");
}
else {
	alert("В этом доме такой квартиры нет!")
}