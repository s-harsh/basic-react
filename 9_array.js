// Arryay function 

// Get elements from arrya
// const element = array[index];

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad[0]; // '🍅'
salad[2]; // '🥦'
salad[5]; // '🥕'

// traverse backword
const len = salad.length;
salad[len - 1]; // '🥑'
salad[len - 3]; // '🌽'

// loop in array
for(let i=0; i<salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }

// Add elementss to array

//push() method adds an element to the end of the array
salad.push('🥜');
console.log(salad);
// Output - (8) ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

// Add element add the first
salad.unshift('🥗');
console.log(salad);
// ['🥗', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

// Remove element from array
salad.pop();
console.log(salad); 
// ['🥗', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

// shift() method to remove an element from the beginning
salad.shift();

console.log(salad);
// ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']


// Copy and Clone Array
const saladCopy = salad.slice();

console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
//Alternatively, use the spread operator to create copy of the array

//  see below -
if(salad==saladCopy){
    console.log('True');
}
else{
    console.log(false);
}
/* Note - Javascript arrays are objects and you can't simply use the equality operator == to understand
if the content of those objects is the same. The equality operator will only test if two object are actually
exactly the same instance.
Objects are compared based on the references of the variables and not on the values

If you need to check if two array are equals i'd recommend to just traverse both arrays and verify that all the
elements have the same value (and that the two array have the same length).
Other way -*/
// To string method
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];
 
console.log(arr1.toString() == arr2.toString()); // true
 
console.log(arr1.toString() === arr3.toString()); // false

// Mehtod 2 - Using for loop


// Check given value is array or not
Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
Array.isArray('🍅'); // returns false
Array.isArray({ 'tomato': '🍅'}); // returns false
Array.isArray([]); // returns true


// Array Destructuring in JavaScript -------------------------------->

//  extracting the values from an array with destructruing 
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

// without destructuring
let vegetables = ['🍅', '🍄', '🥕'];
let tomato1 = vegetables[0];
let mushroom1= vegetables[1];
let carrot1= vegetables[2];

// Assign a Default Value to a Variable
let [tomato2 , mushroom2 = '🍄'] = ['🍅'];
console.log(tomato2); // '🍅'
console.log(mushroom2 ); // '🍄'

// Skip value in array
let [tomato3, , carrot3] = ['🍅', '🍄', '🥕'];

console.log(tomato3); // '🍅'
console.log(carrot3); // '🥕

// Nested array destructruing   -------------------->
// that an array can have another array as an element
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

// Access '🥕'
const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot2 = veg[2]; // returns '🥕'

// Alternatively 
fruits[4][2]; // returns '🥕'

// Using destructuring 😎
let [,,,,[,,carrot4]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];


// Merge array
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]


// Fill() array Method
// The fill() method fills an array with a static value.
//You can change all the elements to a static value or change a few selected items.
// Note that the fill() method changes the original array.
const colors=['red','blue','green']
colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]

// Fill the selected elemetns
colors.fill('Green',1,3);
// ["pink", "Green", "Green"]



// includes() array Method
// determine the presence on an element in an array using the includes() method.
//If the element is found, the method returns true, and false otherwise.
const names=['Tom','Alex','Bob','John'];
names.includes('Tom');  // return true
names.includes('Harsh');    // return false


// indexof() array Method
names.indexOf('Bob');   // 1
names.indexOf('Rob')    // -1

//lastIndexOf() that helps you find the index of the last occurrence of an element in the array.
//Like indexOf(), lastIndexOf() also returns -1 if the element is not found.
names.push('Tom');
names.lastIndexOf('Tom');   // return 4

// reverse() array Method
names.reverse(); 
// return ['Tom', 'John', 'Bob', 'Alex', 'Tom']

// sort() Array Mehtod
// The default sort() method converts the element types into strings and then sorts them.
//The default sorting order is ascending. The sort() method changes the original array.
names.sort();
// Output - ['Alex', 'Bob', 'John', 'Tom', 'Tom']

// Another Example -
const numberArray=[23, 5, 100, 56, 9, 13, 37, 10, 1];
numberArray.sort();
console.log(numberArray);
// Output - [1, 10, 100, 13, 23, 37, 5, 56, 9]

// Well isn't expect
// Important - sort first convert array to string, then sort based on UTF-16

// To solve this, let's write a comparator function. Here is one for the ascending order:
function ascendingComp(a, b){
    return (a-b);
}

numberArray.sort(ascendingComp);
console.log(numberArray);
// return - [1, 5, 9, 10, 13, 23, 37, 56, 100]

/* 

We could also code it like,

numberArray.sort(function(a, b) {
  return (a-b);
});

Or, with the arrow function,

numberArray.sort((a, b) => (a-b));

*/

// Now for descending order
numberArray.sort((a,b)=> (b-a));

// splice () array Method
// Helps you add, update, and remove elements in an array.
// The main purpose of the splice() is to delete elements from array
// You can add and replace elements using it as well.
// To add element pass the position where we want to add,
// how many elements to delete starting with the position, and the element to add.
console.log(`Before splice names are : ${names}`);
names.splice(1,0,'Zack');
console.log(`After splice names are : ${names}`);
// return [Alex,Zack,Bob,John,Tom,Tom]

// delete
const deleted = names.splice(2, 1, 'zack');
console.log(deleted); // return ['Bob']
console.log()
console.log(`After splice delete names are : ${names}`);
// return [Alex,Zack,zack,John,Tom,Tom]


// at() Method
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined



// Static Array Mehtods
// 1.Array.isArray()

// 2. Array.from()

// 3. Array.of()
Array.of(2, false, 'test', {'name': 'Alex'})
console.log(Array.of(2, false, 'test', {'name': 'Alex'}));
// return (4) [2, false, 'test', {…}]



// Array Iterator Methods ---------------------------------------------->

// map
// creates new array by iterating through the elements & applying logic provided in function
const doubleNumArray=numberArray.map((num)=>{
    return num*2;
});
console.log(numberArray);
console.log(doubleNumArray);


// filter() Method
// Creates new array with all the elements that satisfies the condition mentioned in function
const positiveNums=numberArray.filter((ele)=>{
    return ele>0;
});
console.log(positiveNums);

// some() method
// Returns boolean value based on at least one element in the array passing the condition
let hasGreater30=numberArray.some((ele)=>{
    return ele>30;
})
console.log(hasGreater30);


// find() Method
// It returns the first matched element from the array that satisfies the condition in function.
const ele=numberArray.find((num)=>{
    return num>100;
});
console.log(ele);
// If no match found return undefined


// every () Method
// detects if every element of the array satisfies the condition passed in the function.
const atLest50=numberArray.every((num)=>{
    return num>50;
})
console.log(atLest50);
// return false




