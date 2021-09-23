// create a new set
const mySet = new Set(["a","b","c","d"]);


//set method
mySet.add("f");
console.log(mySet);

mySet.delete("a");
console.log(mySet);


console.log(mySet.has("a"));

//forEach method

let text = "";
mySet.forEach(value =>{
    text += value;
});
console.log(text);

//values method

for(let x of mySet.values()){
    console.log(x)
}


console.log(mySet.size);

