//comments in JS, want the whys and hows in comments not what
console.log('Hello World!');

let variable1 = 'testing';
console.log(variable1);
// let for declaring variables
// const for constants

let name = 'Julian Lively'; //string
let age = 20; //number
let legalToDrink = false; // boolean
let height = null; //null and also undefined

let person = {
    name: 'Julian',// declare let here initially instead of having to redeclare let here
    age: 20//ditto
};

//dot notation
person.name = 'johnny';
//bracket notation for ability to change this while code is running (ie. let Selection = 'name')
person['name'] = 'mary';

let testArray = ['red', 'blue']; //array 
testArray[2] = 'grey';

console.log(testArray.length);
console.log(testArray[0]);

function myFunction(name){ // name is the parameter
    console.log('hello ' + name);
}

myFunction('Julian'); // julian is the argument of the function


//console.log(prompt('What is your occupation?'));