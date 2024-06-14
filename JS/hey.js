// html was the structure of page
// css was for styling
// JAVA SCRIPT is for functionality

// brendin eich created js in 10 days
// it was named as mocha first then later on it was named after java as java script

// java is a interpreter and compiler both
// java script is a interpreter language

// so we can do frontend and backend both jn javascript but it is not compiler
// thats why we only use as an interpreter

// JAVASCRIPT FRAMEWORK: 
// angular react are popular framworks 
// will use react later

// js needs to be know by every developer

console.log("heyy");
// console.log means we want my console/terminal to print whatever is in my brackets

a = 5;
b = a + 6;
console.log(b);

// alphabets are stored in '' "" 
// known as strings
// sequence of characters/alphabets
// "kulsoom what's this"
// 'kulsoom what's this'

// variables something where we are storing data

// can use underscore / attach name together 
// firstNameIsKulsoom = camelcase is variable naming convention

// 4 ways of declaring variables:

firstName = "kulsoom";

var lastName = "agha";
// var = variable declaring a variable
// can be called anywhere in page
// can be redeclared multiple times

// let age = "25";
// let only exist from line it started from

// diff between let / var:

// var is a funtional scope
var c = "kulsoom";
console.log(c);

{var c = "kulsoom";} 
console.log(c);
// making it a block scoped
// var can be accessed anywhere even though its inside brakets

// let is a block scope 
// means it will only exist where it was borned and if inside a braket cannot be called outside it

// {let d = "anna";} 
// console.log(d);

let d = "anna"
console.log(d);

// const 
// means constant 
// it cannot be changed

// const mike = 20;
const mike = 30;

// will run in error because it was constant

// we will connect js file with html file by using a script tag

// DIFFERENCE BETWEEN JAVA AND JAVASCRIPT:
// refrence to diagram->
// javascript will turn your code into machine readable code and simply give you the output
// human code -> turned into machine code -> we saw the output

// java / javascript

// java is programing lang it has compiler / interpreter
// human code = source code 
// binary numbers are = machine language
// compiler makes out code compiled together in binary numbers
// interpreter reads code line by line and give us the output

// human code -> machine code -> we got the output 
// java is compiler and interpreter both


// java script is just intrepreter


// functions:
// function funtionName (){
//      function goes here
// }

// creating a greeting function:

// function greet () {
//      console.log("hello")
// }
// greet();

// creating a parameter function:

// function greet (name) {
//      console.log("hello" + name)
// }
// greet("pokemon");

// we can call and reuse the method and pass different parameters
//  greet("benten");

// having 2 parameters:

function greet (name, lastname) {
     console.log("hello" + name + lastname)
}
 greet("ben", "ten");
//  greet("ben");

// the other one will turn unidentified bcz lastname not provided

// create a function of signal 
// saying "the light is green"

// Arrays:
// data structure that are supposed to hold values in a particular index
// index is a placeholder for a specific arrays

// arrays have a syntax :
// variabletype arrayname = [whatever arrays you want]

let names = ["benten", "pokemon", "oggy"]
            //  0         1         2
console.log(names) 
// it will give all the names

// var person = ["kulsoom", 25, 2.34,45] 
                // 0     1    2    3 
// we can store values in javascript without any datatype

// if you want to see specifically one of them so:
console.log(names[2])
// need to tell their index

// if you want to see how many names (not the index):
console.log(names.length)

// make an array with 10 names 
// access only the 5 index array

// if we want to reverse the array (common interview question)
// console.log(names.reverse())

// if we want to add in array
// names.push("jack");

// if in a specific index no
// names[1] = "hira";

var person = ["kulsoom", 25, 2.34, 56, 7827]
            // 0         1    2     3   4
console.log(person);

console.log(person[0])
console.log(person.length)

var purse = ["black", "gucci", 50.00]
console.log(purse)

purse.push("hira")
// we can push a new array at the end of the array

purse.splice(1,0, 123)
// we can push a array in a specific index and still keep the existing one by pushing if to right
console.log(purse)


// if (condition) {
//      if this condition fulfil do this 
//      everything in this block will execute
// } else {
//      if that condition does not fulffil so this block will run
// }


// var age = 12;
// if (age > 21) {
//      console.log("you are allowed in")
// } else {
//      console.log("you are not allowed")
// }

var age = 21;
if (age > 21) {
     console.log("you are allowed in")
} else if (age == 21){
     console.log("you are also allowed in")
}else{
     console.log("you are not allowed")
}

// make a signal variable that says
// if red print stop
// if green print drive 
// if yellow print yeild 

signal = "orange";

if (signal == "green") {
    console.log("drive")
} else if (signal == "red"){
    console.log("stop")
}else{
    console.log("yeild")
}

// If weather is "sunny", it prints "Wear sunglasses".
// If weather is "rainy", it prints "Take an umbrella".
// If weather is "snowy", it prints "Wear a coat".
// If weather is "windy", it prints "Hold onto your hat".
// If weather is none of these values, it prints "Stay indoors".

// functions: some block of code that is performing something
function add (a,b){
     return a + b;
     }
console.log(add(2,5))

function sub (a , b){
     return a - b;
     }

console.log(sub(5,2))

// Arrow functions in javascript are declared by => 
// it is just another way of writing functions but less syntax

const add = (a,b) => a+b;

const sub =(a,b)=>{
     return a-b;
}
// if opening curly braces return tag is required


// objects: something that is storing different variables data

// let person = {
// name : "xyz",
// lastName: "zzz",
// age: 20,
// salary: 300.00
// weight: 25.00
// }
// console.log(person);

// make a object tv 
// each tv shoukd have its name , model , size , price