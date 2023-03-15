// There are many different types of events that can be used in JavaScript. Here are some of the most commonly used events:

// Click - occurs when a mouse button is clicked on an element
// Mouseover - occurs when the mouse pointer moves over an element
// Mouseout - occurs when the mouse pointer moves out of an element
// Keydown - occurs when a key is pressed down on the keyboard
// Submit - occurs when a form is submitted
// Change - occurs when the value of an input element is changed
// Focus - occurs when an element receives focus
// Blur - occurs when an element loses focus
// Keyup - occurs when a key is released on the keyboard
// Load - occurs when a webpage or image has finished loading


// To use any of these events, you can use the addEventListener method to attach an event listener to an element.
// For example, to listen for a click event on a button element with an ID of myButton, you could use the following code:

// let myButton = document.querySelector('#myButton');
// myButton.addEventListener('click', function() {
//   console.log('Button clicked!');
// });

// click event
let btn=document.getElementById('btn');
let para=document.getElementById('para');

btn.addEventListener('click', function run(){

    if(para.style.display!='none'){
        para.style.display='none';
    }else{
        para.style.display='block';
    }
});

// mouseover/mouseout event

para.addEventListener('mouseover',function(){
         console.log("Mouse Inside");
         alert('Mouse inside');
});

para.addEventListener('mouseout',function(){
    console.log("Mouse Goes outside");
    alert('Mouse Goes outside');
});