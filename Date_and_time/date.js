// To get current data in javascript we can use 'Date' object which give single moment of time
// Example:

let cur_dt=new Date();
console.log(cur_dt);  // it will print current date and time in browser console

// we can also get specific components of the date and time using various methods of the Date object.
//  For example:

let year=cur_dt.getFullYear();
console.log("current year: "+year);

let month=cur_dt.getMonth()+1; // Here we add 1 to convert from zero based indexing
console.log("current month: "+month);   

let day=cur_dt.getDay();         // Here day gives you integer where 0=sunday,1=monday and so on
console.log("current day: "+day);

let date=cur_dt.getDate();
console.log("current date: "+date);

let minute=cur_dt.getMinutes();
console.log("current minute: "+minute);

let second=cur_dt.getSeconds();
console.log("current second: "+second);


// if we not passed any arguement to 'Date' object then it return current Date and time.

// we can pass following arguement to 'Date' object.
// 1. we can pass a string representing date and time:
// Example:

let specific_date=new Date("2023-12-03");  //"year-month-date"
console.log(specific_date);

// 2. we can also pass arguement with different values: Year, month, day, hour, minute, second, and millisecond 

let specific_dt=new Date(2023,0,1,15,30);  // Here 0 represent january (0-11)
console.log(specific_dt);

// 3. If we pass a single numeric value to 'Date' object wich represent the number of millisecond since January 1,1970 (considered based time).
let d=new Date(1000);
console.log(d);

// You can pass the year, month (0-11), day of the month (1-31), hour (0-23), minute (0-59), second (0-59), and millisecond (0-999) values
// as separate arguments to create a Date object for a specific date and time.

// if we want create a date object for 5 days after the current date
let future_date=new Date(cur_dt+5*24*60*60*1000);
console.log("After 5 days date  and time is : "+future_date);



// we can also set (year,month,Date,hours,minutes,seconds,millisecond).
// such as : setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), and setMilliseconds().
// Example:

let dt=new Date();
dt.setFullYear(2030);
dt.setMonth(3);
console.log("After changing the year and month of current date : "+dt);  // here date remain same (curent date)

// Creating a date and time clock

setInterval(date_and_time,1000);

function date_and_time(){
      time.innerHTML=new Date();
}

//innerHTML is a property of an HTML element in JavaScript that allows you to access or modify the HTML content within that element. 
// The innerHTML property can be used to retrieve or change the content of an HTML element, including its child elements and text.
// To retrieve the innerHTML of an element, you can simply access the property like this:
// let myElement = document.getElementById("myElement");
// let innerHTML = myElement.innerHTML;
// console.log(innerHTML); // outputs the current HTML content of the element

// In this example, we retrieve the HTML element with the ID "myElement", and then access its innerHTML property to get its current HTML content.

// To modify the innerHTML of an element, you can set the property to a new value like this:
// let myElement = document.getElementById("myElement");
// myElement.innerHTML = "<p>New HTML content</p>";

// In this example, we retrieve the HTML element with the ID "myElement", and then set its innerHTML property to a new value,
// which includes a new p element with some content.
