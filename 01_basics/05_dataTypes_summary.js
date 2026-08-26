// Perimitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 10.33;

const isLoggedIn = false;
const Temp = null;
let usersEmail;

const id = Symbol('132');
const anotherId = Symbol('132'); //if you  passes samne value but symbol can make it unique 

console.log(id === anotherId);

const bigNumber = 834673647634n;

// Non-permitive (reference type)
// Array, Object ,functions


const hero = ["SpiderMan","Hulk","IronMan"];

//objects...
let myObject ={
    name : "Faris khan",
    age : 19,
}

//function...
const myFunction = function(){
    console.log("Hello World");
    
}

