//A Map holds key-value pairs where the keys can be any datatype.

//A Map remembers the original insertion order of the keys.

/*

Method	Description
new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in Map
*/

// Create a Map
 const fruits = new Map([
      ["apple",500],
      ["bananas",300],
      ["oranges",200]

    ]);

   /* const fruits = new Map();

   fruits.set("apples",500); */ 

/*
 console.log(fruits.get("apple"));



 console.log(fruits.size);

 fruits.delete("apple")
 console.log(fruits.has("apple"))
 
// List all entries
 let text ="";
 fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
 });  */ 


   let text = "";
   for( let x of fruits.entries()){
       text += x;
   }

   console.log(text);   