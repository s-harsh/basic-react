/* Destruring - Other next generation feature
Imagine you want to pick out some shoes from your
collection, and you want your favorite blue ones.
The very first thing you have to do is to search
through your collection and unpack whatever you
have there.
Now destructuring is just like that approach you
took when looking for your shoes. Destructuring is
the act of unpacking elements in an array or object.
Destructuring not only allow us to unpack elements,
it also gives you the power to manipulate and switch
elements you unpacked depending on the type of operation
you want to perform.

Easily extract array elements or object properties and store them in 
variables.
It is different from spread, spread takes out all elements all properties
and distributes them in a new array or object whatever.

Destrucring allows you to pull out single elemtns or properties and 
store them in variables for array


Array -In JavaScript, an array is a single variable that stores multiple
elements. It is a collection of data.

Object : In JavaScript, an object is a collection of properties
and a property is an association between a name (or key) and a value.*/

// Array delcaration 
// Method 1
const firstArray=['js','python','C++'];

// Mehtod 2
const secondArray=new Array(3);
secondArray[0]="js";
secondArray[1]="python";
secondArray[2]="C++";



// Example for destructuring 
// We use [] to store the vars name which be assigned to name of array
const [var1,var2,var3,var4]=arrayName;

[a,b]=['hello','Harsh']
console.log(a);  // Hello
console.log(b);  // Harsh

const colorArr=['red','yellow','blue','green','white','black'];
const[first,second]=colorArr;
console.log(first,second);

// Output -> red, yellow

// If we want to swap vars with destructuring
// without destructuring
const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
const temp = positionOne;

positionOne = positionTwo;
positionTwo = temp;
console.log(positionOne, positionTwo);

// Output ->  fruits, food

// with destructuring
[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo);

// Outout -> fruits, food

// Mutate(Changing the form or value of an element ) of Array 
console.log(edibles);

[edibles[0], edibles[1]] = [edibles[1], edibles[0]];
console.log(edibles);

// Output -> ["fruits", "food"]



// For object
const Web1 = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = Web1;
console.log(frontend, backend);

// Output -> React, Node

// we also can do

const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
console.log(courseOne, courseTwo);

// React, Node

{name1}={name1:'Harsh',age:20}
console.log(name1); // Harsh
console.log(age); // undefined

const numbers=[1,2,3];

[num1,num2]=numbers;
console.log(num1,num2);
// Output - 1 2

[n1,,n3]=numbers;
console.log(n1,n3);
// Output - 1 3

