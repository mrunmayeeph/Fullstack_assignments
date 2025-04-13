// Task 1: Age and Adult Check
let age = 25;
let isAdult = age >= 18;  // returns true if age is 18 or more, else false
console.log("Is Adult:", isAdult);

// Task 2: Operations with x and y
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Check if number is even or odd
let n = 7;  // You can change this to any number
let isEven = (n % 2 === 0) ? "Even" : "Odd";
console.log(`Number ${n} is`, isEven);

// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Array from 1 to 5:", numbers);

// Task 5: Function to return square of a number
function square(num) {
  return num * num;
}

console.log("Square of 4:", square(4));  // Example usage
