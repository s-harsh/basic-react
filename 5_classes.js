/* Class are essentially blueprints for objects
A class is creaed with the class keyword and a class can have both
 properties and methods. Methods are simply functions attached to classes
 where properties are variables attached to classes.

 Classes are the core of object oriented programming (OOP). They make
  your code more secure and encapsulated. Using classes gives your code a
  nice structure and keeps it oriented.
 
 We can notic from constructor functions and indeed classes are kind of 
 a more conveninent way of creating constructor functions.
 There can only be one special method with the name "constructor" in a class.
A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
A constructor can use the super keyword to call the constructor of the super class. 

 Class is also support 'Inheritance', which means we have another class 
 which you inherit from taking all its properties and methods.
 
 
 Classes are in fact "special functions", and just as you can define function
  expressions and function declarations, the class syntax has two components:
  class expressions and class declarations.
  
  Class declarations
One way to define a class is using a class declaration. To declare a class,
 you use the class keyword with the name of the class
 
 Class expressions
A class expression is another way to define a class.


The body of a class is executed in strict mode, i.e., code written here is
subject to stricter syntax for increased performance, some otherwise silent
errors will be thrown, and certain keywords are reserved for future versions
of ECMAScript.
Strict mode makes several changes to normal JavaScript semantics:

    1.Eliminates some JavaScript silent errors by changing them to throw errors.

    2.Fixes mistakes that make it difficult for JavaScript engines to perform
    optimizations: strict mode code can sometimes be made to run faster than
    identical code that's not strict mode.

    3.Prohibits some syntax likely to be defined in future versions of ECMAScript.

    ````````````More about strict mode we learn in further``````````````````````````*/


// Example of Class Declaratinos 
 class myClass{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
 };
// We use curly braces to mark the body of class
// We add properties by adding constructor, that is a default function method.
// Constructor will be executed whenever we instantiate the class
// access the class methods and properties using the new keyword.
// And we can set up properties with 'this' keyword

 const user =new myClass('Harsh',20);
 console.log(user.name);    // ---> Harsh
 console.log(user.age);  // ---> 20


// Class Expression -
// Unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"


// named
Rectangle=class Rectangle2{
    constructor(height,widht){
        this.height=height;
        this.widht=widht;
    }
};
console.log(Rectangle.name);
// Output "Rectangle2"


// Prototype methods ------->
class Rectangle2{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    // getter
    get area(){
        return this.calcArea();
    }

    // Method
    calcArea(){
        return this.height*this.width;
    }
}
const square = new Rectangle2(10,10);
console.log(square.area);   // 100



 class Person{
    constructor(){
        this.name='Harsh Soni';
    }
    printMyName(){
        console.log(this.name);
    }
 }

 const person=new Person();
 person.printMyName();
