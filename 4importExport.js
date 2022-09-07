/* 
Import and export :-
Using import and export in your JavaScript application makes it more powerful. They allow
 you to create separate and reusable components.
 It is simple! export allows you to export a module to be used in another JavaScript
  component. We use import to import that module to use it in our component.
  
  For example, we have two files. The first is named 4importExport.js and the
    second is named homeComponent.js.

    In 4importExport.js we are going to export the detail function.
    
    If we want to import more than one module, we just put them within curly brackets.
    
    
    Exports without a default tag are Named exports.

    Exports with the default tag are Default exports.
    
    When you want to import a named component, you use the same name it was exported with.
     Names must be imported inside curly brackets.
     
    When importing a default export, you don’t use curly brackets.
    When you import a default export, you can give it whatever name you want.*/


// export default is used to export a single class, function or primitive from a script file.

// Syntax
// Exporting declarations
export let name1, name2/*, … */; // also var
export const name3 = 1, name4 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }

// Export list
export { Name1, /* …, */ nameN };
export { variable1 as Name1, variable2 as Name2, /* …, */ nameN };

// Default exports
// export default expression1;
export default function functionName1() { /* … */ }
export default class ClassName { /* … */ }


export default function detail(name,age){
        return `Hello ${name}, you are ${age} year old`;
    }