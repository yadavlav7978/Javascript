// The Document Object Model (DOM) is a programming interface for web documents.
// it means that it provides a set of methods, properties, and events that can be used to interact with the elements of an HTML or XML document in a programmatic way.

// Using the DOM, developers can write JavaScript code to manipulate the HTML and CSS of a web page in real-time,without having to reload the entire page. 
// For example, JavaScript can be used to create new elements, modify existing elements, change the attributes of elements, and more.

// It provides a way for developers to create dynamic, responsive, and user-friendly web pages.

//  It represents the structure of an HTML or XML document as a tree-like model, where each element in the document is represented as a node in the tree. 
// The DOM is a platform that allows programs and scripts to dynamically access and update the content, structure, and style of web pages.


// Here are some common ways to navigate the DOM in JavaScript:

// 1. getElementById - This method returns a reference to the first element with the specified ID. 
// For example, if you have an element with the ID "myElement", you can get a reference to it with the following code:
// let element = document.getElementById("myElement");

let x=document.getElementById('main');
console.log(x);


let nav=document.getElementById('nav');
console.log(nav);



// 2. getElementsByClassName - This method returns a collection of elements with the specified class name. 
// For example, if you have a list of elements with the class name "myClass",  you can get a reference to all of them with the following code: 
// let element = document.getElementsByClassName("myClass");

let y=document.getElementsByClassName('container');
console.log(y);


//  3. querySelector - This method returns the first element that matches the specified CSS selector.
//  For example, if you have an element with the class name "myClass" inside an element with the ID "myElement", you can get a reference to it with the following code:
//  let element = document.querySelector("#myElement .myClass");

let z=document.querySelector('#home');
console.log(z);


//  4. querySelectorAll - This method returns a collection of elements that match the specified CSS selector.
//  For example, if you have a list of elements with the tag name "p" inside an element with the class name "myClass", you can get a reference to all of them with the following code:
//  let element= document.querySelectorAll(".myClass p");
