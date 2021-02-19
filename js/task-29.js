// Напиши функцию getEvenNumbers(start, end) которая возвращает
// массив всех чётных чисел от start до end.Чётным считается число 
// которое делится на 2 без остатка.


function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    const arrayOfNumbers = [];
    const arrayOfEvenNumbers = [];

for (let i=start; i<=end; i+=1) {
    arrayOfNumbers.push(i);
    }
    
    for (const number of arrayOfNumbers) {
        if (number % 2 === 0) {
          arrayOfEvenNumbers.push(number);
        } 
    }

    return arrayOfEvenNumbers;
    // Пиши код выше этой строки
}
  
  console.log(getEvenNumbers(2, 5));
  console.log(getEvenNumbers(3, 11));
  console.log(getEvenNumbers(6, 12));
  console.log(getEvenNumbers(8, 8));
  console.log(getEvenNumbers(7, 7));