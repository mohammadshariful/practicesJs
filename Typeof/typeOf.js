/*
In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined


console.log(typeof typeof{fName : "shariful"});
console.log(typeof function () {} );
console.log( typeof undefined);
console.log( typeof null);
console.log( "x er type " +  typeof x);




function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }

console.log(isArray([1,2,3,4]));
 */

let car = "";
console.log(typeof car);


let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

 person = undefined; 
 console.log(person);

 
 /*
 typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true */