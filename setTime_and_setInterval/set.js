// 1. 'setTimeout' are functions in JavaScript that are used to schedule the execution of a function after a specified amount of time has passed.

// setTimeout takes two arguments: the first is the function to be executed,
// and the second is the amount of time, in milliseconds, to wait before executing the function. For example:

function greet(name){
    console.log("Hello "+name+"!");
}

setTimeout(greet,2000,"lav");

// 2.'clearTimeout' is a built-in JavaScript function that allows you to cancel a timeout that was previously set up with setTimeout.
// Here is the basic syntax:
// clearTimeout(timeoutId);


// 3. 'setInterval' is a built-in JavaScript function that repeatedly executes a specified function at a given time interval. Here is the basic syntax:
// setInterval(function, milliseconds);
// For example, suppose you have a function called myFunction() that you want to execute every 2 seconds. 
// You could use setInterval like this:
// setInterval(myFunction, 2000);  // This code will execute myFunction() every 2 seconds (2000 milliseconds).

// You can also pass additional arguments to the function by including them after the time interval:
// setInterval(myFunction, 2000, arg1, arg2, ...);


let x=setInterval(greet,2000,"lav");
clearInterval(x);


// 4.'clearInterval' is a built-in JavaScript function that allows you to stop the repeated execution of a function that was previously set up with setInterval.
// Here is the basic syntax:
// clearInterval(intervalId);
