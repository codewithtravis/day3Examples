
/*
*** Rest and Spread operators
  
rest (...)
spread (...)
 
rest

 */

//The following function multiplies numbers passed in the parameter
//Rest
function multiply(parameter, anotherParameter, ...args){ //rest operator

    name2 = "Mary Doe"
    console.log(name2);
    //body
    //console.log(args);
    let product = 1;

    for(let i in args){
        product = product * args[i];
        let test = ""; // let has a different scope
        //var test = ""; // var has a different scope
    }
    console.log(product);

    /*
     for (index = 0; index < args.length; index++){
         console.log(args[index]);

         product = product * args[i];
     }

     console.log(product);
     */
}

//mulitply(2, 4);
multiply(1, 2, 3, 4, 5);

/*

Spread Operator

*/

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // spread operator

/*

myFunction(...iterableObject);

*/

let t = document.getElementById("myDog");
//console.log(t);

let t1 = document.getElementsByClassName("dogs");
//console.log(t1);
//console.log(Array.isArray(t1));

let t2 = document.getElementsByTagName("h1");
//console.log(t2);

/*

We can also be able to use querySelectors, querySelectorAll

Searching using CSS selectors
1. Class selector
2. id selector
3. element selector

*/

//the querySelector will return only the first element that macthes the CSS selector(s)
let t3 = document.querySelector(".dogs");
//console.log(t3);

// querySelectorAll. This returns all elements that matches a specified CSS selector(s)

let t4 = document.querySelectorAll(".dogs");
//console.log(t4);

//The Array.from(object) returns an array objects from the given object
let arrayT4 = Array.from(t4);
//console.log(arrayT4);

let arrayT4B = [...t4];
//console.log(arrayT4B);
//console.log(Array.isArray(arrayT4));

//let x = document.getElementById("myDog").firstChild;
let x = document.getElementById("mainBody").previousElementSibling;
console.log(x);
let x1 = document.getElementById("mainBody");
x1.style.backgroundColor = "yellow";

let newParagraph = document.createElement("P");
newParagraph.innerHTML = "This is our new paragraph";
document.getElementById("mainBody").appendChild(newParagraph);

/*
JS Events

syntax for addEventListener
document.addEventListner(event, function, useCapture);

event: This specifies the name of the event.

function: This specifies the fucntion that should run when the event occurs.
The first and second parameters are required. You must provide the event and the function.

useCapture: boolean value that specifies whether the event should be executed
in the capturing and the bubbling phase.

*/

document.getElementById("myDog").addEventListener("click", function(){
    test1("Scruffy");
});

function test1(name1){
    alert("today " + name1) 
}



//--------------------------------------------------------------------------------



document.getElementById("myForm").addEventListener("submit", function(event){
    //alert("This form has been submitted.");

    /*
    
    We want the get a value that was entered by the user in the form
    
    */
   // The following line get a value from the input field.
   let username = document.getElementById("username").value;
   //console.log(username.length);
   username = username.trim();// trim gets read of any spaces the user my input
   
   if(username == "" || username.length == 0){
       document.getElementById("username").style.border = "thick solid red";
       alert("Please enter a valid username.");

   } else {
       document.getElementById("username").style.backgroundColor = "white";
   }
    let confirmPassword = document.getElementById("confirmPassword").value;
    let password = document.getElementById("password").value;

    password = password.trim();
    confirmPassword = confirmPassword.trim();

    if(password != confirmPassword){

        document.getElementById("password").style.border = "thick solid red";
        document.getElementById("confirmPassword").style.border = "thick solid red";
    } else {
        document.getElementById("confirmPassword").style.border = "thick solid red";
        document.getElementById("confirmPassword").style.border = "thick solid red";
    }

    let formTitle = document.getElementById("title");

    newDive.innerHTML = newDiv

   //alert(username);
   event.preventDefault();
});