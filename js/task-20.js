// Напиши функцию calculateTotalPrice(order), которая принимает один параметр 
// order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма 
// элементов должна сохраняться в переменной total, которая возвращается, как 
// результат работы функции.


function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i=0; i<order.length; i += 1) {
  total += order[i];
  
  }

  // Пиши код выше этой строки
  return total;
}


console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
