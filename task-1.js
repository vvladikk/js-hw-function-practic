function filterOddNumbers(arr) {
   return arr.filter(num => num % 2 !== 0);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = filterOddNumbers(numbers);

console.log(oddNumbers);
