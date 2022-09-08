// Spread and Rest Operators ----------------------------->
/* JavaScript uses three dots (...) for both the rest and spread operators.
the rest operator puts the rest of some specific user-supplied values into
 a JavaScript array. But the spread syntax expands iterables into individual
 elements.
Spread syntax looks exactly like rest syntax. In a way, spread syntax is the
opposite of rest syntax. Spread syntax "expands" an array into its elements,
while rest syntax collects multiple elements and "condenses" them into a single element.

When using spread syntax for function calls, be aware of the possibility of exceeding
the JavaScript engine's argument length limit.*/


// Spread Syntex 
const number =[1,2,3];

const newNumber=[...number,4,5,6];
console.log(newNumber);

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6

/*
There are three distinct places that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })
 */

const obj = { key1: 'value1' };
// const array = [...obj]; // TypeError: obj is not iterable

// arrays, all indices are enumerable own properties, so arrays can be spread into objects.

const array1 = [1, 2, 3];
const obj1= { ...array1 }; // { 0: 1, 1: 2, 2: 3 }


const person1={
    name: 'Harsh'
};

const newPerson1={
    ...person1,
    age:28
};

console.log(newPerson1);

// Rest Operator/Syntex

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // Output :
  ["CodeSweetly", "Web Developer", "Male"]

// Above,...otherInfo rest parameter to put "CodeSweetly", "Web Developer", and "Male" into an array.
/* The rest operator (...) instructs the computer to add whatever otherInfo (arguments) supplied
    by the user into an array. Then, assign that array to the otherInfo parameter.

As such, we call ...otherInfo a rest parameter.

"Oluwatobi" and "Sofela" got assigned to the firstName and lastName parameters.

At the same time, the rest operator added the remaining arguments
( "CodeSweetly", "Web Developer", and "Male") into an array and assigned that array to the
 otherInfo parameter.

Therefore, myBio() function correctly returned ["CodeSweetly", "Web Developer", "Male"]
as the content of the otherInfo rest parameter.*/

// Operator :
// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
  
  // Output :
  //“Oluwatobi Sofela runs CodeSweetly”

/*
Note - The text after the rest operator references the values you wish to encase inside an
 array. You can only use it before the last parameter in a function definition.
 
Keep in mind that you cannot use the “use strict” directive inside any function containing
a rest parameter, default parameter, or destructuring parameter. Otherwise, the computer
will throw a syntax error.*/

/* But suppose you need your function to be in strict mode while also using the rest parameter.
In such a case, you can write the “use strict” directive outside the function.

Note: Only place the “use strict” directive outside your function if it is okay for the
entire script or enclosing scope to be in strict mode.*/

// Define a “use strict” directive outside your function:
"use strict";

// Define a function with one rest parameter:
function printMyName(...value) {
  return value;
}

// Invoke the printMyName function while passing two arguments to its parameters:
printMyName("Oluwatobi", "Sofela");

// The invocation above will return:
["Oluwatobi", "Sofela"]




