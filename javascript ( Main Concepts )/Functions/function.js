const guest = {
    name: 'Vigesh',
    age: 21,
    id: '31119U09048',
    role: 'Front End Developer',
}

const guest2 = {
    name: 'Harish',
    age: 23,
    id: '31119U09028',
    role: 'Cloud Developer',
}


function f1(name, age, id, role){
    console.log(name);
    console.log(age);
    console.log(id);
    console.log(role);
}

f1(guest.name, guest.age, guest.id, guest.role);
f1(guest2.name, guest2.age, guest2.id, guest2.role);



// Functions in JavaScript


// A function is a set of statements that take inputs, do some specific computation, and produce output. The idea is to put some commonly or repeatedly done tasks together and make a function so that instead of writing the same code again and again for different inputs, we can call that function.


// Syntax: The basic syntax to create a function in JavaScript is shown below.

// function functionName(Parameter1, Parameter2, ...)
// {
    // Function body
// }


function f2(v1, v2){
    return v1 + v2;
}

const value = f2(8, 2);
console.log(value);

// -------------------------------------------------------------------

// Function Expression: It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 

// Syntax:

// let geeksforGeeks= function(paramA, paramB) {
    // Set of statements
// }

let sub = function(v3, v4){
    return v3 - v4;
}

const result = sub(5, 5);
console.log(result);

// -------------------------------------------------------------------

// Arrow Function: It is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

// Arrow function {()=>} is concise way of writing Javascript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable. Arrow functions are anonymous functions i.e. functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

// Syntax:

// let function_name = (argument1, argument2 ,..) => expression

let one = () => {
    console.log("Welcome to Front End Web Development");
}

one();

let two = (x,y,z) => {
    console.log(x + y + z);
}

two(10,20,30);

// -------------------------------------------------------------------

// Anonymous Function : It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name. An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

// Syntax: 

// The below-enlightened syntax illustrates the declaration of an anonymous function using the normal declaration:


// function() {
    // Function Body
//  }


// We may also declare an anonymous function using the arrow function technique which is shown below:

// ( () => {
    // Function Body...
// } )();


let three = function(){
    console.log("Hello This is Vigesh");
}

three();

// In this example, we pass arguments to the anonymous function.

let four = function(course){
    console.log(`I am learning ${course}`);
}

four("Front End Web Development")

// Another way

let five = function(job){
    console.log("I am a " + job);
}

five("Front End Web Developer")


// In this example, we pass an anonymous function as a callback function to the setTimeout() method. This executes this anonymous function 2000ms later.

setTimeout(function() {
    console.log("Let's learn JavaScript")
}, 2000);


// In this example, we have created a self-executing function.

(function(){
    console.log('This is my first javascript code');
})();


// In this example, we will declare a self-executing anonymous function (without the name itself) and will see how we may declare it as well as how we may call it in order to print the resultant value.

(() => {
    console.log("HTML5 and CSS3")
})();