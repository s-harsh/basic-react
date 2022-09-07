// Arrorw Function --------->
// This is really awesome & makes your code more readable, more structured and look like modern code.

/*
Enumerate the parameters
 (param1, param2, ..., paramN) , then put the arrow => , and on the right side write the body { ... } .
(number) => { return number * 2; }

Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly
 brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in
  map , filter , and other common array methods.

Here () => means is that left part denotes the input of a function and the right part the output of that function.

Benefits of Arrow Functions
There are two major benefits of using Arrow functions. One is that it's a shorter syntax and thus requires
 less code. The main benefit is that it removes the several pain points associated with the this operator.

Arrow function run just fastere then normal funciton.
JS Rule — A JavaScript function will always return 'undefined' unless explicitly or implicitly told otherwise.
 */


// ES5
function myName (name){
    return 'Hello '+ name;
}
console.log(myName('Harsh'));

// Output 
// Hello Harsh


// ES6
const func=(name)=>{
    return 'Hi '+name;
}
console.log(func('Harsh'));

// output -> Hi Harsh


//Furthermore, if function body has only one statement to returns, we can skip curly braces & the return statement:
// Or without using arrow or implement 'return' keyword
//if the function takes only one parameter we can even skip the braces () around it:
const myFunc=name=> 'Hi '+name;

console.log(myFunc('Harsh'));

// we can also use let
let printInfo=(name,age)=>{
    return 'Hi '+name+', My age is '+age;
}
console.log(printInfo('Harsh',20));

// Output --> Hi Harsh, My age is 20

/* 
Template Literals
Template literals or template strings are pretty cool. We don’t have to use the plus (+) operator to concatenate
 strings, or when we want to use a variable inside a string.*/

const printInfor1=(name,age)=>{
    return `Hi ${name}, My age is ${age}`;
}
console.log(printInfo('Harsh',20));

/* Note - 
1. It's not anonymous functions, but arrow functions that don't have the arguments object. So, your question is making an
 incorrect statement/assumption. Regular anonymous functions declared with the function keyword have the arguments

2. Passing an arrow function in render will cause React to create a new function each time the component renders.
 But you don't need to worry because the impact on performance is very minuscule. It's very unlikely that your users
  will experience a noticeable lag just because of arrow functions in render. */


// Default Parameter ---------------.>
/*
If i use default parameter then,if you forget to write the parameter, it won’t return an undefined error
 because the parameter is already defined in the default. So when you run your function with a
missed parameter,it will take the value of the default parameter t, and it will not return an error! 

As you see, the function returns a value even though we missed the second parameter. Now with the default
parameter we can handle the error in advance
  */

const printInfor3=(name,age)=>{
    return `Hi ${name}, My age is ${age}`;
}
console.log(printInfo('Harsh'));
// Output - Hi Harsh, my age is undefined

// Instead 
const printInfor4=(name,age=20)=>{
    return `Hi ${name}, My age is ${age}`;
}
console.log(printInfo('Harsh'));
// Output - Hi Harsh, My age is 20