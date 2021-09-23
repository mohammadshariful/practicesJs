// for in use object
const person = {fname:"John", lname:"Doe", age:25};

//access of key
for (const key in person) {
    
     console.log(key);  
    
}
//access of value

for (const value in person) {
    
    console.log(person[value]);   
   
}

//use in  array

//access in index

const numbers = [45, 4, 9, 16, 25];
for (let num in numbers) {
    console.log(num);
    
}

//access in value
    
const number = [45, 4, 9, 16, 25];
for (let val in number) {
    console.log(number[val]);
    
}
// dont use for in in array


const arry = [45, 4, 9, 16, 25];

let result = arry.forEach((key,index,array)=>{
    console.log(key);
    console.log(index);
    console.log(array);
});