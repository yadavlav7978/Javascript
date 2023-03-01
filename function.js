console.log("Hello world");

//   In JavaScript, a function is defined using the following syntax:

//    function functionName(parameter1, parameter2, ...) {    //The function keyword is used to define a new function.

//               return value; // optional return statement
//      }

function add(a,b){

    let sum=a+b;

    return sum;
}

let result=add(5,20);
console.log("Addtion of two number : "+result);

function print_salary(name,salary=10000){  // Here salary=10000 is a default value if we not pass salary arguement in the calling function then that default valued used.
                                    
    console.log("Salary of " +  name  +  " is :"+salary);
}

print_salary("lav",20000);
print_salary("Ayush");  // we not pass salary arguement then default value used.