const number1=1;
const num2=number1;
// here we create a real copy of number1 as num2

console.log(num2);
// Numbers, strings, booleans are primitive type 


// Objects & arrays are refernce types
const persone={
    name:'Harsh'
};
const secondPerson=persone;

console.log(secondPerson);
/* Here persone the object is stored in memory and in the constant 
person we store a pointer to that place in memory and if we assign
person to secondPerson that pointer will be copied.
Let see - */
persone.name='Max';
console.log(secondPerson);
// Output - {name: 'Max'}
// Here automatically change it for secondPesrson because of pointer
// It is same for Array

/* Note - This will become important in React because it can lead to unexpected behaviors
If you copy objects o rarrays like this because you then may manipulate one object in one
place in the app and accidentally manipulate another usage of the same object in another
place of the app.
Therefore, we will learn techniques to copy this in an immutable way which means we copy
that by really copying the object and not just a pointer for that we ca use this spread
operator.
This will pull out the properties and the values of the properties form the object and
it to this newly creaed object here and we do create a new one with the curly braces. */

const thirdPersone={
    ...persone
};
console.log(` Third Person before name change ${thirdPersone}`);

persone.name='Manu';
console.log(` Third Person after name change ${thirdPersone}`);

// Keep in mind that objects and arrays are reference type

