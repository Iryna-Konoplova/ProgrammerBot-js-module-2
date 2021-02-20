// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет, есть ли
// в массиве array значение value, возвращая true если есть и false в
// противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать
// метод массив.includes(значение).



function includes(array, value) {
  // Пиши код ниже этой строки
     
    for (const arrayi of array) {
       
        if (arrayi === value) {
            return true;
            
        }    
    }
       return false;
     
  // Пиши код выше этой строки
}

 


  console.log(includes([1, 2, 3, 4, 5], 3));
  console.log(includes([1, 2, 3, 4, 5], 17));
  console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
  console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран')); 
  console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
  console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')); 