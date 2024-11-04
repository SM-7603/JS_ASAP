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

// NON PRIMITIVE TYPES (objects) - looks like a python dictionary!
// a collection of values!

const person = {
    'firstName': 'Bruce',
    'lastName': 'Wayne',
    'age': 30
}

// console.log(typeof(person)); // type is 'object'

// console.log(person.lastName);

// arrays // fun fact - in JS arrays are also objects!
const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);

// console.log(typeof(oddNumbers))