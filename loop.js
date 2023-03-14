

for(let i=0;i<3;i++){
    console.log("Value of i is: "+i);
}

// different loop used in modern javascript

// 1. The for...of loop is used to iterate over the values of an iterable object, such as an array or a string.

let string="Lavyadav"

for(s of string){
    console.log(s);
}

let arr=[1,2,'lav',3.14];

for(i of arr){
    console.log(i);
}

// 2. The forEach method is a built-in method of arrays that is used to iterate over each value in an array and perform a specified action on each value.
// syntax :
//             array.forEach((value, index) => {
//                    code to be executed
//              });

arr.forEach((val,i)=>{
    console.log("Value at index "+i+" is : "+val);
});

// 3. The for...in loop is used to iterate over the properties of an object.


let obj={
    Name: "lav",
    Course: "Btech",
    Roll_no: 60
}

for(key in obj){
    console.log(key+": " +obj[key]);
}

