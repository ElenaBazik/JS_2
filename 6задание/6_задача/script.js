document.write('<br/><br/>С помощью цикла вывести произведение чисел от 1 до 50<br/><br/>');
var result = 1;
for (var i = 1; i < 50; i++) {
  result *= i;
}
document.write('произведение чисел от 1 до 50 = ' + result);
