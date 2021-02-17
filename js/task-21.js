// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом(параметр string) и возвращает 
// самое длинное слово в этой строке.


function findLongestWord(string) {
  // Пиши код ниже этой строки
   const Words = string.split(' ');
   let longestWord = Words[0];
  
      for (const Word of  Words) {
         if (Word.length > longestWord.length) {
             longestWord = Word;
         }
       }
            return longestWord;
  
  // Пиши код выше этой строки
}


  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  console.log(findLongestWord('Google do a roll'));
  console.log(findLongestWord('May the force be with you'));

