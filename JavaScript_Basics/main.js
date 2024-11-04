// I - comments, comments, variables & data types

// console.log(`Hello from main.js!`);

// console.log('Bonjour!');

// single line comments!

// declare variables

// let age = 21;
// console.log(age);

// you can't leave the const variables 'empty' i.e. undefined (**yes... it's a dataType**)
// note! - null != undefined (undefined is something that isn't defined yet, but if we want something that's explicity left empty - then use NULL)
// const salary = 80_000;
// console.log(salary);

// and that's it for the primary primitive data types (i.e. something that has an actual value, eg. 'shubham', the age 21, etc.)

// let canVote = true // booleans
// let canDrive = false

// NON PRIMITIVE TYPES (objects) - looks like a python dictionary!
// a collection of values!

// const person = {
//     'firstName': 'Bruce',
//     'lastName': 'Wayne',
//     'age': 30
// }

// console.log(typeof(person)); // type is 'object'

// console.log(person.lastName);

// arrays // fun fact - in JS arrays are also objects!
// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[0]);

// console.log(typeof(oddNumbers))

// II - OPERATORS:

// let x = 10 // assignment
// let y = 3

// // also the semi colon - ; - isn't really necessary :D
// console.log(x % y) // all the basic arithmetic ones apply here
// console.log(++x) // pre increment; x = 11
// console.log(y++) // post increment; y = 3
// console.log(y) // y = 4

// console.log(x >= y) // comparison operators

// // logical operations, just and and or --> && or || 
// const isValidNumber = x > 20 || 8 > y
// console.log(isValidNumber)

// const isValid = false
// console.log(!isValid) // negation

// // str operations
// console.log('Bruce ' + 'Wayne');

// // ternary
// // const isEven = 10 % 2 === 0 ? true : false // variant one
// const isEven = 10 % 2 === 0 ? 'Number is Even!' : 'Number is Odd!' // it doesn't have to be a boolean, it's a simple conditional!
// console.log(isEven)

// Type Conversions!

// Implicit types

// for addition, it assumes (*converts*) everything to be a string
console.log(2 + '10')
console.log(true + '10')
// for -, *, % it converts it to numbers
console.log('4' - '2')
// but it gets weird if we do this:
console.log('Bruce' - 'Wayne') // OUTPUT = NaN --> not a number
// for bools & null
console.log('5' - true) // true = 1, false = 0, and null = 0
// finally - undefined
console.log(5 - undefined) // NaN