 alert("This is a message");  //  It does not return anything and it used to  display the alert message

// In JavaScript, a prompt is a function that displays a dialog box to the user, allowing them to enter a value.
// The syntax for the prompt function is as follows:
// prompt("message", "default");  
// The first parameter is a string that will be displayed as a message to the user,asking them to enter a value
// The second parameter is optional and a default value that will be displayed in the input field.

// When the prompt function is called, it will display a dialog box with the message and an input field for the user to enter a value. 
// Once the user enters a value and clicks "OK", the prompt function will return the value that was entered as a string. If the user clicks "Cancel" instead, the prompt function will return null.

let name=prompt("Enter tour Nme","Guest");

if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("You didn't enter your name.");
  }

  // In JavaScript, the confirm function displays a dialog box with two buttons: "OK" and "Cancel". 
  // It is used to ask the user a yes/no or true/false question and returns a boolean value indicating whether the user clicked "OK" or "Cancel".


  let check=confirm("Are you really want to delete the file");

  if(check){
    console.log("File deleted");
  }else{
    console.log("File not deleted");
  }
