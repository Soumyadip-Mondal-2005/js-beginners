/*There are 2 types of datatypes in JS:  
1. Primitive
    -string
    -null
    -undefined
    -number
    -boolean
    -symbol
    -bigInt
2. Reference
    -array
    -object
    -function
*/
let score = 100;
let anotherScore = 100.3; //number

let name = "Robert"; //string

let outsideTemp=null; //null

let isLoggedIn = false; //boolean

let id = Symbol('123');
let anotherId = Symbol('123');
console.log( id === anotherId );//false as symbol

let bigNumber = 12345678923547383933993n; //bigInt

//Reference Data Types

const heroes =["Spider-man","Captain America","Wolverine"];  //array

let myObj = {
    name : "Soumyadip",
    age : 22,                              //object
}

const myFunc =function(){
    console.log("Hello World");            //function
}

