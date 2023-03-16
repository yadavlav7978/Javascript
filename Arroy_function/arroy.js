// arroy function is a short syntax for writting function in javascript
// Here are some more examples of arrow functions in JavaScript:

// 1. A simple arrow function that takes no parameters and returns a string:
// Example:

let greet = ()=> "Hello, lav!";
console.log(greet());

// it is similar to following function:

//     function grreet(){
//             console.log("Hello, lav!");
//        }
//       console.log(grreet());

// 2. An arrow function that takes a single parameter and returns a formatted string:

let func = name =>`Hello, ${name}!`;
console.log(func("lav"));

// 3. An arrow function that takes two parameters and performs a mathematical operation:
let add= (a,b) => a+b; // it return a+b
console.log(add(5,20));


// 4. Arrow functions can also be used as methods in objects in JavaScript. 

let student={

    Name:"lav",
    Class: "CSE",
    Roll_no: 60,

    student_detail:()=>  `Name: ${student.Name}, Class: ${this.class} , Roll_no : ${this.Roll_no}`
    
};
console.log(student.student_detail());

// the 'this' inside the arrow function points to the 'this' value of the outer function or, in the case of the global scope, the global object.
// In the student object, the student_detail method is defined as an arrow function.
// Therefore, the this inside student_detail points to the global object instead of the student object.
// As a result, when you try to access the properties of the student object using this, 
// it returns undefined because the global object doesn't have properties with the same names.

// To fix this issue, you can change the arrow function to a regular function expression, which will bind this to the object itself:

// let student={
//   Name:"lav",
//    Class: "CSE",
//    Roll_no: 60,

//    student_detail: function() {
//        return `Name: ${this.Name}, Class: ${this.Class} , Roll_no : ${this.Roll_no}`;
//    }
// };

// or you can also refer as: `Name: ${student.Name}, Class: ${student.class} , Roll_no : ${student.Roll_no}`


