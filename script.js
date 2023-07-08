/*
Exercise 1:

Write a function named destructureExample that takes in an object and an array as parameters.
The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array.
The function should then return an object with the extracted values as properties with name and age.
*/

const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];

function destructureExample(obj, arr) {
	const { name, age } = obj;
	const [idx0, idx2] = arr;

	return { name, age };
}

const output_EX1 = destructureExample(obj, arr);
console.log(output_EX1);






/*
Exercise 2:

Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
The function should return the sum of all the numbers.

*/
function sumNumbers(...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

const output_EX2 = sumNumbers(1, 2, 3, 4, 5);
console.log(output_EX2);





/*
Exercise 3:

Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. 
The message should be in the format: "Hello, [name]! Welcome to our website."

*/

function createGreeting(name) {
	return `Hello, ${name}! Welcome to our website.`;
}
const greeting = createGreeting("Alice");
console.log(greeting);






/*
Exercise 4:

Write a function named isEven that takes in a number as a parameter and returns the string "Even" 
if the number is even, and "Odd" if the number is odd.Use a ternary operator instead of an if/else statement.

*/

function isEven(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(1));






/*
Exercise 5:

Convert the following function to an arrow function:

function multiply(a, b) {
  return a * b;
}

*/
const multiply = (a, b) => a * b;






/*
Exercise 6:

Write a function named getLargestNumber that takes in two numbers as parameters.
The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

*/
function getLargestNumber(num1, num2) {
	return num1 > num2 ? num1 : num2;
}
console.log(getLargestNumber(10, 5));






/*
Exercise 7:

Write a function named getAddressCity that takes in an object representing a person's address.
The address object has properties 'street', 'city', and 'country'.
The function should return the value of the 'city' property if it exists,
or the string "Unknown" if it doesn't exist, using optional chaining.

*/

function getAddressCity(address) {
	return address.city ?? "Unknown";
}
const address = { street: "123 Main St", country: "USA" };
console.log(getAddressCity(address));






/*
Exercise 8:

Write a function named doubleNumbers that takes in an array of numbers and
returns a new array with each number doubled using the array map method.

*/

function doubleNumbers(numbers) {
	return numbers.map(function (number) {
		return number * 2;
	});
}

const numbers = [1, 2, 3, 4, 5];
const doubledArray = doubleNumbers(numbers);
console.log(doubledArray);






/*
Exercise 9:

Write a function named filterEvenNumbers that takes in an array of numbers and 
returns a new array with only the even numbers using the array filter method.

*/

function filterEvenNumbers(numbers) {
	return numbers.filter((number) => number % 2 === 0);
}

const numbersArr = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbersArr);
console.log(evenNumbers);






/*
Exercise 10:

Write a function named sumArray that takes in an array of numbers and 
returns the sum of all the numbers using the array reduce method.

*/

function sumArray(numbers) {
	return numbers.reduce((sum, num) => sum + num);
}
const numbers_Arr = [1, 2, 3, 4, 5];
console.log(sumArray(numbers_Arr));






/*
Exercise 11:

Write a function named sortNumbers that takes in an array of numbers and 
returns a new array with the numbers sorted in ascending order using the array sort method.

*/

function sortNumbers(numbers) {
	return numbers.sort((a, b) => a - b);
}

const sortedNumbers = sortNumbers([5, 2, 8, 1, 4]);
console.log(sortedNumbers);
