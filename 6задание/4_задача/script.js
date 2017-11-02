"use strict"
// 4.	Задайте два input. В первый вводится число, во второе его степень. С помощью цикла
// возведите число в степень. Напечатайте результат. 

degree.onchange = function() {
  var n = number.value,
      m = degree.value,
      result = n;
  for (var i = 1; i < m; i++) {
    result *= n;
  }
  alert('Результат - ' + result);
}