// Arrorw Function --------->
// This is really awesome & makes your code more readable, more structured and look like modern code.

/*
Enumerate the parameters
 (param1, param2, ..., paramN) , then put the arrow => , and on the right side write the body { ... } .
(number) => { return number * 2; }
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


//Furthermore, if the function body has only one statement that it returns, we can skip curly braces {} and the return statement:
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

/* Note - 
1. It's not anonymous functions, but arrow functions that don't have the arguments object. So, your question is making an
 incorrect statement/assumption. Regular anonymous functions declared with the function keyword have the arguments
  
2. Passing an arrow function in render will cause React to create a new function each time the component renders.
 But you don't need to worry because the impact on performance is very minuscule. It's very unlikely that your users
  will experience a noticeable lag just because of arrow functions in render. */