let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
words.sort((a,b)=>(a.length-b.length).pop()

// - Convert the above array "words" into an array of length of word instead of word.

// - Create a new array that only contains word with atleast one vowel.
words.filter((num)=>{
  words.filter((num)=>{
    if(
      words.includes("a")||
      words.includes("e")||
      words.includes("i")||
      words.includes("o")||
      words.includes("u")
    ){
  return true;
    }
  else{
  return false;
  }
  });
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(acc,cv){
  return acc+cv;
  }
  numbers.reduce(sumArray);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiplyArray(num){
  return num*3;
  }
  numbers.map(multiplyArray);
// - Create a new array that contains only even numbers
function onlyEven(num){
  return num%2===0;
  }
  numbers.filter(onlyEven);
// - Create  a new array that contains only odd numbers.
numbers.filter((num)=>num%2!==0);
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((num)=>num%2===0);
// - Sort the above number in assending order.
[...numbers].sort((a,b)=>a-b);
// - Does sort mutate the original array?
```
   yes sort mutate the original array.
```
// - Find the sum of the numbers in the array.
numbers.reduce((acc,cv)=>acc+cv);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
numbers.reduce((acc,cv)=>(acc+cv)/numbers.length);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(acc,cv,words2){
return 
}
words.filter();


